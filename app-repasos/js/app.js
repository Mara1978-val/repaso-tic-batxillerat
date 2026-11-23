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

  // Volvemos siempre a la pantalla de configuración del bloque activo
  if (modo === "test") {
    Abiertas.volverAConfig();
  } else {
    TestMultiple.volverAConfig();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  registrarTemas();

  document.querySelectorAll(".btn-nav").forEach((btn) => {
    btn.addEventListener("click", () => cambiarModo(btn.dataset.modo));
  });

  TestMultiple.iniciar();
  Abiertas.iniciar();
});
