/* =========================================================
   montaje.js  ·  Prácticas de montaje y configuración de un PC
   ---------------------------------------------------------
   Dos actividades:
   1) Simulador de montaje sencillo: en cada paso se elige una
      pieza entre tres opciones grandes. Pensado para Bachillerato.
   2) Configurador de equipo: compatibilidad y presupuesto.
   El progreso se guarda en este navegador (localStorage).
   ========================================================= */

window.Montaje = (function () {
  "use strict";

  const CLAVE_SIM = "repaso-tic-montaje-sim-v2";
  const CLAVE_CONF = "repaso-tic-montaje-conf-v1";

  /* =======================================================
     1) SIMULADOR SENCILLO
     Cada paso: una instrucción corta y 3 opciones. Solo una es correcta.
     ======================================================= */
  const practicas = {
    placa: {
      nombre: "Montaje de la placa base",
      subtitulo: "Primero montamos la placa, antes de meterla en la caja",
      pasos: [
        {
          titulo: "1 · Pon el procesador",
          texto: "Elige la pieza que va en el socket de la placa.",
          pista: "Es el 'cerebro' del ordenador. Entra en el socket respetando el triángulo de una esquina.",
          explicacion: "El procesador encaja en el socket LGA1700. No hay que forzarlo: la marca de la esquina indica la orientación.",
          correcta: "cpu",
          opciones: [
            { id: "ram", icono: "▮▮", label: "Memoria RAM", motivo: "La memoria no va en el socket, sino en las ranuras largas de al lado." },
            { id: "cpu", icono: "🧠", label: "Procesador" },
            { id: "ssd", icono: "▬", label: "SSD M.2", motivo: "El SSD M.2 es una tarjetita fina que va en su propia ranura." }
          ]
        },
        {
          titulo: "2 · Instala la memoria RAM",
          texto: "Elige la memoria que corresponde a esta placa (versión D4).",
          pista: "Fíjate en las siglas: esta placa usa DDR4, no DDR5. Además conviene usar dos módulos iguales.",
          explicacion: "Dos módulos DDR4 en las ranuras A2 y B2 trabajan en doble canal. La placa D4 no admite memorias DDR5.",
          correcta: "ram",
          opciones: [
            { id: "ddr5", icono: "▮▮", label: "Memoria DDR5", motivo: "Esta placa es D4: la DDR5 tiene la muesca en otro sitio y no encaja." },
            { id: "disipador", icono: "❄️", label: "Disipador", motivo: "El disipador va encima del procesador, no en las ranuras de memoria." },
            { id: "ram", icono: "▮▮", label: "Memoria DDR4 (2 módulos)" }
          ]
        },
        {
          titulo: "3 · Coloca el SSD",
          texto: "Elige el disco que se enchufa directamente en la ranura M.2.",
          pista: "Es una tarjeta pequeña, del tamaño de un chicle, que se fija con un tornillo.",
          explicacion: "El SSD M.2 NVMe va en la ranura M.2 y usa el bus PCIe, mucho más rápido que un disco SATA.",
          correcta: "ssd",
          opciones: [
            { id: "hdd", icono: "💽", label: "Disco duro 3,5″", motivo: "El disco duro va en una jaula de la caja con cables SATA, no en la placa." },
            { id: "ssd", icono: "▬", label: "SSD M.2 NVMe" },
            { id: "grafica", icono: "🎮", label: "Tarjeta gráfica", motivo: "La gráfica va en la ranura PCIe x16, mucho más grande." }
          ]
        },
        {
          titulo: "4 · Pón el disipador",
          texto: "Elige qué pieza va encima del procesador para refrigerarlo.",
          pista: "Lleva un ventilador que se conecta al conector CPU_FAN de la placa.",
          explicacion: "El disipador con su ventilador evita que la CPU se caliente. Se fija apretando los anclajes en diagonal.",
          correcta: "disipador",
          opciones: [
            { id: "fuente", icono: "⚡", label: "Fuente de alimentación", motivo: "La fuente va en la caja, no sobre el procesador." },
            { id: "disipador", icono: "❄️", label: "Disipador con ventilador" },
            { id: "tapa", icono: "🪟", label: "Tapa lateral", motivo: "La tapa cierra la caja al final de todo." }
          ]
        }
      ]
    },

    caja: {
      nombre: "Montaje dentro de la caja",
      subtitulo: "La placa ya está preparada: ahora la metemos en la caja",
      pasos: [
        {
          titulo: "1 · Mete la placa en la caja",
          texto: "Elige qué componente se fija a la bandeja del chasis.",
          pista: "Los puertos traseros deben quedar mirando a la abertura de la caja.",
          explicacion: "La placa se apoya sobre los separadores metálicos y se atornilla. No debe tocar directamente la chapa.",
          correcta: "placa",
          opciones: [
            { id: "placa", icono: "▤", label: "Placa base montada" },
            { id: "fuente", icono: "⚡", label: "Fuente de alimentación", motivo: "La fuente va en su propia bahía, debajo de la placa." },
            { id: "grafica", icono: "🎮", label: "Tarjeta gráfica", motivo: "La gráfica se enchufa en la placa, no se atornilla a la bandeja." }
          ]
        },
        {
          titulo: "2 · Coloca la fuente",
          texto: "Elige la pieza que da energía a todo el equipo.",
          pista: "Va en la bahía inferior o superior de la caja y se atornilla por detrás.",
          explicacion: "La fuente ATX convierte la corriente de la red en las tensiones que usa el ordenador.",
          correcta: "fuente",
          opciones: [
            { id: "ssd", icono: "▬", label: "SSD M.2", motivo: "El SSD ya está en la placa y no necesita bahía." },
            { id: "ram", icono: "▮▮", label: "Memoria RAM", motivo: "La RAM ya está instalada en la placa." },
            { id: "fuente", icono: "⚡", label: "Fuente ATX" }
          ]
        },
        {
          titulo: "3 · Conecta los cables",
          texto: "Elige el conector que alimenta la placa (24 pines).",
          pista: "Es el conector más grande y ancho de la fuente.",
          explicacion: "El conector ATX de 24 pines alimenta la placa. El cable EPS de 4+4 va aparte, para el procesador.",
          correcta: "atx",
          opciones: [
            { id: "usb", icono: "🔌", label: "Cable USB del frontal", motivo: "Ese cable lleva datos al panel frontal, no alimenta la placa." },
            { id: "atx", icono: "🔌", label: "Conector ATX de 24 pines" },
            { id: "audio", icono: "🔌", label: "Cable de audio", motivo: "El conector de audio es pequeño y va a la cabecera HD AUDIO." }
          ]
        },
        {
          titulo: "4 · Instala la gráfica",
          texto: "Elige la pieza que va en la ranura PCIe x16.",
          pista: "Es la tarjeta más larga y ocupa la ranura ancha cerca del procesador.",
          explicacion: "La tarjeta gráfica se enchufa en PCIe x16 y se atornilla a la caja. Después se le conecta su cable de alimentación.",
          correcta: "grafica",
          opciones: [
            { id: "grafica", icono: "🎮", label: "Tarjeta gráfica" },
            { id: "tapa", icono: "🪟", label: "Tapa lateral", motivo: "La tapa se pone al final, cuando ya está todo dentro." },
            { id: "ssd", icono: "▬", label: "SSD M.2", motivo: "El SSD M.2 ya está colocado en la placa." }
          ]
        }
      ]
    }
  };

  const ordenPracticas = ["placa", "caja"];

  /* =======================================================
     2) CONFIGURADOR (sin cambios respecto a la versión anterior)
     ======================================================= */
  const perfiles = {
    ofimatica: { nombre: "Ofimática y estudio", presupuesto: 650 },
    estudio: { nombre: "Estudio y gaming ligero", presupuesto: 1000 },
    gaming: { nombre: "Diseño y gaming", presupuesto: 1500 }
  };

  const categorias = [
    {
      id: "cpu", nombre: "Procesador", icono: "🧠",
      opciones: [
        { id: "i3", nombre: "Intel Core i3-12100", precio: 120, socket: "LGA1700", consumo: 60 },
        { id: "i5", nombre: "Intel Core i5-12400", precio: 190, socket: "LGA1700", consumo: 65 },
        { id: "i7", nombre: "Intel Core i7-12700", precio: 330, socket: "LGA1700", consumo: 105 },
        { id: "r5", nombre: "AMD Ryzen 5 5600", precio: 165, socket: "AM4", consumo: 65 }
      ]
    },
    {
      id: "placa", nombre: "Placa base", icono: "🔲",
      opciones: [
        { id: "b760d4", nombre: "ASUS PRIME B760-PLUS D4", precio: 130, socket: "LGA1700", ram: "DDR4", formato: "ATX" },
        { id: "b760d5", nombre: "MSI PRO B760-P DDR5", precio: 160, socket: "LGA1700", ram: "DDR5", formato: "ATX" },
        { id: "b550", nombre: "Gigabyte B550 AORUS", precio: 120, socket: "AM4", ram: "DDR4", formato: "ATX" },
        { id: "itx", nombre: "ASUS ROG STRIX B760-I (Mini-ITX)", precio: 210, socket: "LGA1700", ram: "DDR5", formato: "Mini-ITX" }
      ]
    },
    {
      id: "ram", nombre: "Memoria RAM", icono: "▮▮",
      opciones: [
        { id: "ddr4-16", nombre: "16 GB DDR4 3200 (2×8)", precio: 45, tipo: "DDR4" },
        { id: "ddr4-32", nombre: "32 GB DDR4 3200 (2×16)", precio: 85, tipo: "DDR4" },
        { id: "ddr5-16", nombre: "16 GB DDR5 4800 (2×8)", precio: 70, tipo: "DDR5" },
        { id: "ddr5-32", nombre: "32 GB DDR5 5600 (2×16)", precio: 130, tipo: "DDR5" }
      ]
    },
    {
      id: "disco", nombre: "Almacenamiento", icono: "💾",
      opciones: [
        { id: "ssd500", nombre: "SSD M.2 NVMe 500 GB", precio: 40 },
        { id: "ssd1tb", nombre: "SSD M.2 NVMe 1 TB", precio: 70 },
        { id: "ssd2tb", nombre: "SSD M.2 NVMe 2 TB", precio: 130 }
      ]
    },
    {
      id: "gpu", nombre: "Tarjeta gráfica", icono: "🎮",
      opciones: [
        { id: "integrada", nombre: "Gráfica integrada (sin tarjeta)", precio: 0, consumo: 15 },
        { id: "gtx1650", nombre: "GeForce GTX 1650", precio: 150, consumo: 75 },
        { id: "rx6600", nombre: "Radeon RX 6600", precio: 220, consumo: 130 },
        { id: "rtx4060", nombre: "GeForce RTX 4060", precio: 320, consumo: 115 },
        { id: "rtx4070", nombre: "GeForce RTX 4070", precio: 600, consumo: 200 }
      ]
    },
    {
      id: "fuente", nombre: "Fuente de alimentación", icono: "⚡",
      opciones: [
        { id: "f450", nombre: "Fuente 450 W", precio: 45, watts: 450 },
        { id: "f550", nombre: "Fuente 550 W 80+ Bronze", precio: 70, watts: 550 },
        { id: "f650", nombre: "Fuente 650 W 80+ Gold", precio: 100, watts: 650 },
        { id: "f850", nombre: "Fuente 850 W 80+ Gold", precio: 145, watts: 850 }
      ]
    },
    {
      id: "caja", nombre: "Caja / chasis", icono: "🖥️",
      opciones: [
        { id: "micro", nombre: "Caja Micro-ATX", precio: 45, formatos: ["Micro-ATX", "Mini-ITX"] },
        { id: "atx", nombre: "Caja ATX", precio: 65, formatos: ["ATX", "Micro-ATX", "Mini-ITX"] },
        { id: "cajaitx", nombre: "Caja Mini-ITX", precio: 80, formatos: ["Mini-ITX"] }
      ]
    }
  ];

  const configuracionesValidas = {
    ofimatica: { cpu: "i3", placa: "b760d4", ram: "ddr4-16", disco: "ssd500", gpu: "integrada", fuente: "f450", caja: "atx" },
    estudio: { cpu: "i5", placa: "b760d4", ram: "ddr4-32", disco: "ssd1tb", gpu: "rx6600", fuente: "f650", caja: "atx" },
    gaming: { cpu: "i7", placa: "b760d5", ram: "ddr5-32", disco: "ssd2tb", gpu: "rtx4060", fuente: "f850", caja: "atx" }
  };

  /* =======================================================
     3) ESTADO Y PERSISTENCIA
     ======================================================= */
  let sim = {
    practicaId: "placa",
    paso: 0,
    errores: 0,
    activo: false,
    esperando: false
  };

  let conf = {
    perfil: "ofimatica",
    seleccion: {},
    intentos: 0
  };

  let subActiva = "simulador";

  function leer(clave, porDefecto) {
    try {
      const raw = localStorage.getItem(clave);
      return raw ? Object.assign({}, porDefecto, JSON.parse(raw)) : Object.assign({}, porDefecto);
    } catch (e) {
      return Object.assign({}, porDefecto);
    }
  }

  function guardar(clave, objeto) {
    try {
      localStorage.setItem(clave, JSON.stringify(objeto));
    } catch (e) { /* sin almacenamiento: seguimos en memoria */ }
  }

  function guardarSim() { guardar(CLAVE_SIM, sim); }
  function guardarConf() { guardar(CLAVE_CONF, conf); }

  function opcionPorId(categoria, id) {
    return categoria.opciones.find((o) => o.id === id);
  }

  /* =======================================================
     4) SIMULADOR · INTERFAZ
     ======================================================= */
  function feedback(tipo, html) {
    const el = $("mont-feedback");
    el.className = "mont-feedback " + tipo;
    el.innerHTML = html;
    el.classList.remove("test-oculto");
  }

  function ocultarFeedback() {
    $("mont-feedback").classList.add("test-oculto");
  }

  function renderPracticas() {
    const cont = $("mont-practicas");
    cont.innerHTML = "";
    ordenPracticas.forEach((id) => {
      const b = document.createElement("button");
      b.className = "chip" + (id === sim.practicaId ? " activo" : "");
      b.textContent = practicas[id].nombre;
      b.dataset.practica = id;
      b.addEventListener("click", () => {
        if (id === sim.practicaId) return;
        if (sim.activo && !confirm("Cambiar de práctica reiniciará el montaje. ¿Continuar?")) return;
        sim = { practicaId: id, paso: 0, errores: 0, activo: false, esperando: false };
        guardarSim();
        renderPracticas();
        actualizarBotonEmpezar();
      });
      cont.appendChild(b);
    });
  }

  function actualizarBotonEmpezar() {
    $("mont-empezar").textContent = sim.activo && sim.paso > 0
      ? "Continuar el montaje guardado"
      : "Empezar el montaje";
  }

  function renderChecklist() {
    const p = practicas[sim.practicaId];
    const cont = $("mont-checklist");
    cont.innerHTML = "";
    p.pasos.forEach((paso, i) => {
      const item = document.createElement("div");
      item.className = "mont-check-item";
      if (i < sim.paso) item.classList.add("hecho");
      else if (i === sim.paso) item.classList.add("actual");

      const icono = document.createElement("span");
      icono.className = "mont-check-icono";
      const opcion = paso.opciones.find((o) => o.id === paso.correcta);
      icono.textContent = i < sim.paso ? "✓" : (i === sim.paso ? opcion.icono : "·");

      const texto = document.createElement("span");
      texto.textContent = paso.titulo.replace(/^\d+ · /, "");

      item.appendChild(icono);
      item.appendChild(texto);
      cont.appendChild(item);
    });
    $("mont-progreso-texto").textContent = `${sim.paso} de ${p.pasos.length} pasos terminados`;
  }

  function renderPaso() {
    const p = practicas[sim.practicaId];
    const paso = p.pasos[sim.paso];

    $("mont-contador").textContent = `Paso ${sim.paso + 1} / ${p.pasos.length}`;
    $("mont-barra").style.width = (sim.paso / p.pasos.length * 100) + "%";
    $("mont-errores").textContent = `Errores: ${sim.errores}`;
    $("mont-etiqueta").textContent = p.nombre;
    $("mont-subtitulo").textContent = p.subtitulo;
    $("mont-paso-titulo").textContent = paso.titulo;
    $("mont-paso-texto").textContent = paso.texto;
    $("mont-ayuda-texto").textContent = paso.pista;
    $("mont-ayuda-texto").classList.add("test-oculto");
    $("mont-pista").textContent = "Ver pista";
    $("mont-siguiente").classList.add("test-oculto");

    const cont = $("mont-opciones");
    cont.innerHTML = "";
    paso.opciones.forEach((op) => {
      const b = document.createElement("button");
      b.className = "mont-opcion";
      b.dataset.opcion = op.id;
      const icono = document.createElement("span");
      icono.className = "mont-opcion-icono";
      icono.textContent = op.icono;
      const nombre = document.createElement("span");
      nombre.textContent = op.label;
      b.appendChild(icono);
      b.appendChild(nombre);
      b.addEventListener("click", () => elegir(op, b));
      cont.appendChild(b);
    });

    renderChecklist();
    ocultarFeedback();
  }

  function elegir(op, boton) {
    if (sim.esperando || boton.classList.contains("incorrecta")) return;
    const p = practicas[sim.practicaId];
    const paso = p.pasos[sim.paso];

    if (op.id === paso.correcta) {
      sim.esperando = true;
      boton.classList.add("correcta");
      $("mont-opciones").querySelectorAll(".mont-opcion").forEach((b) => b.classList.add("bloqueada"));
      feedback("ok", `<strong>¡Correcto!</strong> ${paso.explicacion}`);
      $("mont-barra").style.width = ((sim.paso + 1) / p.pasos.length * 100) + "%";
      $("mont-siguiente").textContent = sim.paso === p.pasos.length - 1 ? "Ver resultado" : "Siguiente paso";
      $("mont-siguiente").classList.remove("test-oculto");
      guardarSim();
    } else {
      boton.classList.add("incorrecta");
      sim.errores++;
      $("mont-errores").textContent = `Errores: ${sim.errores}`;
      feedback("ko", `<strong>No es esa.</strong> ${op.motivo || "Prueba con otra opción."}`);
      guardarSim();
    }
  }

  function avanzarPaso() {
    const p = practicas[sim.practicaId];
    ocultarFeedback();
    if (sim.paso >= p.pasos.length - 1) {
      finalizarSim();
      return;
    }
    sim.paso++;
    sim.esperando = false;
    guardarSim();
    renderPaso();
  }

  function finalizarSim() {
    sim.activo = false;
    sim.esperando = false;
    guardarSim();

    const p = practicas[sim.practicaId];
    const nota = Math.max(0, 10 - sim.errores);
    $("mont-zona").classList.add("test-oculto");
    $("mont-zona-resultado").classList.remove("test-oculto");
    $("mont-sim-nota").textContent = nota;
    $("mont-sim-nota").className = "nota " + claseNota(nota * 10);
    $("mont-sim-titulo").textContent = "¡Equipo montado!";
    $("mont-sim-detalle").textContent =
      `Has completado ${p.pasos.length} pasos con ${sim.errores} error${sim.errores === 1 ? "" : "es"}.`;
    $("mont-sim-mensaje").textContent = mensajeNivel(nota * 10);

    const lista = $("mont-sim-revision");
    lista.innerHTML = "";
    p.pasos.forEach((paso, i) => {
      const item = document.createElement("div");
      item.className = "item-revision ok";
      const titulo = document.createElement("p");
      titulo.className = "preg";
      titulo.textContent = `${i + 1}. ${paso.titulo.replace(/^\d+ · /, "")}`;
      const texto = document.createElement("p");
      texto.className = "resp";
      texto.textContent = paso.explicacion;
      item.appendChild(titulo);
      item.appendChild(texto);
      lista.appendChild(item);
    });
  }

  function empezarSim() {
    sim.activo = true;
    if (sim.paso >= practicas[sim.practicaId].pasos.length) {
      sim = { practicaId: sim.practicaId, paso: 0, errores: 0, activo: true, esperando: false };
    }
    guardarSim();
    $("mont-config-sim").classList.add("test-oculto");
    $("mont-zona-resultado").classList.add("test-oculto");
    $("mont-zona").classList.remove("test-oculto");
    renderPaso();
  }

  /* =======================================================
     5) CONFIGURADOR
     ======================================================= */
  function construirSelectores() {
    const cont = $("conf-categorias");
    cont.innerHTML = "";
    categorias.forEach((cat) => {
      const card = document.createElement("div");
      card.className = "conf-card";

      const h = document.createElement("h4");
      h.innerHTML = `<span>${cat.icono}</span> ${cat.nombre}`;
      card.appendChild(h);

      const sel = document.createElement("select");
      sel.id = "conf-" + cat.id;
      sel.dataset.cat = cat.id;
      const vacio = document.createElement("option");
      vacio.value = "";
      vacio.textContent = "— Elige un componente —";
      sel.appendChild(vacio);
      cat.opciones.forEach((op) => {
        const o = document.createElement("option");
        o.value = op.id;
        o.textContent = `${op.nombre} · ${op.precio} €`;
        sel.appendChild(o);
      });
      sel.addEventListener("change", () => {
        conf.seleccion[cat.id] = sel.value;
        conf.intentos = 0;
        guardarConf();
        ocultarFeedbackConf();
        actualizarResumen();
      });
      card.appendChild(sel);
      cont.appendChild(card);
    });
  }

  function aplicarSeleccion() {
    categorias.forEach((cat) => {
      const sel = $("conf-" + cat.id);
      if (sel) sel.value = conf.seleccion[cat.id] || "";
    });
  }

  function seleccionados() {
    const result = {};
    categorias.forEach((cat) => {
      const id = conf.seleccion[cat.id];
      result[cat.id] = id ? opcionPorId(cat, id) : null;
    });
    return result;
  }

  function actualizarResumen() {
    const sel = seleccionados();
    const total = categorias.reduce((sum, cat) => sum + (sel[cat.id] ? sel[cat.id].precio : 0), 0);
    const presupuesto = perfiles[conf.perfil].presupuesto;
    const consumo = (sel.cpu ? sel.cpu.consumo : 0) + (sel.gpu ? sel.gpu.consumo : 0) + 80;
    const necesario = Math.ceil(consumo * 1.3);

    $("conf-presupuesto").textContent = presupuesto + " €";
    $("conf-total").textContent = total + " €";
    $("conf-consumo").textContent = consumo + " W";
    $("conf-necesario").textContent = "≈ " + necesario + " W";

    const barra = $("conf-barra");
    const pct = Math.min(100, total / presupuesto * 100);
    barra.style.width = pct + "%";
    barra.className = "conf-barra-relleno" + (total > presupuesto ? " excedido" : "");

    document.querySelectorAll("[data-perfil]").forEach((b) => {
      b.classList.toggle("activo", b.dataset.perfil === conf.perfil);
    });
  }

  function feedbackConf(tipo, html) {
    const el = $("conf-feedback");
    el.className = "mont-feedback " + tipo;
    el.innerHTML = html;
    el.classList.remove("test-oculto");
  }

  function ocultarFeedbackConf() {
    $("conf-feedback").classList.add("test-oculto");
  }

  function comprobarConfig() {
    const sel = seleccionados();
    const errores = [];
    const aciertos = [];

    const faltan = categorias.filter((cat) => !sel[cat.id]).map((cat) => cat.nombre);
    if (faltan.length) {
      errores.push(`Faltan componentes por elegir: ${faltan.join(", ")}.`);
    }

    const total = categorias.reduce((sum, cat) => sum + (sel[cat.id] ? sel[cat.id].precio : 0), 0);
    const presupuesto = perfiles[conf.perfil].presupuesto;

    if (sel.cpu && sel.placa) {
      if (sel.cpu.socket === sel.placa.socket) {
        aciertos.push(`Socket compatible: ${sel.cpu.socket}.`);
      } else {
        errores.push(`El procesador es socket ${sel.cpu.socket} pero la placa es ${sel.placa.socket}. No encajan.`);
      }
    }
    if (sel.ram && sel.placa) {
      if (sel.ram.tipo === sel.placa.ram) {
        aciertos.push(`Memoria ${sel.ram.tipo} compatible con la placa.`);
      } else {
        errores.push(`La placa admite ${sel.placa.ram} y has elegido ${sel.ram.tipo}.`);
      }
    }
    if (sel.caja && sel.placa) {
      if (sel.caja.formatos.includes(sel.placa.formato)) {
        aciertos.push(`El formato ${sel.placa.formato} cabe en la caja.`);
      } else {
        errores.push(`La placa es ${sel.placa.formato} y la caja solo admite ${sel.caja.formatos.join(", ")}.`);
      }
    }

    const consumo = (sel.cpu ? sel.cpu.consumo : 0) + (sel.gpu ? sel.gpu.consumo : 0) + 80;
    const necesario = Math.ceil(consumo * 1.3);
    if (sel.fuente) {
      if (sel.fuente.watts >= necesario) {
        aciertos.push(`La fuente de ${sel.fuente.watts} W cubre los ${necesario} W necesarios.`);
      } else {
        errores.push(`La fuente tiene ${sel.fuente.watts} W y el equipo necesita unos ${necesario} W (con margen).`);
      }
    }

    if (!faltan.length) {
      if (total <= presupuesto) {
        aciertos.push(`Presupuesto respetado: ${total} € de ${presupuesto} €.`);
      } else {
        errores.push(`Te pasas del presupuesto: ${total} € de ${presupuesto} € (${total - presupuesto} € de más).`);
      }
    }

    conf.intentos++;
    guardarConf();

    if (errores.length) {
      feedbackConf(
        "ko",
        `<strong>La configuración aún no es válida.</strong><ul>` +
        errores.map((e) => `<li>${e}</li>`).join("") +
        `</ul>` + (aciertos.length
          ? `<p class="conf-correcto">Lo que sí está bien: ${aciertos.join(" ")}</p>`
          : "")
      );
    } else {
      feedbackConf(
        "ok",
        `<strong>¡Configuración válida!</strong> Tu equipo es compatible y cabe en el presupuesto.` +
        `<ul>${aciertos.map((a) => `<li>${a}</li>`).join("")}</ul>` +
        `<p>La has conseguido en ${conf.intentos} intento${conf.intentos === 1 ? "" : "s"}.</p>`
      );
    }
    actualizarResumen();
  }

  function rellenarRecomendada() {
    const preset = configuracionesValidas[conf.perfil];
    Object.keys(preset).forEach((k) => { conf.seleccion[k] = preset[k]; });
    conf.intentos = 0;
    guardarConf();
    aplicarSeleccion();
    actualizarResumen();
    feedbackConf("aviso", "Configuración de ejemplo cargada. Comprueba ahora si cumple todas las condiciones.");
  }

  function limpiarConfig() {
    conf.seleccion = {};
    conf.intentos = 0;
    guardarConf();
    aplicarSeleccion();
    actualizarResumen();
    ocultarFeedbackConf();
  }

  /* =======================================================
     6) NAVEGACIÓN Y API PÚBLICA
     ======================================================= */
  function cambiarSub(sub) {
    subActiva = sub;
    document.querySelectorAll("[data-sub]").forEach((b) => {
      b.classList.toggle("activo", b.dataset.sub === sub);
    });
    $("mont-simulador").classList.toggle("test-oculto", sub !== "simulador");
    $("mont-configurador").classList.toggle("test-oculto", sub !== "configurador");
  }

  function volverAConfig() {
    $("mont-config-sim").classList.remove("test-oculto");
    $("mont-zona").classList.add("test-oculto");
    $("mont-zona-resultado").classList.add("test-oculto");
    sim.activo = false;
    sim.esperando = false;
    guardarSim();
    actualizarBotonEmpezar();
    ocultarFeedbackConf();
  }

  function hayProgreso() {
    return (sim.activo && sim.paso > 0) || Object.values(conf.seleccion).some((v) => !!v);
  }

  function reiniciar() {
    volverAConfig();
    cambiarSub("simulador");
  }

  function iniciar() {
    const simGuardado = leer(CLAVE_SIM, sim);
    if (ordenPracticas.includes(simGuardado.practicaId)) sim = simGuardado;
    const confGuardado = leer(CLAVE_CONF, conf);
    if (perfiles[confGuardado.perfil]) conf = confGuardado;
    if (!conf.seleccion || typeof conf.seleccion !== "object") conf.seleccion = {};

    renderPracticas();
    actualizarBotonEmpezar();
    construirSelectores();
    aplicarSeleccion();
    actualizarResumen();

    document.querySelectorAll("[data-sub]").forEach((b) => {
      b.addEventListener("click", () => cambiarSub(b.dataset.sub));
    });
    document.querySelectorAll("[data-perfil]").forEach((b) => {
      b.addEventListener("click", () => {
        conf.perfil = b.dataset.perfil;
        conf.intentos = 0;
        guardarConf();
        actualizarResumen();
        ocultarFeedbackConf();
      });
    });

    $("mont-empezar").addEventListener("click", empezarSim);
    $("mont-siguiente").addEventListener("click", avanzarPaso);
    $("mont-salir").addEventListener("click", volverAConfig);
    $("mont-reiniciar").addEventListener("click", () => {
      const id = sim.practicaId;
      if (!confirm("¿Empezar esta práctica desde el principio?")) return;
      sim = { practicaId: id, paso: 0, errores: 0, activo: true, esperando: false };
      guardarSim();
      renderPaso();
    });
    $("mont-pista").addEventListener("click", () => {
      const caja = $("mont-ayuda-texto");
      const visible = !caja.classList.contains("test-oculto");
      caja.classList.toggle("test-oculto", visible);
      $("mont-pista").textContent = visible ? "Ver pista" : "Ocultar pista";
    });
    $("mont-repetir").addEventListener("click", () => {
      const id = sim.practicaId;
      sim = { practicaId: id, paso: 0, errores: 0, activo: false, esperando: false };
      guardarSim();
      empezarSim();
    });
    $("mont-cambiar").addEventListener("click", volverAConfig);

    $("conf-comprobar").addEventListener("click", comprobarConfig);
    $("conf-recomendada").addEventListener("click", rellenarRecomendada);
    $("conf-limpiar").addEventListener("click", limpiarConfig);

    cambiarSub("simulador");
  }

  return {
    iniciar: iniciar,
    volverAConfig: volverAConfig,
    hayProgreso: hayProgreso,
    reiniciar: reiniciar
  };
})();
