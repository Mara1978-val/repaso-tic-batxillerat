/* =========================================================
   datos/windows.js
   Preguntas del tema WINDOWS
   ========================================================= */

window.DATOS = window.DATOS || {};

DATOS.windows = {
  nombre: "Windows",

  test: {
    basico: [
      { p: "Windows es un sistema operativo creado por:",
        op: ["Apple", "Microsoft", "Canonical", "Google"], r: 1,
        e: "Microsoft, fundada por Bill Gates y Paul Allen en 1975." },

      { p: "La primera versión de Windows se comercializó en:",
        op: ["1975", "1981", "noviembre de 1985", "1995"], r: 2,
        e: "Anunciada en 1983 y comercializada en noviembre de 1985 como complemento de MS-DOS." },

      { p: "El menú que incorporó Windows 95 y que sigue siendo el punto de acceso principal es:",
        op: ["Menú Inicio", "Menú Archivo", "Menú Ayuda", "Menú Ver"], r: 0,
        e: "Windows 95 introdujo el menú Inicio, la barra de tareas y el plug and play." },

      { p: "¿Qué versión de Windows fue la primera con arquitectura NT y se lanzó en 2001?",
        op: ["Windows 98", "Windows XP", "Windows 2000", "Windows Vista"], r: 1,
        e: "Windows XP (2001) une la arquitectura NT con la facilidad de uso de la rama 9x." },

      { p: "¿Qué versión introdujo la interfaz de mosaicos tipo tableta en 2012?",
        op: ["Windows 7", "Windows 8", "Windows 10", "Windows 11"], r: 1,
        e: "Windows 8 (2012) apostó por pantallas táctiles y una pantalla de inicio con mosaicos." },

      { p: "El área donde aparecen los iconos, el fondo y la bandeja de notificaciones se llama:",
        op: ["Escritorio", "Explorador", "Panel de control", "Menú Inicio"], r: 0,
        e: "El escritorio incluye iconos (accesos directos), el fondo y la barra de tareas." },

      { p: "Los archivos eliminados que se pueden recuperar se envían a:",
        op: ["Papelera de Reciclaje", "El registro", "La BIOS", "Windows Update"], r: 0,
        e: "Desde la Papelera se pueden restaurar; «Mover a la papelera» es la operación estándar." },

      { p: "El programa que permite navegar por carpetas y ver la ruta completa es el:",
        op: ["Explorador de archivos", "Administrador de tareas", "Bloc de notas", "Visor de eventos"], r: 0,
        e: "En Windows se llama explorer; en Ubuntu, nautilus." },

      { p: "Para cambiar el nombre de un archivo sin moverlo se usa:",
        op: ["Copiar", "Cortar", "Renombrar", "Comprimir"], r: 2,
        e: "Renombrar (o rename) cambia el nombre sin desplazarlo de su sitio." },

      { p: "El acceso rápido al Administrador de Dispositivos permite:",
        op: ["Ver el hardware instalado, detectar errores y actualizar drivers",
              "Jugar a Buscaminas", "Editar el fondo de pantalla", "Desfragmentar la RAM"], r: 0,
        e: "Los drivers los proporciona el fabricante del hardware y deben adaptarse a cada SO." },

      { p: "La herramienta que actualiza el sistema con parches de seguridad y controladores es:",
        op: ["Windows Update", "El Registro", "Diskpart", "La Papelera"], r: 0,
        e: "Actualiza el SO, los controladores y permite configurar las actualizaciones automáticas." },

      { p: "La extensión .docx corresponde normalmente a un documento de:",
        op: ["Word", "Excel", "PowerPoint", "Bloc de Notas"], r: 0,
        e: "txt → Bloc de Notas; pptx → PowerPoint; iso → imagen de disco; pdf → Acrobat Reader." },

      { p: "Windows distingue mayúsculas y minúsculas en los nombres de archivo:",
        op: ["Sí, siempre", "No: CONTROL1.odt y control1.odt son el mismo archivo",
              "Solo en las carpetas", "Solo en la unidad D:"], r: 1,
        e: "Windows es insensible a mayúsculas; Linux sí distingue (son archivos distintos)." },

      { p: "Las unidades en Windows se identifican con:",
        op: ["Letras y dos puntos (C:, D:, E:)", "Barras (hda1)", "Números romanos", "Colores"], r: 0,
        e: "Linux usa hdX con número (hda1, hda2) y puntos de montaje." }
    ],

    medio: [
      { p: "El comando que muestra la lista de archivos y carpetas de la ubicación actual es:",
        op: ["dir", "cd", "mkdir", "type"], r: 0,
        e: "dir muestra archivos, carpetas, tamaños y fechas; con /p se pausa la salida." },

      { p: "Para retroceder un nivel hacia la carpeta padre en CMD se usa:",
        op: ["cd ..", "cd /", "cd -", "cd ~"], r: 0,
        e: "cd .. sube un nivel; cd / (o cd \\) lleva directamente a la raíz de la unidad." },

      { p: "¿Qué comando crea una carpeta nueva?",
        op: ["rmdir", "mkdir (o md)", "del", "copy"], r: 1,
        e: "mkdir crea el directorio; rmdir lo elimina (con /s si contiene elementos)." },

      { p: "El comando que elimina permanentemente un archivo es:",
        op: ["copy", "rename", "del", "type"], r: 2,
        e: "del temporal.txt borra el fichero del disco (no lo lleva a la Papelera)." },

      { p: "¿Qué comando muestra el contenido de un archivo de texto por pantalla?",
        op: ["type", "dir", "ping", "copy"], r: 0,
        e: "type ficha.txt muestra el texto completo del fichero." },

      { p: "Para ver los parámetros de red (IPv4, máscara, router) se usa:",
        op: ["ipconfig", "chkdsk", "diskpart", "tracert"], r: 0,
        e: "ipconfig /all da la información completa de las tarjetas de red." },

      { p: "El comando que comprueba la conectividad con otro equipo enviando paquetes ICMP es:",
        op: ["tracert", "ping", "dir", "ipconfig"], r: 1,
        e: "ping 8.8.8.8 o ping google.com comprueba si hay respuesta de red." },

      { p: "¿Qué herramienta permite ver la ruta que siguen los paquetes y el tiempo en cada router?",
        op: ["ping", "tracert", "mkdir", "rename"], r: 1,
        e: "tracert (trafert) rastrea la ruta hop a hop hasta el destino." },

      { p: "La herramienta interactiva de particionado de discos de Windows es:",
        op: ["chkdsk", "diskpart", "taskmgr", "regedit"], r: 1,
        e: "Dentro de ella se usa list disk para ver los discos y clean para borrar la partición; se sale con exit." },

      { p: "El comando que analiza y repara el sistema de archivos de una unidad es:",
        op: ["chkdsk C: /f", "del C:", "cd C:", "copy C:"], r: 0,
        e: "chkdsk comprueba la integridad y repara sectores defectuosos." },

      { p: "La utilidad que reúne ajustes de sistema, cuentas, red, hardware y aplicaciones es:",
        op: ["El Panel de control o la aplicación Configuración", "El Bloc de notas", "El Explorador", "La Papelera"], r: 0,
        e: "Ambas ofrecen el mismo alcance; Configuración tiene diseño táctil." },

      { p: "En el Panel de control, la sección para crear, modificar o eliminar cuentas de usuario es:",
        op: ["Sistema y Seguridad", "Cuentas de usuario", "Apariencia", "Redes"], r: 1,
        e: "También permite gestionar los privilegios de cada cuenta." },

      { p: "¿Cuántos tipos de cuenta tiene Windows 10?",
        op: ["Dos: estándar y administrador", "Tres: estándar, administrador e invitado", "Una sola", "Cuatro"], r: 1,
        e: "La cuenta estándar para el día a día, la administradora con control total y la invitada temporal." },

      { p: "La primera cuenta creada durante la instalación de Windows es:",
        op: ["Invitado", "Estándar", "Administrador", "Microsoft 365"], r: 2,
        e: "Por eso conviene crear después una cuenta estándar para el uso diario." },

      { p: "El comando que cambia el tipo de usuario de Windows es:",
        op: ["control \"userpasswords2\"", "ipconfig /renew", "mkdir usuarios", "net user /all"], r: 0,
        e: "Abre la ventana avanzada de cuentas de usuario." },

      { p: "La utilidad que libera espacio eliminando temporales y cachés es:",
        op: ["Liberador de Espacio en Disco", "Editor del Registro", "Monitor de Recursos", "Configuración de Inicio"], r: 0,
        e: "El Monitor de Recursos vigila CPU, RAM y disco para encontrar cuellos de botella." },

      { p: "El Desfragmentador de Disco sirve para:",
        op: ["Agrupar los datos contiguos y ganar velocidad",
              "Borrar todos los archivos", "Ampliar la RAM", "Crear particiones"], r: 0,
        e: "En los SSD no es necesario: no tienen partes móviles." }
    ],

    avanzado: [
      { p: "¿Quién fundó Microsoft y en qué año?",
        op: ["Steve Jobs en 1976", "Bill Gates y Paul Allen en 1975", "Linus Torvalds en 1991", "Richard Stallman en 1984"], r: 1,
        e: "Su primer éxito fue MS-DOS, diseñado para los equipos IBM." },

      { p: "Windows 3.1 (abril de 1992) incorporó como novedad:",
        op: ["El menú Inicio", "El juego Buscaminas", "El Explorador de archivos", "La bandeja de notificaciones"], r: 1,
        e: "La 3.0 (1990) trajo el Program Manager y el File Manager; la 3.1, el Buscaminas." },

      { p: "Windows 98 introdujo como novedad el sistema de archivos:",
        op: ["NTFS", "FAT32", "ext4", "exFAT"], r: 1,
        e: "Windows 2000 pasó a la tecnología NT; el FAT32 llegó con el 98." },

      { p: "La filosofía «Windows as a Service» corresponde a:",
        op: ["Windows XP", "Windows 7", "Windows 10", "Windows 95"], r: 2,
        e: "Windows 10 (2015) recibe actualizaciones continuas y unifica PC, tabletas y móviles." },

      { p: "¿Qué versión de Windows, publicada en 2021, cambió el diseño de iconos y el menú Inicio?",
        op: ["Windows 9", "Windows 11", "Windows 12", "Windows 8.1"], r: 1,
        e: "Windows 11 (2021) supuso un rediseño importante respecto al 10." },

      { p: "Los requisitos de instalación de Windows no incluyen:",
        op: ["CPU con arquitectura de 32/64 bits", "Espacio en disco y RAM mínima",
              "Configurar la BIOS/UEFI para arrancar desde DVD/USB", "Tener siempre impresora conectada"], r: 3,
        e: "Se necesitan hardware, drivers, Internet para actualizaciones y la BIOS/UEFI bien configurada." },

      { p: "Microsoft Pluton, asociado a Windows 12, es:",
        op: ["Un nuevo navegador", "Un chip de seguridad integrado en la CPU (tipo TPM)",
              "Un sistema de archivos", "Una red social"], r: 1,
        e: "Se habla de que podría hacer obligatoria la cuenta Microsoft." },

      { p: "El usuario invitado, en una red, conviene:",
        op: ["Habilitarlo siempre", "Deshabilitarlo: no tiene contraseña y sus documentos se pierden al cerrar sesión",
              "Darle privilegios de administrador", "Cambiarle la contraseña cada día"], r: 1,
        e: "Es un agujero de seguridad claro en entornos con red." },

      { p: "Un miembro de un grupo de Windows:",
        op: ["Hereda los privilegios del grupo y puede pertenecer a varios",
              "No hereda nada", "Solo puede estar en un grupo", "Siempre es administrador"], r: 0,
        e: "Los grupos simplifican la administración; los predefinidos se crean al instalar el SO." },

      { p: "La Restauración del Sistema permite:",
        op: ["Volver a un estado anterior sin tocar los documentos personales",
              "Borrar todos los documentos", "Formatear el disco", "Instalar otro SO"], r: 0,
        e: "Para respaldo se usan además Copia de Seguridad y el Historial de Archivos." },

      { p: "Restablecer o reparar una aplicación se hace en:",
        op: ["Configuración > Aplicaciones", "El Explorador de archivos", "El Registro", "El menú Inicio > Ejecutar"], r: 0,
        e: "También permite desinstalar, ver notificaciones y gestionar permisos de la app." },

      { p: "El Editor del Registro de Windows sirve para:",
        op: ["Modificar ajustes avanzados del Registro del sistema",
              "Editar documentos de texto", "Ver la velocidad de la red", "Desfragmentar el disco"], r: 0,
        e: "Es una herramienta para usuarios avanzados: un error puede inestabilizar el sistema." },

      { p: "Un servicio de Windows se diferencia de una aplicación en que:",
        op: ["Se activa solo al arrancar, en segundo plano y sin interfaz gráfica",
              "Siempre muestra una ventana", "Solo existe en Linux", "Hay que abrirlo a mano cada vez"], r: 0,
        e: "Las aplicaciones las ejecuta el usuario cuando las necesita." },

      { p: "En Windows, el driver de un dispositivo:",
        op: ["Lo proporciona el fabricante del hardware y debe adaptarse al sistema operativo",
              "Lo genera el usuario", "Viene siempre en la BIOS", "Es un tipo de archivo .txt"], r: 0,
        e: "El SO se comunica con el dispositivo gracias a ese controlador." },

      { p: "La operación «Mover» un archivo se realiza con:",
        op: ["Copiar + Pegar", "Cortar + Pegar", "Renombrar + Pegar", "Comprimir + Pegar"], r: 1,
        e: "Copiar + Pegar duplica; Cortar + Pegar desplaza." },

      { p: "Para seleccionar archivos NO consecutivos en el Explorador se mantiene pulsada la tecla:",
        op: ["Mayúsculas", "Control", "Alt", "Intro"], r: 1,
        e: "Mayúsculas selecciona de forma consecutiva (del primero al último)." },

      { p: "El comando de navegación que lleva directamente a la raíz de la unidad actual es:",
        op: ["cd /", "dir /", "cd ..", "type /"], r: 0,
        e: "cd / te lleva a C:\\ (o a la unidad que corresponda) sin importar la profundidad." }
    ]
  },

  abiertas: [
    { q: "¿Quiénes fundaron Microsoft y cuál fue su primer gran éxito?",
      respuestas: ["bill gates", "paul allen", "1975", "ms-dos", "msdos"],
      solucion: "Bill Gates y Paul Allen fundaron Microsoft en 1975; su primer gran éxito fue MS-DOS, un sistema operativo diseñado para los equipos IBM.",
      nivel: "basico",
      explicacion: "Windows apareció como complemento gráfico de MS-DOS." },

    { q: "Menciona cuatro componentes o elementos del escritorio de Windows.",
      respuestas: ["iconos", "fondo", "barra de tareas", "notificacion", "menu inicio", "hora"],
      solucion: "Iconos (accesos directos), fondo de pantalla, barra de tareas con el menú Inicio y el área de notificación (iconos, avisos y hora).",
      nivel: "basico",
      explicacion: "El menú Inicio da acceso a apps, anclados y funciones de energía." },

    { q: "¿Qué hace el comando cd y cómo se usa para subir un nivel y volver a la raíz?",
      respuestas: ["cambia de directorio", "cd ..", "cd /", "retroceder", "raiz"],
      solucion: "cd cambia de directorio (carpeta actual). «cd ..» retrocede un nivel hacia la carpeta padre y «cd /» (o cd \\) lleva directamente a la raíz de la unidad actual.",
      nivel: "basico",
      explicacion: "Es el comando de navegación básico del símbolo del sistema." },

    { q: "Escribe los comandos para crear la carpeta Tareas_TIC, entrar en ella y listar su contenido.",
      respuestas: ["mkdir", "cd tareas_tic", "dir"],
      solucion: "mkdir Tareas_TIC (o md), cd Tareas_TIC y dir.",
      nivel: "medio",
      explicacion: "dir /p muestra la salida paginada." },

    { q: "¿Qué diferencia hay entre copy, move y rename?",
      respuestas: ["copia", "mueve", "renombrar", "cortar", "duplicar", "desplazar"],
      solucion: "copy duplica un archivo a otro destino, move lo desplaza de sitio y rename cambia su nombre sin moverlo. También se puede mover con «Cortar + Pegar» en el Explorador.",
      nivel: "medio",
      explicacion: "del elimina archivos directamente del disco." },

    { q: "¿Qué comandos se usan para diagnosticar la red en Windows y para qué sirve cada uno?",
      respuestas: ["ipconfig", "ping", "tracert", "conectividad", "ruta", "tcp/ip"],
      solucion: "ipconfig muestra los parámetros TCP/IP (IPv4, máscara, router); ping comprueba la conectividad con otro equipo enviando paquetes de eco ICMP; tracert rastrea la ruta y el tiempo en cada router intermedio.",
      nivel: "medio",
      explicacion: "ipconfig /all da la información completa de las tarjetas." },

    { q: "Explica qué son los drivers y por qué hay que actualizarlos.",
      respuestas: ["controlador", "comunicarse con dispositivos", "fabricante", "hardware", "software"],
      solucion: "Son los programas que permiten al sistema operativo comunicarse con los dispositivos (impresora, escáner, tarjeta de red…). Los proporciona el fabricante del hardware y deben adaptarse a cada SO, por lo que hay que actualizarlos desde el Administrador de Dispositivos.",
      nivel: "medio",
      explicacion: "Sin driver correcto el dispositivo no funciona o lo hace mal." },

    { q: "Enumera los tres tipos de cuenta de Windows 10 y las funciones de cada una.",
      respuestas: ["estandar", "administrador", "invitado"],
      solucion: "Cuenta estándar: para el trabajo diario con privilegios limitados. Cuenta administradora: control total, solo cuando sea necesario. Cuenta invitado: acceso temporal; sus documentos se pierden al cerrar sesión y conviene deshabilitarla en red.",
      nivel: "medio",
      explicacion: "La primera cuenta creada en la instalación es administradora." },

    { q: "¿Qué utilidades de Windows se usan para el mantenimiento del equipo? Explica al menos tres.",
      respuestas: ["liberador de espacio", "desfragmentador", "monitor de recursos", "administrador de tareas", "historial de archivos", "restaurar"],
      solucion: "Liberador de Espacio en Disco (borra temporales y cachés), Desfragmentador de Disco (agrupa datos contiguos), Monitor de Recursos (detecta cuellos de botella en CPU, RAM y disco), Configuración de Inicio (programas automáticos) y el Administrador de Tareas. Además, Historial de Archivos o copias para el respaldo.",
      nivel: "avanzado",
      explicacion: "En los SSD el desfragmentado no es necesario." },

    { q: "Diferencia un servicio de una aplicación en Windows.",
      respuestas: ["segundo plano", "background", "sin interfaz", "arrancar", "automatico"],
      solucion: "Las aplicaciones las ejecuta el usuario cuando las necesita y suelen tener interfaz gráfica; los servicios se activan solos al arrancar, trabajan en segundo plano (background) y no tienen interfaz gráfica.",
      nivel: "avanzado",
      explicacion: "Ejemplos de servicios: impresión, red o actualizaciones." },

    { q: "¿En qué se diferencian el Panel de control y la aplicación Configuración?",
      respuestas: ["configuracion", "panel de control", "diseno tactil", "mismo alcance", "ajustes"],
      solucion: "Tienen el mismo alcance (sistema, cuentas, red, hardware, aplicaciones, privacidad…), pero el Panel de control es la vista clásica de escritorio y la aplicación Configuración tiene diseño táctil y es la ruta recomendada en Windows 10/11.",
      nivel: "avanzado",
      explicacion: "Desinstalar programas se hace en Inicio > Configuración > Aplicaciones." },

    { q: "Explica las fases por las que pasa el software antes de su distribución.",
      respuestas: ["alfa", "beta", "rc", "rtm", "estable", "revision"],
      solucion: "Alfa: primera versión de prueba, aún sin todas las funcionalidades. Beta: versión completa pendiente de revisión. RC (Release Candidate): final salvo errores. RTM/Estable: versión final lista para distribución.",
      nivel: "avanzado",
      explicacion: "De ahí que aparezcan etiquetas como «versión beta»." }
  ]
};
