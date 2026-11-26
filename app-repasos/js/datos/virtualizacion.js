/* =========================================================
   datos/virtualizacion.js
   Preguntas del tema MÁQUINAS VIRTUALES / VIRTUALIZACIÓN
   ========================================================= */

window.DATOS = window.DATOS || {};

DATOS.virtualizacion = {
  nombre: "Máquinas Virtuales",

  test: {
    basico: [
      { p: "La virtualización permite:",
        op: ["Usar el hardware de un equipo para ejecutar varios entornos operativos a la vez",
              "Aumentar la velocidad de la CPU",
              "Evitar la instalación de sistemas operativos",
              "Sustituir al sistema anfitrión"], r: 0,
        e: "Se ejecutan de forma simultánea, segura y aislada sobre el mismo hardware físico." },

      { p: "El equipo físico real sobre el que se ejecutan las máquinas virtuales se llama:",
        op: ["Guest", "Host (sistema anfitrión)", "Servidor", "Hipervisor"], r: 1,
        e: "Host = anfitrión (el PC real); Guest = invitado (el SO dentro de la MV)." },

      { p: "El sistema operativo que se instala dentro de una máquina virtual se denomina:",
        op: ["Sistema anfitrión", "Sistema invitado (guest)", "Sistema de arranque", "Sistema BIOS"], r: 1,
        e: "Guest es el SO que corre dentro de la MV; el del PC real es el host." },

      { p: "Una Máquina Virtual (MV) es:",
        op: ["Un ordenador emulado mediante software",
              "Un segundo ordenador físico conectado",
              "Un tipo de monitor",
              "Una memoria RAM especial"], r: 0,
        e: "Arranca con su propia BIOS/UEFI, tiene componentes virtuales y ejecuta su propio SO completo." },

      { p: "¿Qué ventaja ofrece el aislamiento de una máquina virtual?",
        op: ["Acelera el disco del host",
              "Un fallo o virus dentro de la MV no afecta al equipo real",
              "Permite usar una sola licencia para todo",
              "Evita tener que instalar el SO invitado"], r: 1,
        e: "Ese es el gran valor de la virtualización: pruebas destructivas sin riesgo para el host." },

      { p: "Oracle VM VirtualBox es un programa de tipo:",
        op: ["Hipervisor", "Antivirus", "Controlador de dispositivos", "Sistema de archivos"], r: 0,
        e: "VirtualBox es un hipervisor (también llamado monitor de máquinas virtuales o VMM)." },

      { p: "La imagen de instalación de un sistema operativo que se «inserta» en la MV es un archivo:",
        op: [".iso", ".txt", ".exe de Windows", ".jpg"], r: 0,
        e: "La unidad óptica virtual lee imágenes .iso, como si fueran discos físicos." },

      { p: "El archivo que hace de disco duro dentro de VirtualBox suele tener la extensión:",
        op: [".iso", ".vdi", ".docx", ".png"], r: 1,
        e: "VDI = VirtualBox Disk Image; en reserva dinámica solo ocupa lo que el SO va usando." },

      { p: "La descarga oficial de VirtualBox debe hacerse desde:",
        op: ["Cualquier web de descargas", "https://www.virtualbox.org", "La web de Microsoft", "Una tienda de apps"], r: 1,
        e: "Siempre desde la web oficial del proyecto, menú Downloads." },

      { p: "El complemento Extension Pack de VirtualBox es:",
        op: ["Un antivirus para la MV",
              "Un complemento con USB 2.0/3.0, cifrado del disco y captura de cámaras",
              "Un paquete de idiomas",
              "Un disco operativo extra"], r: 1,
        e: "Es idéntico para todos los sistemas operativos y se instala con doble clic." },

      { p: "Para que una MV funcione con velocidad, la CPU del PC debe tener activadas las extensiones:",
        op: ["Intel VT-x o AMD-V", "Hyper-V siempre", "NVIDIA CUDA", "Bluetooth"], r: 0,
        e: "Son las instrucciones de virtualización del microprocesador." },

      { p: "¿Cuántos vCPUs se recomienda asignar a una MV para que fluya sin saturar el PC?",
        op: ["1", "2", "8", "Todos los núcleos"], r: 1,
        e: "Se recomiendan 2 vCPUs: suficiente fluidez sin saturar el procesador real." },

      { p: "Una máquina virtual se apaga correctamente desde:",
        op: ["Desconectar el cable de la MV", "Inicio > Apagar del SO invitado", "Apagando el host directamente", "Quitando la pila del PC"], r: 1,
        e: "Apaga siempre el invitado y cierra VirtualBox antes de desconectar cualquier cosa." },

      { p: "El disco virtual que está en reserva dinámica:",
        op: ["Ocupa siempre el tamaño máximo desde el principio",
              "Solo ocupa en el disco real los GB que el SO va usando",
              "No se puede ampliar jamás",
              "Debe estar en FAT32"], r: 1,
        e: "Por eso crece a medida que instalamos cosas dentro del invitado." }
    ],

    medio: [
      { p: "VirtualBox es un hipervisor de tipo:",
        op: ["Tipo 1 (bare metal)", "Tipo 2 (alojado)", "Tipo 3", "Tipo 0"], r: 1,
        e: "Tipo 2 = se instala como un programa ordinario dentro del SO del ordenador." },

      { p: "Un hipervisor de tipo 1 se instala:",
        op: ["Directamente sobre el hardware, sin SO previo",
              "Dentro de Windows como cualquier aplicación",
              "Solo en móviles",
              "Junto al Extension Pack"], r: 0,
        e: "VirtualBox es tipo 2 (alojado); los hipervisores tipo 1 van sobre el hardware desnudo." },

      { p: "El Extension Pack aporta, entre otras funciones:",
        op: ["Cifrado del disco virtual y USB 2.0/3.0",
              "Un segundo procesador virtual",
              "El sistema operativo invitado",
              "La licencia de Windows"], r: 0,
        e: "También permite captura de cámaras web integradas." },

      { p: "Si al iniciar la MV aparece un error de «VT-x/AMD-V no disponible», hay que:",
        op: ["Reinstalar Windows", "Habilitar la virtualización en la BIOS/UEFI", "Comprar más RAM", "Desactivar el antivirus"], r: 1,
        e: "Reinicia, entra a la BIOS (F2, F10, F12 o Supr) y activa Intel VT-x o SVM Mode; guarda con F10." },

      { p: "En procesadores AMD, la opción que hay que habilitar en la BIOS es:",
        op: ["Intel VT-x", "SVM Mode", "Hyper-V Core", "Turbo Boost"], r: 1,
        e: "En Intel es Intel Virtualization Technology; en AMD es SVM Mode." },

      { p: "Para guardar las máquinas virtuales en un disco externo, el formato de archivo recomendado es:",
        op: ["FAT32", "exFAT o NTFS", "ext4", "ISO"], r: 1,
        e: "Nunca FAT32: no admite ficheros de más de 4 GB y el disco virtual fallaría." },

      { p: "¿Por qué no se debe usar FAT32 para el disco de las máquinas virtuales?",
        op: ["Porque no permite ficheros de más de 4 GB",
              "Porque va demasiado lento",
              "Porque solo funciona en Linux",
              "Porque no admite carpetas"], r: 0,
        e: "El .vdi supera con facilidad los 4 GB y FAT32 lo rechazaría." },

      { p: "En VirtualBox, la carpeta predeterminada de máquinas se cambia en:",
        op: ["Archivo > Preferencias > General", "Máquina > Programador", "Ayuda > Acerca de", "Sistema > Red"], r: 0,
        e: "En el apartado «Carpeta predeterminada de máquinas» (Default Machine Folder) se elige la ruta externa." },

      { p: "¿Cuánto puede ocupar un sistema virtual completo como Windows 10 u Ubuntu?",
        op: ["Entre 15 GB y 50 GB", "Entre 500 MB y 1 GB", "Solo 100 MB", "Nunca más de 5 GB"], r: 0,
        e: "Por eso conviene poder mover las MV a un disco externo o SSD rápido." },

      { p: "El modo de red que permite conectar la MV a Internet traduciendo direcciones es:",
        op: ["NAT", "Red interna", "Solo host-only", "Disco"], r: 0,
        e: "NAT da salida a Internet; el Adaptador Puente usa la red física y la Red Interna aísla equipos." },

      { p: "El modo «Adaptador Puente» de la tarjeta de red virtual:",
        op: ["Aísla la MV del resto", "Conecta la MV a la red física como si fuera un equipo más",
              "Bloquea Internet", "Crea una red virtual interna"], r: 1,
        e: "La MV obtiene IP de la red real, igual que el host." },

      { p: "En macOS, si VirtualBox no carga por seguridad, hay que ir a:",
        op: ["Ajustes del Sistema > Privacidad y Seguridad > Permitir",
              "Finder > Programas", "Terminal > sudo", "App Store"], r: 0,
        e: "Hay que permitir la carga de los controladores de Oracle America, Inc." },

      { p: "En macOS con procesadores Apple Silicon (M1-M4), el instalador de VirtualBox es:",
        op: ["VirtualBox-x.x.x-Win.exe", "VirtualBox-x.x-x-OSX.dmg con paquete .pkg", "Un .iso", "Un .exe de 64 bits"], r: 1,
        e: "Se abre el .dmg y a continuación el paquete .pkg." },

      { p: "La regla de oro para los discos externos con MV es:",
        op: ["Desconectar el USB cuando la MV esté encendida",
              "Nunca desconectar el USB con la MV en ejecución o pausada",
              "Usar siempre FAT32", "Formatear el disco cada semana"], r: 1,
        e: "Apaga el invitado, cierra VirtualBox y luego expulsa la unidad." },

      { p: "El componente físico «Tarjeta de red» se emula en VirtualBox como:",
        op: ["vCPU", "Adaptador de red virtual", "Unidad óptica", "Memoria base"], r: 1,
        e: "Permite NAT, puente o red interna." }
    ],

    avanzado: [
      { p: "La memoria base asignada a una MV nunca debe superar:",
        op: ["El 100% de la RAM", "La franja verde del 50% de la RAM", "El 10% de la RAM", "4 GB en ningún caso"], r: 1,
        e: "Superarlo satura al host y el equipo empieza a usar el disco como memoria virtual." },

      { p: "¿Qué papel desempeña el hipervisor respecto a los recursos reales?",
        op: ["Los reparte entre el sistema anfitrión y las máquinas virtuales",
              "Los aumenta artificialmente",
              "Los bloquea para el host",
              "Los asigna solo al invitado"], r: 0,
        e: "El hipervisor (VMM) coordina y reparte CPU, RAM y discos entre host y MVs." },

      { p: "Una MV arranca con:",
        op: ["La BIOS del host directamente",
              "Su propia BIOS/UEFI y componentes virtuales parametrizables",
              "El gestor de arranque GRUB del host",
              "Nada: siempre arranca en red"], r: 1,
        e: "Funciona exactamente como un ordenador real, pero emulado por software." },

      { p: "Si asignas 4 vCPUs a una MV en un PC con 4 hilos, lo más probable es:",
        op: ["La MV funcione mejor siempre", "El host se sature y todo vaya lento",
              "La MV no pueda arrancar", "Se duplique la RAM"], r: 1,
        e: "Por eso se recomiendan 2 vCPUs: no saturar el procesador real." },

      { p: "El disco en «reserva dinámica» (dynamic) frente a «reserva fija» (fixed):",
        op: ["La dinámica ocupa solo lo usado y crece al instalar; la fija reserva todo de inicio",
              "La fija crece según se use",
              "Ambas ocupan igual siempre",
              "La dinámica no se puede ampliar"], r: 0,
        e: "La fija es algo más rápida; la dinámica gana espacio en el host." },

      { p: "El orden correcto para extraer un disco externo donde viven las MV es:",
        op: ["Apagar el SO invitado → cerrar VirtualBox → expulsar la unidad",
              "Desconectar el USB directamente",
              "Pausar la MV y desconectar",
              "Cerrar solo la ventana del navegador"], r: 0,
        e: "Nunca con la MV en ejecución o pausada: se corrompería el .vdi." },

      { p: "¿Por qué la virtualización garantiza que un virus dentro de la MV no dañe el PC?",
        op: ["Porque la MV no tiene acceso a ningún recurso",
              "Porque el aislamiento impide que el software invitado acceda a los archivos del host",
              "Porque VirtualBox es un antivirus",
              "Porque el SO invitado no puede ejecutar código"], r: 1,
        e: "Ejecuta su propio SO completo pero solo ve los recursos que el hipervisor le asigna." },

      { p: "En la BIOS/UEFI, la tecla de acceso habitual para entrar no es siempre la misma. ¿Cuáles se citan?",
        op: ["F1, F2 y F3", "F2, F10, F12 o Supr", "Solo F12", "Ctrl + Alt + Supr"], r: 1,
        e: "Depende del fabricante; tras activar la virtualización se guarda con F10." },

      { p: "El par de opciones a instalar obligatoriamente desde la web oficial es:",
        op: ["El instalador base (.exe o .dmg) y el Extension Pack",
              "VirtualBox y Windows",
              "El Extension Pack y un antivirus",
              "El SO invitado y el host"], r: 0,
        e: "Dos ficheros: el hipervisor para tu SO y el complemento «All supported platforms»." },

      { p: "Si cambias la carpeta predeterminada de máquinas a una unidad externa, a partir de ese momento:",
        op: ["Se guardarán allí únicamente los archivos .iso, no los discos .vdi",
              "Los discos .vdi de las MV nuevas y de los clones se crearán en la unidad externa",
              "Se mueven automáticamente las MV antiguas",
              "Deja de funcionar el disco del host"], r: 1,
        e: "El cambio afecta solo a las MV que se creen desde entonces; las ya existentes hay que moverlas o clonarlas manualmente a la nueva ruta." },

      { p: "Una «Red Interna» (Internal Network) en VirtualBox sirve para:",
        op: ["Aislar varias MV entre sí sin salir al exterior",
              "Conectar a Internet directamente",
              "Compartir el escritorio del host",
              "Montar el ISO"], r: 0,
        e: "Útil para prácticas: solo se comunican las MVs de esa red interna." },

      { p: "¿Cuál es la diferencia entre el Extension Pack y las Guest Additions de VirtualBox?",
        op: ["El Extension Pack se instala en el host (en el programa VirtualBox) y las Guest Additions dentro del SO invitado",
              "Ambos se instalan dentro del sistema operativo invitado",
              "Ambos se instalan en el sistema anfitrión",
              "El Extension Pack se instala en el invitado y las Guest Additions en el host"], r: 0,
        e: "El Extension Pack amplía el hipervisor (USB 2.0/3.0, cifrado, cámara); las Guest Additions son controladores y utilidades para el invitado (ratón, vídeo, portapapeles, carpetas compartidas)." },

      { p: "El hipervisor de tipo 2 se apoya en:",
        op: ["Las extensiones de virtualización del micro (Intel VT-x / AMD-V)",
              "En la memoria ROM",
              "En el Extension Pack",
              "En la tarjeta gráfica exclusivamente"], r: 0,
        e: "Gracias a eso ejecuta el código del invitado a gran velocidad." },

      { p: "Al clonar o crear MVs en una ruta externa, los ficheros pesados que se generan son:",
        op: ["Ficheros .vdi", "Ficheros .txt", "Ficheros .lnk", "Ficheros .dll del host"], r: 0,
        e: "Todos los .vdi ocupan el espacio de la unidad externa, no del portátil." }
    ]
  },

  abiertas: [
    { q: "¿Qué es la virtualización y qué es una máquina virtual?",
      respuestas: ["hardware para ejecutar multiples entornos", "ordenador emulado", "software", "simultanea", "aislada"],
      solucion: "La virtualización usa el hardware de un equipo para ejecutar varios entornos operativos de forma simultánea, segura y aislada. Una MV es un ordenador emulado por software: arranca con su propia BIOS/UEFI y ejecuta su propio SO completo.",
      nivel: "basico",
      explicacion: "También se le llama Guest al SO dentro de la MV." },

    { q: "Diferencia el sistema anfitrión (host) del sistema invitado (guest).",
      respuestas: ["anfitrion es el pc real", "host es el equipo fisico", "guest es el so dentro", "invitado corre dentro de la mv"],
      solucion: "El host (anfitrión) es el equipo físico real; el guest (invitado) es el sistema operativo que se instala y corre dentro de la máquina virtual.",
      nivel: "basico",
      explicacion: "El hipervisor reparte los recursos del host entre los guests." },

    { q: "¿Cuáles son las cuatro principales virtudes de una MV al ejecutar software o virus?",
      respuestas: ["aislamiento", "no afecta al equipo real", "seguridad", "prueba", "destruccion"],
      solucion: "El aislamiento: cualquier fallo, virus o prueba destructiva dentro de la MV no afecta en absoluto a los archivos ni a la estabilidad del equipo real.",
      nivel: "basico",
      explicacion: "Por eso se usa tanto en laboratorios y pruebas." },

    { q: "Menciona los componentes de una MV que emulan el hardware físico en VirtualBox.",
      respuestas: ["vcpus", "memoria base", "vdi", "adaptador de red", "lector virtual", "virtual"],
      solucion: "Procesador → vCPUs; RAM → memoria base asignada; disco → archivo .vdi; tarjeta de red → adaptador de red virtual (NAT, puente o red interna); unidad óptica → lector virtual de imágenes ISO.",
      nivel: "medio",
      explicacion: "Se recomiendan 2 vCPUs y no pasar del 50% de la RAM." },

    { q: "¿Qué es un hipervisor y de qué tipo es VirtualBox?",
      respuestas: ["tipo 2", "alojado", "vmm", "monitor de maquinas virtuales", "reparte recursos"],
      solucion: "Es el monitor de máquinas virtuales (VMM) que reparte los recursos reales entre el host y las MVs. VirtualBox es un hipervisor de tipo 2 (alojado): se instala como un programa ordinario dentro del SO y se apoya en Intel VT-x o AMD-V.",
      nivel: "medio",
      explicacion: "El tipo 1 (bare metal) va directamente sobre el hardware." },

    { q: "¿Qué debes hacer si VirtualBox te da el error «VT-x/AMD-V no disponible»?",
      respuestas: ["bios", "uefi", "svm", "intel virtualization", "f10", "habilitar", "reiniciar"],
      solucion: "Reiniciar el PC, entrar en la BIOS/UEFI con F2, F10, F12 o Supr, habilitar Intel Virtualization Technology (Intel) o SVM Mode (AMD), guardar con F10 y volver a arrancar Windows.",
      nivel: "medio",
      explicacion: "Es el requisito imprescindible para que las MV corran a velocidad." },

    { q: "¿Por qué no conviene usar FAT32 en el disco externo donde guardamos las máquinas virtuales?",
      respuestas: ["4 gb", "no permite ficheros de mas de", "exfat", "ntfs"],
      solucion: "FAT32 no admite ficheros de más de 4 GB, y el disco virtual .vdi lo supera con facilidad, por lo que fallaría al instalar el sistema invitado. Debe tener formato exFAT o NTFS.",
      nivel: "medio",
      explicacion: "Es el error más común al mover las MV a un pendrive." },

    { q: "¿Qué es el Extension Pack y qué funciones aporta?",
      respuestas: ["usb", "cifrado", "camara", "all supported platforms", "complemento"],
      solucion: "Es el complemento oficial «All supported platforms», idéntico para todos los sistemas operativos; añade compatibilidad con USB 2.0 y USB 3.0, cifrado del disco virtual y captura de cámaras web integradas.",
      nivel: "medio",
      explicacion: "Se descarga de la misma web oficial junto al instalador." },

    { q: "Explica la diferencia entre los modos de red NAT, Adaptador Puente y Red Interna.",
      respuestas: ["nat", "puente", "interna", "internet", "red fisica", "aisla"],
      solucion: "NAT: la MV sale a Internet a través del host. Adaptador Puente: la MV se conecta a la red física como si fuera un equipo más (IP propia de la red). Red Interna: aísla equipos entre sí sin salir al exterior.",
      nivel: "avanzado",
      explicacion: "Es el modo más usado para prácticas con varias MVs." },

    { q: "¿Cuál es el procedimiento correcto para guardar las MV en un disco externo?",
      respuestas: ["preferencias", "general", "carpeta predeterminada", "otro", "expulsar", "exfat", "ntfs"],
      solucion: "1) Formatear el disco en exFAT o NTFS. 2) En Windows: Archivo > Preferencias > General (en macOS: VirtualBox > Ajustes > General). 3) En «Carpeta predeterminada de máquinas» pulsar Otro… y elegir una carpeta del disco externo. 4) Aceptar: todos los .vdi nuevos se guardarán allí. 5) Nunca desconectar el USB con la MV encendida o pausada: apaga el invitado, cierra VirtualBox y expulsa la unidad.",
      nivel: "avanzado",
      explicacion: "Un sistema virtual completo ocupa entre 15 GB y 50 GB." },

    { q: "Menciona los pasos para instalar VirtualBox en Windows.",
      respuestas: ["ejecutar como administrador", "next", "install", "extension pack", "acepto", "finish"],
      solucion: "1) Clic derecho en VirtualBox-x.x.x-Win.exe → Ejecutar como administrador. 2) Next y aceptar ruta y componentos por defecto. 3) En la advertencia de red pulsar Yes. 4) Install y Finish. 5) Doble clic al Extension Pack y aceptar la licencia (Acepto).",
      nivel: "avanzado",
      explicacion: "En macOS se usa el .dmg y el paquete .pkg, autorizando en Privacidad y Seguridad." },

    { q: "¿Qué ventajas e inconvenientes tiene usar un disco externo o SSD para las máquinas virtuales?",
      respuestas: ["no gasta espacio", "portatil", "pendrive", "rapido", "riesgo desconectar", "externo"],
      solucion: "Ventajas: ahorra el espacio interno del portátil (cada MV ocupa 15-50 GB) y un SSD rápido da buena fluidez. Inconvenientes: exige formato exFAT/NTFS y hay el riesgo de desconectar el USB en mal momento, lo que corrompería el disco virtual.",
      nivel: "avanzado",
      explicacion: "Requisito: nunca desconectar con la MV en ejecución o pausada." },

    { q: "¿Qué es la virtualización?",
      respuestas: ["aislados", "la virtualización"],
      solucion: "La virtualización: tecnología que permite ejecutar varios sistemas aislados en un mismo equipo.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve una máquina virtual?",
      respuestas: ["emulación", "una máquina virtual"],
      solucion: "Una máquina virtual: emulación de un ordenador por software.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es VirtualBox.",
      respuestas: ["gratuito", "virtualbox"],
      solucion: "VirtualBox: programa gratuito de virtualización.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define el host.",
      respuestas: ["físico", "el host"],
      solucion: "El host: ordenador físico que ejecuta las máquinas virtuales.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es el guest?",
      respuestas: ["dentro", "el guest"],
      solucion: "El guest: sistema operativo instalado dentro de la máquina virtual.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve un hipervisor?",
      respuestas: ["gestiona", "un hipervisor"],
      solucion: "Un hipervisor: software que crea y gestiona máquinas virtuales.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es un disco virtual.",
      respuestas: ["archivo", "un disco virtual"],
      solucion: "Un disco virtual: archivo que actúa como disco duro de la máquina virtual.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define un archivo VDI.",
      respuestas: ["VDI", "un archivo vdi"],
      solucion: "Un archivo VDI: formato de disco virtual de VirtualBox.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es un archivo OVA?",
      respuestas: ["portable", "un archivo ova"],
      solucion: "Un archivo OVA: plantilla de máquina virtual portable.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve un snapshot?",
      respuestas: ["estado", "un snapshot"],
      solucion: "Un snapshot: copia del estado de una máquina virtual en un momento dado.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es el modo puente.",
      respuestas: ["red física", "el modo puente"],
      solucion: "El modo puente: modo de red que conecta la MV directamente a la red física.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define el modo NAT.",
      respuestas: ["comparte", "el modo nat"],
      solucion: "El modo NAT: modo de red que comparte la IP del host.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es la RAM de la MV?",
      respuestas: ["asignada", "la ram de la mv"],
      solucion: "La RAM de la MV: memoria asignada desde el host a la máquina virtual.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve los núcleos virtuales?",
      respuestas: ["lógicos", "los núcleos virtuales"],
      solucion: "Los núcleos virtuales: procesadores lógicos asignados a la máquina virtual.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es la aceleración por hardware.",
      respuestas: ["instrucciones", "la aceleración por hardware"],
      solucion: "La aceleración por hardware: uso de instrucciones de virtualización de la CPU.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define VT-x.",
      respuestas: ["Intel", "vt-x"],
      solucion: "VT-x: tecnología de Intel para virtualización.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es AMD-V?",
      respuestas: ["AMD", "amd-v"],
      solucion: "AMD-V: tecnología de AMD para virtualización.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve la BIOS de la MV?",
      respuestas: ["firmware", "la bios de la mv"],
      solucion: "La BIOS de la MV: firmware emulado que inicia la máquina virtual.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es el panel de VirtualBox.",
      respuestas: ["interfaz", "el panel de virtualbox"],
      solucion: "El panel de VirtualBox: interfaz donde se gestionan las máquinas virtuales.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define el botón Iniciar.",
      respuestas: ["arranca", "el botón iniciar"],
      solucion: "El botón Iniciar: acción que arranca la máquina virtual.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es el estado Apagado?",
      respuestas: ["ejecutándose", "el estado apagado"],
      solucion: "El estado Apagado: estado en el que la MV no está ejecutándose.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el estado Guardado?",
      respuestas: ["conserva", "el estado guardado"],
      solucion: "El estado Guardado: estado que conserva la memoria de la máquina virtual.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es el Extension Pack.",
      respuestas: ["complemento", "el extension pack"],
      solucion: "El Extension Pack: complemento que añade funciones a VirtualBox.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define las Guest Additions.",
      respuestas: ["integración", "las guest additions"],
      solucion: "Las Guest Additions: controladores que mejoran la integración del guest.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es el portapapeles compartido?",
      respuestas: ["copiar", "el portapapeles compartido"],
      solucion: "El portapapeles compartido: función que permite copiar entre host y guest.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve la carpeta compartida?",
      respuestas: ["accesible", "la carpeta compartida"],
      solucion: "La carpeta compartida: carpeta accesible desde el host y el guest.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es la resolución automática.",
      respuestas: ["pantalla", "la resolución automática"],
      solucion: "La resolución automática: función que ajusta la pantalla del guest.",
      nivel: "basico",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define el hipervisor de tipo 1.",
      respuestas: ["directamente", "el hipervisor de tipo 1"],
      solucion: "El hipervisor de tipo 1: hipervisor que se ejecuta directamente sobre el hardware.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es el hipervisor de tipo 2?",
      respuestas: ["sobre un sistema", "el hipervisor de tipo 2"],
      solucion: "El hipervisor de tipo 2: hipervisor que se ejecuta sobre un sistema operativo.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve la emulación completa?",
      respuestas: ["todo el hardware", "la emulación completa"],
      solucion: "La emulación completa: virtualización que emula todo el hardware.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es la paravirtualización.",
      respuestas: ["sabe", "la paravirtualización"],
      solucion: "La paravirtualización: virtualización donde el guest sabe que está virtualizado.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define la virtualización de hardware.",
      respuestas: ["CPU", "la virtualización de hardware"],
      solucion: "La virtualización de hardware: ayuda de la CPU para ejecutar instrucciones privilegiadas.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es el error VT-x no disponible?",
      respuestas: ["desactivada", "el error vt-x no disponible"],
      solucion: "El error VT-x no disponible: fallo porque la virtualización está desactivada en la BIOS.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve la red interna?",
      respuestas: ["entre sí", "la red interna"],
      solucion: "La red interna: modo que conecta solo las máquinas virtuales entre sí.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es el adaptador puente.",
      respuestas: ["IP", "el adaptador puente"],
      solucion: "El adaptador puente: modo que da a la MV una IP de la red física.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define el modo solo host.",
      respuestas: ["privada", "el modo solo host"],
      solucion: "El modo solo host: modo que crea una red privada entre host y guests.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es el controlador SATA virtual?",
      respuestas: ["recomendado", "el controlador sata virtual"],
      solucion: "El controlador SATA virtual: controlador recomendado para discos virtuales modernos.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el formato VDI?",
      respuestas: ["nativo", "el formato vdi"],
      solucion: "El formato VDI: formato nativo de discos de VirtualBox.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es el formato VMDK.",
      respuestas: ["VMware", "el formato vmdk"],
      solucion: "El formato VMDK: formato de disco compatible con VMware.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define el disco dinámico.",
      respuestas: ["crece", "el disco dinámico"],
      solucion: "El disco dinámico: disco que crece según se usa.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es el disco de tamaño fijo?",
      respuestas: ["reserva", "el disco de tamaño fijo"],
      solucion: "El disco de tamaño fijo: disco que reserva todo el espacio desde el inicio.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve una instantánea?",
      respuestas: ["volver", "una instantánea"],
      solucion: "Una instantánea: copia del estado de la MV que permite volver atrás.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es el almacenamiento en disco externo.",
      respuestas: ["llevar", "el almacenamiento en disco externo"],
      solucion: "El almacenamiento en disco externo: forma de llevar las máquinas virtuales a otro equipo.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define el sistema de archivos NTFS.",
      respuestas: ["NTFS", "el sistema de archivos ntfs"],
      solucion: "El sistema de archivos NTFS: sistema recomendado para discos externos grandes.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es FAT32?",
      respuestas: ["4 GB", "fat32"],
      solucion: "FAT32: sistema de archivos antiguo con límite de 4 GB por archivo.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve exFAT?",
      respuestas: ["externos", "exfat"],
      solucion: "ExFAT: sistema de archivos adecuado para discos externos grandes.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es el arranque desde ISO.",
      respuestas: ["imagen", "el arranque desde iso"],
      solucion: "El arranque desde ISO: instalación del guest usando una imagen de disco.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define la unidad óptica virtual.",
      respuestas: ["monta", "la unidad óptica virtual"],
      solucion: "La unidad óptica virtual: dispositivo que monta una imagen ISO.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es el adaptador de red virtual?",
      respuestas: ["conectividad", "el adaptador de red virtual"],
      solucion: "El adaptador de red virtual: componente que da conectividad a la máquina virtual.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve la memoria de vídeo?",
      respuestas: ["pantalla", "la memoria de vídeo"],
      solucion: "La memoria de vídeo: cantidad de RAM dedicada a la pantalla de la MV.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es el controlador USB virtual.",
      respuestas: ["USB", "el controlador usb virtual"],
      solucion: "El controlador USB virtual: función del Extension Pack para usar dispositivos USB.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define la virtualización de aplicaciones.",
      respuestas: ["dependencias", "la virtualización de aplicaciones"],
      solucion: "La virtualización de aplicaciones: tecnología que empaqueta una aplicación con sus dependencias.",
      nivel: "medio",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es el riesgo de ejecutar malware en una MV?",
      respuestas: ["sin afectar", "el riesgo de ejecutar malware en una mv"],
      solucion: "El riesgo de ejecutar malware en una MV: permite analizarlo sin afectar al sistema anfitrión.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el aislamiento de una MV?",
      respuestas: ["separación", "el aislamiento de una mv"],
      solucion: "El aislamiento de una MV: separación entre guest y host frente a fallos.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es la sobreasignación de RAM.",
      respuestas: ["más memoria", "la sobreasignación de ram"],
      solucion: "La sobreasignación de RAM: dar más memoria a las MV de la disponible físicamente.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define el ballooning.",
      respuestas: ["recupera", "el ballooning"],
      solucion: "El ballooning: técnica que recupera memoria no usada del guest.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es la paginación de la MV?",
      respuestas: ["extensión", "la paginación de la mv"],
      solucion: "La paginación de la MV: uso de disco como extensión de la RAM del host.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve las tablas de páginas anidadas?",
      respuestas: ["traducción", "las tablas de páginas anidadas"],
      solucion: "Las tablas de páginas anidadas: traducción de direcciones por hardware para virtualización.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es IOMMU.",
      respuestas: ["E/S", "iommu"],
      solucion: "IOMMU: traducción de direcciones de E/S para acceso directo.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define el passthrough de dispositivos.",
      respuestas: ["exclusivamente", "el passthrough de dispositivos"],
      solucion: "El passthrough de dispositivos: asignar un dispositivo físico exclusivamente a una MV.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es la vCPU?",
      respuestas: ["virtual", "la vcpu"],
      solucion: "La vCPU: unidad de procesamiento virtual asignada a la MV.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve la planificación de vCPUs?",
      respuestas: ["reparto", "la planificación de vcpus"],
      solucion: "La planificación de vCPUs: reparto de tiempo de CPU entre las máquinas virtuales.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es el tiempo de arranque.",
      respuestas: ["iniciarse", "el tiempo de arranque"],
      solucion: "El tiempo de arranque: tiempo que tarda una máquina virtual en iniciarse.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define la consolidación de servidores.",
      respuestas: ["reducir", "la consolidación de servidores"],
      solucion: "La consolidación de servidores: reducir servidores físicos usando máquinas virtuales.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es la migración en vivo?",
      respuestas: ["sin apagarla", "la migración en vivo"],
      solucion: "La migración en vivo: mover una MV de un host a otro sin apagarla.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el clúster de hipervisores?",
      respuestas: ["conjuntamente", "el clúster de hipervisores"],
      solucion: "El clúster de hipervisores: conjunto de hosts que gestionan MV conjuntamente.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es la alta disponibilidad.",
      respuestas: ["reinicio", "la alta disponibilidad"],
      solucion: "La alta disponibilidad: reinicio automático de MV si falla el host.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define el backup de MV.",
      respuestas: ["copia", "el backup de mv"],
      solucion: "El backup de MV: copia de los archivos de disco y configuración.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es la replicación?",
      respuestas: ["otro equipo", "la replicación"],
      solucion: "La replicación: copia periódica de una MV a otro equipo.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el aprovisionamiento ligero?",
      respuestas: ["bajo demanda", "el aprovisionamiento ligero"],
      solucion: "El aprovisionamiento ligero: asignación de espacio de disco bajo demanda.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es el formato OVF.",
      respuestas: ["abierto", "el formato ovf"],
      solucion: "El formato OVF: formato abierto de distribución de máquinas virtuales.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define la huella de carbono.",
      respuestas: ["menor consumo", "la huella de carbono"],
      solucion: "La huella de carbono: menor consumo al consolidar servidores.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es el laboratorio aislado?",
      respuestas: ["prácticas", "el laboratorio aislado"],
      solucion: "El laboratorio aislado: uso de redes internas para prácticas seguras.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el riesgo del modo puente?",
      respuestas: ["expuesta", "el riesgo del modo puente"],
      solucion: "El riesgo del modo puente: la MV queda expuesta como un equipo más de la red.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Explica qué es la NAT de VirtualBox.",
      respuestas: ["10.0.2.15", "la nat de virtualbox"],
      solucion: "La NAT de VirtualBox: salida a Internet con IP privada 10.0.2.15.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "Define el reenvío de puertos.",
      respuestas: ["regla", "el reenvío de puertos"],
      solucion: "El reenvío de puertos: regla para acceder a un servicio de la MV desde el host.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Qué es la sincronización de hora?",
      respuestas: ["reloj", "la sincronización de hora"],
      solucion: "La sincronización de hora: ajuste del reloj del guest con el host.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el disco diferencial?",
      respuestas: ["cambios", "el disco diferencial"],
      solucion: "El disco diferencial: disco que guarda solo los cambios desde una instantánea.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de virtualizacion que conviene repasar antes del examen." }
  ]
};

