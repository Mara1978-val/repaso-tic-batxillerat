/* =========================================================
   datos/redes.js
   Preguntas del tema REDES
   ========================================================= */

window.DATOS = window.DATOS || {};

DATOS.redes = {
  nombre: "Redes",

  test: {
    basico: [
      { p: "Una red de ordenadores es un conjunto de equipos:",
        op: ["Conectados para comunicarse e intercambiar información o recursos",
              "De la misma marca", "Con el mismo monitor", "Sin sistema operativo"], r: 0,
        e: "La conexión puede ser por cable o inalámbrica." },

      { p: "El dispositivo final capaz de enviar o recibir información se llama:",
        op: ["Host o nodo", "Router", "Switch", "Cable"], r: 0,
        e: "Un PC, un smartphone, una impresora de red o una cámara IP son nodos." },

      { p: "Una red que abarca un aula, una vivienda o un edificio es una:",
        op: ["WAN", "LAN", "MAN", "PAN"], r: 1,
        e: "LAN = red de área local, privada y sin medios públicos. Con Wi-Fi es WLAN." },

      { p: "La red que conecta equipos a menos de 10 metros (Bluetooth, NFC) se denomina:",
        op: ["PAN", "WAN", "MAN", "CAN"], r: 0,
        e: "Personal Area Network; con tecnología inalámbrica, WPAN." },

      { p: "Internet es el mayor ejemplo de red de tipo:",
        op: ["LAN", "PAN", "WAN", "CAN"], r: 2,
        e: "WAN = red de área amplia: países o continentes." },

      { p: "La topología en la que todos los nodos se conectan a un nodo central (el switch) es:",
        op: ["Estrella", "Bus", "Anillo", "Malla"], r: 0,
        e: "Es la habitual en Ethernet con cable RJ-45." },

      { p: "En la topología en anillo, el método de acceso al medio suele ser:",
        op: ["Token (testigo)", "Sorteo", "Broadcast", "Ninguno"], r: 0,
        e: "Token Ring: el testigo circula por el anillo y da permiso para transmitir." },

      { p: "El conector estándar del cable de par trenzado es:",
        op: ["RJ-45", "RJ-11", "USB", "HDMI"], r: 0,
        e: "RJ-11 es el telefónico; RJ-45 tiene 8 pines." },

      { p: "El medio de transmisión que usa pulsos de luz es:",
        op: ["Cable coaxial", "Fibra óptica", "Par trenzado", "Bluetooth"], r: 1,
        e: "El par trenzado y el coaxial usan impulsos eléctricos; las redes inalámbricas, ondas." },

      { p: "El componente que interconecta los equipos de una LAN analizando direcciones MAC es:",
        op: ["Switch (conmutador)", "Monitor", "Servidor", "Módem"], r: 0,
        e: "Reenvía la trama solo por el puerto del destinatario: evita colisiones y mejora la seguridad." },

      { p: "El dispositivo que interconecta redes distintas eligiendo la mejor ruta es:",
        op: ["Router (enrutador)", "Switch", "Hub", "Tarjeta de red"], r: 0,
        e: "Trabaja con direcciones IP; el doméstico integra router + switch + punto de acceso." },

      { p: "El punto de acceso Wi-Fi sirve para:",
        op: ["Unir la red cableada con los equipos inalámbricos",
              "Aumentar la memoria RAM", "Almacenar archivos", "Sustituir al router siempre"], r: 0,
        e: "Crea la celda de cobertura Wi-Fi." },

      { p: "Una dirección IP identifica a:",
        op: ["Un equipo o dispositivo en la red", "Un archivo", "Un usuario", "Un monitor"], r: 0,
        e: "En la misma red no pueden haber dos equipos con la misma IP." },

      { p: "La dirección MAC:",
        op: ["Está grabada en la tarjeta de red y es fija",
              "Se cambia cada día", "Es la misma en todos los equipos", "Solo existe en Internet"], r: 0,
        e: "Dirección física de 48 bits, identifica de forma única e invariable al dispositivo." },

      { p: "La velocidad de una red se mide en:",
        op: ["Bits por segundo (bps, Mbps, Gbps)", "Bytes por segundo siempre", "Hercios", "Vatios"], r: 0,
        e: "El ancho de banda es la capacidad máxima del canal." }
    ],

    medio: [
      { p: "El par trenzado está formado por:",
        op: ["8 hilos de cobre en 4 pares helicoidales",
              "Un núcleo de vidrio", "Un solo hilo coaxial", "Ondas de radio"], r: 0,
        e: "El trenzado reduce las interferencias y la diafonía entre pares." },

      { p: "Si en un cable se usan normas T-568A en un extremo y T-568B en el otro, el cable es:",
        op: ["Directo (PC-switch)", "Cruzado (PC-PC)", "De fibra", "Serial"], r: 1,
        e: "Mismo extremo en ambos = directo; distinto = cruzado. Hoy las tarjetas tienen Auto-MDIX." },

      { p: "El par trenzado empieza a sufrir atenuación notable a partir de:",
        op: ["10 metros", "100 metros", "500 metros", "1 kilómetro"], r: 1,
        e: "Por eso el tramo horizontal típico de la estructurada está en ese límite." },

      { p: "Una categoría de cable Cat 5e permite velocidades de hasta:",
        op: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"], r: 2,
        e: "Cat 5 = 100 Mbps, Cat 5e = 1 Gbps, Cat 6 = 1-10 Gbps, Cat 8 = 25-40 Gbps." },

      { p: "La fibra óptica multimodo se caracteriza por:",
        op: ["Núcleo de 50 o 62,5 micrómetros con LED, para distancias cortas",
              "Núcleo de 9 micrómetros con láser", "Usar cobre", "Ser más barata que el par trenzado"], r: 0,
        e: "La monomodo (9 µm, láser) alcanza decenas de kilómetros." },

      { p: "Principal inconveniente de la fibra óptica:",
        op: ["Su coste y delicadeza de instalación",
              "Que solo transmite a 10 Mbps", "Que no admite luz", "Que es magnética"], r: 0,
        e: "Necesita fusionadoras y personal especializado; a cambio, gran velocidad y seguridad." },

      { p: "La familia de estándares Wi-Fi es la IEEE:",
        op: ["802.11", "802.3", "802.15.1", "802.1Q"], r: 0,
        e: "802.3 es Ethernet cableado, 802.15.1 Bluetooth y 802.1Q VLAN." },

      { p: "El estándar 802.11n (Wi-Fi 4) trabaja en las bandas de:",
        op: ["Solo 2,4 GHz", "2,4 y 5 GHz", "Solo 6 GHz", "400 MHz"], r: 1,
        e: "802.11b/g: 2,4 GHz y 25-35 m; 802.11n: 2,4/5 GHz y unos 75 m de alcance." },

      { p: "La banda de frecuencias WiFi está organizada en 14 canales. Para evitar por completo la interferencia con una red cercana hace falta separarse:",
        op: ["1 canal", "4 canales", "14 canales", "Ninguno"], r: 1,
        e: "La interferencia se evita totalmente con una separación de cuatro canales." },

      { p: "Bluetooth trabaja en la banda de 2,4 GHz y su estándar es el IEEE:",
        op: ["802.15.1", "802.11ac", "802.3", "802.16"], r: 0,
        e: "Según la potencia: Clase I = 100 m, Clase II = 10 m y Clase III = 1 m." },

      { p: "La dirección IPv4 está formada por:",
        op: ["32 bits en cuatro octetos separados por puntos",
              "128 bits en hexadecimal", "48 bits en hexadecimales", "16 bits"], r: 0,
        e: "Ej.: 192.168.1.1. Cada octeto va de 0 a 255 (147.270.2.30 es inválido)." },

      { p: "La clase de direcciones 192.168.0.0 – 192.168.255.255 es la clase:",
        op: ["A", "B", "C", "D"], r: 2,
        e: "Clase C: máscara 255.255.255.0, 24 bits de red y 8 de host (254 hosts)." },

      { p: "La máscara de subred permite:",
        op: ["Distinguir qué parte de la IP es red y qué parte es host",
              "Acelerar la conexión", "Cifrar los paquetes", "Asignar nombres de dominio"], r: 0,
        e: "Es una sucesión de unos seguida de ceros hasta completar 32 bits." },

      { p: "El protocolo que asigna direcciones IP de forma dinámica es:",
        op: ["DHCP", "DNS", "FTP", "SMTP"], r: 0,
        e: "El servidor DHCP lleva la lista de IPs asignadas a cada MAC y su caducidad." },

      { p: "El dispositivo al que se envían los paquetes destinados a otra red es:",
        op: ["La puerta de enlace (gateway)", "El switch", "La tarjeta de red", "El servidor DNS"], r: 0,
        e: "Se comprueba con una operación AND bit a bit entre IP y máscara." },

      { p: "La función NAT de un router permite:",
        op: ["Traducir las direcciones locales a la IP pública del router",
              "Aumentar el ancho de banda", "Cifrar el tráfico", "Asignar MAC"], r: 0,
        e: "Sin ella, los equipos internos no podrían salir a Internet con una sola IP pública." },

      { p: "La dirección 127.0.0.1 es:",
        op: ["Loopback: redirige los paquetes al propio equipo",
              "Una IP pública", "La del router", "La de broadcast"], r: 0,
        e: "Sirve para verificar la pila TCP/IP sin salir del equipo." },

      { p: "El comando para ver la configuración de red en Windows es:",
        op: ["ipconfig /all", "ifconfig", "ping", "tracert"], r: 0,
        e: "En Ubuntu se usa ifconfig o ip a." }
    ],

    avanzado: [
      { p: "Una IP 172.29.71.151/23 tiene una máscara de:",
        op: ["255.255.255.0", "255.255.254.0", "255.255.0.0", "255.0.0.0"], r: 1,
        e: "/23 = 23 unos → 11111111.11111111.11111110.00000000 = 255.255.254.0." },

      { p: "En la red 192.168.1.0/24, la dirección de broadcast es:",
        op: ["192.168.1.1", "192.168.1.0", "192.168.1.255", "255.255.255.0"], r: 2,
        e: "La de red acaba en 0; la broadcast tiene todos los bits de host a 1 (255)." },

      { p: "En una red /24, el número de hosts utilizables es:",
        op: ["256", "254", "255", "248"], r: 1,
        e: "2^8 = 256 direcciones, menos la de red y la de broadcast = 254 hosts." },

      { p: "Si dividimos 192.168.0.0/24 en 4 subredes, la nueva máscara será:",
        op: ["255.255.255.0", "255.255.255.192", "255.255.255.128", "255.255.255.224"], r: 1,
        e: "256/4 = 64 → máscara 256−64 = 192 (255.255.255.192, /26), con 64 IPs y 62 hosts por subred." },

      { p: "Al dividir una red /24 en 2 subredes (/25), cada subred tendrá:",
        op: ["128 IPs y 126 hosts", "256 IPs y 254 hosts", "64 IPs y 62 hosts", "254 IPs"], r: 0,
        e: "Máscara 255.255.255.128; broadcast de la primera en .127 y de la segunda en .255." },

      { p: "¿A qué clase pertenece la IP 130.238.44.8?",
        op: ["Clase A", "Clase B", "Clase C", "Clase D"], r: 1,
        e: "Clase B: primer byte 128-191, máscara 255.255.0.0, 16 bits de red y 16 de host." },

      { p: "La clase D de direcciones (224-239) se usa para:",
        op: ["Multidifusión (multicast)", "Direcciones de host", "Broadcast", "El loopback"], r: 0,
        e: "La clase E (240-255) está reservada para experimentación de la IETF." },

      { p: "¿Cuántas direcciones IPv4 caben en teoría en total?",
        op: ["4.294.967.296", "65.536", "256", "340 sextillones"], r: 0,
        e: "2^32 ≈ 4.294.967.296; los 340 sextillones son de IPv6 (128 bits)." },

      { p: "Las direcciones 169.254.0.0 – 169.254.255.255 indican:",
        op: ["Una IP autoasignada mal cuando no hay servidor DHCP",
              "Una red privada válida", "El loopback", "Una IP pública"], r: 0,
        e: "Son APIPA: el equipo no ha podido obtener configuración del servidor DHCP." },

      { p: "Dos equipos con IP 192.168.16.15 y 192.168.5.23 (máscara 255.255.255.0):",
        op: ["No están en la misma red y no se comunican directamente",
              "Están en la misma red", "Se comunican por Bluetooth", "Necesitan un switch solamente"], r: 0,
        e: "Los octetos de red difieren (16 ≠ 5): hace falta un router que los enlace." },

      { p: "Las direcciones privadas de clase B abarcan:",
        op: ["172.16.0.0 – 172.31.255.255", "172.0.0.0 – 172.255.255.255",
              "10.0.0.0 – 10.255.255.255", "192.168.0.0 – 192.168.255.255"], r: 0,
        e: "Clase A: 10.x; clase C: 192.168.x. Solo ven los equipos de la LAN." },

      { p: "¿Qué ventaja aporta el switch frente al concentrador (hub)?",
        op: ["Filtra por dirección MAC y reenvía solo por el puerto destinatario",
              "Amplifica la señal a todos los puertos", "Asigna IP automáticamente", "Cifra el tráfico"], r: 0,
        e: "Reduce colisiones y aumenta la seguridad de la red." },

      { p: "La topología en malla se caracteriza por:",
        op: ["Múltiples enlaces directos entre nodos, gran tolerancia a fallos",
              "Un solo cable troncal", "Un nodo central único", "Un único sentido de circulación"], r: 0,
        e: "Es la base de las WAN; su inconveniente es el coste y el cableado necesario." },

      { p: "La principal ventaja de la topología en bus es:",
        op: ["Es barata y fácil de instalar (ideal para redes temporales)",
              "Que un corte no la afecta", "Que es muy rápida al crecer", "Que no necesita terminadores"], r: 0,
        e: "Inconveniente: un corte en el troncal cae toda la red y el rendimiento baja al añadir equipos." },

      { p: "Una VLAN (IEEE 802.1Q) permite:",
        op: ["Segmentar lógicamente la red por software sin cableado nuevo",
              "Sustituir al router", "Aumentar la fibra", "Asignar direcciones MAC"], r: 0,
        e: "Separa departamentos en la misma infraestructura, mejorando seguridad y rendimiento." },

      { p: "El estándar IEEE 802.16 corresponde a:",
        op: ["WiMAX / microondas terrestres", "Wi-Fi", "Ethernet", "Bluetooth"], r: 0,
        e: "Conecta edificios sin necesidad de fibra; el satélite da cobertura WAN global." },

      { p: "Según los apuntes, la velocidad media de la fibra óptica es de unos:",
        op: ["2 Gbps", "100 Mbps", "54 Mbps", "10 Mbps"], r: 0,
        e: "El par trenzado va a 100-1000 Mbps y el Wi-Fi ronda los 54 Mbps de media." },

      { p: "La dirección MAC está formada por:",
        op: ["48 bits en 6 pares hexadecimales",
              "32 bits en decimal", "128 bits en hexadecimal", "16 bits"], r: 0,
        e: "Ej.: 00:1A:2B:3C:4D:5E; los 3 primeros pares identifican al fabricante." },

      { p: "IPv6 se diferencia de IPv4 en que:",
        op: ["Tiene 128 bits, autoconfiguración sin DHCP e IPSec nativo",
              "Tiene 32 bits", "No admite multicast", "Usa puntos decimales"], r: 0,
        e: "Anotación hexadecimal (2001:0db8:…); surge por el agotamiento de IPv4." },

      { p: "En el montaje de 8 PC con IPs 192.168.1.10-17, la puerta de enlace habitual es:",
        op: ["192.168.1.1", "192.168.1.255", "192.168.1.0", "255.255.255.0"], r: 0,
        e: "Máscara 255.255.255.0; se necesitan un switch de al menos 10 puertos y 9 latiguillos." },

      { p: "Los pasos de instalación de una red cableada incluyen, en orden:",
        op: ["Tarjeta de red → cableado → driver → configurar TCP/IP → nombre y grupo de trabajo",
              "Driver → tarjeta → nombre → cableado → TCP/IP", "Solo cableado y TCP/IP",
              "Grupo de trabajo → driver → tarjeta"], r: 0,
        e: "El driver permite que el SO reconozca la tarjeta y pueda comunicarse con ella." },

      { p: "El protocolo TCP/IP se caracteriza porque:",
        op: ["IP direcciona y encamina; TCP garantiza la entrega ordenada y fiable",
              "TCP solo direcciona", "IP no trabaja con paquetes", "No permite equipos de distinto SO"], r: 0,
        e: "Es el protocolo de Internet: permite que equipos de distinto hardware y SO se entiendan." }
    ]
  },

  abiertas: [
    { q: "¿Qué es una red de ordenadores y cuáles son los cinco elementos de toda comunicación?",
      respuestas: ["emisor", "receptor", "mensaje", "medio", "protocolo", "canal"],
      solucion: "Es un conjunto de equipos conectados por medios físicos o inalámbricos para comunicarse e intercambiar información y recursos. Los cinco elementos son: emisor, receptor, mensaje (información codificada en bits), medio o canal y protocolo (normas del diálogo).",
      nivel: "basico",
      explicacion: "Host o nodo es cualquier dispositivo final que envía o recibe información." },

    { q: "Diferencia una LAN de una WAN y da un ejemplo de cada una.",
      respuestas: ["area local", "area amplia", "edificio", "internet", "pais", "continente"],
      solucion: "La LAN (área local) cubre un espacio reducido y privado (vivienda, oficina, aula) sin medios públicos; la WAN (área amplia) abarca países o continentes usando fibra troncal, cables submarinos, microondas y satélites. Internet es la mayor WAN.",
      nivel: "basico",
      explicacion: "También hay PAN (hasta 10 m) y MAN (cobertura metropolitana)." },

    { q: "Nombra cuatro topologías de red y describe brevemente la estrella y el bus.",
      respuestas: ["estrella", "bus", "anillo", "malla", "arbol", "switch", "troncal", "token"],
      solucion: "Estrella, bus, anillo, malla, árbol y mixta. En ESTRELLA todos los nodos se conectan a un nodo central (hoy el switch): si falla un cable solo se afecta a un equipo, pero si cae el switch cae toda la red. En BUS hay un único cable troncal con terminadores: es barata y fácil de instalar, pero un corte la deja fuera de servicio y el rendimiento baja al añadir equipos.",
      nivel: "basico",
      explicacion: "El anillo usa token y la malla es la base de las WAN." },

    { q: "¿Cuáles son las principales diferencias entre el par trenzado y la fibra óptica?",
      respuestas: ["cobre", "luz", "100 metros", "barata", "caro", "interferencias", "electricidad"],
      solucion: "El par trenzado usa 8 hilos de cobre en 4 pares (impulsos eléctricos), es económico, se limita a unos 100 metros y sufre interferencias. La fibra óptica transmite pulsos de luz por un núcleo de vidrio: mucha más velocidad (Gbps a Tbps), inmunidad a interferencias, baja atenuación y mayor seguridad, pero es cara y delicada de instalar.",
      nivel: "medio",
      explicacion: "El coaxial es intermedio: usa blindaje y aún se ve en la TV por cable." },

    { q: "Explica qué es una dirección IP, una dirección MAC y en qué se diferencian.",
      respuestas: ["logica", "fisica", "32 bits", "48 bits", "cambiar", "grabada", "fabricante"],
      solucion: "La IP es una dirección LÓGICA de 32 bits (cuatro octetos) que se asigna por software y puede cambiarse; identifica al equipo en la red. La MAC es una dirección FÍSICA de 48 bits grabada de fábrica en la tarjeta de red, fija e invariable; sus tres primeros pares identifican al fabricante. TCP/IP gestiona la correspondencia entre ambas.",
      nivel: "medio",
      explicacion: "En la misma red no puede haber dos IPs iguales." },

    { q: "¿Qué hace el servidor DHCP y para qué sirve la máscara de subred?",
      respuestas: ["dinamica", "automatica", "cada vez que se conecta", "red y host", "subredes", "ones"],
      solucion: "DHCP asigna direcciones IP de forma dinámica cada vez que un equipo se conecta, llevando registro de las IPs entregadas a cada MAC y su caducidad. La máscara de subred indica qué parte de la IP es la dirección de red y qué parte es la del host, y permite dividir redes grandes en subredes más manejables.",
      nivel: "medio",
      explicacion: "Es una sucesión de unos seguida de ceros hasta completar 32 bits." },

    { q: "¿Qué es el NAT y por qué es imprescindible en un router doméstico?",
      respuestas: ["network address translation", "traducir", "ip publica", "salida a internet", "ingles"],
      solucion: "NAT (Network Address Translation) traduce las direcciones IP locales de los paquetes que salen de la LAN sustituyéndolas por la IP pública del router, y hace la traducción inversa al recibir la respuesta. Es imprescindible porque solo el router tiene IP pública: sin NAT, los equipos internos no podrían comunicarse con Internet.",
      nivel: "avanzado",
      explicacion: "Por eso una misma IP privada puede existir en miles de redes distintas." },

    { q: "Explica cómo se calcula el número de hosts de una red 192.168.0.0/24 y cuál es su broadcast.",
      respuestas: ["254", "256", "256-2", "2^8", "192.168.0.255", "red y broadcast"],
      solucion: "/24 significa 24 bits de red y 8 de host: 2^8 = 256 direcciones. Restando la dirección de red (192.168.0.0) y la de broadcast (192.168.0.255, con todos los bits de host a 1) quedan 254 hosts utilizables (de .1 a .254).",
      nivel: "avanzado",
      explicacion: "Los dos primeros y el último siempre se reservan." },

    { q: "Divide 192.168.0.0/24 en 4 subredes e indica máscara, IPs por subred y hosts utilizables.",
      respuestas: ["255.255.255.192", "/26", "64", "62", "192"],
      solucion: "256/4 = 64 direcciones por subred → máscara 256−64 = 192, es decir 255.255.255.192 (/26, 26 unos y 6 ceros). Cada subred tiene 64 IPs y 62 hosts utilizables, con bloques .0, .64, .128 y .192 (broadcast en .63, .127, .191 y .255).",
      nivel: "avanzado",
      explicacion: "En vez de /25 (126 hosts), aquí se necesitan bits menos prestados." },

    { q: "¿Cuáles son las diferencias entre IP pública y privada? Da los rangos privados.",
      respuestas: ["10.", "172.16", "192.168", "unicas en internet", "solo lan", "router"],
      solucion: "Las públicas son únicas en Internet y las gestiona organismos internacionales (RIR); las privadas solo tienen validez dentro de la LAN, se repiten en cualquier red del mundo y las ve solo la red local. Rangos: clase A 10.0.0.0-10.255.255.255, clase B 172.16.0.0-172.31.255.255 y clase C 192.168.0.0-192.168.255.255.",
      nivel: "avanzado",
      explicacion: "El router es el único equipo de la LAN con IP pública." },

    { q: "Menciona los comandos para comprobar la red en Windows y en Linux y para qué sirve cada uno.",
      respuestas: ["ipconfig", "ifconfig", "ip a", "ping", "tracert", "conectividad", "ruta"],
      solucion: "En Windows: ipconfig /all (parámetros TCP/IP de las tarjetas), ping (conectividad con otro equipo mediante paquetes ICMP de eco) y tracert (ruta y tiempo en cada router intermedio). En Linux: ifconfig o ip a para la configuración de red, y ping con el mismo significado.",
      nivel: "medio",
      explicacion: "ping 8.8.8.8 comprueba si hay salida a Internet." },

    { q: "¿Por qué las redes inalámbricas necesitan cifrado y qué estándares de seguridad se citan?",
      respuestas: ["wpa2", "wpa3", "cifrado", "interferencias", "banda abierta", "no exclusiva"],
      solucion: "La banda de frecuencias WiFi es de uso no exclusivo: cualquiera puede usarla sin autorización, lo que la hace vulnerable a escuchas. Por eso exige un cifrado robusto, como WPA2 o WPA3. Además hay que vigilar las interferencias (microondas, teléfonos inalámbricos, otras redes) y la ubicación de los equipos y obstáculos.",
      nivel: "avanzado",
      explicacion: "La fibra óptica, por contra, es muy segura frente a escuchas." },

    { q: "¿Qué es un protocolo de red?",
      respuestas: ["reglas", "un protocolo de red"],
      solucion: "Un protocolo de red: conjunto de reglas que permiten comunicarse a los dispositivos.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve un servidor?",
      respuestas: ["ofrece servicios", "un servidor"],
      solucion: "Un servidor: ordenador que ofrece servicios a otros equipos de la red.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es un cliente.",
      respuestas: ["solicita", "un cliente"],
      solucion: "Un cliente: equipo que solicita y consume los servicios del servidor.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define un nodo.",
      respuestas: ["dispositivo conectado", "un nodo"],
      solucion: "Un nodo: dispositivo cualquiera conectado a la red.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es un switch?",
      respuestas: ["puerto de destino", "un switch"],
      solucion: "Un switch: dispositivo que conecta equipos en una LAN y envía los datos solo al puerto de destino.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve un router?",
      respuestas: ["interconecta redes", "un router"],
      solucion: "Un router: dispositivo que interconecta redes distintas y dirige los paquetes.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es un hub.",
      respuestas: ["todos los puertos", "un hub"],
      solucion: "Un hub: dispositivo antiguo que reparte la señal a todos los puertos.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define una tarjeta de red.",
      respuestas: ["conectarse a la red", "una tarjeta de red"],
      solucion: "Una tarjeta de red: componente que permite al ordenador conectarse a la red.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es el cable UTP?",
      respuestas: ["par trenzado", "el cable utp"],
      solucion: "El cable UTP: par trenzado sin apantallamiento usado en Ethernet.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el cable STP?",
      respuestas: ["apantallamiento", "el cable stp"],
      solucion: "El cable STP: par trenzado con apantallamiento que reduce las interferencias.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es la fibra óptica.",
      respuestas: ["pulsos de luz", "la fibra óptica"],
      solucion: "La fibra óptica: cable que transmite datos como pulsos de luz.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define el cable coaxial.",
      respuestas: ["conductor central", "el cable coaxial"],
      solucion: "El cable coaxial: cable con conductor central y malla usado antiguamente en Ethernet.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es una LAN?",
      respuestas: ["área local", "una lan"],
      solucion: "Una LAN: red de área local que cubre un edificio o aula.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve una WAN?",
      respuestas: ["área extensa", "una wan"],
      solucion: "Una WAN: red de área extensa que conecta redes geográficamente separadas.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es una MAN.",
      respuestas: ["metropolitana", "una man"],
      solucion: "Una MAN: red de área metropolitana que cubre una ciudad.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define una PAN.",
      respuestas: ["área personal", "una pan"],
      solucion: "Una PAN: red de área personal de pocos metros, como Bluetooth.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es Internet?",
      respuestas: ["red mundial", "internet"],
      solucion: "Internet: red mundial de redes que usa el protocolo TCP/IP.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve una intranet?",
      respuestas: ["privada", "una intranet"],
      solucion: "Una intranet: red privada interna de una organización.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es una extranet.",
      respuestas: ["externos", "una extranet"],
      solucion: "Una extranet: red privada que se abre parcialmente a usuarios externos.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define un navegador.",
      respuestas: ["páginas web", "un navegador"],
      solucion: "Un navegador: programa que permite visitar páginas web.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es una URL?",
      respuestas: ["dirección", "una url"],
      solucion: "Una URL: dirección que identifica un recurso en Internet.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve un dominio?",
      respuestas: ["nombre", "un dominio"],
      solucion: "Un dominio: nombre legible que identifica una dirección IP.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es el DNS.",
      respuestas: ["traduce nombres", "el dns"],
      solucion: "El DNS: servicio que traduce nombres de dominio a direcciones IP.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define el correo electrónico.",
      respuestas: ["mensajes", "el correo electrónico"],
      solucion: "El correo electrónico: servicio que permite enviar mensajes por la red.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es el protocolo FTP?",
      respuestas: ["transferir archivos", "el protocolo ftp"],
      solucion: "El protocolo FTP: protocolo para transferir archivos entre equipos.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el protocolo HTTP?",
      respuestas: ["páginas web", "el protocolo http"],
      solucion: "El protocolo HTTP: protocolo de aplicación para transferir páginas web.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es un puerto de red.",
      respuestas: ["número", "un puerto de red"],
      solucion: "Un puerto de red: número que identifica un servicio dentro de una IP.",
      nivel: "basico",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define el modelo OSI.",
      respuestas: ["7 capas", "el modelo osi"],
      solucion: "El modelo OSI: modelo de referencia de 7 capas para las comunicaciones.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es el modelo TCP/IP?",
      respuestas: ["4 capas", "el modelo tcp/ip"],
      solucion: "El modelo TCP/IP: modelo de 4 capas usado por Internet.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve la capa física?",
      respuestas: ["bits", "la capa física"],
      solucion: "La capa física: nivel que transmite bits por el medio físico.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es la capa de enlace.",
      respuestas: ["tramas", "la capa de enlace"],
      solucion: "La capa de enlace: nivel que empaqueta datos en tramas y usa direcciones MAC.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define la capa de red.",
      respuestas: ["paquetes", "la capa de red"],
      solucion: "La capa de red: nivel que dirige paquetes usando direcciones IP.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es la capa de transporte?",
      respuestas: ["extremo a extremo", "la capa de transporte"],
      solucion: "La capa de transporte: nivel que garantiza la entrega de extremo a extremo.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve la capa de sesión?",
      respuestas: ["sesión", "la capa de sesión"],
      solucion: "La capa de sesión: nivel que establece y mantiene la sesión entre aplicaciones.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es la capa de presentación.",
      respuestas: ["formato", "la capa de presentación"],
      solucion: "La capa de presentación: nivel que da formato, cifra y comprime los datos.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define la capa de aplicación.",
      respuestas: ["servicios", "la capa de aplicación"],
      solucion: "La capa de aplicación: nivel donde están los servicios visibles para el usuario.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es el protocolo TCP?",
      respuestas: ["orientado a conexión", "el protocolo tcp"],
      solucion: "El protocolo TCP: protocolo orientado a conexión y fiable.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el protocolo UDP?",
      respuestas: ["sin conexión", "el protocolo udp"],
      solucion: "El protocolo UDP: protocolo sin conexión y más rápido pero no fiable.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es la conmutación de paquetes.",
      respuestas: ["paquetes", "la conmutación de paquetes"],
      solucion: "La conmutación de paquetes: técnica que divide la información en paquetes con destino independiente.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define el MTU.",
      respuestas: ["tamaño máximo", "el mtu"],
      solucion: "El MTU: tamaño máximo de paquete que puede viajar por una red.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es un gateway?",
      respuestas: ["conecta dos redes", "un gateway"],
      solucion: "Un gateway: equipo que conecta dos redes con protocolos distintos.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el enrutamiento estático?",
      respuestas: ["manualmente", "el enrutamiento estático"],
      solucion: "El enrutamiento estático: rutas configuradas manualmente en el router.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es el enrutamiento dinámico.",
      respuestas: ["automáticamente", "el enrutamiento dinámico"],
      solucion: "El enrutamiento dinámico: rutas que los routers aprenden automáticamente.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define el protocolo ARP.",
      respuestas: ["IP a MAC", "el protocolo arp"],
      solucion: "El protocolo ARP: protocolo que traduce direcciones IP a MAC.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es el protocolo ICMP?",
      respuestas: ["diagnóstico", "el protocolo icmp"],
      solucion: "El protocolo ICMP: protocolo de diagnóstico usado por ping.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el comando ping?",
      respuestas: ["conectividad", "el comando ping"],
      solucion: "El comando ping: comando que comprueba la conectividad con otro equipo.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es el comando tracert.",
      respuestas: ["ruta", "el comando tracert"],
      solucion: "El comando tracert: comando que muestra la ruta seguida por los paquetes.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define el TTL.",
      respuestas: ["saltos", "el ttl"],
      solucion: "El TTL: valor que limita el número de saltos de un paquete.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es una máscara de subred?",
      respuestas: ["parte de red", "una máscara de subred"],
      solucion: "Una máscara de subred: número que separa la parte de red de la parte de host en una IP.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el CIDR?",
      respuestas: ["bits de red", "el cidr"],
      solucion: "El CIDR: notación que indica la IP y el número de bits de red.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es las clases A, B y C.",
      respuestas: ["clasificación", "las clases a, b y c"],
      solucion: "Las clases A, B y C: clasificación antigua de las direcciones IP según su tamaño.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define IPv6.",
      respuestas: ["128 bits", "ipv6"],
      solucion: "IPv6: versión de IP de 128 bits que sustituye a IPv4.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es una VPN?",
      respuestas: ["túnel cifrado", "una vpn"],
      solucion: "Una VPN: túnel cifrado que permite comunicarse de forma segura por otra red.",
      nivel: "medio",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el algoritmo OSPF?",
      respuestas: ["Dijkstra", "el algoritmo ospf"],
      solucion: "El algoritmo OSPF: protocolo de enrutamiento de estado de enlace que usa Dijkstra.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es el protocolo BGP.",
      respuestas: ["sistemas autónomos", "el protocolo bgp"],
      solucion: "El protocolo BGP: protocolo de enrutamiento entre sistemas autónomos de Internet.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define MPLS.",
      respuestas: ["etiqueta", "mpls"],
      solucion: "MPLS: técnica que etiqueta los paquetes para enrutarlos rápidamente.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es una VLAN?",
      respuestas: ["red lógica", "una vlan"],
      solucion: "Una VLAN: red lógica independiente creada sobre una física.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el protocolo STP?",
      respuestas: ["bucles", "el protocolo stp"],
      solucion: "El protocolo STP: protocolo que evita bucles en redes conmutadas.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es LACP.",
      respuestas: ["agrupa", "lacp"],
      solucion: "LACP: protocolo que agrupa varios enlaces físicos en uno lógico.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define un firewall.",
      respuestas: ["filtra", "un firewall"],
      solucion: "Un firewall: sistema que filtra el tráfico según reglas de seguridad.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es un IDS?",
      respuestas: ["detecta", "un ids"],
      solucion: "Un IDS: sistema que detecta intrusiones y alerta.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve un IPS?",
      respuestas: ["bloquea", "un ips"],
      solucion: "Un IPS: sistema que detecta y bloquea intrusiones activamente.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es una DMZ.",
      respuestas: ["zona perimetral", "una dmz"],
      solucion: "Una DMZ: zona perimetral donde se colocan servidores públicos.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define WPA2.",
      respuestas: ["AES", "wpa2"],
      solucion: "WPA2: estándar de seguridad WiFi que usa AES.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es WEP?",
      respuestas: ["inseguro", "wep"],
      solucion: "WEP: cifrado WiFi antiguo e inseguro.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el SSID?",
      respuestas: ["nombre", "el ssid"],
      solucion: "El SSID: nombre que identifica una red inalámbrica.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es la banda de 2,4 GHz.",
      respuestas: ["canales", "la banda de 2,4 ghz"],
      solucion: "La banda de 2,4 GHz: banda WiFi con canales de 20 MHz que solapan entre sí.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define MIMO.",
      respuestas: ["antenas", "mimo"],
      solucion: "MIMO: técnica WiFi que usa varias antenas para mejorar el rendimiento.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es beamforming?",
      respuestas: ["dirige la señal", "beamforming"],
      solucion: "Beamforming: técnica que dirige la señal WiFi hacia el cliente.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve PoE?",
      respuestas: ["energía", "poe"],
      solucion: "PoE: tecnología que envía datos y energía por el mismo cable Ethernet.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es SNMP.",
      respuestas: ["gestionar", "snmp"],
      solucion: "SNMP: protocolo para gestionar y monitorizar dispositivos de red.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define syslog.",
      respuestas: ["registro", "syslog"],
      solucion: "Syslog: protocolo para enviar mensajes de registro a un servidor.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es la ruta por defecto?",
      respuestas: ["más específica", "la ruta por defecto"],
      solucion: "La ruta por defecto: ruta usada cuando no hay una más específica para el destino.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el NAT estático?",
      respuestas: ["fija", "el nat estático"],
      solucion: "El NAT estático: traducción fija entre una IP pública y una privada.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Explica qué es el PAT.",
      respuestas: ["puertos", "el pat"],
      solucion: "El PAT: traducción que comparte una IP pública con muchos equipos usando puertos.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "Define la fragmentación IP.",
      respuestas: ["fragmentos", "la fragmentación ip"],
      solucion: "La fragmentación IP: división de un paquete grande en fragmentos más pequeños.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Qué es el checksum?",
      respuestas: ["detecta errores", "el checksum"],
      solucion: "El checksum: valor de comprobación que detecta errores en los datos.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." },

    { q: "¿Para qué sirve el DNS recursivo?",
      respuestas: ["todas las peticiones", "el dns recursivo"],
      solucion: "El DNS recursivo: consulta en la que el servidor hace todas las peticiones hasta resolver.",
      nivel: "avanzado",
      explicacion: "Concepto del bloque de redes que conviene repasar antes del examen." }
  ]
};

