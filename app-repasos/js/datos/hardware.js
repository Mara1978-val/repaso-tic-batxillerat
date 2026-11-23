/* =========================================================
   datos/hardware.js
   Preguntas del tema HARDWARE
   ---------------------------------------------------------
   test     : { basico:[], medio:[], avanzado:[] }
              cada pregunta = { p:"enunciado", op:["a","b","c","d"],
                                r:índice de la correcta, e:"explicación" }
   abiertas : [ { q, respuestas:[formas aceptadas], solucion,
                  nivel:"basico|medio|avanzado", explicacion } ]
   ========================================================= */

window.DATOS = window.DATOS || {};

DATOS.hardware = {
  nombre: "Hardware",

  test: {
    basico: [
      { p: "¿Cuántos bits forman un byte?",
        op: ["4", "8", "16", "32"], r: 1,
        e: "Un byte (octeto) = 8 bits. Con un byte se representa un carácter en ASCII." },

      { p: "La parte física y tangible del ordenador (cables, caja, componentes) se denomina:",
        op: ["Software", "Hardware", "Periférico", "Sistema operativo"], r: 1,
        e: "Hardware = lo físico; software = los programas e instrucciones." },

      { p: "¿Cuál es la unidad de medida de la frecuencia (velocidad de un procesador)?",
        op: ["Vatios (W)", "Bytes (B)", "Hercio (Hz)", "Metros (m)"], r: 2,
        e: "1 Hz = 1 ciclo por segundo. Se usan kHz, MHz y GHz." },

      { p: "¿Qué componente se considera el «cerebro» del ordenador?",
        op: ["La RAM", "El disco duro", "La CPU", "La fuente de alimentación"], r: 2,
        e: "La CPU interpreta y ejecuta las instrucciones; el microprocesador es la CPU en un solo circuito." },

      { p: "¿Cuál de estos periféricos es de SALIDA?",
        op: ["Ratón", "Teclado", "Impresora", "Webcam"], r: 2,
        e: "De salida: monitor, impresora, plotter, altavoces. De entrada: teclado, ratón, escáner, webcam." },

      { p: "La memoria de trabajo del ordenador, volátil y de acceso aleatorio, es:",
        op: ["RAM", "ROM", "BIOS", "GPU"], r: 0,
        e: "RAM = memoria volátil que se borra al apagar; ROM es permanente (guarda la BIOS)." },

      { p: "¿Qué componente conecta, alimenta e interconecta todos los demás?",
        op: ["La placa base", "La tarjeta gráfica", "El monitor", "El cable de red"], r: 0,
        e: "La placa base es el «esqueleto» del PC: por ella circulan los buses." },

      { p: "Las redes se miden en… y los archivos en…",
        op: ["bytes y bits", "bits y bytes", "hercios y vatios", "vatios y hercios"], r: 1,
        e: "Redes en bits (Mbps/Gbps); archivos en bytes (MB/GB)." },

      { p: "¿Qué tipo de memoria NO tiene partes móviles?",
        op: ["HDD", "SSD", "Disquete", "Unidad óptica"], r: 1,
        e: "El SSD usa memoria flash: sin cabezales ni platos, es más rápido y resistente a golpes." },

      { p: "Un periférico que tanto recibe datos como los envía es:",
        op: ["De entrada", "De salida", "De entrada/salida (E/S)", "De proceso"], r: 2,
        e: "Ejemplo: la pantalla táctil, que muestra información y recoge el toque del usuario." },

      { p: "¿Cuál de estos es un factor de forma de placa base?",
        op: ["ATX", "USB", "RJ-45", "HDMI"], r: 0,
        e: "Los principales son ATX, Micro-ATX y Mini-ITX. USB, RJ-45 y HDMI son conectores." },

      { p: "El componente que convierte la corriente de la red eléctrica para que funcione el PC es:",
        op: ["La fuente de alimentación (PSU)", "El ventilador", "La batería CR2032", "El SSD"], r: 0,
        e: "La PSU se mide en vatios (W) y suele llevar la certificación 80 PLUS." },

      { p: "La memoria que guarda la BIOS y la rutina de arranque es:",
        op: ["RAM", "ROM", "Caché", "VRAM"], r: 1,
        e: "ROM: memoria permanente de solo lectura." },

      { p: "¿Cuál es un periférico de ENTRADA?",
        op: ["Altavoces", "Monitor", "Ratón", "Impresora"], r: 2,
        e: "El ratón envía datos al ordenador; los otros tres muestran o devuelven información." }
    ],

    medio: [
      { p: "¿Cuántos pines tiene un módulo de memoria DDR4?",
        op: ["184", "240", "288", "320"], r: 2,
        e: "DDR3 = 240 pines; DDR4 = 288 pines (mayor rendimiento y menor consumo)." },

      { p: "La velocidad máxima de una interfaz SATA III es:",
        op: ["1,5 Gb/s", "3 Gb/s", "6 Gb/s", "10 Gb/s"], r: 2,
        e: "SATA II = 3 Gb/s y SATA III = 6 Gb/s." },

      { p: "1 gigabyte (GB) equivale exactamente a:",
        op: ["1.000 MB", "1.024 MB", "1.048.576 MB", "8 MB"], r: 1,
        e: "Cada escalón binario multiplica por 1.024: 1 GB = 1.024 MB = 1.073.741.824 bytes." },

      { p: "La configuración de la BIOS se guarda en la memoria:",
        op: ["CMOS (alimentada por la pila CR2032)", "ROM flash de vídeo", "RAM principal", "Disco SSD"], r: 0,
        e: "Si la pila CR2032 se agota, la BIOS pierde la fecha y la configuración." },

      { p: "Una CPU de 32 bits puede direccionar como máximo:",
        op: ["4 GB de RAM", "8 GB de RAM", "16 GB de RAM", "2 GB de RAM"], r: 0,
        e: "2³² = 4.294.967.296 direcciones → máximo 4 GB. Con 64 bits la RAM es prácticamente ilimitada." },

      { p: "Un procesador de 3,5 GHz ejecuta aproximadamente:",
        op: ["3.500 ciclos por segundo", "3.500 millones de ciclos por segundo", "3,5 ciclos por segundo", "35 millones de ciclos por segundo"], r: 1,
        e: "GHz = 1.000.000.000. 3,5 GHz = 3.500 millones de ciclos/s." },

      { p: "¿Cuánto pesa el número binario 11011001 en decimal?",
        op: ["177", "201", "217", "225"], r: 2,
        e: "128 + 64 + 16 + 8 + 1 = 217." },

      { p: "Si la velocidad de la red es de 300 Mbps, la descarga real máxima es de:",
        op: ["300 MB/s", "37,5 MB/s", "3.000 MB/s", "3,75 MB/s"], r: 1,
        e: "MB/s = Mbps ÷ 8 → 300 ÷ 8 = 37,5 MB/s." },

      { p: "Para dimensionar la fuente de alimentación se recomienda:",
        op: ["Consumo total × 1,3", "Consumo total ÷ 2", "Consumo total + 50 W siempre", "Consumo total × 0,5"], r: 0,
        e: "Se deja un margen del 30%: 500 W de consumo → fuente de 650 W." },

      { p: "¿Qué tipo de impresora ofrece la mejor calidad y es la más rápida y silenciosa?",
        op: ["Inyección de tinta", "Térmica", "Láser", "Sublimación"], r: 2,
        e: "La láser usa tambor electrostático, toner y calor; la sublimación es la de calidad fotográfica." },

      { p: "Una pantalla LCD se diferencia de la LED en que:",
        op: ["La LED usa diodos emisores de luz: más colores, menos consumo y más duración",
              "La LED no puede mostrar imágenes en movimiento",
              "La LCD consume menos que la LED",
              "La LCD no necesita retroiluminación"], r: 0,
        e: "LCD TFT (transistores, en desuso) frente a LED (diodos emisores de luz)." },

      { p: "Una tarjeta microSDHC admite hasta:",
        op: ["2 GB", "32 GB", "2 TB", "128 GB"], r: 1,
        e: "SDHC (High Capacity) hasta 32 GB; SDXC (Extended Capacity) hasta 2 TB." },

      { p: "Una fotografía de 1920 × 1080 píxeles tiene aproximadamente:",
        op: ["0,2 MP", "2 MP", "12 MP", "20 MP"], r: 1,
        e: "1920 × 1080 = 2.073.600 píxeles ≈ 2 megapíxeles." },

      { p: "En un disco duro mecánico, cada cara de cada plato tiene:",
        op: ["Dos cabezales", "Una cabeza de lectura/escritura", "Cuatro cabezales", "Ningún cabezal"], r: 1,
        e: "Una sola cabeza por cara; los platos giran a 7.200 rpm." },

      { p: "La configuración «doble canal» de la memoria RAM consiste en:",
        op: ["Instalar dos módulos iguales para duplicar la velocidad de acceso",
              "Usar módulos de distinta capacidad",
              "Conectar la RAM al bus de vídeo",
              "Habilitar la memoria virtual en el disco"], r: 0,
        e: "Dos módulos idénticos en los bancos del mismo color, que comparten canal." }
    ],

    avanzado: [
      { p: "El número decimal 77 expresado en binario es:",
        op: ["1001001", "1001101", "1100101", "1011101"], r: 1,
        e: "Divisiones sucesivas por 2 y los restos leídos al revés: 77 → 1001101." },

      { p: "Un disco etiquetado por el fabricante como «1 TB» aparece en Windows como aprox.:",
        op: ["1.000 GB", "931 GB", "1.024 GB", "100 GB"], r: 1,
        e: "El fabricante usa 1.000 (decimal) y el SO usa 1.024 (binario): 10¹² B = 931 GB." },

      { p: "Un disco de 500 GB del fabricante corresponde a cuántos GB en el sistema operativo?",
        op: ["500 GB", "465,66 GB", "512 GB", "488 GB"], r: 1,
        e: "500.000.000.000 bytes ÷ 1.073.741.824 = 465,66 GB." },

      { p: "El TDP de un procesador se expresa en vatios e indica:",
        op: ["La cantidad de RAM que admite",
              "El calor máximo que disipa, condicionando la refrigeración",
              "La velocidad de reloj máxima",
              "El número de núcleos disponibles"], r: 1,
        e: "A mayor TDP, hace falta una refrigeración más potente." },

      { p: "Con la tecnología Hyper-Threading, cada núcleo de la CPU puede ejecutar:",
        op: ["Una sola tarea", "Dos tareas simultáneamente", "Cuatro tareas", "Ocho tareas"], r: 1,
        e: "Por eso una CPU puede mostrar «8 núcleos / 16 hilos»." },

      { p: "La velocidad típica de un SSD conectado por NVMe es de hasta:",
        op: ["150 MB/s", "550 MB/s", "3.000 MB/s", "120 MB/s"], r: 2,
        e: "HDD ≈ 120 MB/s, SSD SATA ≈ 550 MB/s y NVMe hasta 3.000 MB/s o más." },

      { p: "¿Cuántas películas de 1,5 GB caben en un disco de 3 TB?",
        op: ["1.024", "2.048", "3.072", "512"], r: 1,
        e: "3 TB = 3.072 GB ÷ 1,5 GB = 2.048 películas." },

      { p: "1 Gbps equivale exactamente a:",
        op: ["100 MB/s", "125 MB/s", "1.000 MB/s", "8.192 MB/s"], r: 1,
        e: "1.000 Mbps ÷ 8 = 125 MB/s." },

      { p: "¿Cuánto tarda en descargarse un archivo de 2 GB con una conexión de 300 Mbps?",
        op: ["5,4 s", "54,6 s", "8,2 s", "546 s"], r: 1,
        e: "2 GB = 2.048 MB; 300 Mbps = 37,5 MB/s → 2.048 ÷ 37,5 = 54,6 s." },

      { p: "La tecnología que permite que los módulos DDR3 tengan 240 pines, frente a los 288 de la DDR4, se denomina:",
        op: ["DIMM de escritorio estándar en ambos casos", "Diferente generación: DDR3 y DDR4", "Mismo módulo con adaptador", "Ranura SO-DIMM de portátil en ambos"], r: 1,
        e: "Son generaciones distintas de DIMM: DDR3 = 240 pines, DDR4 = 288 pines." },

      { p: "En un disco duro, la distancia a la que se acercan los cabezales a los platos es del orden de:",
        op: ["3 milímetros", "3 nanómetros", "3 centímetros", "3 micrómetros"], r: 1,
        e: "A 3 nm de distancia, por eso un golpe o un polvo pueden dañar el disco." },

      { p: "Una CPU con arquitectura ARM se caracteriza por:",
        op: ["Ser un diseño RISC con componentes integrados (GPU, módem), usado en móviles",
              "Solo poder ejecutar Windows",
              "Estar siempre soldada a la placa base",
              "Trabajar solo a 32 bits"], r: 0,
        e: "ARM (Advanced RISC Machines) usa arquitectura RISC; la llevan móviles, relojes y coches." },

      { p: "El fabricante de un SSD anuncia un MTBF de 2 millones de horas. Este dato indica:",
        op: ["La vida útil antes de un fallo medio", "La velocidad de lectura", "La capacidad máxima", "El consumo en vatios"], r: 0,
        e: "MTBF = tiempo medio entre fallos (Mean Time Between Failures)." },

      { p: "Los primeros 3 pares de una dirección MAC identifican:",
        op: ["El fabricante de la tarjeta de red", "La IP del equipo", "El número de serie del disco", "La versión del navegador"], r: 0,
        e: "La MAC tiene 48 bits (6 pares hexadecimales); los 3 primeros son el OUI del fabricante." }
    ]
  },

  abiertas: [
    { q: "¿Qué es el hardware y qué diferencia tiene con el software?",
      respuestas: ["parte fisica", "componentes fisicos", "tangible", "cuerpo", "programas e instrucciones"],
      solucion: "El hardware es la parte física y tangible del ordenador (componentes, cables, caja, periféricos); el software son los programas e instrucciones que se ejecutan en él.",
      nivel: "basico",
      explicacion: "Piensa en el «cuerpo» y la «mente» del ordenador." },

    { q: "¿Cuántos bits hay en un byte y cómo se llama también ese conjunto?",
      respuestas: ["8 bits", "ocho bits", "octeto", "8"],
      solucion: "8 bits. También se llama octeto, y representa un carácter en ASCII.",
      nivel: "basico",
      explicacion: "La letra «b» minúscula es bit y la «B» mayúscula es byte." },

    { q: "Menciona tres periféricos de entrada y tres de salida.",
      respuestas: ["teclado, raton, escaner", "teclado raton escaner", "monitor impresora altavoz"],
      solucion: "Entrada: teclado, ratón, escáner, webcam, micrófono. Salida: monitor, impresora, plotter, altavoces.",
      nivel: "basico",
      explicacion: "Los de entrada envían datos; los de salida muestran información." },

    { q: "¿Qué es la RAM y por qué se dice que es memoria volátil?",
      respuestas: ["memoria de trabajo", "volatil", "se borra al apagar", "borra al apagarse"],
      solucion: "Es la memoria de trabajo del ordenador, de acceso aleatorio; es volátil porque su contenido se pierde al apagar o reiniciar el equipo.",
      nivel: "basico",
      explicacion: "A diferencia de la ROM o del disco, que son no volátiles." },

    { q: "Explica la diferencia entre 1 MB según el fabricante y según el sistema operativo.",
      respuestas: ["1.000.000", "1.048.576", "1024 kb", "decimal y binario", "1000 y 1024"],
      solucion: "El fabricante usa el decimal: 1 MB = 1.000.000 bytes. El SO usa el binario: 1 MB = 1.024 KB = 1.048.576 bytes. Por eso un disco de 1 TB aparece como 931 GB.",
      nivel: "medio",
      explicacion: "Cada escalón binario multiplica por 1.024." },

    { q: "¿Cuántos pines tienen los módulos DDR3 y DDR4? ¿Cuál es más rápida?",
      respuestas: ["240 y 288", "240", "288"],
      solucion: "DDR3 tiene 240 pines y DDR4 tiene 288 pines; la DDR4 ofrece mayor rendimiento y menor consumo.",
      nivel: "medio",
      explicacion: "Se distinguen además por la posición de la muesca de la ranura." },

    { q: "¿Qué función cumple la BIOS y dónde se guarda su configuración?",
      respuestas: ["basic input output", "identifica el hardware", "cmos", "arranque", "pila"],
      solucion: "La BIOS (Basic Input Output System) identifica el hardware conectado y realiza la autocomprobación al arrancar; su configuración se guarda en la CMOS, alimentada por la pila CR2032.",
      nivel: "medio",
      explicacion: "Sin la BIOS la placa base no funciona." },

    { q: "¿Qué es la jerarquía de memoria? Ordena de más rápida a más lenta.",
      respuestas: ["registros", "cache", "ram", "disco", "ssd", "hdd", "armario"],
      solucion: "Registros y caché de la CPU (rapidísimas y pequeñas) → RAM (rápida) → SSD/HDD (lentas pero de gran capacidad). Como metáfora: la RAM es la mesa de trabajo y los discos, el armario.",
      nivel: "medio",
      explicacion: "Cuanto más arriba, más rápida y más cara por GB." },

    { q: "Explica la regla de cálculo de la fuente de alimentación y aplícala a 320 W de consumo.",
      respuestas: ["416", "1.3", "1,3", "x1.3", "320 * 1.3"],
      solucion: "Fuente = consumo total × 1,3 (margen del 30%). 320 W × 1,3 = 416 W, por lo que conviene una fuente de unos 400-450 W.",
      nivel: "avanzado",
      explicacion: "El margen deja sitio para picos y futuras ampliaciones." },

    { q: "Convierte 11011001 de binario a decimal justificando el proceso.",
      respuestas: ["217", "128+64+16+8+1"],
      solucion: "Se numeran los bits de derecha a izquierda (0 a 7) y se suman las potencias de 2 encendidas: 128 + 64 + 16 + 8 + 1 = 217.",
      nivel: "avanzado",
      explicacion: "Bit 7 = 128, bit 6 = 64, bit 5 = 0, bit 4 = 16, bit 3 = 8, bit 2 = 0, bit 1 = 0, bit 0 = 1." },

    { q: "Una conexión es de 1 Gbps. ¿Cuántos MB/s son y en cuánto tiempo baja un archivo de 3 GB?",
      respuestas: ["125", "24.6", "24,6", "24 s"],
      solucion: "1 Gbps = 1.000 Mbps ÷ 8 = 125 MB/s. 3 GB = 3.072 MB → 3.072 ÷ 125 = 24,6 s.",
      nivel: "avanzado",
      explicacion: "MB/s = Mbps ÷ 8: la confusión más habitual en los ejercicios." },

    { q: "¿Qué diferencias principales encuentras entre un HDD y un SSD?",
      respuestas: ["partes moviles", "flash", "sin partes moviles", "rapido", "silencioso", "golpes", "cabezales", "platos"],
      solucion: "El HDD es mecánico (platos, cabezales, grabación magnética, ≈120 MB/s, ruidoso y sensible a golpes). El SSD usa memoria flash sin partes móviles: hasta 10 veces más rápido (SATA ≈550 MB/s, NVMe ≈3.000 MB/s), sin ruido, más resistente, pero más caro.",
      nivel: "avanzado",
      explicacion: "También es más fiable (MTBF de millones de horas) pero no recuperable en laboratorio." }
  ]
};

