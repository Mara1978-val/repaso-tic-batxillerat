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

/* =========================================================
   Ampliación del banco de test (nivel 1º Bachillerato)
   ========================================================= */

DATOS.ubuntu.test.basico.push(
  { p: "¿Qué comando se usa para cambiar de directorio en la terminal?",
    op: ["pwd", "cd", "ls", "mkdir"], r: 1,
    e: "cd /home entra en esa carpeta; cd sin argumentos vuelve a la carpeta personal del usuario." },

  { p: "¿Cuál es el directorio raíz del sistema en GNU/Linux?",
    op: ["/home", "/etc", "/", "/var"], r: 2,
    e: "Todo cuelga de /; a diferencia de Windows no hay letras de unidad como C:." },

  { p: "¿Cómo se indica al comando cd que queremos subir al directorio padre?",
    op: ["cd .", "cd ..", "cd ~", "cd /"], r: 1,
    e: "cd . no cambia de carpeta; cd ~ lleva a la carpeta personal." },

  { p: "En la terminal, el símbolo ~ representa:",
    op: ["la raíz del sistema", "el directorio personal del usuario", "el directorio actual", "la papelera"], r: 1,
    e: "~/Documentos equivale a /home/usuario/Documentos." },

  { p: "¿Qué muestra la opción -l del comando ls?",
    op: ["Los permisos, el propietario, el tamaño y la fecha de cada archivo",
         "Solo los archivos ocultos", "El contenido de todos los archivos", "La lista de procesos"], r: 0,
    e: "ls -l da el listado en formato largo; ls -a incluye también los archivos ocultos." },

  { p: "¿Qué contiene el directorio /bin de GNU/Linux?",
    op: ["Archivos de configuración", "Los documentos del usuario",
         "Programas ejecutables esenciales", "Archivos temporales"], r: 2,
    e: "/etc guarda la configuración, /home los usuarios y /tmp los archivos temporales." },

  { p: "¿Qué comando elimina una carpeta vacía?",
    op: ["rmdir", "rmfile", "del", "erase"], r: 0,
    e: "rmdir solo funciona si la carpeta está vacía; para borrar una carpeta con contenido se usa rm -r." },

  { p: "En el símbolo del sistema de la terminal, el carácter # indica que:",
    op: ["Se está trabajando como root", "Hay un error de sintaxis",
         "El equipo está apagado", "Falta un archivo"], r: 0,
    e: "Con un usuario normal el símbolo es $; con el superusuario root es #." },

  { p: "¿Cómo se reconocen los archivos ocultos en GNU/Linux?",
    op: ["Su nombre empieza por un punto", "Su nombre empieza por una arroba",
         "Siempre se llaman oculto.txt", "No se pueden crear desde la terminal"], r: 0,
    e: "Por ejemplo .bashrc; para verlos hay que usar ls -a." },

  { p: "¿Qué comando muestra un archivo de texto pantalla a pantalla?",
    op: ["cat", "more", "pwd", "touch"], r: 1,
    e: "cat lo muestra todo de una vez; more avanza con la barra espaciadora." },

  { p: "¿Para qué sirve el comando echo?",
    op: ["Para mostrar un texto en pantalla", "Para crear una carpeta",
         "Para copiar un archivo", "Para cambiar de directorio"], r: 0,
    e: "echo Hola escribe Hola; también se usa para redirigir texto a un archivo con >." },

  { p: "¿Qué tecla completa automáticamente el nombre de un comando o archivo en la terminal?",
    op: ["Intro", "Tabulador (Tab)", "Escape", "Suprimir"], r: 1,
    e: "Pulsando dos veces Tab se muestran las posibles coincidencias." },

  { p: "¿Qué es un shell?",
    op: ["Un intérprete que lee y ejecuta las órdenes del usuario",
         "Un editor de imágenes", "Un gestor de particiones", "Un tipo de archivo comprimido"], r: 0,
    e: "Es la interfaz de texto entre el usuario y el núcleo del sistema." },

  { p: "¿Para qué se usa el directorio /tmp?",
    op: ["Para guardar la configuración", "Para archivos temporales",
         "Para los programas instalados", "Para los archivos de arranque"], r: 1,
    e: "Su contenido suele borrarse al reiniciar; /boot guarda el núcleo y los archivos de arranque." },

  { p: "¿Cuál es el intérprete de comandos (shell) por defecto en Ubuntu?",
    op: ["cmd", "bash", "PowerShell", "csh"], r: 1,
    e: "bash = Bourne Again SHell; otros shells como zsh se pueden instalar después." },

  { p: "¿Qué comando cierra la sesión de la terminal?",
    op: ["exit", "clear", "stop", "close"], r: 0,
    e: "También funciona Ctrl+D; clear solo borra lo mostrado en pantalla." }
);

