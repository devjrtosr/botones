const botones = [
    {
        elementoboton:'button',
        elementoenlace:'a',
        enalceHref:'https://www.facebook.com',
        textoenlace:'Facebook',
        clasesboton:['boton','facebook'],
        clasesEnlace:['enlace','facebook'],
    },
    {
        elementoboton:'button',
        elementoenlace:'a',
        enalceHref:'https://www.Google.com',
        textoenlace:'Google',
        clasesboton:['boton','google'],
        clasesEnlace:['enlace','google'],
    },
    {
        elementoboton:'button',
        elementoenlace:'a',
        enalceHref:'https://www.Youtube.com',
        textoenlace:'Youtube',
        clasesboton:['boton','youtube'],
        clasesEnlace:['enlace','youtube'],
    },
  
];

botones.map((boton) => {
const botonFacebook = document.createElement(boton.elementoboton);
const enlaceFacebook = document.createElement(boton.elementoenlace);
enlaceFacebook.href = boton.enalceHref;
enlaceFacebook.innerHTML = boton.textoenlace;
botonFacebook.classList.add(...boton.clasesboton);
enlaceFacebook.classList.add(...boton.clasesEnlace);
botonFacebook.appendChild(enlaceFacebook);
document.querySelector("#contenedor").appendChild(botonFacebook);
});