/* =========================================================
   Ampliación del banco de preguntas (test)
   Se añaden con push para no alterar la declaración anterior.
   ========================================================= */

/* ---------- NIVEL BÁSICO (16 nuevas) ---------- */
DATOS.hardware.test.basico.push(
  { p: "¿Cuál es la unidad mínima de información que puede valer 0 o 1?",
    op: ["El bit", "El byte", "El kilobyte", "El carácter"], r: 0,
    e: "El bit (binary digit) es la unidad mínima; 8 bits forman un byte." },

  { p: "¿Qué significa el acrónimo CPU?",
    op: ["Central Process Unit", "Computer Personal Unit", "Core Processing Utility", "Central Processing Unit"], r: 3,
    e: "CPU = Central Processing Unit (Unidad Central de Procesamiento): interpreta y ejecuta instrucciones." },

  { p: "¿Qué componente se encarga de generar la imagen que se muestra en el monitor?",
    op: ["La fuente de alimentación", "La tarjeta de sonido", "La tarjeta gráfica", "El disco duro"], r: 2,
    e: "La tarjeta gráfica (GPU) procesa y envía la imagen al monitor; puede estar integrada en la CPU." },

  { p: "¿Qué periférico se usa principalmente para escribir texto en el ordenador?",
    op: ["El teclado", "El ratón", "La impresora", "El micrófono"], r: 0,
    e: "El teclado es un periférico de entrada para introducir texto y comandos." },

  { p: "¿Cuál de estos dispositivos guarda los datos aunque se apague el equipo?",
    op: ["La RAM", "La caché", "El disco duro", "Los registros"], r: 2,
    e: "El disco (HDD o SSD) es no volátil: conserva los datos sin corriente eléctrica." },

  { p: "¿Qué conector se usa habitualmente para enchufar un pendrive o una impresora?",
    op: ["RJ-45", "USB", "HDMI", "VGA"], r: 1,
    e: "USB es el conector estándar para periféricos y almacenamiento externo." },

  { p: "¿Qué hace un escáner?",
    op: ["Imprime documentos", "Almacena programas", "Amplifica el sonido", "Digitaliza documentos e imágenes"], r: 3,
    e: "El escáner es un periférico de entrada que convierte documentos físicos en imágenes digitales." },

  { p: "¿Qué es un procesador de doble núcleo (dual-core)?",
    op: ["Un procesador con dos núcleos de procesamiento", "Dos procesadores soldados", "Un procesador sin caché", "Un procesador de 2 bits"], r: 0,
    e: "Dos núcleos dentro del mismo chip pueden trabajar en paralelo." },

  { p: "¿Qué componente se instala en el zócalo (socket) de la placa base?",
    op: ["La memoria RAM", "El procesador", "La tarjeta gráfica", "La fuente de alimentación"], r: 1,
    e: "El socket es el alojamiento del procesador; la RAM va en las ranuras DIMM." },

  { p: "¿Qué significa BIOS?",
    op: ["Basic Input Output System", "Binary Input Output System", "Basic Integrated Operating System", "Board Input Output Setup"], r: 0,
    e: "BIOS = Sistema Básico de Entrada/Salida: inicializa el hardware y arranca el equipo." },

  { p: "¿Cómo se denomina el conector estándar de una red Ethernet (cable de red)?",
    op: ["USB", "HDMI", "RJ-45", "DVI"], r: 2,
    e: "RJ-45 es el conector de 8 pines usado en redes Ethernet con cable de par trenzado." },

  { p: "¿En qué forma se procesan internamente los datos en un ordenador digital?",
    op: ["En decimal", "En caracteres ASCII", "En vatios", "En binario (0 y 1)"], r: 3,
    e: "Toda la información se codifica en bits; después se agrupan en bytes." },

  { p: "¿Qué elemento se usa para disipar el calor del procesador?",
    op: ["Un disipador con ventilador", "Una batería CR2032", "Un cable SATA", "Una tarjeta de red"], r: 0,
    e: "El disipador (con ventilador o refrigeración líquida) evita el sobrecalentamiento de la CPU." },

  { p: "¿Qué es un periférico?",
    op: ["Un programa del sistema", "Un dispositivo conectado al ordenador para introducir o sacar datos", "Un tipo de procesador", "La memoria interna de la CPU"], r: 1,
    e: "Los periféricos pueden ser de entrada, de salida o de entrada/salida (E/S)." },

  { p: "¿Cuál de estos periféricos produce sonido?",
    op: ["El micrófono", "El escáner", "Los altavoces", "El ratón"], r: 2,
    e: "Los altavoces son de salida de audio; el micrófono es de entrada." },

  { p: "¿Qué tipo de memoria utilizan las memorias USB (pendrives)?",
    op: ["Memoria DRAM", "Memoria flash", "Memoria SRAM", "Memoria magnética"], r: 1,
    e: "La memoria flash es no volátil y se usa en pendrives, SSD y tarjetas SD." }
);