DATOS.ubuntu.test.medio.push(
  { p: "¿Qué comando comprueba si hay conexión con otro equipo enviando paquetes?",
    op: ["ping", "ipconfig", "net use", "ls"], r: 0,
    e: "ping envía paquetes y muestra el tiempo de respuesta; ipconfig es el comando de Windows." },

  { p: "¿Qué orden muestra la ruta que siguen los paquetes hasta un destino?",
    op: ["ping", "ip a", "traceroute", "who"], r: 2,
    e: "En Windows el equivalente es tracert; en Linux se usa traceroute." },

  { p: "¿Qué permite hacer el comando sudo?",
    op: ["Cambiar la contraseña del usuario", "Ejecutar una orden con privilegios de root",
         "Apagar el equipo", "Listar los archivos del sistema"], r: 1,
    e: "sudo nombre_de_orden pide la contraseña del usuario y ejecuta esa sola orden como root." },

  { p: "¿Qué comando cambia el propietario de un archivo?",
    op: ["chmod", "chown", "chgrp", "whoami"], r: 1,
    e: "chown usuario:grupo archivo cambia dueño y grupo; chmod cambia los permisos." },

  { p: "¿Qué opción de cp permite copiar carpetas con todo su contenido?",
    op: ["-r", "-v", "-f", "-n"], r: 0,
    e: "cp -r origen destino copia de forma recursiva; -v muestra el progreso." },

  { p: "¿Cuál es el gestor de paquetes que Ubuntu usa desde la terminal para instalar paquetes .deb?",
    op: ["rpm", "apt", "yum", "msi"], r: 1,
    e: "rpm es de Fedora/Red Hat, yum se usó en distribuciones antiguas de Red Hat y msi es de Windows." },

  { p: "¿Qué hace sudo apt upgrade?",
    op: ["Instala un paquete nuevo", "Actualiza los paquetes instalados a las versiones disponibles",
         "Elimina todos los paquetes", "Cambia el gestor de arranque"], r: 1,
    e: "apt update actualiza el índice de los repositorios; apt upgrade actualiza los paquetes instalados." },

  { p: "¿Cómo se instala desde la terminal una aplicación en formato Snap?",
    op: ["snap install nombre", "apt install snap", "snap setup nombre", "snadd nombre"], r: 0,
    e: "Snap son paquetes autocontenidos; apt instala los paquetes .deb de los repositorios." },

  { p: "¿Para qué sirve el comando grep?",
    op: ["Comprimir archivos", "Buscar líneas que coinciden con un patrón de texto",
         "Borrar las líneas de un archivo", "Contar los procesos"], r: 1,
    e: "grep texto archivo muestra las líneas que contienen ese texto; -i ignora mayúsculas." },

  { p: "¿Qué significa el símbolo | (pipe) en la terminal?",
    op: ["Redirigir la salida a un archivo", "Pasar la salida de una orden como entrada de otra",
         "Ejecutar la orden en segundo plano", "Separar los parámetros de una orden"], r: 1,
    e: "cat archivo | grep palabra busca texto dentro del archivo." },

  { p: "¿Qué muestra el comando history?",
    op: ["Las órdenes ejecutadas anteriormente", "Los procesos en ejecución",
         "Los archivos ocultos", "El espacio libre en disco"], r: 0,
    e: "Se puede repetir una orden con !número; df -h muestra el espacio en disco." },

  { p: "¿Qué información ofrece uname -a?",
    op: ["La fecha y hora del sistema", "El espacio ocupado por los archivos",
         "Datos del núcleo y del equipo, como la versión y la arquitectura",
         "La lista de usuarios conectados"], r: 2,
    e: "who muestra los usuarios conectados; date muestra la fecha." }
);