/* =========================================================
   Ampliación del banco de test: hasta 30 preguntas por nivel
   (se añaden al final; no se modifica el apartado «abiertas»)
   ========================================================= */

/* ---------- BÁSICO (16 nuevas) ---------- */
DATOS.virtualizacion.test.basico.push({
  p: "Las «Guest Additions» de VirtualBox son:",
  op: ["Un antivirus para el invitado", "Un disco de arranque alternativo",
       "Un conjunto de controladores y utilidades que se instalan dentro del SO invitado",
       "Un complemento del navegador web"], r: 2,
  e: "Mejoran el ratón, el vídeo, el portapapeles y permiten usar carpetas compartidas."
});

DATOS.virtualizacion.test.basico.push({
  p: "¿Qué es una instantánea (snapshot) en VirtualBox?",
  op: ["Una copia del estado de la MV en un momento concreto",
       "Una fotografía del escritorio del host",
       "Un disco duro nuevo añadido a la MV",
       "Un tipo de adaptador de red"], r: 0,
  e: "Guarda la configuración y el estado del disco para poder volver a ese punto después."
});

DATOS.virtualizacion.test.basico.push({
  p: "Un «clon» de una máquina virtual es:",
  op: ["Una copia de seguridad del sistema anfitrión",
       "Una copia de la MV que crea otra máquina independiente",
       "Otro nombre para una instantánea",
       "Un controlador de USB"], r: 1,
  e: "El clon genera una MV nueva, con su propio archivo de disco virtual."
});

