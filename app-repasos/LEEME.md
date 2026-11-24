# Repaso TIC · Bachillerato

Aplicación de repaso con cuatro bloques:

1. **Tests de opción múltiple** — el alumno elige tema (Hardware, Máquinas Virtuales,
   Windows, Ubuntu, Redes), nivel (Básico / Medio / Avanzado) y número de preguntas.
   Al terminar ve la **puntuación en %**, el número de aciertos, una explicación por
   pregunta y una revisión completa de todo el test.
2. **Preguntas abiertas** — el alumno escribe la respuesta con sus palabras y la
   aplicación le dice **si es correcta o no**, muestra la respuesta oficial y una pista.
3. **Conversiones** — calculadora y ejercicios de GB ↔ TB/MB/KB (siempre base 1024)
   y de binario a decimal, con resultado, explicación y aciertos.
4. **Montar un equipo** — dos actividades:
   - *Simulador de montaje*: se elige una pieza de la bandeja y se pulsa su ranura,
     siguiendo pasos guiados (placa base y caja). Los errores se explican, hay pistas
     y la nota final se calcula según los fallos. El progreso se guarda en el navegador.
   - *Configurador de equipo*: se eligen los componentes dentro de un presupuesto y
     se comprueba compatibilidad (socket, memoria, formato de placa, fuente y precio).

Todo funciona **sin conexión a internet**: no hay que instalar nada.

---

## Cómo usarlo

Haz doble clic en **`index.html`**. Se abre en el navegador (Chrome, Edge, Firefox…).

---

## Estructura de la carpeta

```
Aplicacion BAT/
├── Repaso-TIC.html                → ★ LA APLICACIÓN (fichero único, todo incluido)
└── app-repasos/                   → código fuente (por si quieres ampliarlo)
    ├── index.html
    ├── LEEME.md
    ├── css/estilos.css
    ├── js/… (incluye conversiones.js y montaje.js) y js/datos/…
```

El código del bloque **Montar un equipo** está en `js/montaje.js`. Ahí están los
pasos de cada práctica, las piezas (incluidas las incorrectas, con su explicación),
los componentes del configurador y las reglas de compatibilidad.

**Para usar la aplicación basta con `Repaso-TIC.html`**: es un solo fichero con el
CSS y todo el JavaScript dentro. No necesita internet, ni carpeta de estilos, ni
nada más. Se puede copiar, mandar por correo o subir al aula virtual tal cual.

Si quieres **modificar preguntas**, edita los ficheros de `app-repasos/js/datos/`
y después regenera el HTML único con:

```
node app-repasos/generar-html.js
```

(el script copia el CSS y los JS dentro de `Repaso-TIC.html`).

---

## Cómo se añaden preguntas

Cada fichero de `js/datos/` tiene dos bloques.

### 1. Preguntas de test (opción múltiple)

```js
DATOS.redes.test.medio.push({
  p:  "Enunciado de la pregunta",
  op: ["Opción A", "Opción B", "Opción C", "Opción D"],
  r:  1,                    // índice de la opción CORRECTA (empieza en 0)
  e:  "Explicación que verá el alumno al terminar."
});
```

Hay tres niveles: `basico`, `medio` y `avanzado`. Si un nivel queda sin preguntas,
la aplicación lo avisa en pantalla en lugar de fallar.

### 2. Preguntas abiertas

```js
DATOS.redes.abiertas.push({
  q:          "¿Qué es el NAT y para qué sirve?",
  respuestas: ["network address translation", "traducir", "ip publica"],
  solucion:   "Texto completo de la respuesta oficial.",
  nivel:      "medio",
  explicacion:"Pista corta que se muestra junto al veredicto."
});
```

- **`respuestas`** es la lista de formas que se aceptan. La aplicación normaliza
  mayúsculas, acentos y signos, y acepta la respuesta si el texto del alumno
  **contiene** alguna de ellas. Por eso basta con escribir `traducir direcciones`.
- **`nivel`** puede ser `"basico"`, `"medio"` o `"avanzado"`.

### 3. Añadir un tema nuevo

1. Crea `js/datos/mitema.js` con `window.DATOS = window.DATOS || {};`
   y `DATOS.mitema = { nombre: "Mi Tema", test: {...}, abiertas: [...] }`.
2. Añade su `<script src="js/datos/mitema.js">` en `index.html` (antes de `utilidades.js`).
3. El tema aparecerá solo en las dos pantallas. En `js/app.js`, la variable `orden`
   fija el orden en el que se muestran los temas.

---

## Puntuación

| % obtenido | Resultado      |
|-----------:|----------------|
| 90 – 100   | Excelente      |
| 70 – 89    | Muy bien       |
| 50 – 69    | Suficiente     |
| 0 – 49     | Hay que repasar|

---

## Contenido

Las preguntas están redactadas a partir de los materiales del curso que están en la
carpeta `Aplicacion BAT`: unidades de Hardware, Guía de Virtualización y VirtualBox,
Tema 2 (Sistemas operativos, Windows y Ubuntu) y temas de Redes.
