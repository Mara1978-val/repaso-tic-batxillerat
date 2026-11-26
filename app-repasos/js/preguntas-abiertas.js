/* =========================================================
   preguntas-abiertas.js  ·  Lógica del bloque de preguntas abiertas
   El alumno escribe la respuesta y la aplicación le dice
   si es correcta (o no) y muestra la respuesta oficial.
   ========================================================= */

const Abiertas = (() => {

  let tema = "hardware";
  let nivel = "todos";
  let numeroPreguntas = 10;   // cuántas preguntas se piden (10, 20 o 30)
  let explicaAlFinal = true;  // guardar la respuesta oficial y la explicación para el final
  let barajarPreguntas = true; // barajar el orden de las preguntas
  let banco = [];        // preguntas seleccionadas
  let indice = 0;
  let aciertos = 0;
  let respondidas = 0;
  let corregida = false; // si la pregunta actual ya fue comprobada
  let respuestasAlumno = []; // { texto, bien } de cada pregunta, para la revisión final

  /* -------------------------------------------------------
     Configuración
  ------------------------------------------------------- */
  function pintarTemas() {
    const cont = $("chips-tema-abiertas");
    cont.innerHTML = "";

    const todos = document.createElement("button");
    todos.className = "chip chip-todos" + (tema === "todos" ? " activo" : "");
    todos.dataset.tema = "todos";
    todos.textContent = "Todos los temas";
    todos.addEventListener("click", () => {
      tema = "todos";
      marcarActivo(cont, todos);
      actualizarDisponibles();
    });
    cont.appendChild(todos);

    TEMAS.forEach((clave) => {
      const b = document.createElement("button");
      b.className = "chip" + (clave === tema ? " activo" : "");
      b.dataset.tema = clave;
      b.textContent = DATOS[clave].nombre;
      b.addEventListener("click", () => {
        tema = clave;
        marcarActivo(cont, b);
        actualizarDisponibles();
      });
      cont.appendChild(b);
    });
  }

  function marcarActivo(contenedor, boton) {
    contenedor.querySelectorAll(".chip").forEach((c) => c.classList.remove("activo"));
    boton.classList.add("activo");
  }

  /** Preguntas abiertas que encajan con el tema y el nivel elegidos */
  function filtradas() {
    const todas =
      tema === "todos"
        ? TEMAS.reduce((lista, clave) => {
            (DATOS[clave].abiertas || []).forEach((q) =>
              lista.push(Object.assign({}, q, { _tema: DATOS[clave].nombre }))
            );
            return lista;
          }, [])
        : DATOS[tema].abiertas || [];

    return nivel === "todos" ? todas : todas.filter((q) => (q.nivel || "medio") === nivel);
  }

  /** Avisa de cuántas preguntas hay disponibles con la combinación elegida */
  function actualizarDisponibles() {
    const n = filtradas().length;
    const cont = $("dispo-abiertas");
    if (!cont) return;
    if (n === 0) {
      cont.textContent = "No hay preguntas con esta combinación: cambia de tema o de nivel.";
      return;
    }
    cont.textContent =
      n + (n === 1 ? " pregunta disponible" : " preguntas disponibles") +
      (n < numeroPreguntas ? " · se usarán todas (" + n + ")" : "");
  }

  function prepararChips() {
    $("chips-nivel-abiertas").querySelectorAll(".chip").forEach((c) => {
      c.classList.add("nivel-" + (c.dataset.nivel === "todos" ? "medio" : c.dataset.nivel));
      c.addEventListener("click", () => {
        nivel = c.dataset.nivel;
        marcarActivo($("chips-nivel-abiertas"), c);
        actualizarDisponibles();
      });
    });

    // Número de preguntas (10, 20 o 30)
    $("chips-numero-abiertas").querySelectorAll(".chip").forEach((c) => {
      c.addEventListener("click", () => {
        numeroPreguntas = parseInt(c.dataset.numero, 10);
        marcarActivo($("chips-numero-abiertas"), c);
        actualizarDisponibles();
      });
    });

    // Opciones
    $("chk-explicacion-abiertas").addEventListener(
      "change", (e) => (explicaAlFinal = e.target.checked)
    );
    $("chk-aleatorio-abiertas").addEventListener(
      "change", (e) => (barajarPreguntas = e.target.checked)
    );
  }

  /* -------------------------------------------------------
     Arranque
  ------------------------------------------------------- */
  function empezar() {
    const lista = filtradas();

    if (lista.length === 0) {
      const nombre = tema === "todos" ? "ningún tema" : DATOS[tema].nombre;
      $("aviso-abiertas").textContent =
        "No hay preguntas abiertas de nivel " + nivel + " en " + nombre + ".";
      return;
    }

    $("aviso-abiertas").textContent = "";

    const cuantas = Math.min(numeroPreguntas, lista.length);
    banco = barajarPreguntas ? seleccionarAlAzar(lista, cuantas) : lista.slice(0, cuantas);
    indice = 0;
    aciertos = 0;
    respondidas = 0;
    corregida = false;
    respuestasAlumno = new Array(banco.length).fill(null);

    $("config-abiertas").classList.add("test-oculto");
    $("zona-resultado-abiertas").classList.add("test-oculto");
    $("zona-abiertas").classList.remove("test-oculto");

    pintarPregunta();
  }

  function pintarPregunta() {
    const q = banco[indice];
    corregida = false;

    $("contador-abiertas").textContent = "Pregunta " + (indice + 1) + " / " + banco.length;
    $("marcador-abiertas").textContent = "Correctas: " + aciertos + " / " + respondidas;

    const nivelTxt = { basico: "Básico", medio: "Medio", avanzado: "Avanzado" }[q.nivel] || "Medio";
    const nombreTema = q._tema || DATOS[tema].nombre;
    $("etiqueta-abierta").textContent = nombreTema + " · " + nivelTxt;
    $("enunciado-abierta").textContent = q.q;

    $("respuesta-alumno").value = "";
    $("respuesta-alumno").disabled = false;
    $("respuesta-alumno").focus();

    $("veredicto").classList.add("test-oculto");
    $("btn-comprobar-abierta").hidden = false;
    $("btn-siguiente-abierta").hidden = true;
    $("btn-siguiente-abierta").textContent =
      indice === banco.length - 1 ? "Ver resultado" : "Siguiente pregunta";
  }

  /* -------------------------------------------------------
     Comprobación
  ------------------------------------------------------- */
  function comprobar() {
    if (corregida) return;

    const q = banco[indice];
    const respuesta = $("respuesta-alumno").value.trim();

    if (!respuesta) {
      alert("Escribe una respuesta antes de comprobar.");
      return;
    }

    corregida = true;
    respondidas++;

    const bien = esCorrecta(respuesta, q.respuestas);
    if (bien) aciertos++;
    respuestasAlumno[indice] = { texto: respuesta, bien: bien };

    const v = $("veredicto");
    v.classList.remove("test-oculto", "ok", "ko");
    v.classList.add(bien ? "ok" : "ko");

    $("veredicto-icono").textContent = bien ? "✔" : "✘";
    $("veredicto-titulo").textContent = bien
      ? "¡Correcto! Tu respuesta es válida."
      : "Incorrecto. La respuesta no es la esperada.";

    if (explicaAlFinal) {
      // La respuesta oficial y la explicación se guardan para el final
      $("veredicto-explicacion").textContent =
        "La respuesta oficial y la explicación se mostrarán al terminar.";
      $("respuesta-correcta").textContent = "";
      $("respuesta-correcta").classList.add("test-oculto");
    } else {
      $("veredicto-explicacion").textContent = bien
        ? (q.explicacion ? q.explicacion : "Encaja con la respuesta oficial del tema.")
        : (q.explicacion ? "Pista: " + q.explicacion : "Repasa este concepto y vuelve a intentarlo.");

      $("respuesta-correcta").textContent = "Respuesta oficial: " + q.solucion;
      $("respuesta-correcta").classList.remove("test-oculto");
    }

    $("respuesta-alumno").disabled = true;
    $("btn-comprobar-abierta").hidden = true;
    $("btn-siguiente-abierta").hidden = false;

    $("marcador-abiertas").textContent = "Correctas: " + aciertos + " / " + respondidas;
  }

  function siguiente() {
    if (indice === banco.length - 1) {
      mostrarResultado();
      return;
    }
    indice++;
    pintarPregunta();
  }

  function mostrarResultado() {
    const total = banco.length;
    const nota = Math.round((aciertos / total) * 100);

    $("zona-abiertas").classList.add("test-oculto");
    $("zona-resultado-abiertas").classList.remove("test-oculto");

    $("nota-abiertas").textContent = aciertos + " / " + total;
    $("nota-abiertas").className = "nota " + claseNota(nota);
    $("detalle-abiertas").textContent =
      (tema === "todos" ? "Todos los temas. " : "") +
      "Has contestado bien " + aciertos + " de las " + total +
      " preguntas (" + nota + "%). " + mensajeNivel(nota) +
      (explicaAlFinal ? " Abajo tienes la respuesta oficial y la explicación de cada una." : "");

    pintarRevision();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /** Revisión de todas las preguntas con la respuesta del alumno y la oficial */
  function pintarRevision() {
    const cont = $("revision-abiertas");
    cont.innerHTML = "";

    banco.forEach((q, i) => {
      const r = respuestasAlumno[i] || { texto: "", bien: false };
      const item = document.createElement("div");
      item.className = "item-revision " + (r.bien ? "ok" : "ko");

      const nivelTxt = { basico: "Básico", medio: "Medio", avanzado: "Avanzado" }[q.nivel] || "Medio";
      const etiqueta = (q._tema || (DATOS[tema] ? DATOS[tema].nombre : "")) + " · " + nivelTxt;

      item.innerHTML =
        '<p class="tema-tag">' + escapeHTML(etiqueta) + "</p>" +
        '<p class="preg">' + (i + 1) + ". " + escapeHTML(q.q) + "</p>" +
        '<p class="resp">Tu respuesta: <b class="' + (r.bien ? "ok" : "ko") + '">' +
          escapeHTML(r.texto || "(sin responder)") + "</b></p>" +
        '<p class="resp">Respuesta oficial: <b class="ok">' +
          escapeHTML(q.solucion) + "</b></p>" +
        (q.explicacion ? '<p class="resp">' + escapeHTML(q.explicacion) + "</p>" : "");

      cont.appendChild(item);
    });
  }

  function escapeHTML(t) {
    return String(t)
      .replace(/&/g, "&")
      .replace(/</g, "<")
      .replace(/>/g, ">");
  }

  /* -------------------------------------------------------
     Salir / repetir
  ------------------------------------------------------- */
  function salir() {
    if (
      respondidas > 0 &&
      respondidas < banco.length &&
      !confirm("¿Seguro que quieres salir? Se perderá tu progreso.")
    ) {
      return;
    }
    volverAConfig();
  }

  function volverAConfig() {
    $("zona-abiertas").classList.add("test-oculto");
    $("zona-resultado-abiertas").classList.add("test-oculto");
    $("config-abiertas").classList.remove("test-oculto");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* -------------------------------------------------------
     Arranque
  ------------------------------------------------------- */
  function iniciar() {
    pintarTemas();
    prepararChips();
    actualizarDisponibles();
    $("btn-empezar-abiertas").addEventListener("click", empezar);
    $("btn-comprobar-abierta").addEventListener("click", comprobar);
    $("btn-siguiente-abierta").addEventListener("click", siguiente);
    $("btn-salir-abiertas").addEventListener("click", salir);
    $("btn-repetir-abiertas").addEventListener("click", empezar);
    $("btn-cambiar-abiertas").addEventListener("click", volverAConfig);

    // Intro con Enter
    $("respuesta-alumno").addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (!corregida) comprobar();
        else siguiente();
      }
    });
  }

  function hayProgreso() {
    return respondidas > 0;
  }

  return { iniciar, volverAConfig, hayProgreso };
})();