DATOS.virtualizacion.test.basico.push({
  p: "¿En qué estado se encuentra una MV que hemos «pausado»?",
  op: ["Apagada", "Guardada en disco", "En ejecución normal",
       "Congelada en memoria: no avanza la ejecución pero puede reanudarse"], r: 3,
  e: "La pausa mantiene el estado en RAM; en cambio, «Guardar estado» lo escribe en disco."
});

DATOS.virtualizacion.test.basico.push({
  p: "Para compartir archivos entre el equipo real y la MV sin usar la red, VirtualBox ofrece:",
  op: ["El Extension Pack", "Las carpetas compartidas",
       "La memoria base", "El adaptador NAT"], r: 1,
  e: "Se configuran en los ajustes de la MV y requieren las Guest Additions instaladas en el invitado."
});

DATOS.virtualizacion.test.basico.push({
  p: "El formato de disco virtual VMDK es el formato nativo de:",
  op: ["VirtualBox", "Microsoft Hyper-V", "VMware", "Apple"], r: 2,
  e: "VirtualBox sabe crear y usar discos VMDK además de sus propios VDI."
});

DATOS.virtualizacion.test.basico.push({
  p: "La memoria RAM que se asigna a una MV en VirtualBox se denomina:",
  op: ["Memoria base", "Memoria caché", "RAM del host", "Memoria ROM"], r: 0,
  e: "Se ajusta en Configuración > Sistema > Memoria base."
});

