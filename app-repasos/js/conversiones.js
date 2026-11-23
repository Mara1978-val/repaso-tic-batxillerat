/* =========================================================
   conversiones.js  ·  Práctica de conversiones
   ---------------------------------------------------------
   Tercer bloque de la aplicación: convertir unidades de
   almacenamiento (KB/MB/GB/TB) y números binarios a decimal.
   Incluye calculadora, ejercicios aleatorios, resultado y
   explicación paso a paso.
   ========================================================= */

const Conversiones = (() => {

  const EXP = { KB: 1, MB: 2, GB: 3, TB: 4 };
  const UNIDADES = Object.keys(EXP);
  const BASE = 1024; // Solo base binaria: 1 KB = 1024 B

  let ejUnidades = null;
  let ejBinario = null;
  const marca = { unidades: { bien: 0, total: 0 }, binario: { bien: 0, total: 0 } };

  const $ = (id) => document.getElementById(id);

  function fmt(n) {
    if (!Number.isFinite(n)) return "—";
    return String(Math.round(n * 1e9) / 1e9);
  }

  function num(texto) {
    const limpio = String(texto || "").trim().replace(/\s/g, "").replace(",", ".");
    if (!limpio) return null;
    const valor = Number(limpio);
    return Number.isFinite(valor) ? valor : null;
  }

  function convertir(valor, desde, hasta) {
    return valor * Math.pow(BASE, EXP[desde] - EXP[hasta]);
  }

  function explicarUnidades(valor, desde, hasta, resultado) {
    const diff = EXP[desde] - EXP[hasta];
    let operacion;
    if (diff === 0) {
      operacion = "Son la misma unidad, por eso el valor no cambia.";
    } else if (diff > 0) {
      operacion =
        "1 " + desde + " = " + BASE + "^" + diff + " " + hasta +
        " = " + fmt(Math.pow(BASE, diff)) + " " + hasta +
        ". Multiplicamos: " + fmt(valor) + " × " + fmt(Math.pow(BASE, diff)) +
        " = " + fmt(resultado) + " " + hasta + ".";
    } else {
      const n = -diff;
      operacion =
        "1 " + desde + " = 1/" + BASE + "^" + n + " " + hasta +
        " (un " + desde + " vale " + fmt(1 / Math.pow(BASE, n)) + " " + hasta +
        "). Dividimos: " + fmt(valor) + " ÷ " + fmt(Math.pow(BASE, n)) +
        " = " + fmt(resultado) + " " + hasta + ".";
    }
    return "Usamos base binaria (1 KB = 1024 B). " + operacion;
  }

  function aDecimal(bits) {
    let total = 0;
    for (let i = 0; i < bits.length; i++) {
      if (bits[i] === "1") total += Math.pow(2, bits.length - 1 - i);
    }
    return total;
  }

  function explicarBinario(bits, decimal) {
    const terminos = [];
    const sumandos = [];
    for (let i = 0; i < bits.length; i++) {
      const potencia = bits.length - 1 - i;
      terminos.push(bits[i] + "×2^" + potencia);
      sumandos.push(bits[i] === "1" ? fmt(Math.pow(2, potencia)) : "0");
    }
    return (
      terminos.join(" + ") + " = " + sumandos.join(" + ") + " = " + fmt(decimal) +
      ". Cada bit se multiplica por 2 elevado a su posición, empezando por 2^0 en el bit de la derecha; después se suman los términos."
    );
  }

  /* ---------- Calculadora de unidades ---------- */

  function calcularUnidades() {
    const valor = num($("conv-valor").value);
    const desde = $("conv-desde").value;
    const hasta = $("conv-hasta").value;

    if (valor === null || valor < 0) {
      $("conv-resultado").textContent = "—";
      $("conv-explicacion").textContent = "Escribe un número válido (por ejemplo, 2.5 o 2,5).";
      return;
    }

    const resultado = convertir(valor, desde, hasta);
    $("conv-resultado").textContent = fmt(resultado) + " " + hasta;
    $("conv-explicacion").textContent = explicarUnidades(valor, desde, hasta, resultado);
  }

  /* ---------- Calculadora binaria ---------- */

  function calcularBinario() {
    const texto = $("bin-entrada").value.trim().replace(/\s/g, "");
    if (!/^[01]+$/.test(texto) || texto.length > 32) {
      $("bin-resultado").textContent = "—";
      $("bin-explicacion").textContent =
        "Escribe solo ceros y unos (entre 1 y 32 bits). Por ejemplo: 101101.";
      return;
    }
    const decimal = aDecimal(texto);
    $("bin-resultado").textContent = fmt(decimal);
    $("bin-explicacion").textContent = explicarBinario(texto, decimal);
  }

  /* ---------- Ejercicios aleatorios ---------- */

  function azar(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  function generarEjUnidades() {
    let desde = UNIDADES[azar(0, 3)];
    let hasta = UNIDADES[azar(0, 3)];
    while (hasta === desde) hasta = UNIDADES[azar(0, 3)];

    let valor;
    if (EXP[desde] > EXP[hasta]) {
      valor = azar(1, 25);
    } else {
      valor = azar(1, 25) * Math.pow(BASE, EXP[hasta] - EXP[desde]);
    }

    const resultado = convertir(valor, desde, hasta);
    ejUnidades = {
      valor, desde, hasta, resultado,
      explicacion: explicarUnidades(valor, desde, hasta, resultado),
      corregida: false,
    };

    $("ej-unidades-enunciado").textContent =
      "Convierte " + fmt(valor) + " " + desde + " a " + hasta +
      " (base binaria, 1 KB = 1024 B). Escribe solo el número.";
    $("ej-unidades-respuesta").value = "";
    $("ej-unidades-respuesta").disabled = false;
    $("ej-unidades-feedback").className = "conv-feedback test-oculto";
    $("ej-unidades-feedback").textContent = "";
    $("ej-unidades-marcador").textContent = marcador(marca.unidades);
  }

  function generarEjBinario() {
    const longitud = azar(4, 10);
    let bits = "1";
    for (let i = 1; i < longitud; i++) bits += azar(0, 1);
    const decimal = aDecimal(bits);
    ejBinario = {
      bits, decimal, corregida: false,
      explicacion: explicarBinario(bits, decimal),
    };

    $("ej-bin-enunciado").textContent =
      "Convierte el número binario " + bits + " a decimal. Escribe solo el número.";
    $("ej-bin-respuesta").value = "";
    $("ej-bin-respuesta").disabled = false;
    $("ej-bin-feedback").className = "conv-feedback test-oculto";
    $("ej-bin-feedback").textContent = "";
    $("ej-bin-marcador").textContent = marcador(marca.binario);
  }

  function marcador(m) {
    return "Aciertos: " + m.bien + " / " + m.total;
  }

  function comprobar(tipo) {
    const esUnidades = tipo === "unidades";
    const ej = esUnidades ? ejUnidades : ejBinario;
    if (!ej || ej.corregida) return;

    const campo = esUnidades ? $("ej-unidades-respuesta") : $("ej-bin-respuesta");
    const dado = num(campo.value);
    if (dado === null) {
      campo.focus();
      $("ej-" + (esUnidades ? "unidades" : "bin") + "-feedback").className =
        "conv-feedback conv-aviso";
      $("ej-" + (esUnidades ? "unidades" : "bin") + "-feedback").textContent =
        "Escribe un número antes de comprobar.";
      return;
    }

    ej.corregida = true;
    const correcto = esUnidades
      ? Math.abs(dado - ej.resultado) < Math.max(1e-6, Math.abs(ej.resultado) * 1e-9)
      : Math.abs(dado - ej.decimal) < 1e-9;

    const m = marca[tipo];
    m.total++;
    if (correcto) m.bien++;

    const feedback = $("ej-" + (esUnidades ? "unidades" : "bin") + "-feedback");
    feedback.className = "conv-feedback " + (correcto ? "conv-ok" : "conv-ko");
    feedback.textContent =
      (correcto ? "¡Correcto! " : "Incorrecto. ") +
      "Resultado: " + (esUnidades
        ? fmt(ej.resultado) + " " + ej.hasta
        : fmt(ej.decimal)) +
      ". " + ej.explicacion;

    campo.disabled = true;
    $("ej-" + (esUnidades ? "unidades" : "bin") + "-marcador").textContent = marcador(m);
  }

  /* ---------- Arranque ---------- */

  function iniciar() {
    $("btn-calcular-unidades").addEventListener("click", calcularUnidades);
    $("btn-calcular-binario").addEventListener("click", calcularBinario);
    $("btn-ej-unidades-nuevo").addEventListener("click", generarEjUnidades);
    $("btn-ej-unidades-comprobar").addEventListener("click", () => comprobar("unidades"));
    $("btn-ej-bin-nuevo").addEventListener("click", generarEjBinario);
    $("btn-ej-bin-comprobar").addEventListener("click", () => comprobar("binario"));

    // Permitir comprobar con la tecla Intro
    [["ej-unidades-respuesta", "unidades"], ["ej-bin-respuesta", "binario"]].forEach(([id, tipo]) => {
      $(id).addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          comprobar(tipo);
        }
      });
    });

    calcularUnidades();
    calcularBinario();
    generarEjUnidades();
    generarEjBinario();
  }

  function volverAConfig() {
    // Los ejercicios y resultados se conservan al cambiar de bloque.
  }

  function hayProgreso() {
    return (
      marca.unidades.total > 0 ||
      marca.binario.total > 0 ||
      (ejUnidades && ejUnidades.corregida) ||
      (ejBinario && ejBinario.corregida)
    );
  }

  function reiniciar() {
    marca.unidades.bien = 0;
    marca.unidades.total = 0;
    marca.binario.bien = 0;
    marca.binario.total = 0;
    $("conv-valor").value = "2.5";
    $("conv-desde").value = "GB";
    $("conv-hasta").value = "MB";
    $("bin-entrada").value = "101101";
    calcularUnidades();
    calcularBinario();
    generarEjUnidades();
    generarEjBinario();
  }

  return { iniciar, volverAConfig, hayProgreso, reiniciar };
})();
