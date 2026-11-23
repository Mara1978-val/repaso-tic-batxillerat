# Repaso TIC · Bachillerato

**Autora: Mara Vañó**

Aplicación web de repaso para **Informática y Digitalización / TIC · Bachillerato**,
con tres bloques de práctica:

1. **Tests de opción múltiple** — el alumno elige tema (Hardware, Máquinas Virtuales,
   Windows, Ubuntu, Redes), nivel (**Básico / Medio / Avanzado**) y número de preguntas
   (**10, 20 o 30**, disponibles en todos los temas y niveles).
   Al terminar ve la **puntuación en %**, el número de aciertos, una explicación por
   pregunta y una revisión completa del test.
2. **Preguntas abiertas** — el alumno escribe la respuesta con sus palabras y la
   aplicación le dice **si es correcta o no**, mostrando la respuesta oficial y una pista.
3. **Conversiones** — calculadora y ejercicios aleatorios para convertir **GB a TB, MB y KB**
   (siempre en **base binaria 1024**) y **números binarios a decimal**, con resultado,
   explicación paso a paso y contador de aciertos.

**450 preguntas de test + 61 preguntas abiertas**, redactadas a partir de los
materiales del curso. Hay 30 preguntas de test por tema y nivel, para poder elegir
tests de 10, 20 o 30 preguntas en cualquier combinación.

Todo funciona **sin conexión a internet**: no hay que instalar nada.

---

## Cómo usarla

Doble clic en **[`Repaso-TIC.html`](Repaso-TIC.html)**. Se abre en el navegador
(Chrome, Edge, Firefox…) y ya está lista para usar.

También puedes verla online en GitHub Pages:
*Configuración del repositorio → Pages → rama `main` → Save*, y aparecerá en
`https://<usuario>.github.io/repaso-tic-batxillerat/`.

---

## Estructura del repositorio

```
repaso-tic-batxillerat/
├── Repaso-TIC.html        → ★ LA APLICACIÓN (fichero único, todo incluido)
├── README.md
└── app-repasos/           → código fuente (para ampliar preguntas)
    ├── index.html
    ├── LEEME.md
    ├── generar-html.js    → regenera el HTML único
    ├── css/estilos.css
    └── js/
        ├── app.js                     → cambio entre bloques y arranque
        ├── utilidades.js              → barajar, comparar respuestas, notas
        ├── test-opcion-multiple.js    → lógica del test con puntuación
        ├── preguntas-abiertas.js      → lógica de las preguntas abiertas
        ├── conversiones.js            → calculadora y ejercicios de conversiones
        └── datos/                     → ← aquí están las preguntas
            ├── hardware.js
            ├── virtualizacion.js
            ├── windows.js
            ├── ubuntu.js
            └── redes.js
```

`Repaso-TIC.html` es un solo fichero con el CSS y todo el JavaScript dentro.
Se puede copiar, mandar por correo o subir al aula virtual tal cual.

---

## Cómo se añaden preguntas

Se edita **solo** un fichero de `app-repasos/js/datos/` y se regenera el HTML:

```
node app-repasos/generar-html.js
```

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
4. Regenera el HTML: `node app-repasos/generar-html.js`

---

## Puntuación

| % obtenido | Resultado       |
|-----------:|-----------------|
| 90 – 100   | Excelente       |
| 70 – 89    | Muy bien        |
| 50 – 69    | Suficiente      |
| 0 – 49     | Hay que repasar |

---

## Temas y número de preguntas

| Tema               | Básico | Medio | Avanzado | Abiertas |
|--------------------|-------:|------:|---------:|---------:|
| Hardware           |     30 |    30 |       30 |       12 |
| Máquinas Virtuales |     30 |    30 |       30 |       12 |
| Windows            |     30 |    30 |       30 |       12 |
| Ubuntu             |     30 |    30 |       30 |       13 |
| Redes              |     30 |    30 |       30 |       12 |
| **Total**          |    **450 preguntas de test** | | **61 abiertas** | |

---

## Contenido

Las preguntas están redactadas a partir de los materiales del curso: unidades de
Hardware, Guía de Virtualización y VirtualBox, Tema 2 (Sistemas operativos, Windows
y Ubuntu) y temas de Redes. El material de origen **no** se incluye en este repositorio.

## Licencia

Material educativo de aula · **Autora: Mara Vañó**.
Los PDFs de origen pertenecen a sus autores y no se han reproducido aquí.
