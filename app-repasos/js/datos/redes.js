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
        e: "Clase III = 10 m, Clase II = 15-20 m y Clase I = 100 m." },

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
      explicacion: "La fibra óptica, por contra, es muy segura frente a escuchas." }
  ]
};
