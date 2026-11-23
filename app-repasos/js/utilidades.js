/* =========================================================
   utilidades.js  ·  Funciones comunes
   ========================================================= */

/** Baraja un array (Fisher-Yates) sin modificar el original */
function barajar(array) {
  const copia = array.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/** Normaliza texto: minúsculas, sin acentos ni signos raros */
function normalizar(texto) {
  return String(texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,;:¿?¡!"'()\[\]]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Compara la respuesta del alumno con la respuesta oficial.
 * Devuelve true si el texto normalizado contiene alguna forma aceptada.
 */
function esCorrecta(respuestaAlumno, formasAceptadas) {
  const alumno = normalizar(respuestaAlumno);
  if (!alumno) return false;

  const lista = Array.isArray(formasAceptadas) ? formasAceptadas : [formasAceptadas];

  return lista.some((forma) => {
    const objetivo = normalizar(forma);
    if (!objetivo) return false;
    // Coincidencia exacta
    if (alumno === objetivo) return true;
    // Contención: la respuesta oficial aparece en lo que ha escrito el alumno
    return alumno.includes(objetivo);
  });
}

/** Devuelve el índice de la pregunta más parecida (para mostrar pista si falla) */
function mensajeNivel(nota) {
  if (nota >= 9) return "¡Excelente! Dominas este tema.";
  if (nota >= 7) return "¡Muy bien! Casi lo tienes perfecto.";
  if (nota >= 5) return "¡Suficiente! Repasa un poco más los fallos.";
  return "Hay que repasar el tema, inténtalo de nuevo.";
}

/** Clase CSS para la nota según el porcentaje */
function claseNota(nota) {
  if (nota >= 7) return "sobresaliente";
  if (nota >= 5) return "suficiente";
  return "suspenso";
}

/** Selecciona N elementos al azar de un array */
function seleccionarAlAzar(array, n) {
  return barajar(array).slice(0, Math.min(n, array.length));
}

/** Elemento por id, más corto */
const $ = (id) => document.getElementById(id);