/* ---------- NIVEL MEDIO (15 nuevas) ---------- */
DATOS.hardware.test.medio.push(
  { p: "¿Cuántos valores distintos puede representar un byte?",
    op: ["8", "128", "256", "1.024"], r: 2,
    e: "Con 8 bits hay 2⁸ = 256 combinaciones, de 0 a 255." },

  { p: "¿Cuántos bits tiene una dirección IPv4?",
    op: ["32", "48", "64", "128"], r: 0,
    e: "IPv4 usa 32 bits, escritos como cuatro números de 0 a 255." },

  { p: "¿Qué interfaz utilizan los discos SSD NVMe?",
    op: ["SATA", "PCIe", "USB 2.0", "PS/2"], r: 1,
    e: "NVMe se conecta por PCIe, mucho más rápida que SATA; suele usar el formato M.2." },

  { p: "¿Cuál es la velocidad máxima teórica de USB 2.0?",
    op: ["12 Mbps", "480 Mbps", "5 Gbps", "10 Gbps"], r: 1,
    e: "USB 2.0 (High Speed) llega a 480 Mbps; USB 3.0 alcanza 5 Gbps." },

  { p: "¿Cuál es la velocidad máxima teórica de USB 3.0 (USB 3.2 Gen 1)?",
    op: ["480 Mbps", "1,5 Gbps", "5 Gbps", "40 Gbps"], r: 2,
    e: "USB 3.0 ofrece hasta 5 Gbps; 40 Gbps corresponde a USB4/Thunderbolt 3." },

  { p: "¿Cuál es la capacidad de un DVD de una sola capa?",
    op: ["700 MB", "25 GB", "50 GB", "4,7 GB"], r: 3,
    e: "El DVD de una capa (DVD-5) guarda 4,7 GB; el de doble capa (DVD-9), 8,5 GB." },

  { p: "¿Cuál es la capacidad de un disco Blu-ray de una sola capa?",
    op: ["4,7 GB", "8,5 GB", "25 GB", "100 GB"], r: 2,
    e: "Un Blu-ray de una capa guarda 25 GB; el de doble capa, 50 GB." },

  { p: "En RAID 0 los datos se reparten entre varios discos. ¿Cuál es su característica principal?",
    op: ["Duplica la seguridad ante fallos", "Aumenta la velocidad pero no hay redundancia", "Usa un único disco de respaldo", "Solo funciona con tres discos"], r: 1,
    e: "RAID 0 (striping) suma rendimiento y capacidad, pero si falla un disco se pierde todo." },

  { p: "¿Qué hace RAID 1 con los datos?",
    op: ["Los repara automáticamente", "Los divide en fragmentos sin copia", "Crea una copia exacta (espejo) en otro disco", "Los comprime para ahorrar espacio"], r: 2,
    e: "RAID 1 (mirroring) duplica la información, por lo que tolera el fallo de un disco." },

  { p: "Un procesador de 2,4 GHz trabaja a…",
    op: ["24 MHz", "240 MHz", "2.400.000 MHz", "2.400 MHz"], r: 3,
    e: "Como 1 GHz = 1.000 MHz, 2,4 GHz = 2.400 MHz." },

  { p: "Dentro de la jerarquía de memoria, la caché L1 es…",
    op: ["La más rápida y pequeña, integrada en la CPU", "La más lenta pero de mayor tamaño", "Un disco de estado sólido", "La memoria que usa el sistema operativo"], r: 0,
    e: "L1 es la más cercana al procesador; detrás van L2, L3, la RAM y los discos." },

  { p: "¿Qué es la memoria virtual?",
    op: ["Un disco reservado solo para vídeos", "Una parte del disco usada como extensión de la RAM", "Una RAM soldada a la placa base", "La memoria de la tarjeta gráfica"], r: 1,
    e: "Cuando falta RAM, el sistema operativo intercambia páginas con un archivo o partición de intercambio en el disco." },

  { p: "¿Cuál es la función principal del chipset de la placa base?",
    op: ["Generar la imagen del monitor", "Gestionar la comunicación entre la CPU y el resto de componentes", "Convertir la corriente alterna en continua", "Guardar los archivos del usuario"], r: 1,
    e: "El chipset actúa como intermediario entre el procesador, la memoria y los periféricos." },

  { p: "¿Qué tipo de información puede transmitir un puerto HDMI?",
    op: ["Solo sonido", "Solo vídeo", "Corriente eléctrica de la fuente", "Vídeo y audio digitales"], r: 3,
    e: "HDMI transporta vídeo y audio digitales por un mismo cable: se usa en monitores y televisores." },

  { p: "Copiando un archivo de 1 GB a una velocidad de 100 MB/s, ¿cuánto tarda aproximadamente?",
    op: ["1 s", "10 s", "100 s", "1.024 s"], r: 1,
    e: "1 GB = 1.024 MB y 1.024 ÷ 100 ≈ 10,24 s, es decir, unos 10 segundos." }
);

