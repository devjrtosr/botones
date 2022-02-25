const botones = [
  {
    elementoBoton: "button",
    elementoEnlace: "a",
    enlaceHref: "https:/www.facebook.com",
    textoEnlace: "Facebook",
    claseBoton: ["boton", "facebook"],
    claseEnlace: ["enlace", "facebook"],
  },
  {
    elementoBoton: "button",
    elementoEnlace: "a",
    enlaceHref: "https://twitter.com/?lang=es",
    textoEnlace: "Twitter",
    claseBoton: ["boton", "twitter"],
    claseEnlace: ["enlace", "twitter"],
  },
  {
    elementoBoton: "button",
    elementoEnlace: "a",
    enlaceHref: "https://www.instagram.com/",
    textoEnlace: "Instagram",
    claseBoton: ["boton", "instagram"],
    claseEnlace: ["enlace", "instagram"],
  },
];

botones.map((boton) => {
  const botonTemporal = document.createElement(boton.elementoBoton);
  const enlace = document.createElement(boton.elementoEnlace);
  enlace.href = boton.enlaceHref;
  enlace.innerHTML = boton.textoEnlace;
  botonTemporal.classList.add(...boton.claseBoton);
  enlace.classList.add(...boton.claseEnlace);
  botonTemporal.appendChild(enlace);
  document.querySelector("#contenedor").appendChild(botonTemporal);
});
