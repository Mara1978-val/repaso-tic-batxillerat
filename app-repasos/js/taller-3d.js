/* =========================================================
   taller-3d.js  ·  Taller de montaje 3D (Three.js)
   ---------------------------------------------------------
   Escena 3D con cámara giratoria, piezas y ranuras. Se pulsa
   la pieza y después su ranura. Three.js va incluido en el
   HTML generado, así que funciona sin conexión.
   ========================================================= */

window.Taller3D = (function () {
  "use strict";

  const CLAVE = "repaso-tic-taller3d-v1";

  const practicas = {
    placa: {
      nombre: "Placa base (3D)",
      subtitulo: "Placa sobre la mesa: gira la vista con el ratón y coloca cada pieza",
      pasos: [
        {
          titulo: "1 · Procesador",
          texto: "Pulsa el procesador y después el socket LGA1700 (marcado en morado).",
          pieza: "cpu", slot: "socket", label: "Procesador",
          pista: "El triángulo de la esquina debe coincidir con la marca del socket.",
          explicacion: "El procesador encaja en el socket LGA1700 en una sola posición. No hay que forzarlo.",
          error: "El procesador va en el socket, la ranura cuadrada grande."
        },
        {
          titulo: "2 · Memoria RAM",
          texto: "Coloca los dos módulos DDR4 en las ranuras A2 y B2.",
          pieza: "ram", slot: "ram", label: "2× Memoria DDR4",
          pista: "Son las ranuras largas y estrechas junto al socket.",
          explicacion: "Dos módulos DDR4 en A2 y B2 funcionan en doble canal.",
          error: "La memoria va en las ranuras largas A2 y B2."
        },
        {
          titulo: "3 · SSD M.2",
          texto: "Introduce el SSD M.2 NVMe en su ranura.",
          pieza: "ssd", slot: "m2", label: "SSD M.2 NVMe",
          pista: "Es la ranura fina horizontal, debajo de la memoria.",
          explicacion: "El SSD M.2 usa el bus PCIe y va directamente en la placa.",
          error: "El SSD M.2 va en la ranura fina marcada como M.2."
        },
        {
          titulo: "4 · Disipador",
          texto: "Coloca el disipador con su ventilador sobre el procesador.",
          pieza: "disipador", slot: "disipador", label: "Disipador + ventilador",
          pista: "Antes se aplica pasta térmica en el centro del procesador.",
          explicacion: "El disipador evita que la CPU se caliente. Se fija apretando en diagonal.",
          error: "El disipador va encima del procesador, en la zona del copo de nieve."
        }
      ]
    },
    caja: {
      nombre: "Caja del PC (3D)",
      subtitulo: "Chasis ATX: coloca la placa, la fuente, la gráfica y la tapa",
      pasos: [
        {
          titulo: "1 · Placa base",
          texto: "Coloca la placa sobre los separadores de la bandeja.",
          pieza: "placa", slot: "bandeja", label: "Placa base",
          pista: "Los puertos traseros deben mirar hacia la abertura de la caja.",
          explicacion: "La placa se apoya sobre los separadores y se atornilla sin tocar la chapa.",
          error: "La placa va en la bandeja grande del chasis."
        },
        {
          titulo: "2 · Fuente",
          texto: "Pon la fuente ATX en su bahía.",
          pieza: "fuente", slot: "fuente", label: "Fuente ATX",
          pista: "Suele ir abajo, con el ventilador hacia la rejilla trasera.",
          explicacion: "La fuente convierte la corriente de la red en las tensiones del ordenador.",
          error: "La fuente va en su bahía rectangular, al lado de la placa."
        },
        {
          titulo: "3 · Tarjeta gráfica",
          texto: "Inserta la gráfica en la ranura PCIe x16.",
          pieza: "grafica", slot: "pcie", label: "Tarjeta gráfica",
          pista: "Es la ranura larga junto al procesador.",
          explicacion: "La gráfica va en PCIe x16 y se fija con un tornillo a la caja.",
          error: "La gráfica va en la ranura PCIe x16 de la placa."
        },
        {
          titulo: "4 · Tapa lateral",
          texto: "Cierra la caja con la tapa lateral.",
          pieza: "tapa", slot: "tapa", label: "Tapa lateral",
          pista: "Revisa antes que ningún cable toque un ventilador.",
          explicacion: "Con la caja cerrada, el equipo está listo para encenderse.",
          error: "La tapa va en el lateral de la caja."
        }
      ]
    }
  };

  let estado = { practicaId: "placa", paso: 0, errores: 0, activo: false, esperando: false };

  // Escena
  let renderer, scene, camera, controls, raycaster, mouse;
  let slots = [], piezaMesh = null, pieceSelected = false, targetSlot = null;
  let contenedor, animando = false, listaPiezas = [];
  let slotMeshes = [], placedMeshes = [];

  function guardar() {
    try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch (e) {}
  }

  function leer() {
    try {
      const raw = localStorage.getItem(CLAVE);
      if (raw) estado = Object.assign(estado, JSON.parse(raw));
    } catch (e) {}
  }

  function mensaje(tipo, html) {
    const el = $("t3d-feedback");
    el.className = "mont-feedback " + tipo;
    el.innerHTML = html;
    el.classList.remove("test-oculto");
  }

  function ocultarMensaje() { $("t3d-feedback").classList.add("test-oculto"); }

  /* ---------- Construcción de la escena ---------- */
  function material(color, extra) {
    return new THREE.MeshLambertMaterial(Object.assign({ color: color }, extra || {}));
  }

  function caja(w, h, d, color, x, y, z) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material(color));
    m.position.set(x, y, z);
    return m;
  }

  function crearPlaca(ancho, profundo, x, z) {
    const g = new THREE.Group();
    g.add(caja(ancho, .25, profundo, 0x2e7d32, 0, 0, 0));
    g.add(caja(.5, .35, profundo * .8, 0xb0bec5, -ancho / 2 - .1, .05, 0)); // escudo E/S
    g.add(caja(.9, .3, .9, 0x455a64, ancho / 2 - 1, .22, profundo / 2 - 1)); // chipset
    for (let i = 0; i < 8; i++) {
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, .25, 8), material(0x263238));
      cap.position.set(-ancho / 2 + 1 + i * .35, .25, -profundo / 2 + .6);
      g.add(cap);
    }
    g.position.set(x, .2, z);
    return g;
  }

  function crearSlot(id, x, z, w, d, y) {
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(w, .12, d),
      material(0x90a4ae, { emissive: 0x451a9c, emissiveIntensity: .15 })
    );
    m.position.set(x, y || .42, z);
    m.userData.slotId = id;
    return m;
  }

  function construirEquipo(tipo) {
    // Limpiar escena anterior, conservando las luces
    scene.children.slice().forEach((o) => { if (!o.isLight) scene.remove(o); });
    slots = []; slotMeshes = []; placedMeshes = [];

    const mesa = caja(20, .4, 14, 0x9c7a5b, 0, -.6, 0);
    scene.add(mesa);

    if (tipo === "placa") {
      const placa = crearPlaca(9, 6, 0, 0);
      scene.add(placa);
      const defs = [
        { id: "socket", label: "Socket LGA1700", x: -2.4, z: -1.4, w: 1.7, d: 1.7 },
        { id: "ram", label: "Ranuras RAM", x: 1.4, z: -1.4, w: 3, d: .55 },
        { id: "m2", label: "Ranura M.2", x: -1.6, z: 1.5, w: 2.6, d: .45 },
        { id: "disipador", label: "Zona del disipador", x: 2.5, z: 1.4, w: 1.8, d: 1.6 }
      ];
      defs.forEach((s) => {
        const m = crearSlot(s.id, s.x, s.z, s.w, s.d, .42);
        scene.add(m);
        slots.push({ id: s.id, label: s.label, x: s.x, z: s.z, y: .42 });
        slotMeshes.push(m);
      });
    } else {
      // Caja: bandeja, fuente y placa montada
      scene.add(caja(11, .3, 7.5, 0x607d8b, 0, -.15, 0));
      scene.add(caja(.3, 3, 7.5, 0x546e7a, -5.5, 1.3, 0));
      scene.add(caja(.3, 3, 7.5, 0x546e7a, 5.5, 1.3, 0));
      scene.add(caja(11, 3, .3, 0x546e7a, 0, 1.3, -3.75));
      const placa = crearPlaca(6.4, 5, -1.4, -.2);
      scene.add(placa);
      scene.add(caja(2.8, 2.2, 3, 0x78909c, 3.7, 1, 1.6));

      const defs = [
        { id: "bandeja", label: "Bandeja de la placa", x: -1.4, z: -.2, w: 5.6, d: 4.3, y: .42 },
        { id: "fuente", label: "Bahía de la fuente", x: 3.7, z: 1.6, w: 2.6, d: 2.8, y: 1.2 },
        { id: "pcie", label: "Ranura PCIe x16", x: -1.4, z: 1.7, w: 3.6, d: .5, y: .45 },
        { id: "tapa", label: "Tapa lateral", x: 0, z: 3.6, w: 10.5, d: .25, y: 1.4 }
      ];
      defs.forEach((s) => {
        const m = crearSlot(s.id, s.x, s.z, s.w, s.d, s.y);
        scene.add(m);
        slots.push({ id: s.id, label: s.label, x: s.x, z: s.z, y: s.y });
        slotMeshes.push(m);
      });
    }
  }

  function crearPiezaMesh(tipo) {
    const g = new THREE.Group();
    if (tipo === "cpu") {
      g.add(caja(1.15, .18, 1.15, 0xd4af37, 0, 0, 0));
      g.add(caja(.75, .22, .75, 0x37474f, 0, .12, 0));
    } else if (tipo === "ram") {
      g.add(caja(2.6, .9, .28, 0x1565c0, 0, 0, 0));
      g.add(caja(2.6, .12, .3, 0xffd54f, 0, .35, 0));
    } else if (tipo === "ssd") {
      g.add(caja(2.3, .1, .55, 0x1b5e20, 0, 0, 0));
      g.add(caja(.5, .12, .45, 0x212121, -.85, .06, 0));
    } else if (tipo === "disipador") {
      g.add(caja(1.5, .8, 1.5, 0xb0bec5, 0, 0, 0));
      const fan = new THREE.Mesh(new THREE.CylinderGeometry(.55, .55, .18, 16), material(0x37474f));
      fan.position.y = .5;
      g.add(fan);
    } else if (tipo === "placa") {
      g.add(caja(5.4, .2, 4.2, 0x2e7d32, 0, 0, 0));
      g.add(caja(1, .25, 1, 0xd4af37, -1.4, .18, -.8));
    } else if (tipo === "fuente") {
      g.add(caja(2.6, 1.9, 2.8, 0x455a64, 0, 0, 0));
      const fan = new THREE.Mesh(new THREE.CylinderGeometry(.8, .8, .12, 18), material(0x263238));
      fan.rotation.x = Math.PI / 2;
      fan.position.z = 1.45;
      g.add(fan);
    } else if (tipo === "grafica") {
      g.add(caja(3.6, .45, 1.1, 0x212121, 0, 0, 0));
      const f1 = new THREE.Mesh(new THREE.CylinderGeometry(.4, .4, .12, 16), material(0x616161));
      f1.rotation.x = Math.PI / 2; f1.position.set(-.9, -.3, 0);
      const f2 = f1.clone(); f2.position.x = .9;
      g.add(f1); g.add(f2);
    } else if (tipo === "tapa") {
      const m = caja(10.4, 2.9, .18, 0x90a4ae, 0, 0, 0);
      m.material.transparent = true;
      m.material.opacity = .72;
      g.add(m);
    }
    g.userData.esPieza = true;
    return g;
  }

  function crearPiezaActual(paso) {
    if (piezaMesh) scene.remove(piezaMesh);
    piezaMesh = crearPiezaMesh(paso.pieza);
    piezaMesh.position.set(0, 3.6, 5.2);
    piezaMesh.userData.esPieza = true;
    piezaMesh.traverse((o) => { o.userData.esPieza = true; });
    scene.add(piezaMesh);
    pieceSelected = false;
    $("t3d-pieza-label").textContent = paso.label;
    $("t3d-pieza").classList.remove("seleccionada");
  }

  function slotPorId(id) { return slots.find((s) => s.id === id); }

  function resaltarSlot() {
    const paso = practicas[estado.practicaId].pasos[estado.paso];
    targetSlot = paso.slot;
    slotMeshes.forEach((m) => {
      const es = m.userData.slotId === targetSlot;
      m.material.emissive.setHex(es ? 0x9061e0 : 0x000000);
      m.material.emissiveIntensity = es ? .8 : 0;
    });
  }

  function marcarOcupado(slotId) {
    const m = slotMeshes.find((s) => s.userData.slotId === slotId);
    if (m) {
      m.material.emissive.setHex(0x189a4a);
      m.material.emissiveIntensity = .6;
    }
  }

  function colocarEnSlot(slotId) {
    if (estado.esperando) return;
    const paso = practicas[estado.practicaId].pasos[estado.paso];
    if (slotId !== paso.slot) {
      estado.errores++;
      $("t3d-errores").textContent = "Errores: " + estado.errores;
      mensaje("ko", "<strong>Esa ranura no es.</strong> " + paso.error);
      guardar();
      return;
    }
    const destino = slotPorId(slotId);
    const pieza = crearPiezaMesh(paso.pieza);
    pieza.position.set(destino.x, destino.y + .45, destino.z);
    pieza.userData.esPieza = false;
    pieza.traverse((o) => { o.userData.esPieza = false; });
    scene.add(pieza);
    placedMeshes.push(pieza);
    if (piezaMesh) scene.remove(piezaMesh);
    piezaMesh = null;
    marcarOcupado(slotId);
    estado.esperando = true;
    $("t3d-siguiente").classList.remove("test-oculto");
    $("t3d-siguiente").textContent = estado.paso === practicas[estado.practicaId].pasos.length - 1
      ? "Ver resultado" : "Siguiente paso";
    $("t3d-barra").style.width = ((estado.paso + 1) / practicas[estado.practicaId].pasos.length * 100) + "%";
    $("t3d-pieza").classList.remove("seleccionada");
    $("t3d-pieza").classList.add("colocada");
    mensaje("ok", "<strong>¡Colocado!</strong> " + paso.explicacion);
    pintar();
    guardar();
  }

  /* ---------- Interacción ---------- */
  function initScene() {
    if (renderer || typeof THREE === "undefined") return;
    contenedor = $("t3d-canvas");
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(contenedor.clientWidth || 600, contenedor.clientHeight || 420);
    contenedor.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, 1, .1, 200);
    camera.position.set(0, 9, 13);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = .08;
    controls.minDistance = 6;
    controls.maxDistance = 30;
    controls.maxPolarAngle = Math.PI / 2.05;
    controls.target.set(0, 0, 0);

    scene.add(new THREE.AmbientLight(0xffffff, .78));
    const luz = new THREE.DirectionalLight(0xffffff, .65);
    luz.position.set(6, 12, 8);
    scene.add(luz);
    const luz2 = new THREE.DirectionalLight(0xffffff, .3);
    luz2.position.set(-6, 8, -6);
    scene.add(luz2);

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    let down = null;
    renderer.domElement.addEventListener("pointerdown", (e) => {
      down = { x: e.clientX, y: e.clientY };
    });
    renderer.domElement.addEventListener("pointerup", (e) => {
      if (!down) return;
      const mov = Math.hypot(e.clientX - down.x, e.clientY - down.y);
      down = null;
      if (mov > 6 || estado.esperando) return; // fue un giro de cámara
      const r = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const objetos = slotMeshes.slice();
      if (piezaMesh) objetos.push(piezaMesh);
      const hits = raycaster.intersectObjects(objetos, true);
      if (!hits.length) return;
      let o = hits[0].object;
      while (o && !o.userData.slotId && !o.userData.esPieza) o = o.parent;
      if (!o) return;
      if (o.userData.esPieza) {
        pieceSelected = !pieceSelected;
        $("t3d-pieza").classList.toggle("seleccionada", pieceSelected);
        if (pieceSelected) mensaje("aviso", "Pieza seleccionada. Ahora pulsa la ranura marcada en morado.");
      } else if (o.userData.slotId) {
        if (!pieceSelected) {
          mensaje("aviso", "Primero pulsa la pieza que aparece a la derecha (o en el botón «Pieza actual»).");
        } else {
          colocarEnSlot(o.userData.slotId);
        }
      }
    });

    function resize() {
      const w = contenedor.clientWidth, h = contenedor.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    if (window.ResizeObserver) new ResizeObserver(resize).observe(contenedor);
    else window.addEventListener("resize", resize);
    resize();

    animando = true;
    function loop() {
      requestAnimationFrame(loop);
      if (!contenedor || contenedor.offsetParent === null) return;
      controls.update();
      if (piezaMesh) piezaMesh.rotation.y += .006;
      slotMeshes.forEach((m) => {
        if (m.userData.slotId === targetSlot && m.material.emissiveIntensity > 0) {
          m.material.emissiveIntensity = .55 + .35 * Math.sin(Date.now() / 320);
        }
      });
      renderer.render(scene, camera);
    }
    loop();
  }

  function pintar() {
    if (renderer && scene && camera) renderer.render(scene, camera);
  }

  function resetVista() {
    if (!camera) return;
    camera.position.set(0, 9, 13);
    controls.target.set(0, 0, 0);
    controls.update();
    pintar();
  }

  /* ---------- Flujo ---------- */
  function renderPracticas() {
    const cont = $("t3d-practicas");
    cont.innerHTML = "";
    Object.keys(practicas).forEach((id) => {
      const b = document.createElement("button");
      b.className = "chip" + (id === estado.practicaId ? " activo" : "");
      b.textContent = practicas[id].nombre;
      b.addEventListener("click", () => {
        if (id === estado.practicaId) return;
        estado = { practicaId: id, paso: 0, errores: 0, activo: false, esperando: false };
        guardar();
        renderPracticas();
        actualizarBoton();
      });
      cont.appendChild(b);
    });
  }

  function actualizarBoton() {
    $("t3d-empezar").textContent = estado.activo && estado.paso > 0
      ? "Continuar el montaje 3D" : "Empezar el montaje 3D";
  }

  function renderChecklist() {
    const pasos = practicas[estado.practicaId].pasos;
    const cont = $("t3d-checklist");
    cont.innerHTML = "";
    pasos.forEach((paso, i) => {
      const item = document.createElement("div");
      item.className = "mont-check-item";
      if (i < estado.paso) item.classList.add("hecho");
      else if (i === estado.paso) item.classList.add("actual");
      const icono = document.createElement("span");
      icono.className = "mont-check-icono";
      icono.textContent = i < estado.paso ? "✓" : "·";
      const texto = document.createElement("span");
      texto.textContent = paso.titulo;
      item.appendChild(icono); item.appendChild(texto);
      cont.appendChild(item);
    });
    $("t3d-progreso").textContent = estado.paso + " de " + pasos.length + " pasos terminados";
  }

  function renderSlots() {
    const cont = $("t3d-slots");
    cont.innerHTML = "";
    slots.forEach((s) => {
      const b = document.createElement("button");
      b.className = "btn-peq" + (s.id === targetSlot ? " destacado" : "");
      b.textContent = s.label;
      b.addEventListener("click", () => colocarEnSlot(s.id));
      cont.appendChild(b);
    });
  }

  function renderPaso() {
    const p = practicas[estado.practicaId];
    const paso = p.pasos[estado.paso];
    $("t3d-contador").textContent = "Paso " + (estado.paso + 1) + " / " + p.pasos.length;
    $("t3d-errores").textContent = "Errores: " + estado.errores;
    $("t3d-barra").style.width = (estado.paso / p.pasos.length * 100) + "%";
    $("t3d-etiqueta").textContent = p.nombre;
    $("t3d-subtitulo").textContent = p.subtitulo;
    $("t3d-titulo").textContent = paso.titulo;
    $("t3d-texto").textContent = paso.texto;
    $("t3d-ayuda").textContent = paso.pista;
    $("t3d-ayuda").classList.add("test-oculto");
    $("t3d-pista").textContent = "Ver pista";
    $("t3d-siguiente").classList.add("test-oculto");
    $("t3d-pieza").classList.remove("colocada", "seleccionada");

    construirEquipo(estado.practicaId);
    crearPiezaActual(paso);
    resaltarSlot();
    renderSlots();
    renderChecklist();
    ocultarMensaje();
    resetVista();
  }

  function empezar() {
    initScene();
    if (!renderer) {
      mensaje("ko", "Tu navegador no permite 3D (WebGL). Puedes usar el <strong>Simulador de montaje</strong> de al lado.");
      return;
    }
    estado.activo = true;
    if (estado.paso >= practicas[estado.practicaId].pasos.length) {
      estado = { practicaId: estado.practicaId, paso: 0, errores: 0, activo: true, esperando: false };
    }
    guardar();
    $("t3d-config").classList.add("test-oculto");
    $("t3d-zona-resultado").classList.add("test-oculto");
    $("t3d-zona").classList.remove("test-oculto");
    renderPaso();
  }

  function avanzar() {
    const p = practicas[estado.practicaId];
    ocultarMensaje();
    if (estado.paso >= p.pasos.length - 1) { finalizar(); return; }
    estado.paso++;
    estado.esperando = false;
    guardar();
    renderPaso();
  }

  function finalizar() {
    estado.activo = false;
    estado.esperando = false;
    guardar();
    const p = practicas[estado.practicaId];
    const nota = Math.max(0, 10 - estado.errores);
    $("t3d-zona").classList.add("test-oculto");
    $("t3d-zona-resultado").classList.remove("test-oculto");
    $("t3d-nota").textContent = nota;
    $("t3d-nota").className = "nota " + claseNota(nota * 10);
    $("t3d-titulo-final").textContent = "¡Equipo montado en 3D!";
    $("t3d-detalle").textContent = p.pasos.length + " pasos con " + estado.errores + " errores.";
    $("t3d-mensaje").textContent = mensajeNivel(nota * 10);
  }

  function volverAConfig() {
    $("t3d-config").classList.remove("test-oculto");
    $("t3d-zona").classList.add("test-oculto");
    $("t3d-zona-resultado").classList.add("test-oculto");
    estado.activo = false;
    estado.esperando = false;
    guardar();
    actualizarBoton();
  }

  function hayProgreso() { return estado.activo && estado.paso > 0; }
  function reiniciar() { volverAConfig(); }

  function iniciar() {
    leer();
    renderPracticas();
    actualizarBoton();

    document.querySelector('[data-sub="taller3d"]').addEventListener("click", () => {
      document.querySelectorAll("[data-sub]").forEach((b) => {
        b.classList.toggle("activo", b.dataset.sub === "taller3d");
      });
      $("mont-taller3d").classList.remove("test-oculto");
      $("mont-simulador").classList.add("test-oculto");
      $("mont-configurador").classList.add("test-oculto");
    });

    $("t3d-empezar").addEventListener("click", empezar);
    $("t3d-siguiente").addEventListener("click", avanzar);
    $("t3d-salir").addEventListener("click", volverAConfig);
    $("t3d-cambiar").addEventListener("click", volverAConfig);
    $("t3d-repetir").addEventListener("click", () => {
      estado = { practicaId: estado.practicaId, paso: 0, errores: 0, activo: false, esperando: false };
      guardar();
      empezar();
    });
    $("t3d-reset").addEventListener("click", resetVista);
    $("t3d-pieza").addEventListener("click", () => {
      if (!piezaMesh || estado.esperando) return;
      pieceSelected = !pieceSelected;
      $("t3d-pieza").classList.toggle("seleccionada", pieceSelected);
      if (pieceSelected) mensaje("aviso", "Pieza seleccionada. Pulsa ahora la ranura marcada en morado.");
    });
    $("t3d-pista").addEventListener("click", () => {
      const caja = $("t3d-ayuda");
      const visible = !caja.classList.contains("test-oculto");
      caja.classList.toggle("test-oculto", visible);
      $("t3d-pista").textContent = visible ? "Ver pista" : "Ocultar pista";
    });
    $("t3d-reiniciar").addEventListener("click", () => {
      if (!confirm("¿Empezar este montaje desde el principio?")) return;
      estado = { practicaId: estado.practicaId, paso: 0, errores: 0, activo: true, esperando: false };
      guardar();
      renderPaso();
    });
  }

  return {
    iniciar: iniciar,
    volverAConfig: volverAConfig,
    hayProgreso: hayProgreso,
    reiniciar: reiniciar
  };
})();
