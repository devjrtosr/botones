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

let botonHTML = "";

botones.map((boton) => {
  botonHTML += `
  <button class = "${boton.clasesBoton.toString().replace(",", " ")}">
      <a class = "${boton.clasesEnlace.toString().replace(",", " ")}" 
      href="${boton.enlacehref}">${boton.textoEnlace}</a>
    </button>
  `;
});

document.querySelector("#contenedor").innerHTML = botonHTML;
