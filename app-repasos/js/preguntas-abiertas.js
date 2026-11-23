/* =========================================================
   preguntas-abiertas.js  ·  Lógica del bloque de preguntas abiertas
   El alumno escribe la respuesta y la aplicación le dice
   si es correcta (o no) y muestra la respuesta oficial.
   ========================================================= */

const Abiertas = (() => {

  let tema = "hardware";
  let nivel = "todos";
  let banco = [];        // preguntas seleccionadas
  let indice = 0;
  let aciertos = 0;
  let respondidas = 0;
  let corregida = false; // si la pregunta actual ya fue comprobada

  /* -------------------------------------------------------
     Configuración
  ------------------------------------------------------- */
  function pintarTemas() {
    const cont = $("chips-tema-abiertas");
    cont.innerHTML = "";
    TEMAS.forEach((clave) => {
      const b = document.createElement("button");
      b.className = "chip" + (clave === tema ? " activo" : "");
      b.dataset.tema = clave;
      b.textContent = DATOS[clave].nombre;
      b.addEventListener("click", () => {
        tema = clave;
        marcarActivo(cont, b);
      });
      cont.appendChild(b);
    });
  }

  function marcarActivo(contenedor, boton) {
    contenedor.querySelectorAll(".chip").forEach((c) => c.classList.remove("activo"));
    boton.classList.add("activo");
  }

  function prepararChips() {
    $("chips-nivel-abiertas").querySelectorAll(".chip").forEach((c) => {
      c.classList.add("nivel-" + (c.dataset.nivel === "todos" ? "medio" : c.dataset.nivel));
      c.addEventListener("click", () => {
        nivel = c.dataset.nivel;
        marcarActivo($("chips-nivel-abiertas"), c);
      });
    });
  }

  /* -------------------------------------------------------
     Arranque
  ------------------------------------------------------- */
  function empezar() {
    const todas = DATOS[tema].abiertas || [];
    const filtradas =
      nivel === "todos" ? todas : todas.filter((q) => (q.nivel || "medio") === nivel);

    if (filtradas.length === 0) {
      $("aviso-abiertas").textContent =
        "No hay preguntas abiertas de nivel " + nivel + " en " + DATOS[tema].nombre + ".";
      return;
    }

    $("aviso-abiertas").textContent = "";

    banco = barajar(filtradas);
    indice = 0;
    aciertos = 0;
    respondidas = 0;
    corregida = false;

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
    $("etiqueta-abierta").textContent = DATOS[tema].nombre + " · " + nivelTxt;
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

    const v = $("veredicto");
    v.classList.remove("test-oculto", "ok", "ko");
    v.classList.add(bien ? "ok" : "ko");

    $("veredicto-icono").textContent = bien ? "✔" : "✘";
    $("veredicto-titulo").textContent = bien
      ? "¡Correcto! Tu respuesta es válida."
      : "Incorrecto. La respuesta no es la esperada.";

    $("veredicto-explicacion").textContent = bien
      ? (q.explicacion ? q.explicacion : "Encaja con la respuesta oficial del tema.")
      : (q.explicacion ? "Pista: " + q.explicacion : "Repasa este concepto y vuelve a intentarlo.");

    $("respuesta-correcta").textContent = "Respuesta oficial: " + q.solucion;

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
      "Has contestado bien " + aciertos + " de las " + total +
      " preguntas (" + nota + "%). " + mensajeNivel(nota);

    window.scrollTo({ top: 0, behavior: "smooth" });
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

  return { iniciar, volverAConfig };
})();