DATOS.ubuntu.test.avanzado.push(
  { p: "Un archivo con permisos 600 significa:",
    op: ["El propietario puede leer y escribir; el grupo y los demás no tienen permisos",
         "Todos pueden leerlo", "El propietario puede ejecutarlo", "Solo el grupo puede escribir"], r: 0,
    e: "6 = 4+2 (rw-), 0 = sin permisos para el grupo y el resto." },

  { p: "¿Qué valor numérico de chmod corresponde a rwxr-xr--?",
    op: ["754", "744", "755", "645"], r: 0,
    e: "rwx = 7, r-x = 5 y r-- = 4, en ese orden: propietario, grupo y resto." },

  { p: "¿Qué hace el símbolo > al redirigir la salida de una orden?",
    op: ["Crea o sobrescribe un archivo con la salida", "Añade la salida al final del archivo",
         "Toma la entrada desde un archivo", "Muestra los permisos del archivo"], r: 0,
    e: "ls > lista.txt guarda el listado; con >> se añade sin borrar lo anterior." },

  { p: "¿Qué diferencia hay entre > y >> en una redirección?",
    op: ["> y >> hacen exactamente lo mismo",
         ">> añade la salida al final del archivo, mientras que > lo sobrescribe",
         "> solo funciona con errores", ">> solo funciona con carpetas"], r: 1,
    e: "Por eso >> se usa para acumular datos, por ejemplo en un archivo de registro." },

  { p: "¿Qué se consigue con 2> archivo.log?",
    op: ["Guardar la salida normal en el archivo", "Guardar los mensajes de error en el archivo",
         "Leer el archivo como entrada", "Ejecutar la orden en segundo plano"], r: 1,
    e: "La salida estándar es 1 y la de errores es 2; 2> redirige los mensajes de error." },

  { p: "¿Cuál es la diferencia entre sudo y su?",
    op: ["su inicia una sesión como otro usuario; sudo ejecuta una sola orden con privilegios (de root por defecto) sin cambiar de sesión",
         "sudo y su son exactamente iguales", "sudo solo sirve para instalar software",
         "su solo sirve para ver archivos"], r: 0,
    e: "sudo -i abre una sesión de root; conviene usar sudo solo para la orden necesaria." },

  { p: "¿Qué comando envía una señal para terminar un proceso del que conocemos su PID?",
    op: ["rm", "kill", "top", "halt"], r: 1,
    e: "kill 1234 termina el proceso 1234; kill -9 1234 lo fuerza si no responde." },

  { p: "¿Qué comando muestra los procesos en tiempo real y su consumo de CPU y memoria?",
    op: ["free", "top", "du", "uptime"], r: 1,
    e: "ps muestra una instantánea; top se actualiza continuamente y se sale con q." },

  { p: "¿Qué significa el carácter & al final de una orden?",
    op: ["Repetir la orden varias veces", "Ocultar los mensajes de error",
         "Ejecutar la orden en segundo plano", "Cambiar los permisos del archivo"], r: 2,
    e: "Así la terminal queda libre mientras la orden sigue ejecutándose." },

  { p: "Estás en /home/alumno y quieres listar el contenido de /etc usando una ruta absoluta. ¿Qué orden es correcta?",
    op: ["ls etc", "ls /etc", "cd /etc ls", "dir /etc"], r: 1,
    e: "La ruta absoluta empieza por /; ls etc buscaría /home/alumno/etc." },

  { p: "¿Qué orden busca todos los archivos con extensión .txt dentro de /home?",
    op: ["find /home -name '*.txt'", "grep -r '*.txt' /home",
         "find /home -type '*.txt'", "ls /home/*.txt"], r: 0,
    e: "Las comillas evitan que el shell expanda el comodín antes de que find lo use." },

  { p: "¿Qué efecto tiene chmod -x archivo?",
    op: ["Añade permiso de ejecución a todos", "Quita el permiso de ejecución a propietario, grupo y resto",
         "Cambia el propietario del archivo", "Quita solo el permiso de lectura"], r: 1,
    e: "Con chmod u+x solo se añade la ejecución al propietario; con -x se quita a las tres figuras." }
);