DATOS.virtualizacion.test.basico.push({
  p: "¿Cómo se denomina el procesador virtual asignado a una máquina virtual?",
  op: ["GPU", "ROM", "Chipset", "vCPU (CPU virtual)"], r: 3,
  e: "Cada vCPU corresponde a un hilo del procesador real puesto a disposición del invitado."
});

DATOS.virtualizacion.test.basico.push({
  p: "La edición básica de VirtualBox es un software:",
  op: ["De pago y cerrado",
       "Gratuito y de código abierto (el Extension Pack tiene licencia aparte)",
       "Solo para servidores", "Que exige licencia de Windows"], r: 1,
  e: "El hipervisor base se distribuye gratuitamente; el complemento tiene condiciones de licencia distintas."
});

DATOS.virtualizacion.test.basico.push({
  p: "Una de las principales ventajas de la virtualización es:",
  op: ["Aprovechar mejor el hardware ejecutando varios sistemas en un mismo equipo",
       "Duplicar el número de monitores", "Alargar la batería del portátil",
       "Evitar actualizar el software"], r: 0,
  e: "Consolidación: menos equipos físicos para prestar los mismos servicios."
});

DATOS.virtualizacion.test.basico.push({
  p: "Un inconveniente de la virtualización es:",
  op: ["No poder instalar antivirus", "La imposibilidad de navegar por Internet",
       "El consumo extra de CPU, RAM y disco al ejecutar varios sistemas",
       "Que el host pierda la conexión de red"], r: 2,
  e: "Cada MV consume recursos reales: hay que dimensionar bien el equipo."
});