/* =========================================================
   Ampliación del banco de test: hasta 30 preguntas por nivel
   ========================================================= */

DATOS.redes.test.basico.push(
  { p: "El modelo OSI de interoperabilidad de sistemas abiertos está formado por:",
    op: ["7 capas", "4 capas", "5 capas", "3 capas"], r: 0,
    e: "De inferior a superior: física, enlace, red, transporte, sesión, presentación y aplicación." },

  { p: "En el modelo OSI, la capa que se encarga del direccionamiento lógico y del enrutamiento es la capa:",
    op: ["Física", "Enlace de datos", "Red", "Aplicación"], r: 2,
    e: "En ella trabajan el protocolo IP y los routers; la capa 2 usa direcciones MAC." },

  { p: "El protocolo de transporte sin conexión, ligero y que no garantiza la entrega es:",
    op: ["TCP", "UDP", "HTTP", "FTP"], r: 1,
    e: "UDP se usa en streaming, DNS y VoIP, donde la velocidad importa más que la fiabilidad." },

  { p: "El servicio que traduce un nombre de dominio, como www.example.com, en su dirección IP es:",
    op: ["FTP", "SMTP", "DHCP", "DNS"], r: 3,
    e: "DNS es la 'guía telefónica' de Internet: guarda la correspondencia nombre-IP." },

  { p: "El protocolo que se utiliza normalmente para solicitar y recibir páginas web es:",
    op: ["HTTP", "FTP", "POP3", "SMTP"], r: 0,
    e: "HTTP funciona en modo cliente-servidor; HTTPS es su versión cifrada." },

  { p: "HTTPS se diferencia de HTTP en que:",
    op: ["Transmite más rápido sin control de errores", "No necesita servidor",
         "Cifra la comunicación mediante TLS/SSL", "Está reservado al correo electrónico"], r: 2,
    e: "El cifrado protege contraseñas y datos; el puerto habitual es 443 frente al 80 de HTTP." },

  { p: "El protocolo FTP sirve principalmente para:",
    op: ["Enviar correo electrónico", "Transferir archivos entre un cliente y un servidor",
         "Asignar direcciones IP", "Comprobar la conectividad"], r: 1,
    e: "Normalmente usa los puertos 21 (control) y 20 (datos)." },

  { p: "El protocolo SMTP se utiliza para:",
    op: ["Recibir correo del servidor", "Transferir ficheros", "Navegar por Internet",
         "Enviar mensajes de correo electrónico"], r: 3,
    e: "SMTP envía el correo; POP3 o IMAP se encargan de recibirlo." },

  { p: "Los protocolos POP3 e IMAP permiten:",
    op: ["Recibir y gestionar el correo almacenado en el servidor", "Enviar correo",
         "Repartir direcciones IP", "Comprimir archivos"], r: 0,
    e: "IMAP mantiene los mensajes sincronizados en el servidor; POP3 suele descargarlos al cliente." },

  { p: "El protocolo ICMP se asocia sobre todo a:",
    op: ["La transferencia de archivos", "Mensajes de control y diagnóstico, como el ping",
         "El cifrado de la conexión", "La asignación automática de IPs"], r: 1,
    e: "ping envía paquetes ICMP de eco y mide el tiempo de respuesta (RTT)." },

  { p: "Un firewall es un sistema que:",
    op: ["Aumenta el ancho de banda contratado", "Asigna direcciones IP a los equipos",
         "Filtra el tráfico de red según reglas de seguridad", "Almacena las contraseñas de los usuarios"], r: 2,
    e: "Puede ser software o hardware y se coloca en el perímetro de la red." },

  { p: "Una VPN permite:",
    op: ["Crear una conexión cifrada a través de una red pública como Internet",
         "Sustituir el cable de red por fibra", "Convertir una LAN en una WAN físicamente",
         "Aumentar la memoria del router"], r: 0,
    e: "Es un 'túnel' cifrado: muy usado para trabajar desde casa de forma segura." },

  { p: "WPA2 y WPA3 son estándares de:",
    op: ["Velocidad del Wi-Fi", "Cifrado y seguridad de las redes Wi-Fi",
         "Numeración de canales", "Nombre del punto de acceso"], r: 1,
    e: "Protegieron las redes inalámbricas; WEP y WPA (originales) quedaron obsoletos." },

  { p: "El comando ping se emplea para:",
    op: ["Mostrar la configuración de la tarjeta de red", "Crear una nueva subred",
         "Listar los archivos de un servidor",
         "Comprobar la conectividad enviando paquetes de eco a otra IP"], r: 3,
    e: "Si responde, indica que hay comunicación; el tiempo de respuesta se mide en milisegundos." },

  { p: "Sobre las unidades de velocidad y tamaño, es correcto que:",
    op: ["1 byte equivale a 1000 bits", "1 Mbps significa 1 millón de bytes por segundo",
         "1 byte equivale a 8 bits y 1 Gbps a 10^9 bits por segundo",
         "1 MHz mide la velocidad de la red"], r: 2,
    e: "Los bits por segundo (bps) miden velocidad; los bytes, tamaño. 1 Mbps = 10^6 bps." }
);

