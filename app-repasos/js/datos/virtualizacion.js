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
        op: ["Solo se guardarán allí las MV creadas a partir de ese momento",
              "Todos los .vdi se guardarán en la unidad externa, incluidos los nuevos y los clonados",
              "Se mueven automáticamente las MV antiguas",
              "Deja de funcionar el disco del host"], r: 1,
        e: "Las MV ya creadas hay que moverlas o clonarlas manualmente a la nueva ruta." },

      { p: "Una «Red Interna» (Internal Network) en VirtualBox sirve para:",
        op: ["Aislar varias MV entre sí sin salir al exterior",
              "Conectar a Internet directamente",
              "Compartir el escritorio del host",
              "Montar el ISO"], r: 0,
        e: "Útil para prácticas: solo se comunican las MVs de esa red interna." },

      { p: "Un sistema de archivos FAT32 no sirve para las MVs porque:",
        op: ["Limita el tamaño de fichero a 4 GB, insuficiente para un .vdi",
              "No admite carpetas",
              "Solo lo entiende macOS",
              "Es de solo lectura"], r: 0,
        e: "Por eso se exige exFAT o NTFS en el disco externo." },

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
      explicacion: "Requisito: nunca desconectar con la MV en ejecución o pausada." }
  ]
};