DATOS.virtualizacion.test.basico.push({
  p: "¿Cuál es la diferencia entre emulación y virtualización?",
  op: ["La emulación solo sirve para juegos",
       "La emulación imita hardware de otra arquitectura; la virtualización ofrece el mismo hardware real al invitado",
       "Son exactamente lo mismo",
       "La virtualización imita siempre otra arquitectura"], r: 1,
  e: "El emulador traduce instrucciones; el hipervisor ejecuta código nativo sobre el mismo procesador."
});

DATOS.virtualizacion.test.basico.push({
  p: "Al exportar una máquina virtual para llevarla a otro equipo se genera normalmente un archivo:",
  op: [".vdi", ".iso", ".ova o .ovf", ".exe"], r: 2,
  e: "OVF es un formato estándar de varios ficheros; OVA lo empaqueta todo en uno."
});

DATOS.virtualizacion.test.basico.push({
  p: "Un dispositivo USB conectado al equipo real puede usarse en la MV:",
  op: ["Rediriéndolo desde el menú USB de VirtualBox (con el Extension Pack para USB 2.0/3.0)",
       "Solo si la MV está apagada", "Nunca, por motivos de seguridad",
       "Automáticamente sin ninguna configuración"], r: 0,
  e: "El hipervisor captura el dispositivo y se lo presenta al sistema invitado."
});

