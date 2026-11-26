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

      { p: "¿Cuánto vale el número binario 11011001 en decimal?",
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
        e: "Dos módulos idénticos en los bancos del mismo color (uno por canal), que trabajan en paralelo." }
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
      explicacion: "También es más fiable (MTBF de millones de horas) pero no recuperable en laboratorio." },

    { q: "¿Qué función tiene el chipset de la placa base?",
      respuestas: ["coordina CPU, memoria y puertos", "alimenta los discos", "genera el sonido"],
      solucion: "El chipset (puertos norte y sur) coordina la CPU con la memoria, los puertos PCI/PCIe, SATA y USB de la placa.",
      nivel: "basico",
      explicacion: "Es el intermedio entre la CPU y el resto de componentes." },

    { q: "¿En qué se diferencia un ordenador de sobremesa de uno portátil?",
      respuestas: ["tamaño y potencia", "pantalla", "fuente de alimentación", "ambos"],
      solucion: "La diferencia principal es física: el portátil integra pantalla, teclado, batería y componentes en una carcasa compacta con menos potencia y autonomia, mientras la sobremesa permite más potencia y expansion.",
      nivel: "basico",
      explicacion: "En realidad se solapan: un portátil también admite teclado y ratón externos." },

    { q: "¿Qué es la memoria ROM y para qué sirve?",
      respuestas: ["almacenamiento no volatil de arranque", "memoria temporal", "registro de la CPU"],
      solucion: "La ROM (Read Only Memory) guarda datos que no se modifican, como el firmware de arranque de la placa base.",
      nivel: "basico",
      explicacion: "Junto con la RAM forma la jerarquía de memoria." },

    { q: "¿Qué son los buses PCI y PCIe y para qué sirven?",
      respuestas: ["expansion de tarjetas", "audio", "red"],
      solucion: "PCI y PCIe son buses de expansion que conectan tarjetas (graficas, red...) a la placa base.",
      nivel: "basico",
      explicacion: "PCIe es el evolucionado con mayor ancho de banda." },

    { q: "¿Qué función cumple el disipador y la ventilación?",
      respuestas: ["bajar la temperatura", "alimentar el procesador", "almacenar datos"],
      solucion: "El disipador (aire o agua) con ventiladores disipa el calor del procesador para que no se sobrecaliente.",
      nivel: "basico",
      explicacion: "Sin buena refrigeracion el procesador se reduce su frecuencia." },

    { q: "¿Qué es la fuente de alimentación ATX y qué produce?",
      respuestas: ["corriente continua de varios voltajes", "corriente alterna de 110 V", "senal de datos"],
      solucion: "La fuente convierte la corriente alterna de la red en corrientes continuas de varios voltajes (3,3 V, 5 V, 12 V) para los componentes.",
      nivel: "basico",
      explicacion: "Los conectores se etiquetan por los voltajes que entregan." },

    { q: "¿Qué son los puertos USB y qué versiones existen?",
      respuestas: ["conectores para perifericos", "2.0", "3.0", "3.2", "carga rapida"],
      solucion: "Los puertos USB (2.0, 3.0, 3.2) conectan perifericos como ratones, teclados, discos, impresoras o cargadores.",
      nivel: "basico",
      explicacion: "USB 3.x ofrece mas velocidad; USB-C unifica el conector y la carga." },

    { q: "¿Qué es la GPU y cómo se conecta al monitor?",
      respuestas: ["unidad grafica", "pcie", "pcie x16", "monitores externos"],
      solucion: "La GPU (tarjeta grafica) procesa las imagenes y se conecta al monitor mediante puertos como HDMI, DisplayPort o los ranuras PCIe x16 de la placa.",
      nivel: "basico",
      explicacion: "En los portatiles se integra en la CPU o se usa una tarjeta discreta." },

    { q: "¿Qué función tiene el micrófono como periférico de entrada?",
      respuestas: ["captar audio", "imprimir texto", "capturar pantalla"],
      solucion: "El micrófono captura sonido y lo convierte en senal digital que el ordenador procesa.",
      nivel: "basico",
      explicacion: "Se usa para voz, videollamadas o entrada de audio." },

    { q: "¿Qué es el escáner y qué captura?",
      respuestas: ["imprimir documentos", "imágenes", "texto"],
      solucion: "El escáner captura imagenes o texto de un documento o pantalla y las digitaliza en el ordenador.",
      nivel: "basico",
      explicacion: "Produce un archivo digital que se puede editar o guardar." },

    { q: "¿Qué es la impresora y qué tipos de impresión existen?",
      respuestas: ["dispositivo de salida", "impresion termica", "impresion por chorro", "laser"],
      solucion: "La impresora es un periférico de salida que transforma documentos digitales en papel mediante impresión por inyección de tinta o láser, o impresión térmica en tickets.",
      nivel: "basico",
      explicacion: "Imprime desde el software o el navegador. " },

    { q: "¿Qué función tiene la toma de tierra de la fuente de alimentación?",
      respuestas: ["proteger contra sobretensiones", "aumentar la potencia", "alimentar discos"],
      solucion: "La toma de tierra (pin de tierra de la fuente) protege el equipo frente a sobretensiones y cortocircuitos.",
      nivel: "basico",
      explicacion: "Sin ella un fallo eléctrico puede dañar componentes." },

    { q: "¿Qué es el altavoz y qué tipos de salida de sonido tiene?",
      respuestas: ["altavoz", "altavoz de auriculares", "altavoz no portátil"],
      solucion: "El altavoz reproduce audio; el tipo se distingue entre altavoz de auriculares, portátil y de estudio/salón.",
      nivel: "basico",
      explicacion: "Se conecta por jack de audio o USB. " },

    { q: "¿Qué es la pila CMOS y dónde se guarda?",
      respuestas: ["batería", "memoria volatile", "memoria permanente"],
      solucion: "La pila CMOS (o batería) guarda la configuración de la placa base (fecha, hora, BIOS) mientras el equipo está apagado.",
      nivel: "basico",
      explicacion: "Al fallar se pierde la configuración, pero no los datos del disco. " },

    { q: "¿Qué son los periféricos híbridos?",
      respuestas: ["teclado y ratón", "monitor y altavoz", "impresora y escáner"],
      solucion: "Un periférico híbrido combina dos funciones, como el teclado-ratón o el monitor-altavoz en algunos diseños, conectándose por un solo cable.",
      nivel: "basico",
      explicacion: "Sirve para ahorrar puertos y cables. " },

    { q: "¿Qué es un puerto paralelo y para qué servía?",
      respuestas: ["conectar impresoras", "conectar red", "alimentar CPU"],
      solucion: "El puerto paralelo (LPT) servía para conectar periféricos como la impresora o escáner a la placa base mediante una conexión de 25 pines.",
      nivel: "basico",
      explicacion: "Hoy se usa USB. " },

    { q: "¿Qué es un puerto serie y para qué servía?",
      respuestas: ["conectar ratones", "conectar impresoras", "conectar GPS o móviles"],
      solucion: "El puerto serie (COM) servía para conectar periféricos como ratones, escáneres o dispositivos industriales mediante un cable serial.",
      nivel: "basico",
      explicacion: "Hoy USB reemplaza a la mayoría. " },

    { q: "¿Qué es el teclado y qué conectividad tiene?",
      respuestas: ["entrada de texto", "ps2", "usb", "bluetooth"],
      solucion: "El teclado es un periférico de entrada que captura las teclas y las envía a la CPU; se conecta por PS/2, USB o Bluetooth.",
      nivel: "basico",
      explicacion: "La mayoría moderna usa USB. " },

    { q: "¿Qué es el ratón y qué conectividad tiene?",
      respuestas: ["entrada de puntería", "ps2", "usb", "inalambrico"],
      solucion: "El ratón captura la posición y los clics del puntero y se envía a la CPU por USB, Bluetooth o inalámbrico.",
      nivel: "basico",
      explicacion: "El receptor USB recibe los eventos del ratón. " },

    { q: "¿Qué es el monitor y qué tipos de panel tiene?",
      respuestas: ["salida de imagen", "tn", "ips", "va", "panel"],
      solucion: "El monitor es un periférico de salida que muestra la imagen; los paneles se clasifican en TN, IPS y VA según el tiempo de respuesta y los ángulos de visión.",
      nivel: "basico",
      explicacion: "El panel IPS es el más común en pantallas modernas por sus ángulos de visión. " },

    { q: "¿Qué es la webcam y qué captura?",
      respuestas: ["video", "audio", "video y audio"],
      solucion: "La webcam captura video y audio de la imagen/salida de una cámara para videollamadas o captura.",
      nivel: "basico",
      explicacion: "Se conecta por USB o WiFi. " },

    { q: "¿Qué es el cable RJ45 y qué función cumple?",
      respuestas: ["red", "audio", "video"],
      solucion: "El cable RJ45 es el conector físico del cable de red Ethernet; transporta señales de datos entre el PC y el router/switch.",
      nivel: "basico",
      explicacion: "Se distingue por la categoria (Cat5, Cat5e, Cat6) y el pinout. " },

    { q: "¿Qué es el cable VGA y para qué servía?",
      respuestas: ["salida de video", "audio", "red"],
      solucion: "El cable VGA (Video Graphics Array) era el estándar de salida de vídeo para monitor antes del HDMI/DisplayPort.",
      nivel: "basico",
      explicacion: "Se usaba con resoluciones de hasta 1920×1200. " },

    { q: "¿Qué es un puerto Thunderbolt y para qué se usa?",
      respuestas: ["alta velocidad", "audio", "video"],
      solucion: "El puerto Thunderbolt combina conector USB-C y alta velocidad (10 Gbps o más) y lleva video, datos y hasta energía.",
      nivel: "basico",
      explicacion: "Permite conectar varios dispositivos en un solo puerto. " },

    { q: "¿Qué es el lector de discos y qué función tiene?",
      respuestas: ["entrada de discos opticales", "salida de discos", "memoria flash"],
      solucion: "El lector de discos (CD/DVD) es un periférico de entrada que lee discos ópticos y los digitaliza.",
      nivel: "basico",
      explicacion: "Hoy se usa más para grabar o cargar software. " },

    { q: "¿Qué es la memoria virtual y cómo funciona el swapping?",
      respuestas: ["memoria en disco", "swap", "paginacion", "ram"],
      solucion: "La memoria virtual usa el disco duro como extension de la RAM: cuando no hay memoria libre se mueven paginas de memoria (swap) al disco.",
      nivel: "medio",
      explicacion: "El swapping penaliza mucho el rendimiento por el acceso al disco. " },

    { q: "¿Qué es la paginación y cómo funciona?",
      respuestas: ["division en bloques", "paginas", "memoria virtual", "swap"],
      solucion: "La paginacion divide la memoria en bloques (paginas) de tamano fijo; el sistema sabe que pagina esta en memoria y cual esta en disco.",
      nivel: "medio",
      explicacion: "Permite que el proceso no necesite toda la RAM de golpe. " },

    { q: "¿Qué son los niveles de privilegio del procesador y qué hace el modo kernel?",
      respuestas: ["modo usuario", "modo kernel", "privilegio", "sistema operativo"],
      solucion: "El procesador trabaja en dos modos: modo usuario (aplicaciones) y modo kernel (sistema operativo); el modo kernel tiene privilegios totales.",
      nivel: "medio",
      explicacion: "Los sistemas operativos usan esta separacion para la seguridad. " },

    { q: "¿Qué es el controlador SATA y qué ventajas tiene frente al IDE?",
      respuestas: ["interfaz para discos", "ahci", "pata", "dma"],
      solucion: "SATA es la interfaz de discos duros que reemplaza al IDE/PATA, con mayor ancho de banda y cableado mas corto.",
      nivel: "medio",
      explicacion: "Se usa el controlador AHCI para comunicarse. " },

    { q: "¿Qué es el controlador AHCI y qué hace?",
      respuestas: ["interfaz SATA", "ahci", "dma", "ncq"],
      solucion: "AHCI (Advanced Host Controller Interface) es el controlador que gestiona los discos SATA en el host y permite hot-swap.",
      nivel: "medio",
      explicacion: "Si se usa IDE el controlador es IDE. " },

    { q: "¿Cómo se dimensiona la RAM para un PC de 8 GB?",
      respuestas: ["8 GB", "4 GB", "16 GB", "depende del sistema operativo"],
      solucion: "Un PC de 8 GB lleva 8 GB de RAM, de los cuales el sistema operativo reserva ~2-4 GB para si; con sistemas operativos modernos se recomiendan 8 GB como minimo.",
      nivel: "medio",
      explicacion: "Se dimensiona segun el sistema operativo y las aplicaciones. " },

    { q: "¿Qué es el bus PCI Express x16 y qué velocidad tiene?",
      respuestas: ["16 carriles", "pcie 2.0", "pcie 3.0", "pcie 4.0", "grafica"],
      solucion: "El bus PCIe x16 es el slot para tarjetas graficas; versiones como PCIe 3.0 ofrecen ~8 GB/s bidireccionales.",
      nivel: "medio",
      explicacion: "A mayor generacion, mas ancho de banda. " },

    { q: "¿Qué es el bus USB 3.0 y qué velocidad ofrece?",
      respuestas: ["5 Gbps", "480 Mbps", "20 Gbps", "usb-c"],
      solucion: "USB 3.0 ofrece hasta 5 Gbps (USB 2.0: 480 Mbps); USB 3.2 sube a 20 Gbps con USB-C.",
      nivel: "medio",
      explicacion: "Para discos externos y videojuegos se usa USB 3.x. " },

    { q: "¿Qué es el microcontrolador y como se diferencia del microprocesador?",
      respuestas: ["chip con cpu y memoria", "chip con cpu y perifericos integrados", "solo cpu"],
      solucion: "El microcontrolador integra CPU, memoria y periféricos en un solo chip para tareas concretas; el microprocesador es una CPU generalista dentro de un chipset.",
      nivel: "medio",
      explicacion: "Se usa en electronica de consumo, no en PCs de sobremesa. " },

    { q: "¿Qué es el controlador IDE y qué son master y slave?",
      respuestas: ["disco duro", "master", "slave", "primaria", "secundaria"],
      solucion: "El controlador IDE gestiona discos ATA; los dispositivos se configuran como master y esclavo (o primary/secondary en las versiones antiguas).",
      nivel: "medio",
      explicacion: "IDE fue sustituido por SATA. " },

    { q: "¿Qué es la arquitectura de Von Neumann y qué implica?",
      respuestas: ["cpu memoria i o compartidos", "cpu separada", "memoria separada"],
      solucion: "Von Neumann comparte unidad de procesamiento, memoria e I/O mediante un bus comun; Harvard separa memoria de instrucciones y datos.",
      nivel: "medio",
      explicacion: "Es la base de la mayoria de los procesadores actuales. " },

    { q: "¿Qué son los buffers (búferes) y qué función tienen en el almacenamiento?",
      respuestas: ["memoria temporal de datos", "memoria de cache", "registro"],
      solucion: "Un buffer es una memoria temporal donde se almacenan datos mientras se transfieren entre dispositivos de distinta velocidad.",
      nivel: "medio",
      explicacion: "Se usa entre CPU/RAM y disco o red. " },

    { q: "¿Qué es la memoria flash UFS y para qué sirve?",
      respuestas: ["memoria flash", "android", "celular", "almacenamiento"],
      solucion: "UFS (Universal Flash Storage) es una memoria flash de alta velocidad usada en moviles para almacenamiento rapido.",
      nivel: "medio",
      explicacion: "Es la evolución del eMMC. " },

    { q: "¿Qué es el controlador de interrupciones (APIC) y para qué sirve?",
      respuestas: ["interrupciones", "cpu", "dispositivos"],
      solucion: "El APIC distribuye las interrupciones de los dispositivos entre los nucleos de la CPU.",
      nivel: "medio",
      explicacion: "Permite que los perifericos pidan atencion al procesador. " },

    { q: "¿Qué es la caché de nivel 3 y cómo funciona?",
      respuestas: ["memoria cache cpu", "l3", "ram", "disco"],
      solucion: "La caché L3 es la memoria caché integrada en el procesador que almacena datos y sirve a todos los núcleos.",
      nivel: "medio",
      explicacion: "Complementa a la caché L1 y L2 de cada núcleo. " },

    { q: "¿Qué es la virtualización de E/S (IOMMU) y para qué sirve?",
      respuestas: ["iommu", "passthrough", "dma"],
      solucion: "La IOMMU traduce las direcciones virtuales de las máquinas virtuales al hardware físico (passthrough) para acelerar las transferencias de E/S.",
      nivel: "medio",
      explicacion: "Se usa en virtualización para acceso directo de dispositivos. " },

    { q: "¿Qué es el northbridge y qué función tenía?",
      respuestas: ["chipset norte", "ram", "gpu"],
      solucion: "El northbridge era el chipset que gestionaba memoria y gráfica; hoy se integra en el SoC.",
      nivel: "medio",
      explicacion: "Antes de los diseños integrados. " },

    { q: "¿Qué es el southbridge y qué función tenía?",
      respuestas: ["chipset sur", "puertos", "sata"],
      solucion: "El southbridge gestionaba los puertos de entrada/salida y dispositivos de baja velocidad; hoy se integra en el SoC.",
      nivel: "medio",
      explicacion: "Antes de los diseños integrados. " },

    { q: "¿Qué es la unidad de gestión de energía (P-states) y qué hace?",
      respuestas: ["frecuencia", "consumo", "cpu"],
      solucion: "Los P-states son estados de energía del procesador que ajustan frecuencia y voltaje según la carga.",
      nivel: "medio",
      explicacion: "Se gestionan desde el firmware y el sistema operativo. " },

    { q: "¿Qué es el bus HyperTransport y para qué servía?",
      respuestas: ["interconexion amd", "pcie", "cpu"],
      solucion: "HyperTransport era el bus de alta velocidad de AMD para conectar CPU y memoria en arquitecturas anteriores.",
      nivel: "medio",
      explicacion: "Hoy se usa PCIe para esas conexiones. " },

    { q: "¿Qué es el bus AGP y para qué servía?",
      respuestas: ["grafica", "agp", "pcie"],
      solucion: "AGP (Accelerated Graphics Port) era el bus dedicado a tarjetas gráficas antes del PCIe.",
      nivel: "medio",
      explicacion: "Hoy sustituido por PCIe. " },

    { q: "¿Qué es el bus PCI Express y qué velocidad tiene?",
      respuestas: ["pcie", "2.5", "3.0", "4.0", "8 gb/s"],
      solucion: "PCIe (Peripheral Component Interconnect Express) es un bus serie de alta velocidad para conectar periféricos como tarjetas gráficas y discos.",
      nivel: "medio",
      explicacion: "Las versiones van de 2.5 a 5 GT/s por carril. " },

    { q: "¿Qué es el bus ISA y para qué servía?",
      respuestas: ["expansion", "pc i", "8 bits"],
      solucion: "ISA (Industry Standard Architecture) era un bus de expansion de 8 o 16 bits de los anos 80.",
      nivel: "medio",
      explicacion: "Sustituido por PCI. " },

    { q: "¿Qué es la tecnología EDO RAM y en qué se diferencia de la DRAM?",
      respuestas: ["edo", "dram", "memoria"],
      solucion: "EDO RAM amplía la DRAM permitiendo que una pagina de memoria se reutilice antes de cerrarla, mejorando el rendimiento.",
      nivel: "medio",
      explicacion: "Fue una mejora intermedia antes de SDRAM. " },

    { q: "¿Qué es la tecnología de doble canal de memoria?",
      respuestas: ["dos canales", "ram", "diseno"],
      solucion: "El doble canal usa dos bus de memoria para leer o escribir dos datos en paralelo, duplicando el ancho de banda.",
      nivel: "medio",
      explicacion: "Es el esta-ndar en PCs modernos. " },

    { q: "¿Qué es la memoria RAM DDR5 y qué novedades trae frente a la DDR4?",
      respuestas: ["ddr5", "5120", "6000", "memoria"],
      solucion: "La DDR5 duplica el ancho de banda respecto a la DDR4 (bus de 16n frente a 8n) y sube la frecuencia base a 4800 MT/s.",
      nivel: "medio",
      explicacion: "La DDR5 usa doble canal interno y mejoras de voltaje y latencia. " },

    { q: "¿Qué es la tecnología overclocking y qué riesgos conlleva?",
      respuestas: ["aumentar frecuencia", "riesgo sobrecalentamiento", "garantia", "estabilidad"],
      solucion: "El overclocking aumenta la frecuencia del procesador o la GPU para ganar rendimiento, pero puede causar sobrecalentamiento y anular la garantia.",
      nivel: "avanzado",
      explicacion: "Requiere buena refrigeracion y pruebas de estabilidad. " },

    { q: "¿Qué es la tecnología turbo boost y como funciona?",
      respuestas: ["frecuencia dinamica", "cpu", "algoritmo"],
      solucion: "El Turbo Boost sube la frecuencia del nucleo cuando quedan nucleos libres y la temperatura lo permite.",
      nivel: "avanzado",
      explicacion: "Es automatico y depende de la carga. " },

    { q: "¿Que es el power delivery y por que una fuente de 650 W puede dar mas?",
      respuestas: ["capacidad maxima", "vatios", "picos"],
      solucion: "Las fuentes dan potencia nominal; las capacidades superiores permiten picos de consumo sin que el sistema se caiga.",
      nivel: "avanzado",
      explicacion: "La regla del factor de forma indica que se debe dar un 20-30% mas de potencia de la carga estimada. " },

    { q: "¿Que es la tecnologia de virtualizacion VT-x o AMD-V y para que sirve?",
      respuestas: ["aislamiento de VM", "virtualizacion", "extensions"],
      solucion: "VT-x/AMD-V son extensiones de virtualizacion que permiten ejecutar varias VMs al mismo tiempo de forma eficiente.",
      nivel: "avanzado",
      explicacion: "Se habilitan en BIOS/UEFI. " },

    { q: "¿Que es la coherencia de cache y que hace la coherencia entre caches?",
      respuestas: ["sincronizacion", "cpus", "memoria"],
      solucion: "La coherencia de cache asegura que los niveles de cache de varios nucleos no tengan datos inconsistentes.",
      nivel: "avanzado",
      explicacion: "Es clave en multicore. " },

    { q: "¿Que es el NUMA y por que afecta al rendimiento?",
      respuestas: ["memoria no uniforme", "nodos", "cpu"],
      solucion: "NUMA (Non Uniform Memory Access) distribuye la memoria entre nodos de CPU con distinta latencia; hay que acceder a la memoria local cuando sea posible.",
      nivel: "avanzado",
      explicacion: "Importante en servidores y multicore. " },

    { q: "¿Que es el bus EPS y por que se le llama EPS?",
      respuestas: ["12V", "eps", "pcie"],
      solucion: "El bus EPS entrega corriente de 12 V para la CPU y la grafica en fases separadas, para picos de consumo.",
      nivel: "avanzado",
      explicacion: "Distinto del ATX de 24 pines que agrupa varios voltajes. " },

    { q: "¿Que es el error correcto (ECC) de memoria y para que sirve?",
      respuestas: ["correccion de bit", "error de memoria", "parity"],
      solucion: "ECC (Error Correcting Code) detecta y corrige errores de paridad en la memoria, usado en servidores.",
      nivel: "avanzado",
      explicacion: "No se usa en PCs domesticos. " },

    { q: "¿Que es la DMA y para que sirve en un PC?",
      respuestas: ["transferencia directa memoria-ahora", "dma", "disco"],
      solucion: "La DMA permite que un dispositivo (disco, red) acceda a la memoria sin interrumpir a la CPU en cada byte.",
      nivel: "avanzado",
      explicacion: "Acelera transferencias. " },

    { q: "¿Que es el prefetch y como mejora el rendimiento?",
      respuestas: ["pre-carga", "cpu", "memoria"],
      solucion: "El prefetch anticipa accesos a memoria y los coloca en cache para reducir la latencia.",
      nivel: "avanzado",
      explicacion: "Optimizacion del hardware. " },

    { q: "¿Que es el bus QPI y para que sirve?",
      respuestas: ["interconexion multi-núcleo", "intel", "12 V"],
      solucion: "El bus QPI (Quick Path Interconnect) es la interconexión de alta velocidad entre CPU y memoria en arquitecturas Intel multiprocesador.",
      nivel: "avanzado",
      explicacion: "Permite compartir memoria entre núcleos. " },

    { q: "¿Que es la arquitectura x86 y por qué se llama CISC?",
      respuestas: ["instrucciones complejas", "cisc", "risc", "pci"],
      solucion: "La arquitectura x86 es CISC (Complex Instruction Set Computer): el procesador ejecuta instrucciones complejas de varios pasos.",
      nivel: "avanzado",
      explicacion: "La alternativa RISC simplifica instrucciones. " },

    { q: "¿Que es la tecnología SpeedShift y cómo actúa?",
      respuestas: ["frecuencia", "pwr", "cpu"],
      solucion: "SpeedShift sube/baja la frecuencia del procesador de forma muy rápida desde el firmware, sin pasar por el sistema operativo.",
      nivel: "avanzado",
      explicacion: "Optimización de la gestión de energía. " },

    { q: "¿Qué es la tecnología Intel Hyper-Threading?",
      respuestas: ["hilos", "núcleos", "cpu"],
      solucion: "Hyper-Threading permite que un núcleo físico comparta su pipeline con un hilo virtual, duplicando la capacidad de ejecución.",
      nivel: "avanzado",
      explicacion: "La CPU reporta más hilos que núcleos. " },

    { q: "¿Qué es el controlador de memoria (MC) y qué función tiene?",
      respuestas: ["controlador de memoria", "dram", "northbridge"],
      solucion: "El controlador de memoria gestiona la comunicación entre CPU, RAM y unidad gráfica.",
      nivel: "avanzado",
      explicacion: "Integra funciones que antes estaban en el chipset. " },

    { q: "¿Qué es la tecnología big.LITTLE y cómo funciona?",
      respuestas: ["core grande pequeno", "big.little", "arm", "cpu"],
      solucion: "big.LITTLE combina un núcleo grande (performance) con varios núcleos pequeños (eficiencia) en un mismo SoC.",
      nivel: "avanzado",
      explicacion: "El sistema operativo mueve tareas entre núcleos segun su demanda. " },

    { q: "¿Qué es la tecnología Intel Optane y para qué sirve?",
      respuestas: ["memoria", "optane", "persistencia"],
      solucion: "Intel Optane es una memoria de estado sólido que actúa como extensión de la RAM con latencia menor que la DRAM.",
      nivel: "avanzado",
      explicacion: "Se usa como memoria cache o memoria de datos. " },

    { q: "¿Qué es la tabla de localización (TLB) y qué función tiene?",
      respuestas: ["mmu", "cache", "virtual"],
      solucion: "La TLB traduce direcciones virtuales a físicas y se cachea para acelerar la traducción en memoria virtual.",
      nivel: "avanzado",
      explicacion: "Sin TLB la traducción sería mucho más lenta. " },

    { q: "¿Qué es el little endian y en qué se diferencia del big endian?",
      respuestas: ["bit menos significativo", "bit mas significativo", "endian"],
      solucion: "El little endian almacena los bytes del número empezando por el byte menos significativo; el big endian el primero (mas significativo).",
      nivel: "avanzado",
      explicacion: "Cambia el orden de los bytes en la memoria. " },

    { q: "¿Qué es la tecnología Intel SGX y para qué sirve?",
      respuestas: ["seguridad", "sandbox", "cpu"],
      solucion: "Intel SGX crea cajas de seguridad (enclaves) en la CPU para proteger datos sensibles de otras aplicaciones.",
      nivel: "avanzado",
      explicacion: "Aísla el código y los datos en memoria. " },

    { q: "¿Qué es la tecnología AMD EXPO y en qué se diferencia del Precision Boost?",
      respuestas: ["expo", "precision boost", "amd", "frecuencia"],
      solucion: "AMD EXPO permite un voltaje y frecuencia más altos de forma estable que Precision Boost, para overclocking controlado.",
      nivel: "avanzado",
      explicacion: "Ajusta voltaje y frecuencia de forma estable. " },

    { q: "¿Qué es el Infinity Fabric y para qué sirve?",
      respuestas: ["amd", "interconexion", "chiplets"],
      solucion: "El Infinity Fabric es el bus de interconexión de AMD entre CPU, memoria y otros chiplets.",
      nivel: "avanzado",
      explicacion: "Define el ancho de banda en multicore AMD. " },

    { q: "¿Qué es la corrección de errores de memoria ECC y para qué sirve?",
      respuestas: ["ecc", "ram", "paridad"],
      solucion: "ECC (Error Correcting Code) detecta y corrige errores de paridad en la memoria, usado en servidores.",
      nivel: "avanzado",
      explicacion: "No se usa en PCs domésticos. " },

    { q: "¿Qué es la tecnología CXL y para qué sirve?",
      respuestas: ["cxl", "memoria", "pcie"],
      solucion: "CXL (Compute Express Link) es una nueva interfaz que permite compartir memoria entre CPU y aceleradores o entre máquinas.",
      nivel: "avanzado",
      explicacion: "Nueva tecnología para memoria pool. " },

    { q: "¿Qué es una tarjeta de memoria SD y dónde se utiliza?",
      respuestas: ["tarjeta de memoria", "almacenamiento", "camaras", "moviles", "flash"],
      solucion: "La tarjeta SD (Secure Digital) es un dispositivo de almacenamiento flash extraíble que se usa en cámaras, móviles, tablets y otros dispositivos portátiles.",
      nivel: "basico",
      explicacion: "Se clasifica por capacidad (SD, SDHC, SDXC) y por clase de velocidad de escritura." },

    { q: "¿Qué es el bus PCIe 5.0 y qué ancho de banda ofrece por carril?",
      respuestas: ["32 gt/s", "8 gb/s", "pcie 5", "carril"],
      solucion: "PCIe 5.0 duplica la tasa de la generación anterior hasta 32 GT/s por carril, es decir, unos 8 GB/s en cada dirección por carril (≈128 GB/s en x16).",
      nivel: "avanzado",
      explicacion: "Cada nueva generación de PCIe duplica el ancho de banda manteniendo la compatibilidad con las anteriores." },

    { q: "¿Qué diferencia hay entre memoria gráfica dedicada y memoria compartida (UMA)?",
      respuestas: ["dedicada", "compartida", "ram", "gddr", "integrada"],
      solucion: "La memoria dedicada (GDDR) va soldada en la tarjeta gráfica y es exclusiva para ella; la memoria compartida (UMA) usa una parte de la RAM del sistema reservada para la GPU integrada.",
      nivel: "avanzado",
      explicacion: "La memoria dedicada es mucho más rápida, mientras que la compartida abarata el equipo pero penaliza el rendimiento y consume RAM." }
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
    e: "550 ÷ 120 ≈ 4,6. Frente a un NVMe (≈3.000 MB/s), la diferencia ronda las 25 veces." },

  { p: "¿Cuántos bits como mínimo se necesitan para representar 1.000 valores distintos?",
    op: ["8 bits", "9 bits", "10 bits", "16 bits"], r: 2,
    e: "2⁹ = 512 no basta, pero 2¹⁰ = 1.024 sí: hacen falta 10 bits." }
);
