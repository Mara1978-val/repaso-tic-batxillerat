/* =========================================================
   test-opcion-multiple.js  ·  Lógica del bloque de tests
   ========================================================= */

const TestMultiple = (() => {

  // Estado actual
  let tema = "hardware";
  let nivel = "medio";
  let numeroPreguntas = 10;
  let preguntas = [];      // preguntas ya seleccionadas y barajadas
  let respuestas = [];     // índice elegido por el alumno (-1 = sin responder)
  let explicaAlFinal = true;
  let barajarTodo = true;

  /* -------------------------------------------------------
     Configuración inicial (chips)
  ------------------------------------------------------- */
  function pintarTemas() {
    const cont = $("chips-tema");
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
    // Chips de nivel con su color
    $("chips-nivel").querySelectorAll(".chip").forEach((c) => {
      c.classList.add("nivel-" + c.dataset.nivel);
      c.addEventListener("click", () => {
        nivel = c.dataset.nivel;
        marcarActivo($("chips-nivel"), c);
      });
    });

    // Chips de número
    $("chips-numero").querySelectorAll(".chip").forEach((c) => {
      c.addEventListener("click", () => {
        numeroPreguntas = parseInt(c.dataset.numero, 10);
        marcarActivo($("chips-numero"), c);
      });
    });

    // Opciones
    $("chk-explicacion").addEventListener("change", (e) => (explicaAlFinal = e.target.checked));
    $("chk-aleatorio").addEventListener("change", (e) => (barajarTodo = e.target.checked));
  }

  /* -------------------------------------------------------
     Arranque del test
  ------------------------------------------------------- */
  function empezar() {
    const banco = DATOS[tema].test[nivel] || [];

    if (banco.length === 0) {
      $("aviso-test").textContent =
        "Todavía no hay preguntas de nivel " + nivel + " en " + DATOS[tema].nombre + ".";
      return;
    }

    $("aviso-test").textContent = "";

    const cuantas = Math.min(numeroPreguntas, banco.length);
    preguntas = barajarTodo ? seleccionarAlAzar(banco, cuantas) : banco.slice(0, cuantas);
    respuestas = new Array(preguntas.length).fill(-1);

    $("config-test").classList.add("test-oculto");
    $("zona-resultado").classList.add("test-oculto");
    $("zona-test").classList.remove("test-oculto");

    pintarPreguntas();
    actualizarBarra();
  }

  /* -------------------------------------------------------
     Pintado de preguntas
  ------------------------------------------------------- */
  function pintarPreguntas() {
    const cont = $("contenedor-preguntas");
    cont.innerHTML = "";

    preguntas.forEach((pregunta, i) => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta-pregunta";
      tarjeta.id = "preg-" + i;

      let ordenOpciones = pregunta.op.map((_, k) => k);
      if (barajarTodo) ordenOpciones = barajar(ordenOpciones);

      const p = document.createElement("p");
      p.className = "num-pregunta";
      p.textContent = "Pregunta " + (i + 1) + " de " + preguntas.length;
      tarjeta.appendChild(p);

      const h3 = document.createElement("h3");
      h3.textContent = pregunta.p;
      tarjeta.appendChild(h3);

      const lista = document.createElement("div");
      lista.className = "opciones";

      ordenOpciones.forEach((idxOpcion) => {
        const label = document.createElement("label");
        label.className = "opcion-test";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "preg-" + i;
        radio.value = idxOpcion;

        const span = document.createElement("span");
        span.textContent = pregunta.op[idxOpcion];

        radio.addEventListener("change", () => {
          respuestas[i] = idxOpcion;
          lista.querySelectorAll(".opcion-test").forEach((l) => l.classList.remove("sel"));
          label.classList.add("sel");
          actualizarBarra();
        });

        label.appendChild(radio);
        label.appendChild(span);
        lista.appendChild(label);
      });

      tarjeta.appendChild(lista);

      // Contenedor para la explicación (se rellena al corregir)
      const exp = document.createElement("div");
      exp.className = "explicacion test-oculto";
      exp.id = "exp-" + i;
      tarjeta.appendChild(exp);

      cont.appendChild(tarjeta);
    });
  }

  function actualizarBarra() {
    const respondidas = respuestas.filter((r) => r !== -1).length;
    const total = preguntas.length;
    $("contador").textContent = "Pregunta " + Math.min(respondidas + 1, total) + " / " + total;
    $("barra-avance").style.width = (respondidas / total) * 100 + "%";
    const aciertos = contarAciertos();
    $("marcador-vivo").textContent = "Respondidas: " + respondidas + " · Aciertos: " + aciertos;
  }

  function contarAciertos() {
    return respuestas.reduce(
      (n, r, i) => n + (r !== -1 && r === preguntas[i].r ? 1 : 0),
      0
    );
  }

  /* -------------------------------------------------------
     Corrección y resultado
  ------------------------------------------------------- */
  function corregir() {
    const sinResponder = respuestas.filter((r) => r === -1).length;
    if (
      sinResponder > 0 &&
      !confirm("Quedan " + sinResponder + " preguntas sin responder. ¿Terminar y corregir?")
    ) {
      return;
    }

    const total = preguntas.length;

    preguntas.forEach((pregunta, i) => {
      const tarjeta = $("preg-" + i);
      const opciones = tarjeta.querySelectorAll(".opcion-test");
      const elegida = respuestas[i];

      opciones.forEach((label, k) => {
        const valor = parseInt(label.querySelector("input").value, 10);
        label.classList.add("bloqueada");
        label.querySelector("input").disabled = true;

        if (valor === pregunta.r) label.classList.add("correcta");
        else if (valor === elegida) label.classList.add("incorrecta");
      });

      // Explicación
      if (explicaAlFinal && pregunta.e) {
        const exp = $("exp-" + i);
        exp.innerHTML = "<b>Explicación:</b> " + escapeHTML(pregunta.e);
        exp.classList.remove("test-oculto");
      }
    });

    // Recuento final de aciertos
    const aciertos = contarAciertos();

    mostrarResultado(aciertos, total);
  }

  function mostrarResultado(aciertos, total) {
    const nota = Math.round((aciertos / total) * 100);
    const temaNombre = DATOS[tema].nombre;
    const nivelNombre = { basico: "Básico", medio: "Medio", avanzado: "Avanzado" }[nivel];

    $("zona-test").classList.add("test-oculto");
    $("zona-resultado").classList.remove("test-oculto");

    $("titulo-resultado").textContent = temaNombre + " · Nivel " + nivelNombre;
    $("nota-final").textContent = nota + "%";
    $("nota-final").className = "nota " + claseNota(nota);
    $("detalle-resultado").textContent =
      "Has acertado " + aciertos + " de " + total + " preguntas.";
    $("mensaje-resultado").textContent = mensajeNivel(nota);

    pintarRevision();
    $("zona-resultado").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function pintarRevision() {
    const cont = $("revision");
    cont.innerHTML = "";

    preguntas.forEach((pregunta, i) => {
      const bien = respuestas[i] === pregunta.r;
      const item = document.createElement("div");
      item.className = "item-revision " + (bien ? "ok" : "ko");

      const respuestaAlumno =
        respuestas[i] === -1 ? "(sin responder)" : pregunta.op[respuestas[i]];

      item.innerHTML =
        '<p class="preg">' + (i + 1) + ". " + escapeHTML(pregunta.p) + "</p>" +
        '<p class="resp">Tu respuesta: <b class="' + (bien ? "ok" : "ko") + '">' +
          escapeHTML(respuestaAlumno) + "</b></p>" +
        (bien
          ? ""
          : '<p class="resp">Respuesta correcta: <b class="ok">' +
            escapeHTML(pregunta.op[pregunta.r]) + "</b></p>") +
        (pregunta.e && !bien
          ? '<p class="resp">' + escapeHTML(pregunta.e) + "</p>"
          : "");

      cont.appendChild(item);
    });
  }

  function escapeHTML(t) {
    return String(t)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /* -------------------------------------------------------
     Salir / repetir
  ------------------------------------------------------- */
  function salir() {
    if (
      respuestas.some((r) => r !== -1) &&
      !confirm("¿Seguro que quieres salir del test? Se perderá tu progreso.")
    ) {
      return;
    }
    volverAConfig();
  }

  function volverAConfig() {
    $("zona-test").classList.add("test-oculto");
    $("zona-resultado").classList.add("test-oculto");
    $("config-test").classList.remove("test-oculto");
    preguntas = [];
    respuestas = [];
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* -------------------------------------------------------
     Arranque
  ------------------------------------------------------- */
  function iniciar() {
    pintarTemas();
    prepararChips();

    $("btn-empezar").addEventListener("click", empezar);
    $("btn-terminar").addEventListener("click", corregir);
    $("btn-salir").addEventListener("click", salir);
    $("btn-repetir").addEventListener("click", empezar);
    $("btn-cambiar").addEventListener("click", volverAConfig);
  }

  return { iniciar, volverAConfig };
})();