DATOS.virtualizacion.test.basico.push({
  p: "En VirtualBox, la aceleración gráfica (renderizado) de una MV se refiere a:",
  op: ["Un modo de red", "Un tipo de disco", "Una opción de sonido",
       "El uso de la GPU para dibujar la pantalla del invitado"], r: 3,
  e: "Activar la aceleración 3D mejora los gráficos del SO invitado."
});

DATOS.virtualizacion.test.basico.push({
  p: "Cuando una MV está «apagada» (power off):",
  op: ["Sigue consumiendo la RAM asignada",
       "No está en ejecución: consume recursos mínimos y permite cambiar su configuración",
       "Está pausada en memoria", "Acaba de ser exportada"], r: 1,
  e: "Con la MV apagada se pueden modificar RAM, vCPUs, discos y adaptadores."
});

/* ---------- MEDIO (15 nuevas) ---------- */
DATOS.virtualizacion.test.medio.push({
  p: "El modo de red «Solo host» (host-only) permite:",
  op: ["Salir a Internet a través del host",
       "Conectar la MV a la red física como un equipo más",
       "Comunicar el host con sus MVs en una red privada virtual, sin darles acceso a Internet",
       "Aislar las MVs entre sí"], r: 2,
  e: "Crea una red privada con una tarjeta virtual en el host; las MVs se ven entre sí y con el host."
});