DATOS.redes.test.medio.push(
  { p: "Sobre TCP y UDP, la afirmación correcta es:",
    op: ["TCP es orientado a conexión y UDP no", "UDP garantiza la entrega y TCP no",
         "Ambos pertenecen a la capa de red (capa 3)", "TCP solo puede usarse con fibra óptica"], r: 0,
    e: "TCP controla errores, orden y reenvíos; UDP es más rápido y no establece conexión previa." },

  { p: "El modelo TCP/IP se organiza en:",
    op: ["7 capas, como el OSI", "5 capas: física, enlace, red, transporte y aplicación",
         "3 capas: aplicación, transporte y red",
         "4 capas: aplicación, transporte, internet y acceso a la red"], r: 3,
    e: "Es un modelo más simple que el OSI: agrupa las capas de sesión y presentación en la aplicación." },

  { p: "En una videollamada se prefiere UDP antes que TCP porque:",
    op: ["UDP cifra mejor los datos", "UDP funciona solo en IPv6",
         "Evita reenvíos y retrasos: se tolera perder algún paquete antes que esperar",
         "TCP no puede usar el puerto 80"], r: 2,
    e: "En tiempo real, un paquete tardío no sirve: la fluidez importa más que la integridad." },

  { p: "Un PC obtiene IP por DHCP, hace ping a 8.8.8.8 correctamente pero no abre páginas web. Lo más probable es que falle:",
    op: ["La resolución DNS", "El cable de red", "La puerta de enlace", "La tarjeta de red"], r: 0,
    e: "Si llegan paquetes a una IP pública, la conectividad y el gateway funcionan: falta resolver nombres." },

  { p: "Una dirección IPv6 se representa:",
    op: ["Con cuatro números decimales separados por puntos", "Con 6 pares hexadecimales",
         "Con 128 números decimales",
         "Con 8 grupos de hexadecimales separados por dos puntos"], r: 3,
    e: "Son 128 bits; los grupos de ceros consecutivos se pueden comprimir con '::'." },

  { p: "La fibra óptica es inmune a las interferencias electromagnéticas porque:",
    op: ["Lleva un blindaje de cobre", "Usa 8 pares trenzados",
         "Transmite luz en lugar de impulsos eléctricos", "Funciona solo en interiores"], r: 2,
    e: "Al no conducir corriente, no capta ruido y es difícil de interceptar sin cortar el cable." },

  { p: "La principal mejora de WPA3 frente a WPA2 es:",
    op: ["Refuerza el cifrado y la autenticación de la red (SAE)", "Duplica el alcance de la señal",
         "Añade más canales de 2,4 GHz", "Elimina la necesidad de contraseña"], r: 0,
    e: "WPA2 usa PSK y AES-CCMP; WPA3 incorpora autenticación SAE, más resistente a ataques de diccionario." },

  { p: "Frente a la banda de 2,4 GHz, la banda de 5 GHz ofrece:",
    op: ["Mayor alcance y mejor penetración de muros", "Más interferencias de microondas",
         "Menos interferencias y más velocidad, pero menor alcance", "Solo permite conectarse con cable"], r: 2,
    e: "2,4 GHz alcanza más distancia pero está saturada; 5 GHz es más limpia y rápida." },

  { p: "El comando tracert (traceroute en Linux) sirve para:",
    op: ["Mostrar la ruta y el tiempo hasta cada router intermedio", "Ver la configuración TCP/IP",
         "Borrar la caché DNS", "Renovar la IP asignada por DHCP"], r: 0,
    e: "Permite localizar en qué salto de la ruta se pierden los paquetes." },

  { p: "En Windows, el comando 'ipconfig /release' sirve para:",
    op: ["Liberar espacio en el disco duro", "Liberar la dirección IP asignada por DHCP",
         "Reiniciar el router", "Mostrar la tabla de enrutamiento"], r: 1,
    e: "Después se usa 'ipconfig /renew' para pedir una nueva dirección al servidor DHCP." },

  { p: "Un cable Cat 6a admite hasta:",
    op: ["100 Mbps a 100 m", "1 Gbps solo a 50 m", "10 Gbps a 100 m", "40 Gbps a 100 m"], r: 2,
    e: "Cat 6 llega a 10 Gbps hasta unos 55 m; Cat 6a amplía el límite a 100 m. Cat 8 se usa a distancias cortas." },

  { p: "En el modelo OSI, la capa de presentación se encarga de:",
    op: ["Enrutar los paquetes entre redes", "Cifrar, comprimir y convertir el formato de los datos",
         "Generar la señal eléctrica en el cable", "Asignar direcciones IP"], r: 1,
    e: "Es la capa 6: asegura que la aplicación receptora interprete correctamente la información." }
);

