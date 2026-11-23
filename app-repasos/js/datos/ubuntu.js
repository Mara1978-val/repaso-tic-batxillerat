/* =========================================================
   datos/ubuntu.js
   Preguntas del tema UBUNTU / GNU-LINUX
   ========================================================= */

window.DATOS = window.DATOS || {};

DATOS.ubuntu = {
  nombre: "Ubuntu",

  test: {
    basico: [
      { p: "Ubuntu es una distribución de GNU/Linux desarrollada por:",
        op: ["Microsoft", "Apple", "Canonical Ltd.", "Oracle"], r: 2,
        e: "Financiada por Mark Shuttleworth y basada en Debian." },

      { p: "El nombre Ubuntu procede de las lenguas zulú/xhosa y significa:",
        op: ["Rapidez", "Humanidad hacia los otros", "Libertad total", "Servidor"], r: 1,
        e: "Su lema es «linux for human beings» (Linux para los seres humanos)." },

      { p: "El escritorio por defecto de Ubuntu es:",
        op: ["KDE Plasma", "GNOME", "Xfce", "MATE"], r: 1,
        e: "GNOME es también un proyecto de software libre relacionado con GNU." },

      { p: "La herramienta que permite probar Ubuntu sin instalarlo es:",
        op: ["Live CD/USB", "El registro", "El BIOS", "Nautilus"], r: 0,
        e: "Se necesita para ello la imagen .iso del sistema." },

      { p: "El explorador de archivos de Ubuntu se llama:",
        op: ["explorer", "nautilus", "chrome", "finder"], r: 1,
        e: "En Windows es explorer; en Ubuntu, nautilus." },

      { p: "El comando que muestra la ruta del directorio actual es:",
        op: ["pwd", "dir", "ls", "cd"], r: 0,
        e: "pwd = print working directory." },

      { p: "El comando que muestra el contenido de un directorio es:",
        op: ["cd", "ls", "pwd", "man"], r: 1,
        e: "ls /home/oracle lista el contenido; equivale al dir de Windows." },

      { p: "El comando que crea una carpeta en Linux es:",
        op: ["mkdir", "md", "rmdir", "touch"], r: 0,
        e: "mkdir Documents; para borrar una carpeta vacía, rmdir." },

      { p: "El directorio personal de cada usuario en GNU/Linux es:",
        op: ["/etc", "/home", "/var", "/tmp"], r: 1,
        e: "Por ejemplo /home/nombredeusuario. La raíz de todo el sistema es /." },

      { p: "El comando que limpia la pantalla de la terminal es:",
        op: ["clear", "ls", "exit", "pwd"], r: 0,
        e: "clear borra la salida; exit sale del programa o del shell." },

      { p: "El comando que muestra el manual en línea de una orden es:",
        op: ["man", "help", "info.txt", "dir"], r: 0,
        e: "man pwd muestra el manual del comando pwd." },

      { p: "Los permisos básicos de un archivo en Linux son:",
        op: ["lectura, escritura y ejecución (r, w, x)",
              "Copiar, cortar y pegar", "Rojo, verde y azul", "Alta, media y baja"], r: 0,
        e: "Se aplican a propietario, grupo y resto." },

      { p: "En Linux, ¿qué significa que los nombres de archivo distingan mayúsculas?",
        op: ["CONTROL.odt y control.odt son el mismo archivo",
              "CONTROL.odt y control.odt son archivos distintos",
              "No se pueden usar mayúsculas", "Solo las carpetas las distinguen"], r: 1,
        e: "Windows es insensible a mayúsculas; Linux sí es sensible." },

      { p: "La extensión de los scripts (ficheros de órdenes) en Linux suele ser:",
        op: [".exe", ".com", ".sh", ".bat"], r: 2,
        e: ".exe y .com son ejecutables de Windows; en Linux es .sh o la marca de ejecutable." }
    ],

    medio: [
      { p: "Ubuntu publica una nueva versión normal cada:",
        op: ["6 meses", "12 meses", "2 años", "cada semana"], r: 0,
        e: "Se soporta al menos 18 meses; las LTS salen cada 2 años con 5 años de apoyo." },

      { p: "Las versiones LTS de Ubuntu se publican cada 2 años con soporte de:",
        op: ["6 meses", "18 meses", "5 años", "10 años"], r: 2,
        e: "LTS = Long Term Support, pensada para equipos de trabajo." },

      { p: "Cuatro de los repositorios oficiales de Ubuntu son:",
        op: ["Main, Restricted, Universe y Multiverse",
              "Inicio, Medio, Avanzado y Final", "Rojo, Verde, Azul y Amarillo", "A, B, C y D"], r: 0,
        e: "Main (100% libre), Restricted (controladores no libres), Universe (comunidad) y Multiverse (restringidos)." },

      { p: "El repositorio Main de Ubuntu contiene:",
        op: ["Software 100% libre mantenido por el equipo de Ubuntu",
              "Solo juegos", "Controladores propietarios", "Archivos de usuario"], r: 0,
        e: "Restricted reúne los no libres, como los controladores de red o vídeo." },

      { p: "Antes de instalar paquetes conviene actualizar los índices de los repositorios. Estos se guardan en:",
        op: ["/var/lib/apt/lists (gestor de paquetes APT/APDO)", "/home", "/media", "/boot"], r: 0,
        e: "El gestor de paquetes también comprueba las actualizaciones disponibles." },

      { p: "En Ubuntu, la partición de intercambio (swap) sirve para:",
        op: ["Memoria virtual / área de intercambio", "Guardar fotos", "Arrancar el sistema", "Montar USB"], r: 0,
        e: "La instalación de Ubuntu necesita dos particiones: raíz / con ext4 y Linux-swap." },

      { p: "El sistema de ficheros de la partición raíz en Ubuntu es habitualmente:",
        op: ["NTFS", "FAT32", "ext4", "exFAT"], r: 2,
        e: "ext2/ext3/ext4 son los sistemas de ficheros de Linux; NTFS es de Windows." },

      { p: "El comando que copia un archivo en Linux es:",
        op: ["cp", "copy", "mv", "cat"], r: 0,
        e: "cp /home/bart/1.txt /home — el equivalente en Windows es copy." },

      { p: "¿Qué comando mueve un archivo de un sitio a otro?",
        op: ["mv", "cp", "rm", "ls"], r: 0,
        e: "mv también sirve para renombrar; rm elimina archivos." },

      { p: "El comando que elimina un archivo (sin ir a la papelera) es:",
        op: ["del", "rm", "rmdir", "kill"], r: 1,
        e: "rm /home/bart/1.txt; rmdir elimina carpetas vacías." },

      { p: "El comando que cambia los permisos de un archivo es:",
        op: ["chmod 755 archivo", "chown -l archivo", "perm archivo", "rights archivo"], r: 0,
        e: "chmod usa cifras octales (r=4, w=2, x=1) para propietario, grupo y resto." },

      { p: "El comando que muestra la lista de procesos en ejecución es:",
        op: ["ps", "ls", "pwd", "cd"], r: 0,
        e: "ps lista los procesos; find busca archivos (find /home/oracle -type f -name 1.txt)." },

      { p: "El comando que crea un archivo vacío o actualiza su marca de tiempo es:",
        op: ["touch", "new", "create", "mk"], r: 0,
        e: "touch /home/oracle/1.txt: si no existe lo crea; si existe, cambia la hora de acceso." },

      { p: "El comando cat muestra:",
        op: ["Todo el contenido de un archivo de una vez",
              "Solo la primera pantalla", "El manual", "Los permisos"], r: 0,
        e: "more lo muestra pantalla a pantalla; cat lo muestra entero." },

      { p: "Para conocer los parámetros de red en Ubuntu se usa:",
        op: ["ipconfig", "ifconfig (o ip a)", "pingconfig", "netstat only"], r: 1,
        e: "ipconfig es el de Windows; en Ubuntu 22 se usa ifconfig o ip a." },

      { p: "En el editor de texto nano, el atajo para guardar un archivo es:",
        op: ["Control + O", "Control + Z", "Control + C", "Alt + F4"], r: 0,
        e: "Control + X sale; el menú inferior muestra los atajos [Control]+[Letra]." },

      { p: "El directorio /etc de GNU/Linux contiene:",
        op: ["Archivos de configuración", "Programas del usuario", "Dispositivos físicos", "Archivos temporales"], r: 0,
        e: "/dev = dispositivos, /tmp = temporal, /bin = ejecutables esenciales, /var = información variable." },

      { p: "El directorio donde se montan automáticamente los USB y CD-ROM es:",
        op: ["/media", "/home", "/usr", "/boot"], r: 0,
        e: "Al extraer un USB hay que desmontarlo antes de desconectarlo." }
    ],

    avanzado: [
      { p: "GNU fue iniciado por Richard Stallman en:",
        op: ["1969", "1984", "1991", "2004"], r: 1,
        e: "Proyecto para crear un SO totalmente libre; el núcleo Linux llegó en 1991." },

      { p: "El software libre permite:",
        op: ["Ejecutar, copiar, modificar y distribuir el programa libremente",
              "Solo usarlo en casa", "Venderlo sin licencia", "No estudiar su código"], r: 0,
        e: "Se distribuye bajo la licencia GPL (Licencia Pública General de GNU)." },

      { p: "GNU/Linux se forma por la unión de:",
        op: ["El núcleo Linux con las herramientas GNU",
              "Windows y macOS", "Ubuntu y Debian únicamente", "El navegador y el servidor"], r: 0,
        e: "El núcleo (kernel) en sentido estricto es el SO; las variantes se llaman distribuciones." },

      { p: "Distribuciones de GNU/Linux comercializadas por empresas:",
        op: ["Fedora (Red Hat), openSUSE (Novell), Ubuntu (Canonical)",
              "Slackware y Gentoo", "Solo Ubuntu", "MS-DOS y Windows"], r: 0,
        e: "Debian y Gentoo son comunitarias; Slackware no tiene empresa detrás." },

      { p: "La diferencia entre Ubuntu normal y Ubuntu LTS es:",
        op: ["La LTS se publica cada 2 años y se soporta 5 años; la normal cada 6 meses con 18 meses",
              "La LTS no tiene escritorio", "La normal no recibe correcciones",
              "Solo cambia el color"], r: 0,
        e: "LTS = soporte a largo plazo, recomendada para equipos de producción." },

      { p: "El comando find /home/oracle -type f -name 1.txt hace:",
        op: ["Busca el archivo 1.txt dentro de /home/oracle",
              "Crea el archivo 1.txt", "Borra la carpeta", "Cambia permisos"], r: 0,
        e: "-type f limita a ficheros; -name indica el nombre buscado." },

      { p: "El valor octal 755 de chmod significa:",
        op: ["Propietario rwx, grupo r-x, resto r-x",
              "Todos solo lectura", "Todos sin permisos", "Propietario sin nada"], r: 0,
        e: "7 = 4+2+1 (lectura, escritura y ejecución) y 5 = 4+1 (lectura y ejecución)." },

      { p: "¿En qué se diferencian la ruta absoluta y la relativa en Linux?",
        op: ["La absoluta empieza siempre por /; la relativa, no",
              "La relativa empieza por / y la absoluta no",
              "Ambas empiezan por C:", "No hay diferencia"], r: 0,
        e: "Ejemplo absoluto: /home/Profesor/Control.odt; desde /home/Profesor, la relativa sería Control.odt." },

      { p: "La carpeta personal en Ubuntu es /home/usuario, mientras que en Windows 7 es:",
        op: ["C:\\Usuarios", "C:\\Windows", "/home", "C:\\Archivos"], r: 0,
        e: "En XP era C:\\Documents and Settings." },

      { p: "Los tipos de usuario en GNU/Linux son:",
        op: ["root, usuarios especiales del sistema y usuarios comunes",
              "Administrador e invitado", "Estándar y root", "Solo root"], r: 0,
        e: "root tiene todos los permisos; los especiales no tienen contraseña ni inician sesión." },

      { p: "El comando man pwd devuelve:",
        op: ["El manual en línea de la orden pwd",
              "La ruta actual", "Los permisos del fichero", "La lista de procesos"], r: 0,
        e: "man = manual; también se puede usar help en algunas órdenes." },

      { p: "El directorio /usr/bin de Ubuntu contiene:",
        op: ["Programas instalados para el usuario",
              "Dispositivos físicos", "Archivos de configuración", "La imagen del núcleo"], r: 0,
        e: "/usr/share guarda los datos compartidos; /boot, la imagen del núcleo." },

      { p: "¿Qué equivalencia existe entre órdenes de Windows y de Linux?",
        op: ["dir≈ls, copy≈cp, move≈mv, del≈rm, md≈mkdir",
              "No hay ninguna equivalencia", "dir≈rm, copy≈mv", "ipconfig≈ping"], r: 0,
        e: "cd es igual en ambos; ipconfig (Windows) corresponde a ifconfig/ip a (Linux)." },

      { p: "Un archivo con permisos 644 en Linux significa:",
        op: ["Propietario rw-, grupo r--, resto r--",
              "Todos con ejecución", "Solo lectura para todos", "Nadie puede leerlo"], r: 0,
        e: "6 = 4+2 (lectura y escritura), 4 = solo lectura." },

      { p: "El comando vi abre:",
        op: ["El editor de texto vi en la terminal", "El explorador", "El navegador", "La papelera"], r: 0,
        e: "vi es el editor clásico de Linux; nano es su alternativa más sencilla." },

      { p: "¿Por qué hay que desmontar un USB antes de extraerlo en Ubuntu?",
        op: ["Para no perder datos ni corromper el sistema de ficheros",
              "Porque USB no es compatible", "Para ahorrar batería", "Porque Linux no reconoce USB"], r: 0,
        e: "El montaje asocia la partición a una carpeta (/media); al desmontar se cierra el acceso." },

      { p: "El comando who permite:",
        op: ["Ver quiénes están conectados al sistema",
              "Cambiar de usuario", "Ver el uso de CPU", "Ver la fecha"], r: 0,
        e: "date muestra la fecha y cal el calendario del mes y año." },

      { p: "La ventaja de usar un gestor de paquetes como APT/APDO es:",
        op: ["Instala, actualiza y dependencias de forma centralizada desde los repositorios",
              "Permite borrar el sistema", "Sustituye al kernel", "No necesita repositorios"], r: 0,
        e: "Antes de instalar hay que actualizar los índices de los repositorios." }
    ]
  },

  abiertas: [
    { q: "¿Qué es Ubuntu y quién lo desarrolla?",
      respuestas: ["canonical", "distribucion", "gnu/linux", "debian", "mark shuttleworth"],
      solucion: "Ubuntu es una distribución de GNU/Linux desarrollada por Canonical Ltd. y financiada por Mark Shuttleworth; está basada en Debian y usa el escritorio GNOME. Su nombre significa «humanidad hacia los otros» y su lema es «linux for human beings».",
      nivel: "basico",
      explicacion: "Es una de las distribuciones más usadas en el ámbito educativo." },

    { q: "Menciona cinco directorios del sistema de archivos GNU/Linux y qué contienen.",
      respuestas: ["/home", "/etc", "/bin", "/var", "/tmp", "/usr", "/media", "/dev", "/boot", "/sbin"],
      solucion: "/home (usuarios), /etc (configuración), /bin (ejecutables esenciales), /var (información variable), /tmp (temporal), /usr (programas y datos), /dev (dispositivos), /boot (arranque y núcleo), /media (USB y CD montados), /sbin (administración).",
      nivel: "basico",
      explicacion: "Todo cuelga de la raíz /; no hay letras de unidad como en Windows." },

    { q: "¿Para qué sirve el comando pwd y en qué se diferencia de ls?",
      respuestas: ["ruta", "directorio actual", "listar contenido", "working directory"],
      solucion: "pwd muestra la ruta completa del directorio actual (print working directory); ls lista el contenido de un directorio (archivos y carpetas que hay dentro).",
      nivel: "basico",
      explicacion: "cd cambia de directorio, pwd dice dónde estás." },

    { q: "Escribe las órdenes para crear la carpeta Documentos dentro de /home/alumno y entrar en ella.",
      respuestas: ["mkdir /home/alumno/documentos", "cd /home/alumno/documentos", "mkdir", "cd"],
      solucion: "mkdir /home/alumno/Documentos y después cd /home/alumno/Documentos.",
      nivel: "medio",
      explicacion: "Para listar el contenido, ls; para volver atrás, cd .." },

    { q: "¿Qué son los permisos r, w y x y a quiénes se aplican?",
      respuestas: ["lectura", "escritura", "ejecucion", "propietario", "grupo", "resto"],
      solucion: "r = lectura, w = escritura, x = ejecución. En Linux cada archivo tiene propietario (el que lo creó) y los permisos se aplican a tres figuras: propietario, grupo y resto. Se gestionan con chmod (por ejemplo chmod 755 archivo).",
      nivel: "medio",
      explicacion: "7 = lectura+escritura+ejecución, 5 = lectura+ejecución, 4 = solo lectura." },

    { q: "Diferencia el comando cat del comando more.",
      respuestas: ["todo el contenido", "una pantalla", "pantalla a pantalla"],
      solucion: "cat muestra todo el contenido del archivo de una vez; more lo muestra de una pantalla en una vez, avanzando con la barra espaciadora.",
      nivel: "medio",
      explicacion: "Para texto largo, more es más cómodo." },

    { q: "¿Qué diferencias hay entre las rutas de Windows y las de GNU/Linux?",
      respuestas: ["barra invertida", "letra de unidad", "absoluta", "relativa", "puntos de montaje", "/"],
      solucion: "Windows usa letras de unidad con dos puntos y barra invertida (C:\\Usuarios\\Profesor); Linux no tiene letras, usa puntos de montaje con la raíz / y barra normal (/home/usuario). Una ruta absoluta empieza siempre por / y una relativa no (se parte desde donde estás).",
      nivel: "medio",
      explicacion: "Además Windows no distingue mayúsculas y Linux sí." },

    { q: "Explica las versiones de Ubuntu: normales y LTS.",
      respuestas: ["6 meses", "18 meses", "2 anos", "5 anos", "lts", "soporte"],
      solucion: "Ubuntu publica una nueva versión cada 6 meses, soportada al menos 18 meses. Las LTS (Long Term Support) salen cada 2 años y reciben soporte durante 5 años, lo que las hace recomendables para equipos de trabajo.",
      nivel: "medio",
      explicacion: "El soporte implica actualizaciones de seguridad del sistema." },

    { q: "Describe los cuatro repositorios oficiales de Ubuntu y sus diferencias.",
      respuestas: ["main", "restricted", "universe", "multiverse", "libre", "comunidad"],
      solucion: "Main: software 100% libre mantenido por el equipo de Ubuntu. Restricted: software no libre, como los controladores de red y vídeo. Universe: software libre de la comunidad. Multiverse: software no libre o con restricciones de uso. Antes de instalar hay que actualizar los índices.",
      nivel: "avanzado",
      explicacion: "De ahí que a veces haya que habilitarlos para instalar controladores." },

    { q: "¿Cómo se instala Ubuntu? ¿Qué particiones necesita?",
      respuestas: ["ext4", "swap", "linux-swap", "raiz", "dos particiones", "/"],
      solucion: "Ubuntu necesita dos particiones: la partición raíz / con sistema de ficheros ext4 y una partición Linux-swap (área de intercambio). Windows XP, en cambio, basta con una partición NTFS, y conviene separar sistema y datos en dos.",
      nivel: "avanzado",
      explicacion: "El gestor de arranque GRUB se instala en el MBR y permite elegir SO." },

    { q: "Explica qué es el software libre y qué licencia lo protege.",
      respuestas: ["gpl", "ejecutar", "copiar", "modificar", "distribuir", "stallman", "gnu"],
      solucion: "Es el software que se puede ejecutar, copiar, modificar y distribuir libremente. Se rige por la GPL (Licencia Pública General de GNU), proyecto iniciado por Richard Stallman en 1984 para crear un sistema operativo totalmente libre.",
      nivel: "avanzado",
      explicacion: "GNU/Linux combina ese proyecto con el núcleo Linux." },

    { q: "Escribe y explica cinco comandos básicos de la terminal de Ubuntu.",
      respuestas: ["pwd", "ls", "cd", "mkdir", "rm", "cp", "mv", "man", "clear", "chmod"],
      solucion: "pwd (ruta actual), ls (listar contenido), cd (cambiar de directorio), mkdir (crear carpeta), rm (eliminar archivo), cp (copiar), mv (mover o renombrar), man (manual de una orden), clear (limpiar pantalla) y chmod (cambiar permisos).",
      nivel: "avanzado",
      explicacion: "Equivalencias con Windows: dir≈ls, copy≈cp, move≈mv, del≈rm, md≈mkdir." },

    { q: "¿Quién es root y qué tipos de usuario existen en GNU/Linux?",
      respuestas: ["root", "todos los permisos", "especiales", "comunes", "sistema", "/home"],
      solucion: "root es el superusuario con todos los permisos (instala software y gestiona cuentas). Además hay usuarios especiales o del sistema, sin contraseña y con privilegios de root solo para tareas concretas (no inician sesión), y usuarios comunes, con su directorio propio en /home.",
      nivel: "avanzado",
      explicacion: "Conviene trabajar siempre con el usuario común y usar root solo cuando sea necesario." }
  ]
};
