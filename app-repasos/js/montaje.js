/* =========================================================
   montaje.js  ·  Prácticas de montaje y configuración de un PC
   ---------------------------------------------------------
   Dos actividades nuevas:
   1) Simulador de montaje paso a paso (placa base y caja).
   2) Configurador de equipo (compatibilidad y presupuesto).
   El progreso se guarda en este navegador (localStorage).
   ========================================================= */

window.Montaje = (function () {
  "use strict";

  const CLAVE_SIM = "repaso-tic-montaje-sim-v1";
  const CLAVE_CONF = "repaso-tic-montaje-conf-v1";

  /* =======================================================
     1) DATOS DEL SIMULADOR
     ======================================================= */
  const practicas = {
    placa: {
      nombre: "Montaje de la placa base",
      subtitulo: "Placa ASUS PRIME B760-PLUS D4, sobre la mesa de trabajo",
      slots: [
        { id: "socket", icono: "🔲", label: "Socket LGA1700" },
        { id: "ram", icono: "▮▮", label: "Ranuras RAM A2 / B2" },
        { id: "m2", icono: "▬", label: "Ranura M.2_1" },
        { id: "m2anclaje", icono: "🔩", label: "Anclaje del SSD M.2" },
        { id: "disipador", icono: "❄️", label: "Zona del disipador" },
        { id: "cpufan", icono: "🔌", label: "Conector CPU_FAN" }
      ],
      piezas: [
        { id: "cpu", icono: "🧠", label: "Intel Core i5 (LGA1700)" },
        { id: "cpuGirada", icono: "🔄", label: "CPU girada 90°", motivo: "El triángulo dorado de la CPU debe coincidir con la marca del socket. Girada así no encaja y doblarías los contactos." },
        { id: "cpuAM4", icono: "🧠", label: "Ryzen 5 (socket AM4)", motivo: "Un procesador AM4 no encaja en un socket LGA1700. Cada socket tiene un tipo de contactos distinto." },
        { id: "ramDDR4", icono: "▮▮", label: "2× DDR4 16 GB" },
        { id: "ramDDR5", icono: "▮▮", label: "2× DDR5 16 GB", motivo: "Esta placa es versión D4: usa memorias DDR4. Una DDR5 tiene el hueco de la muesca en otra posición y no entra." },
        { id: "ssdM2", icono: "▬", label: "SSD M.2 NVMe 1 TB" },
        { id: "ssdSata", icono: "▭", label: "SSD SATA 2,5″", motivo: "Ese es un SSD SATA de 2,5 pulgadas: va en una bahía y se conecta por cables SATA, no en la ranura M.2." },
        { id: "tornillo", icono: "🔩", label: "Tornillo M.2" },
        { id: "pasta", icono: "💧", label: "Pasta térmica" },
        { id: "disipador", icono: "❄️", label: "Disipador de la CPU" },
        { id: "cableFan", icono: "🔌", label: "Cable del ventilador" }
      ],
      pasos: [
        {
          titulo: "1 · Preparar el puesto e instalar el procesador",
          texto: "Coloca la alfombrilla antiestática y la pulsera a tierra. Abre la palanca del socket, pon el procesador en la posición correcta y cierra el mecanismo.",
          pista: "Fíjate en el triángulo dorado de una esquina de la CPU: debe coincidir con la marca del socket. Nunca fuerces el procesador.",
          explicacion: "El socket LGA1700 tiene los contactos en la placa (por eso se llama LGA). La muesca y el triángulo garantizan la orientación correcta; si se fuerza, se doblan los pines.",
          reqs: [{ pieza: "cpu", ranura: "socket" }]
        },
        {
          titulo: "2 · Memoria RAM en doble canal",
          texto: "Instala los dos módulos DDR4 en las ranuras recomendadas para funcionar en doble canal.",
          pista: "En una placa de cuatro ranuras, las recomendadas suelen ser A2 y B2, contando desde el procesador. Encaja primero un módulo y después el otro hasta oír el clic.",
          explicacion: "Las ranuras A2 y B2 forman el par recomendado para doble canal: la memoria trabaja a dos canales y el equipo rinde mejor. La placa D4 solo admite memoria DDR4.",
          reqs: [{ pieza: "ramDDR4", ranura: "ram" }]
        },
        {
          titulo: "3 · Instalar el SSD M.2 y fijarlo",
          texto: "Introduce el SSD M.2 NVMe en la ranura libre y fíjalo con su tornillo en el punto de anclaje.",
          pista: "El SSD se inserta en ángulo, se aprieta suavemente hacia abajo y se sujeta con un tornillo Phillips en el soporte trasero.",
          explicacion: "El SSD M.2 NVMe va directamente en una ranura de la placa y usa el bus PCIe, mucho más rápido que el SATA. El tornillo evita que se suelte con las vibraciones.",
          reqs: [
            { pieza: "ssdM2", ranura: "m2" },
            { pieza: "tornillo", ranura: "m2anclaje" }
          ]
        },
        {
          titulo: "4 · Disipador y ventilador de la CPU",
          texto: "Aplica un punto de pasta térmica, coloca el disipador apretando los anclajes en diagonal y conecta el ventilador al conector CPU_FAN.",
          pista: "La pasta del tamaño de un guisante va en el centro. Aprieta los anclajes alternando lados (en diagonal) para que la presión sea uniforme.",
          explicacion: "La pasta térmica elimina el aire entre CPU y disipador. El ventilador debe ir en CPU_FAN para que la placa controle su velocidad según la temperatura. Apretar en diagonal evita presiones desiguales.",
          reqs: [
            { pieza: "pasta", ranura: "disipador" },
            { pieza: "disipador", ranura: "disipador" },
            { pieza: "cableFan", ranura: "cpufan" }
          ]
        }
      ]
    },

    caja: {
      nombre: "Montaje de componentes en la caja",
      subtitulo: "Chasis ATX: placa, fuente, conexiones internas, gráfica y cierre",
      slots: [
        { id: "separadores", icono: "🔩", label: "Separadores del chasis" },
        { id: "bandeja", icono: "▤", label: "Bandeja de la placa" },
        { id: "tornillosPlaca", icono: "🔩", label: "Fijación de la placa" },
        { id: "bahiaFuente", icono: "⚡", label: "Bahía de la fuente" },
        { id: "atx", icono: "🔌", label: "ATX 24 pines" },
        { id: "eps", icono: "🔌", label: "EPS 8 pines (4+4)" },
        { id: "usb3", icono: "🔌", label: "Cabecera USB 3.0" },
        { id: "audio", icono: "🔌", label: "Cabecera HD AUDIO" },
        { id: "panel", icono: "🔌", label: "Conectores del frontal" },
        { id: "pcie", icono: "🎮", label: "Ranura PCIe x16" },
        { id: "pciePower", icono: "🔌", label: "Alimentación PCIe" },
        { id: "cableado", icono: "🧵", label: "Gestión de cables" },
        { id: "tapa", icono: "🪟", label: "Tapa lateral" }
      ],
      piezas: [
        { id: "revision", icono: "🔍", label: "Comprobar separadores" },
        { id: "placa", icono: "▤", label: "Placa base ya montada" },
        { id: "tornillos", icono: "🔩", label: "4 tornillos de la placa" },
        { id: "fuente", icono: "⚡", label: "Fuente ATX 650 W" },
        { id: "fuenteSFX", icono: "⚡", label: "Fuente SFX 300 W", motivo: "Una fuente SFX de 300 W no encaja en una bahía ATX y además no daría potencia suficiente a la gráfica." },
        { id: "cableATX", icono: "🔌", label: "Cable ATX 24 pines" },
        { id: "cableEPS", icono: "🔌", label: "Cable EPS 8 pines (4+4)" },
        { id: "cableUSB3", icono: "🔌", label: "Cable USB 3.0 frontal" },
        { id: "cableAudio", icono: "🔌", label: "Cable HD AUDIO frontal" },
        { id: "cablePanel", icono: "🔌", label: "POWER / RESET / LED" },
        { id: "cableIDE", icono: "🔌", label: "Cable IDE 40 pines", motivo: "El cable IDE es de discos antiguos: hoy no se usa para el frontal ni para alimentar una gráfica." },
        { id: "grafica", icono: "🎮", label: "Tarjeta gráfica PCIe x16" },
        { id: "cablePCIe", icono: "🔌", label: "Cable PCIe de 6 pines" },
        { id: "bridas", icono: "🧵", label: "Bridas de cableado" },
        { id: "tapa", icono: "🪟", label: "Tapa lateral" }
      ],
      pasos: [
        {
          titulo: "1 · Comprobar los separadores",
          texto: "Antes de colocar la placa, revisa que los separadores metálicos coincidan con los agujeros de fijación del formato ATX.",
          pista: "Si hay un separador donde la placa no tiene agujero, puede cortar una pista. Si falta, la placa queda sin apoyo.",
          explicacion: "Los separadores (standoffs) mantienen la placa separada del chasis y la subjectan. Deben coincidir exactamente con los tornillos de la placa.",
          reqs: [{ pieza: "revision", ranura: "separadores" }]
        },
        {
          titulo: "2 · Colocar la placa en la bandeja",
          texto: "Introduce la placa con los puertos traseros hacia su abertura, alinéala y apóyala sobre los separadores.",
          pista: "La placa entra inclinada: primero encaja el lateral de los puertos traseros en la abertura y después baja el resto.",
          explicacion: "La placa se monta sobre los separadores con la chapa de E/S trasera encajada en su hueco. Nunca debe tocar directamente la chapa metálica de la caja.",
          reqs: [{ pieza: "placa", ranura: "bandeja" }]
        },
        {
          titulo: "3 · Fijar la placa con tornillos",
          texto: "Atornilla la placa a los separadores con un destornillador Phillips, sin apretar en exceso.",
          pista: "Empieza por un tornillo de una esquina para que la placa no se mueva, y después coloca los demás.",
          explicacion: "Los tornillos sujetan la placa y garantizan el contacto a tierra. Apretar demasiado puede deformar el PCB o dañar los separadores.",
          reqs: [{ pieza: "tornillos", ranura: "tornillosPlaca" }]
        },
        {
          titulo: "4 · Colocar la fuente de alimentación",
          texto: "Introduce la fuente ATX en su bahía, con el ventilador orientado a la rejilla, y atorníllala al chasis.",
          pista: "La fuente se Coloca desde el interior de la caja y se fija por la parte trasera con cuatro tornillos.",
          explicacion: "La fuente ATX se atornilla al chasis. Su ventilador suele tomar aire por la rejilla trasera y expulsarlo hacia dentro.",
          reqs: [{ pieza: "fuente", ranura: "bahiaFuente" }]
        },
        {
          titulo: "5 · Conectar la alimentación de la placa",
          texto: "Conecta el conector ATX de 24 pines y el EPS de 8 pines (4+4) de la CPU.",
          pista: "Ambos conectores tienen una guía y una muesca: encajan solo en una posición. El EPS no se debe confundir con un PCIe.",
          explicacion: "El ATX de 24 pines alimenta la placa y el EPS 4+4 alimenta al procesador. Son independientes: si falta el EPS, el equipo no arranca.",
          reqs: [
            { pieza: "cableATX", ranura: "atx" },
            { pieza: "cableEPS", ranura: "eps" }
          ]
        },
        {
          titulo: "6 · Conectar el panel frontal",
          texto: "Conecta USB 3.0, HD AUDIO y los cables POWER SW, RESET SW, POWER LED y HDD LED del frontal.",
          pista: "Los conectores del frontal son pequeños y llevan escrito su nombre. Los LEDs tienen polaridad: si no encienden, invierte el conector.",
          explicacion: "El panel frontal agrupa USB, audio y los botones de encendido y reinicio. Los cables de señal respetan la polaridad en el caso de los indicadores LED.",
          reqs: [
            { pieza: "cableUSB3", ranura: "usb3" },
            { pieza: "cableAudio", ranura: "audio" },
            { pieza: "cablePanel", ranura: "panel" }
          ]
        },
        {
          titulo: "7 · Instalar la tarjeta gráfica",
          texto: "Inserta la tarjeta en la ranura PCIe x16, fíjala a la caja y conecta su cable de alimentación PCIe.",
          pista: "Retira la tapa de la ranura trasera, alinea la tarjeta hasta oír el clic y atorníllala al chasis antes de conectar el cable.",
          explicacion: "La gráfica va en PCIe x16. El conector de alimentación PCIe (6 u 8 pines) es distinto del EPS de la CPU, aunque se parecen.",
          reqs: [
            { pieza: "grafica", ranura: "pcie" },
            { pieza: "cablePCIe", ranura: "pciePower" }
          ]
        },
        {
          titulo: "8 · Ordenar los cables y cerrar la caja",
          texto: "Recoge los cables con bridas, sin tensarlos y dejando libres los ventiladores, y coloca la tapa lateral con sus tornillos.",
          pista: "Deja holgura para no tirar de los conectores y revisa que ningún cable toque las aspas de un ventilador.",
          explicacion: "Una buena gestión de cables mejora el flujo de aire y evita tirones. La caja se cierra solo con el equipo desconectado de la red eléctrica.",
          reqs: [
            { pieza: "bridas", ranura: "cableado" },
            { pieza: "tapa", ranura: "tapa" }
          ]
        }
      ]
    }
  };

  const ordenPracticas = ["placa", "caja"];

  /* =======================================================
     2) DATOS DEL CONFIGURADOR
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
    instalados: {},   // { ranuraId: [piezaId, ...] }
    activo: false,
    esperando: false
  };

  let conf = {
    perfil: "ofimatica",
    seleccion: {},    // { categoriaId: opcionId }
    intentos: 0
  };

  let piezaSeleccionada = null;
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
    } catch (e) { /* modo sin almacenamiento: seguimos en memoria */ }
  }

  function guardarSim() { guardar(CLAVE_SIM, sim); }
  function guardarConf() { guardar(CLAVE_CONF, conf); }

  function piezaPorId(practica, id) {
    return practica.piezas.find((p) => p.id === id);
  }

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
        if (sim.activo && !confirm("Cambiar de práctica reiniciará el montaje actual. ¿Continuar?")) return;
        sim = {
          practicaId: id, paso: 0, errores: 0, instalados: {},
          activo: false, esperando: false
        };
        piezaSeleccionada = null;
        guardarSim();
        renderPracticas();
        actualizarBotonEmpezar();
      });
      cont.appendChild(b);
    });
  }

  function actualizarBotonEmpezar() {
    const b = $("mont-empezar");
    const hayAvance = sim.paso > 0 || Object.keys(sim.instalados || {}).length > 0;
    b.textContent = sim.activo && hayAvance
      ? "Continuar el montaje guardado"
      : "Empezar el montaje";
  }

  function renderBoard() {
    const p = practicas[sim.practicaId];
    const paso = p.pasos[sim.paso];
    const yaHechos = paso.reqs.filter((r) =>
      (sim.instalados[r.ranura] || []).includes(r.pieza)
    ).length;

    $("mont-board-title").textContent = p.subtitulo;
    const board = $("mont-board");
    board.innerHTML = "";

    p.slots.forEach((slot) => {
      const btn = document.createElement("button");
      btn.className = "mont-slot";
      btn.dataset.ranura = slot.id;

      const esRequerido = paso.reqs.some((r) => r.ranura === slot.id && !(sim.instalados[slot.id] || []).includes(r.pieza));
      if (esRequerido) btn.classList.add("requerido");
      if ((sim.instalados[slot.id] || []).length) btn.classList.add("ocupado");

      const icono = document.createElement("span");
      icono.className = "mont-slot-icono";
      icono.textContent = slot.icono;
      const label = document.createElement("span");
      label.className = "mont-slot-label";
      label.textContent = slot.label;

      btn.appendChild(icono);
      btn.appendChild(label);

      const chips = document.createElement("span");
      chips.className = "mont-slot-chips";
      (sim.instalados[slot.id] || []).forEach((pid) => {
        const pieza = piezaPorId(p, pid);
        if (!pieza) return;
        const chip = document.createElement("span");
        chip.className = "mont-chip";
        chip.textContent = "✓ " + pieza.label;
        chips.appendChild(chip);
      });
      btn.appendChild(chips);

      btn.addEventListener("click", () => tratarRanura(slot.id));
      board.appendChild(btn);
    });

    $("mont-parcial").textContent = `${yaHechos} / ${paso.reqs.length} conexiones de este paso`;
  }

  function renderPiezas() {
    const p = practicas[sim.practicaId];
    const cont = $("mont-piezas");
    cont.innerHTML = "";

    p.piezas.forEach((pieza) => {
      const usada = Object.values(sim.instalados).some((arr) => arr.includes(pieza.id));
      const b = document.createElement("button");
      b.className = "mont-pieza" + (piezaSeleccionada === pieza.id ? " seleccionada" : "") + (usada ? " usada" : "");
      b.dataset.pieza = pieza.id;
      b.title = pieza.motivo || pieza.label;

      const icono = document.createElement("span");
      icono.className = "mont-pieza-icono";
      icono.textContent = pieza.icono;
      const nombre = document.createElement("span");
      nombre.className = "mont-pieza-label";
      nombre.textContent = pieza.label;

      b.appendChild(icono);
      b.appendChild(nombre);
      b.addEventListener("click", () => {
        if (sim.esperando) return;
        if (usada) {
          feedback("aviso", "Esa pieza ya está instalada. No hace falta repetirla.");
          return;
        }
        piezaSeleccionada = piezaSeleccionada === pieza.id ? null : pieza.id;
        renderPiezas();
        if (piezaSeleccionada) {
          feedback("aviso", `Has cogido <strong>${pieza.label}</strong>. Ahora pulsa la ranura o conector donde debe ir.`);
        } else {
          ocultarFeedback();
        }
      });
      cont.appendChild(b);
    });
  }

  function renderPaso() {
    const p = practicas[sim.practicaId];
    const paso = p.pasos[sim.paso];

    $("mont-contador").textContent = `Paso ${sim.paso + 1} / ${p.pasos.length}`;
    $("mont-errores").textContent = `Errores: ${sim.errores}`;
    $("mont-barra").style.width = (sim.paso / p.pasos.length * 100) + "%";
    $("mont-etiqueta").textContent = p.nombre;
    $("mont-paso-titulo").textContent = paso.titulo;
    $("mont-paso-texto").textContent = paso.texto;
    $("mont-ayuda-texto").textContent = paso.pista;
    $("mont-ayuda-texto").classList.add("test-oculto");
    $("mont-siguiente").classList.add("test-oculto");
    $("mont-pista").textContent = "Ver pista";

    piezaSeleccionada = null;
    renderBoard();
    renderPiezas();
  }

  function tratarRanura(ranuraId) {
    if (sim.esperando) return;

    if (!piezaSeleccionada) {
      feedback("aviso", "Primero selecciona una pieza de la bandeja y después pulsa la ranura donde va.");
      return;
    }

    const p = practicas[sim.practicaId];
    const paso = p.pasos[sim.paso];
    const pieza = piezaPorId(p, piezaSeleccionada);
    const req = paso.reqs.find((r) => r.ranura === ranuraId && !(sim.instalados[ranuraId] || []).includes(r.pieza));

    if (!req) {
      if (paso.reqs.some((r) => r.ranura === ranuraId)) {
        feedback("aviso", "Esa ranura ya tiene la pieza de este paso. Sigue con la siguiente conexión.");
      } else {
        feedback("ko", "Esa ranura no interviene en este paso. Lee otra vez la instrucción y vuelve a intentarlo.");
      }
      registrarError();
      return;
    }

    if (req.pieza !== pieza.id) {
      if (paso.reqs.some((r) => r.pieza === pieza.id)) {
        feedback("ko", `<strong>${pieza.label}</strong> es la pieza correcta, pero no va en esa ranura. Busca su conector correspondiente.`);
      } else if (pieza.motivo) {
        feedback("ko", `<strong>${pieza.label}</strong> no sirve aquí. ${pieza.motivo}`);
      } else {
        feedback("ko", `<strong>${pieza.label}</strong> no es la pieza que pide este paso. Prueba con otra.`);
      }
      registrarError();
      return;
    }

    // Colocación correcta
    if (!sim.instalados[ranuraId]) sim.instalados[ranuraId] = [];
    sim.instalados[ranuraId].push(pieza.id);
    piezaSeleccionada = null;
    feedback("ok", `<strong>¡Correcto!</strong> ${pieza.label} colocado en su sitio. ${paso.explicacion}`);

    const completado = paso.reqs.every((r) => (sim.instalados[r.ranura] || []).includes(r.pieza));
    guardarSim();

    if (completado) {
      sim.esperando = true;
      $("mont-barra").style.width = ((sim.paso + 1) / p.pasos.length * 100) + "%";
      $("mont-parcial").textContent = `${paso.reqs.length} / ${paso.reqs.length} conexiones de este paso`;
      if (sim.paso === p.pasos.length - 1) {
        $("mont-siguiente").textContent = "Ver resultado";
      } else {
        $("mont-siguiente").textContent = "Siguiente paso";
      }
      $("mont-siguiente").classList.remove("test-oculto");
      renderPiezas();
      document.querySelectorAll(".mont-slot").forEach((el) => el.classList.add("bloqueado"));
    } else {
      renderBoard();
      renderPiezas();
    }
  }

  function registrarError() {
    sim.errores++;
    $("mont-errores").textContent = `Errores: ${sim.errores}`;
    guardarSim();
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
    $("mont-sim-titulo").textContent = "Montaje terminado: " + p.nombre;
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
      titulo.textContent = `${i + 1}. ${paso.titulo}`;
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
      sim = {
        practicaId: sim.practicaId, paso: 0, errores: 0,
        instalados: {}, activo: true, esperando: false
      };
    }
    guardarSim();
    $("mont-config-sim").classList.add("test-oculto");
    $("mont-zona-resultado").classList.add("test-oculto");
    $("mont-zona").classList.remove("test-oculto");
    ocultarFeedback();
    renderPaso();
  }

  /* =======================================================
     5) CONFIGURADOR · INTERFAZ
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
     6) NAVEGACIÓN ENTRE SUBACTIVIDADES Y API PÚBLICA
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
    piezaSeleccionada = null;
    guardarSim();
    actualizarBotonEmpezar();
    ocultarFeedbackConf();
  }

  function hayProgreso() {
    const simProgreso = sim.activo && sim.paso > 0;
    const confProgreso = Object.values(conf.seleccion).some((v) => !!v);
    return simProgreso || confProgreso;
  }

  function reiniciar() {
    volverAConfig();
    cambiarSub("simulador");
  }

  function iniciar() {
    // Restaurar estado guardado
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
      if (!confirm("Se perderá el progreso de esta práctica. ¿Reiniciar?")) return;
      sim = {
        practicaId: id, paso: 0, errores: 0, instalados: {},
        activo: true, esperando: false
      };
      piezaSeleccionada = null;
      guardarSim();
      renderPaso();
      ocultarFeedback();
    });
    $("mont-pista").addEventListener("click", () => {
      const caja = $("mont-ayuda-texto");
      const visible = !caja.classList.contains("test-oculto");
      caja.classList.toggle("test-oculto", visible);
      $("mont-pista").textContent = visible ? "Ver pista" : "Ocultar pista";
    });
    $("mont-repetir").addEventListener("click", () => {
      const id = sim.practicaId;
      sim = {
        practicaId: id, paso: 0, errores: 0, instalados: {},
        activo: false, esperando: false
      };
      piezaSeleccionada = null;
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
