/* =========================================================
   conversiones.js  ·  Práctica de conversiones
   ---------------------------------------------------------
   Tercer bloque de la aplicación: convertir unidades de
   almacenamiento (KB/MB/GB/TB) y números entre binario y decimal.
   Incluye calculadora, ejercicios aleatorios, resultado y
   explicación paso a paso.
   ========================================================= */

const Conversiones = (() => {

  const EXP = { KB: 1, MB: 2, GB: 3, TB: 4 };
  const UNIDADES = Object.keys(EXP);
  const BASE = 1024; // Solo base binaria: 1 KB = 1024 B

  let ejUnidades = null;
  let ejBinario = null;
  let ejDecimal = null;
  const marca = { unidades: { bien: 0, total: 0 }, binario: { bien: 0, total: 0 }, decimal: { bien: 0, total: 0 } };

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

  /** Convierte un número decimal a su representación binaria (solo enteros) */
  function aBinario(decimal) {
    if (decimal === 0) return "0";
    const bits = [];
    let valor = decimal;
    while (valor > 0) {
      bits.unshift(String(valor % 2));
      valor = Math.floor(valor / 2);
    }
    return bits.join("");
  }

  /** Explicación paso a paso de la conversión decimal -> binario */
  function explicarDecimalBinario(decimal, binario) {
    const suma = [];
    binario.split("").forEach((b, i) => {
      const potencia = binario.length - 1 - i;
      if (b === "1") suma.push("2^" + potencia);
    });
    const operacion = suma.length ? suma.join(" + ") + " = " + fmt(decimal) : "0 = 0";
    return (
      "El número " + fmt(decimal) + " en binario es el patrón " + binario +
      " (con 0 y 1, sin signos). Se obtiene dividiendo el número entre 2 sucesivamente y anotando los restos de cada división: " + operacion + "."
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

  /* ---------- Calculadora decimal a binario ---------- */

  function calcularDecimal() {
    const dato = num($("dec-entrada").value);
    const texto = String($("dec-entrada").value || "").trim().replace(/\s/g, "").replace(",", ".");
    const entero = /^-?\d+(\.0+)?$/.test(texto) ? Number(texto) : null;

    if (entero === null || !Number.isInteger(entero) || entero < 0 || entero > 4294967295) {
      $("dec-resultado").textContent = "—";
      $("dec-explicacion").textContent =
        "Escribe un número entero positivo (máximo 4294967295). Por ejemplo: 13.";
      return;
    }

    const binario = aBinario(entero);
    $("dec-resultado").textContent = binario;
    $("dec-explicacion").textContent = explicarDecimalBinario(entero, binario);
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

  function generarEjDecimal() {
    const decimal = azar(2, 1023);
    const binario = aBinario(decimal);
    ejDecimal = { decimal, binario, corregida: false, explicacion: explicarDecimalBinario(decimal, binario) };

    $("ej-dec-enunciado").textContent =
      "Convierte el número decimal " + decimal + " a binario (solo unos y ceros). Escribe solo el número.";
    $("ej-dec-respuesta").value = "";
    $("ej-dec-respuesta").disabled = false;
    $("ej-dec-feedback").className = "conv-feedback test-oculto";
    $("ej-dec-feedback").textContent = "";
    $("ej-dec-marcador").textContent = marcador(marca.decimal);
  }

  function marcador(m) {
    return "Aciertos: " + m.bien + " / " + m.total;
  }

  function comprobar(tipo) {
    const esUnidades = tipo === "unidades";
    const esDecimal = tipo === "decimal";
    const ej = esUnidades ? ejUnidades : esDecimal ? ejDecimal : ejBinario;
    if (!ej || ej.corregida) return;

    const campo = esUnidades ? $("ej-unidades-respuesta") : esDecimal ? $("ej-dec-respuesta") : $("ej-bin-respuesta");
    const feedback = $("ej-" + (esUnidades ? "unidades" : esDecimal ? "dec" : "bin") + "-feedback");
    const dado = num(campo.value);
    if (dado === null) {
      campo.focus();
      feedback.className = "conv-feedback conv-aviso";
      feedback.textContent = "Escribe un número antes de comprobar.";
      return;
    }

    ej.corregida = true;
    const correcto = esUnidades
      ? Math.abs(dado - ej.resultado) < Math.max(1e-6, Math.abs(ej.resultado) * 1e-9)
      : esDecimal
      ? String(campo.value || "").trim().replace(/\s/g, "") === ej.binario
      : Math.abs(dado - ej.decimal) < 1e-9;

    const m = marca[tipo];
    m.total++;
    if (correcto) m.bien++;

    feedback.className = "conv-feedback " + (correcto ? "conv-ok" : "conv-ko");
    feedback.textContent =
      (correcto ? "¡Correcto! " : "Incorrecto. ") +
      "Resultado: " + (esUnidades
        ? fmt(ej.resultado) + " " + ej.hasta
        : esDecimal
        ? ej.binario
        : fmt(ej.decimal)) +
      ". " + ej.explicacion;

    campo.disabled = true;
    $("ej-" + (esUnidades ? "unidades" : esDecimal ? "dec" : "bin") + "-marcador").textContent = marcador(m);
  }

  /* ---------- Arranque ---------- */

  function iniciar() {
    $("btn-calcular-unidades").addEventListener("click", calcularUnidades);
    $("btn-calcular-binario").addEventListener("click", calcularBinario);
    $("btn-calcular-decimal").addEventListener("click", calcularDecimal);
    $("btn-ej-unidades-nuevo").addEventListener("click", generarEjUnidades);
    $("btn-ej-unidades-comprobar").addEventListener("click", () => comprobar("unidades"));
    $("btn-ej-bin-nuevo").addEventListener("click", generarEjBinario);
    $("btn-ej-bin-comprobar").addEventListener("click", () => comprobar("binario"));
    $("btn-ej-dec-nuevo").addEventListener("click", generarEjDecimal);
    $("btn-ej-dec-comprobar").addEventListener("click", () => comprobar("decimal"));

    // Permitir comprobar con la tecla Intro
    [["ej-unidades-respuesta", "unidades"], ["ej-bin-respuesta", "binario"], ["ej-dec-respuesta", "decimal"]].forEach(
      ([id, tipo]) => {
        $(id).addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            comprobar(tipo);
          }
        });
      }
    );

    calcularUnidades();
    calcularBinario();
    calcularDecimal();
    generarEjUnidades();
    generarEjBinario();
    generarEjDecimal();
  }

  function volverAConfig() {
    // Los ejercicios y resultados se conservan al cambiar de bloque.
  }

  function hayProgreso() {
    return (
      marca.unidades.total > 0 ||
      marca.binario.total > 0 ||
      marca.decimal.total > 0 ||
      (ejUnidades && ejUnidades.corregida) ||
      (ejBinario && ejBinario.corregida) ||
      (ejDecimal && ejDecimal.corregida)
    );
  }

  function reiniciar() {
    marca.unidades.bien = 0;
    marca.unidades.total = 0;
    marca.binario.bien = 0;
    marca.binario.total = 0;
    marca.decimal.bien = 0;
    marca.decimal.total = 0;
    $("conv-valor").value = "2.5";
    $("conv-desde").value = "GB";
    $("conv-hasta").value = "MB";
    $("bin-entrada").value = "101101";
    $("dec-entrada").value = "13";
    calcularUnidades();
    calcularBinario();
    calcularDecimal();
    generarEjUnidades();
    generarEjBinario();
    generarEjDecimal();
  }

  return { iniciar, volverAConfig, hayProgreso, reiniciar };
})();