DATOS.redes.test.avanzado.push(
  { p: "La dirección de red y la de broadcast de 10.20.30.77/27 son, respectivamente:",
    op: ["10.20.30.64 y 10.20.30.95", "10.20.30.77 y 10.20.30.95",
         "10.20.30.64 y 10.20.30.127", "10.20.30.0 y 10.20.30.255"], r: 0,
    e: "/27 = 255.255.255.224: bloques de 32 (.0, .32, .64, .96...). La .77 está entre .64 y .95." },

  { p: "¿Cuántos hosts utilizables ofrece una red /22?",
    op: ["510", "1022", "1024", "4094"], r: 1,
    e: "32 − 22 = 10 bits de host → 2^10 = 1024 direcciones, menos red y broadcast = 1022 hosts." },

  { p: "Partiendo de 192.168.10.0/24 se necesitan al menos 6 subredes con 25 hosts cada una. La máscara adecuada es:",
    op: ["255.255.255.240 (/28)", "255.255.255.192 (/26)",
         "255.255.255.224 (/27)", "255.255.255.128 (/25)"], r: 2,
    e: "Con 3 bits prestados (/27) se obtienen 8 subredes de 32 IPs (30 hosts útiles); /28 da solo 14 hosts y /26 solo 4 subredes." },

  { p: "Para una subred de exactamente 14 equipos dentro de 192.168.5.0/24, la máscara que aprovecha mejor el espacio es:",
    op: ["255.255.255.252 (/30)", "255.255.255.224 (/27)",
         "255.255.255.0 (/24)", "255.255.255.240 (/28)"], r: 3,
    e: "/28 deja 4 bits de host: 2^4 − 2 = 14 hosts. /30 solo da 2 hosts y /27 da 30." },

  { p: "Un PC 192.168.1.20/24 hace ping a su gateway 192.168.1.1 y funciona, pero no llega a 192.168.2.10. La causa más probable es:",
    op: ["La tarjeta de red del PC está averiada", "Falta una ruta o el router no conecta ambas redes",
         "El cable del PC está suelto", "El servidor DNS está caído"], r: 1,
    e: "Si responde la puerta de enlace, la red local está bien: el fallo está en el enrutamiento entre redes." },

  { p: "Un cliente de correo descarga los mensajes y los elimina del servidor. El protocolo que está usando es:",
    op: ["SMTP", "HTTP", "POP3", "DHCP"], r: 2,
    e: "POP3 descarga y borra del servidor por defecto; IMAP mantiene los mensajes sincronizados. SMTP solo envía." },

  { p: "Si dos equipos de una misma LAN usan la misma dirección IP:",
    op: ["No pasa nada: el switch los diferencia por su MAC",
         "Aparece un conflicto y las conexiones fallan o se interrumpen",
         "El router les asigna una IP nueva automáticamente", "Se crea una VLAN automáticamente"], r: 1,
    e: "La IP debe ser única en la red; DHCP evita repetirlas y ARP permite detectar duplicados." },

  { p: "La forma abreviada correcta de 2001:0db8:0000:0000:0000:ff00:0042:8329 es:",
    op: ["2001:db8::ff00:42:8329", "2001:0db8::::ff00:0042:8329",
         "2001:db8:0:0:0:ff00:0042:8329:0001", "2001-db8-ff00-42-8329"], r: 0,
    e: "Se quitan los ceros a la izquierda de cada grupo y los grupos de ceros seguidos se resumen con '::' una sola vez." }
);