DATOS.virtualizacion.test.medio.push({
  p: "¿Cuál es la diferencia principal entre NAT y Adaptador Puente?",
  op: ["NAT comparte la IP del host; el puente da a la MV una IP propia de la red física",
       "NAT da IP propia y el puente comparte la del host",
       "Ambos modos son equivalentes", "El puente solo funciona por cable Ethernet"], r: 0,
  e: "Con NAT la MV sale oculta tras el host; con puente es un equipo más de la red."
});

DATOS.virtualizacion.test.medio.push({
  p: "¿Qué diferencia hay entre una instantánea y un clon?",
  op: ["Son exactamente lo mismo", "El clon no ocupa espacio en disco",
       "La instantánea solo se puede crear con la MV apagada",
       "La instantánea guarda un estado al que puedes volver; el clon crea una MV nueva independiente"], r: 3,
  e: "La instantánea forma parte del historial de la MV; el clon es una copia autónoma."
});

DATOS.virtualizacion.test.medio.push({
  p: "La opción «Guardar el estado» (Save State) al cerrar una MV:",
  op: ["La apaga completamente y borra su memoria",
       "Guarda el estado de CPU y memoria en disco y la deja lista para reanudarla donde estaba",
       "Elimina los discos virtuales", "La deja pausada solo en RAM"], r: 1,
  e: "Es distinto de Apagar: al reanudar se recupera exactamente el estado anterior."
});

DATOS.virtualizacion.test.medio.push({
  p: "¿Dónde se configura el tipo de adaptador de red de una MV en VirtualBox?",
  op: ["En Archivo > Preferencias > Red",
       "En Configuración > Red > Adaptador 1, apartado «Conectado a»",
       "En Configuración > Almacenamiento", "En el menú Dispositivos > Guest Additions"], r: 1,
  e: "Ahí se elige NAT, Adaptador puente, Red interna, Solo host, etc. (y se puede activar el Adaptador 2)."
});

DATOS.virtualizacion.test.medio.push({
  p: "¿Qué es la «memoria de vídeo» en la configuración de una MV?",
  op: ["La memoria del navegador del host",
       "La RAM dedicada a la tarjeta gráfica virtual; conviene aumentarla si se activa la aceleración 3D",
       "El espacio libre del disco virtual", "La memoria del Extension Pack"], r: 1,
  e: "Se ajusta en Configuración > Pantalla > Memoria de vídeo."
});

DATOS.virtualizacion.test.medio.push({
  p: "El «portapapeles compartido» de VirtualBox permite:",
  op: ["Copiar texto y archivos entre el host y el invitado si están instaladas las Guest Additions",
       "Copiar archivos entre dos MVs sin configuración",
       "Sincronizar automáticamente los discos", "Compartir una impresora"], r: 0,
  e: "Se activa en Configuración > General > Avanzado y necesita las Guest Additions."
});

DATOS.virtualizacion.test.medio.push({
  p: "Para que una MV reconozca un pendrive conectado al equipo real:",
  op: ["Hay que apagar el host", "Hay que instalar un controlador en el router",
       "Basta con poner la red en modo NAT",
       "Hay que instalar el Extension Pack (USB 2.0/3.0) y redirigir el dispositivo desde el menú USB"], r: 3,
  e: "Sin el Extension Pack VirtualBox solo ofrece soporte USB 1.1."
});

DATOS.virtualizacion.test.medio.push({
  p: "Si el disco de una MV está en reserva dinámica y el host se queda sin espacio:",
  op: ["El disco crece automáticamente en otra unidad",
       "La MV puede fallar o bloquearse al no poder crecer el archivo .vdi",
       "El disco se convierte en reserva fija", "Se borran las instantáneas automáticamente"], r: 1,
  e: "Conviene vigilar el espacio libre del host; la reserva fija evita este problema."
});

DATOS.virtualizacion.test.medio.push({
  p: "¿Para qué sirve exportar una MV a los formatos OVF/OVA?",
  op: ["Para aumentar su memoria base", "Para crear una instantánea",
       "Para distribuirla o migrarla a otro equipo o hipervisor de forma estándar",
       "Para formatear su disco"], r: 2,
  e: "OVF es un estándar abierto; OVA empaqueta todos los archivos en uno solo."
});

DATOS.virtualizacion.test.medio.push({
  p: "En VirtualBox, un «appliance» es:",
  op: ["Una MV preconfigurada que se distribuye como OVA/OVF y se importa lista para usar",
       "Un complemento de red", "Un tipo de instantánea",
       "Una herramienta para formatear discos"], r: 0,
  e: "Se importa con Archivo > Importar appliance."
});

DATOS.virtualizacion.test.medio.push({
  p: "Al crear una MV, ¿qué sistema operativo invitado conviene elegir?",
  op: ["Siempre el mismo que tiene el host",
       "El que se vaya a instalar realmente, para que VirtualBox ajuste chipset, gráficos y controladores",
       "El más reciente, aunque no se vaya a usar", "Ninguno: se decide después de instalar el sistema"], r: 1,
  e: "El asistente adapta la configuración según el SO y si es de 32 o 64 bits."
});

DATOS.virtualizacion.test.medio.push({
  p: "Si el instalador de un sistema de 64 bits no aparece como opción en una MV, lo más probable es:",
  op: ["Que falte el Extension Pack", "Que el disco esté en FAT32",
       "Que no haya espacio suficiente en el host",
       "Que la MV esté configurada como de 32 bits o que VT-x/AMD-V esté desactivado en la BIOS"], r: 3,
  e: "Hay que elegir la versión correcta del SO invitado y habilitar la virtualización en la BIOS."
});

DATOS.virtualizacion.test.medio.push({
  p: "¿Cómo se clona una MV desde la interfaz gráfica de VirtualBox?",
  op: ["Clic derecho sobre la MV > Clonar", "Archivo > Exportar disco duro",
       "Dispositivos > Clonar USB", "Herramientas > Formatear VDI"], r: 0,
  e: "El asistente permite clonación completa o vinculada (linked clone, basada en una instantánea)."
});

DATOS.virtualizacion.test.medio.push({
  p: "Un «clon vinculado» (linked clone) se caracteriza por:",
  op: ["Copiar todo el disco y ser totalmente independiente", "No poder eliminarse nunca",
       "Compartir el disco base con la original a través de una instantánea, ahorrando espacio",
       "Funcionar solo con discos en reserva fija"], r: 2,
  e: "Si se elimina la instantánea en la que se basa, el clon vinculado deja de ser válido."
});