/* ---------- NIVEL AVANZADO (16 nuevas) ---------- */
DATOS.hardware.test.avanzado.push(
  { p: "El número binario 101010 equivale en decimal a:",
    op: ["36", "40", "42", "44"], r: 2,
    e: "32 + 8 + 2 = 42 (encendidos los bits 5, 3 y 1)." },

  { p: "El número decimal 255 escrito en hexadecimal es:",
    op: ["0xEF", "0xFE", "0x1FF", "0xFF"], r: 3,
    e: "255 = 11111111₂ = FF₁₆; cada cifra hexadecimal representa 4 bits." },

  { p: "Un archivo de 5.120 MB se descarga a 100 Mbps. ¿Cuánto tarda?",
    op: ["40,96 s", "409,6 s", "51,2 s", "512 s"], r: 1,
    e: "100 Mbps = 12,5 MB/s; 5.120 ÷ 12,5 = 409,6 s (unos 6,8 minutos)." },

  { p: "Un equipo consume 95 W (CPU), 250 W (GPU) y 55 W (resto). Aplicando el margen del 30%, ¿qué fuente conviene?",
    op: ["Una de 400 W", "Una de 450 W", "Una de 500 W", "Una de 550 W o más"], r: 3,
    e: "El total es 400 W y 400 × 1,3 = 520 W, así que conviene una fuente de al menos 550 W." },

  { p: "¿Qué caracteriza a un array RAID 5?",
    op: ["Requiere al menos 3 discos y tolera el fallo de uno", "Requiere 2 discos y no tolera fallos", "Usa un solo disco y copias en la nube", "Requiere 4 discos y tolera dos fallos"], r: 0,
    e: "RAID 5 reparte datos con paridad distribuida: capacidad útil (n-1) discos y aguanta un fallo." },

  { p: "¿Cuál es el mínimo de discos de RAID 6 y cuántos fallos tolera?",
    op: ["3 discos y 1 fallo", "4 discos y 2 fallos", "2 discos y 1 fallo", "5 discos y 3 fallos"], r: 1,
    e: "RAID 6 usa doble paridad: al menos 4 discos y tolera la pérdida de dos de ellos." },

  { p: "Un bus de datos de 64 bits a 3,2 GHz, con una transferencia por ciclo, mueve aproximadamente:",
    op: ["3,2 GB/s", "12,8 GB/s", "25,6 GB/s", "51,2 GB/s"], r: 2,
    e: "64 bits = 8 bytes; 8 B × 3,2·10⁹ ciclos/s = 25,6·10⁹ B/s = 25,6 GB/s." },

  { p: "Una pantalla 4K UHD de 3840 × 2160 píxeles tiene aproximadamente:",
    op: ["2 MP", "4 MP", "6,2 MP", "8,3 MP"], r: 3,
    e: "3840 × 2160 = 8.294.400 píxeles ≈ 8,3 megapíxeles." },

  { p: "Una imagen de 8,3 MP a 24 bits por píxel ocupa, sin comprimir, unos:",
    op: ["8,3 MB", "16,6 MB", "23,7 MB", "49,8 MB"], r: 2,
    e: "24 bits = 3 bytes; 8,3·10⁶ × 3 ≈ 24,9·10⁶ B, que son ≈ 23,7 MiB (÷1.024²)." },

  { p: "Grabar vídeo de forma continua a 10 Mbps durante una hora genera aproximadamente:",
    op: ["450 MB", "4.500 MB (4,5 GB)", "45 GB", "3.600 MB"], r: 1,
    e: "10 Mbps = 1,25 MB/s; multiplicando por 3.600 s se obtienen 4.500 MB ≈ 4,5 GB." },

  { p: "¿Cuánta memoria puede direccionar un bus de direcciones de 24 bits (direccionando por bytes)?",
    op: ["1 MB", "8 MB", "16 MB", "24 MB"], r: 2,
    e: "2²⁴ = 16.777.216 direcciones, es decir, 16 MB." },

  { p: "¿Cuál es el voltaje de funcionamiento típico de la memoria DDR4?",
    op: ["1,2 V", "1,5 V", "1,8 V", "2,5 V"], r: 0,
    e: "DDR4 trabaja a 1,2 V (DDR3 lo hacía a 1,5 V): menos voltaje implica menor consumo." },

  { p: "En la jerarquía de memoria, ¿qué elemento tiene menor latencia?",
    op: ["El disco HDD", "La RAM", "La caché L1", "Los registros de la CPU"], r: 3,
    e: "Los registros están dentro del procesador y se acceden en un ciclo: son los más rápidos." },

  { p: "Frente a SATA/AHCI, la interfaz NVMe se caracteriza por:",
    op: ["Usar PCIe y colas de comandos mucho más profundas", "Usar el mismo protocolo AHCI", "Ser incompatible con discos M.2", "Funcionar solo con discos mecánicos"], r: 0,
    e: "NVMe está diseñada para memoria flash sobre PCIe: reduce la latencia y permite muchas colas en paralelo." },

  { p: "Comparando un SSD SATA (550 MB/s) con un HDD (120 MB/s), el SSD es aproximadamente:",
    op: ["2 veces más rápido", "4,6 veces más rápido", "10 veces más rápido", "20 veces más rápido"], r: 1,
    e: "550 ÷ 120 ≈ 4,6. Frente a un NVMe (≈3.000 MB/s), la diferencia supera las 25 veces." },

  { p: "¿Cuántos bits como mínimo se necesitan para representar 1.000 valores distintos?",
    op: ["8 bits", "9 bits", "10 bits", "16 bits"], r: 2,
    e: "2⁹ = 512 no basta, pero 2¹⁰ = 1.024 sí: hacen falta 10 bits." }
);
