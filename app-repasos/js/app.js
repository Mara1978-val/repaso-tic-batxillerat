/* =========================================================
   app.js  ·  Navegación entre bloques y arranque general
   ========================================================= */

// Lista de temas disponibles. Se genera a partir de los ficheros de datos:
// si añades un fichero nuevo en js/datos/ con su clave, aparecerá solo.
let TEMAS = [];

function registrarTemas() {
  TEMAS = Object.keys(DATOS);
  // Orden deseado en la interfaz, si existe
  const orden = ["hardware", "virtualizacion", "windows", "ubuntu", "redes"];
  TEMAS.sort((a, b) => {
    const ia = orden.indexOf(a);
    const ib = orden.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
}

function cambiarModo(modo) {
  document.querySelectorAll(".btn-nav").forEach((b) =>
    b.classList.toggle("activo", b.dataset.modo === modo)
  );

  $("panel-test").classList.toggle("test-oculto", modo !== "test");
  $("panel-abiertas").classList.toggle("test-oculto", modo !== "abiertas");
  $("panel-conversiones").classList.toggle("test-oculto", modo !== "conversiones");
  $("panel-montaje").classList.toggle("test-oculto", modo !== "montaje");

  // Al cambiar de bloque cerramos los tests en curso
  if (modo !== "test") TestMultiple.volverAConfig();
  if (modo !== "abiertas") Abiertas.volverAConfig();
  if (modo !== "conversiones") Conversiones.volverAConfig();
  if (modo !== "montaje") {
    Montaje.volverAConfig();
    Taller3D.volverAConfig();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function irAlInicio() {
  const hayProgreso =
    TestMultiple.hayProgreso() ||
    Abiertas.hayProgreso() ||
    Conversiones.hayProgreso() ||
    Montaje.hayProgreso() ||
    Taller3D.hayProgreso();

  if (
    hayProgreso &&
    !confirm("Al salir perderás el progreso de la actividad. ¿Seguro que quieres volver al inicio?")
  ) {
    return;
  }

  TestMultiple.volverAConfig();
  Abiertas.volverAConfig();
  Conversiones.reiniciar();
  Montaje.reiniciar();
  Taller3D.reiniciar();
  cambiarModo("test");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  registrarTemas();

  document.querySelectorAll(".btn-nav").forEach((btn) => {
    btn.addEventListener("click", () => cambiarModo(btn.dataset.modo));
  });
  $("btn-inicio").addEventListener("click", irAlInicio);

  TestMultiple.iniciar();
  Abiertas.iniciar();
  Conversiones.iniciar();
  Montaje.iniciar();
  Taller3D.iniciar();
});
