/* =========================================================
   generar-html.js
   ---------------------------------------------------------
   Une el CSS y todos los ficheros JS dentro de un único
   fichero HTML autocontenido:  Repaso-TIC.html

   Uso:   node generar-html.js
   (desde la carpeta app-repasos, o desde cualquier sitio
    con la ruta al script)

   Después, copia el resultado a la carpeta padre para que
   quede junto a los PDFs del curso.
   ========================================================= */

const fs = require("fs");
const path = require("path");

const base = __dirname;
let html = fs.readFileSync(path.join(base, "index.html"), "utf8");

// 1) CSS inline
html = html.replace(
  /<link rel="stylesheet" href="css\/estilos.css">/,
  () => "<style>\n" + fs.readFileSync(path.join(base, "css", "estilos.css"), "utf8") + "\n</style>"
);

// 2) JS inline, en el mismo orden del HTML
const scripts = [];
html = html.replace(/<script src="([^"]+)"><\/script>/g, (todo, src) => {
  scripts.push(src);
  const code = fs.readFileSync(path.join(base, src), "utf8");
  if (code.includes("</script>")) throw new Error("Contiene '</script>': " + src);
  return "<script>\n" + code + "\n</script>";
});

// 3) Comprobaciones de seguridad
if (/<script src=|<link rel="stylesheet"/.test(html)) {
  throw new Error("Quedan referencias externas sin inlinear.");
}
if (scripts.length === 0) {
  throw new Error("No se ha inlineado ningún script.");
}

// 4) Salida en app-repasos/ y copia en la carpeta del curso
const nombre = "Repaso-TIC.html";
fs.writeFileSync(path.join(base, nombre), html, "utf8");

const padre = path.dirname(base);
const copias = [path.join(padre, nombre), path.join(padre, "index.html")];
copias.forEach((copia) => {
  try {
    fs.copyFileSync(path.join(base, nombre), copia);
  } catch (e) {
    console.log("(No se pudo copiar a " + copia + ": " + e.message + ")");
  }
});

console.log("OK · " + nombre + "  (" + (html.length / 1024).toFixed(1) + " KB)");
console.log("   · " + scripts.length + " scripts + CSS inline");
copias.forEach((copia) => console.log("   · copia en: " + copia));