/* ---------- AVANZADO (16 nuevas) ---------- */
DATOS.virtualizacion.test.avanzado.push({
  p: "Una MV en modo NAT ofrece un servicio web en el puerto 80, pero no es accesible desde otros equipos. ¿Qué hay que configurar?",
  op: ["Instalar las Guest Additions", "Aumentar la memoria base",
       "Configurar la redirección de puertos (port forwarding) en el adaptador NAT",
       "Desactivar el Extension Pack"], r: 2,
  e: "NAT oculta la MV tras el host; el port forwarding publica un puerto del host hacia el invitado."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "¿Cómo configurar una MV que necesita Internet pero debe ser alcanzable desde el host con una IP privada fija?",
  op: ["Un único adaptador en modo Red interna",
       "Adaptador 1 en NAT (salida a Internet) y Adaptador 2 en Solo host (acceso desde el host)",
       "Un único adaptador en NAT sin más opciones",
       "Sin adaptador de red, usando solo las Guest Additions"], r: 1,
  e: "Es la configuración típica: NAT para navegar y host-only para administrar la MV."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "En una Red Interna con varias MVs y sin router, ¿quién asigna las direcciones IP?",
  op: ["VirtualBox lo hace automáticamente mediante NAT", "El Extension Pack",
       "No hay DHCP por defecto: hay que asignar IPs estáticas o configurar un servidor DHCP en esa red interna",
       "El host mediante Wi-Fi"], r: 2,
  e: "La red interna es un segmento aislado: conviene planificar el direccionamiento o montar DHCP."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "Tienes la instantánea «Limpia» y, desde ella, la instantánea «Con programa». Si quieres volver al estado Limpia sin perder la otra rama, debes:",
  op: ["Borrar todas las instantáneas", "Restaurar (Restore) la instantánea «Limpia»",
       "Clonar la MV completa", "Apagar y volver a encender la MV"], r: 1,
  e: "Restaurar cambia el estado actual al de esa instantánea, pero conserva el resto del árbol de instantáneas."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "Una MV con muchas instantáneas ocupa mucho más espacio en el host de lo esperado. ¿Por qué?",
  op: ["Cada instantánea crea un disco de diferencias (.vdi) con los cambios posteriores",
       "El Extension Pack duplica todos los discos",
       "La RAM de la MV se guarda como archivo de disco", "NAT genera copias de seguridad"], r: 0,
  e: "Borrar las instantáneas que ya no se necesitan permite recuperar espacio."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "¿En qué escenario conviene elegir «reserva fija» para el disco virtual?",
  op: ["Cuando se quiere ahorrar espacio en el host",
       "Cuando el disco va a estar en una unidad FAT32",
       "Cuando la MV solo tiene 1 vCPU",
       "Cuando se prioriza rendimiento y se prevé que el disco crecerá bastante"], r: 3,
  e: "La reserva fija es algo más rápida y evita el riesgo de quedarse sin espacio al crecer."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "Hay que ampliar de 20 GB a 40 GB un disco .vdi con la MV apagada. El procedimiento correcto es:",
  op: ["Borrar el disco y crear uno nuevo desde cero",
       "Usar VBoxManage modifymedium (modifyhd) con --resize 40960 y después ampliar la partición dentro del invitado",
       "Convertir el disco a formato ISO", "Aumentar la memoria base de la MV"], r: 1,
  e: "El comando cambia el tamaño del archivo; el SO invitado aún debe expandir su partición."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "Al importar un appliance OVA procedente de otro fabricante, la MV puede dar problemas porque:",
  op: ["Los archivos OVA solo funcionan en VMware", "Falta instalar el Extension Pack",
       "Los controladores, el formato de disco o el chipset pueden no ser totalmente compatibles y hay que revisarlos",
       "La MV debe estar encendida para importarse"], r: 2,
  e: "OVF es un estándar, pero conviene adaptar la configuración de hardware tras la importación."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "Una MV con aplicaciones de diseño dibuja la pantalla muy despacio. Si el host tiene una GPU compatible, ¿qué ayudará?",
  op: ["Activar la aceleración gráfica 3D en Configuración > Pantalla e instalar las Guest Additions",
       "Desactivar VT-x en la BIOS", "Poner la tarjeta de red en modo puente",
       "Reducir la memoria base por debajo de 512 MB"], r: 0,
  e: "Sin aceleración, los gráficos se renderizan por software; la GPU virtual no sustituye a una gráfica física dedicada."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "Con 8 GB de RAM en el host, pretendes ejecutar tres MVs de Windows a la vez. Lo más previsible es:",
  op: ["Saturación de memoria: el host empieza a usar swap y todo va muy lento",
       "Ningún problema: VirtualBox crea RAM virtual ilimitada",
       "Las MVs se apagan solas automáticamente", "Se duplican las direcciones IP"], r: 0,
  e: "El conjunto de MVs no debería superar aproximadamente la mitad de la RAM real del host."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "Conectas un disco USB 3.0 a la MV y solo lo reconoce como USB 1.1. La causa más probable es:",
  op: ["La MV está en modo NAT", "El disco está formateado en exFAT",
       "Faltan vCPUs asignadas",
       "No está instalado el Extension Pack y/o no se ha elegido el controlador USB 3.0 (xHCI)"], r: 3,
  e: "El Extension Pack aporta USB 2.0/3.0; para cambiar el controlador hay que apagar la MV."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "Tras cambiar una MV a Adaptador Puente, no recibe dirección IP. ¿Qué hay que revisar primero?",
  op: ["Que el puente esté asociado a la tarjeta física correcta (Wi-Fi o Ethernet) y que haya DHCP en esa red",
       "Que falte el Extension Pack", "Que la MV tenga asignadas 2 vCPUs",
       "Que el disco sea de reserva dinámica"], r: 0,
  e: "Con puente la MV depende de la red física: si elige el adaptador equivocado o no hay DHCP, no tendrá IP."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "Desde el host no puedes acceder al servicio de una MV en NAT usando su IP privada 10.0.2.15. ¿Por qué?",
  op: ["Porque la MV está apagada", "Porque faltan las Guest Additions",
       "Porque el host tiene desactivado el firewall",
       "Porque esa IP pertenece a la red NAT interna del invitado: el host no la ve directamente; usa port forwarding o cambia de modo"], r: 3,
  e: "La red NAT aísla al invitado; el host solo lo alcanza mediante redirección de puertos u otro modo de red."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "Necesitas dos copias de una MV que se modifiquen y se borren por separado sin afectar a la original. Debes usar:",
  op: ["Dos instantáneas de la misma MV", "Un clon completo de la MV (uno para cada copia)",
       "La opción Pausar", "Cambiar el modo de red a Red interna"], r: 1,
  e: "El clon completo crea discos propios; las instantáneas son parte del historial de una sola MV."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "Si cifras el disco de una MV con el Extension Pack y pierdes la contraseña:",
  op: ["Se puede recuperar reinstalando las Guest Additions",
       "VirtualBox la muestra en Archivo > Preferencias",
       "No se puede acceder al disco: habrá que restaurar desde una copia o instantánea anterior",
       "El cifrado se desactiva automáticamente"], r: 2,
  e: "El cifrado protege el archivo .vdi; sin la clave no existe forma de descifrarlo."
});

DATOS.virtualizacion.test.avanzado.push({
  p: "Instalaste las Guest Additions, pero el escritorio de la MV no se ajusta al tamaño de la ventana. ¿Qué revisar?",
  op: ["Que la tarjeta de red esté en modo puente",
       "Que el SO invitado se haya reiniciado tras la instalación y que la memoria de vídeo sea suficiente",
       "Que el disco esté en reserva fija", "Que el Extension Pack esté desinstalado"], r: 1,
  e: "Las Guest Additions requieren reiniciar el invitado; también influye la memoria de vídeo asignada."
});
