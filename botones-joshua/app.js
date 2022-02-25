const botones = [
  {
    elementoboton: "button",
    elementoenlace: "a",
    enlacehref: "https://www.facebook.com",
    textoEnlace: "Facebook",
    clasesBoton: ["boton", "facebook"],
    clasesEnlace: ["enlace", "facebook"],
  },
  {
    elementoboton: "button",
    elementoenlace: "a",
    enlacehref: "https://www.twitter.com",
    textoEnlace: "Twitter",
    clasesBoton: ["boton", "twitter"],
    clasesEnlace: ["enlace", "twitter"],
  },
  {
    elementoboton: "button",
    elementoenlace: "a",
    enlacehref: "https://www.google.com",
    textoEnlace: "Google",
    clasesBoton: ["boton", "google"],
    clasesEnlace: ["enlace", "google"],
  },
];

botones.map((boton) => {
  const botonTemporal = document.createElement(boton.elementoboton);
  const enlace = document.createElement(boton.elementoenlace);
  enlace.href = boton.enlacehref;
  enlace.innerHTML = boton.textoEnlace;

  enlace.classList.add(...boton.clasesEnlace);

  botonTemporal.classList.add(...boton.clasesBoton);

  botonTemporal.appendChild(enlace);
  document.querySelector("#contenedor").appendChild(botonTemporal);
});
