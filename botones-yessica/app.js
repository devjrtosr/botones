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
      enlaceHref: "https://www.instagram.com/",
      textoEnlace: "Instagram",
      claseBoton: ["boton", "instagram"],
      claseEnlace: ["enlace", "instagram"],
    },
    {
        elementoBoton: "button",
        elementoEnlace: "a",
        enlaceHref: "https://twitter.com/?lang=es",
        textoEnlace: "Twitter",
        claseBoton: ["boton", "twitter"],
        claseEnlace: ["enlace", "twitter"],
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







// const botones = [
//     {
//         elementboton: 'button',
//         elementoEnlace: 'a',
//         enlaceHref: 'http://www.facebook.com',
//         textoEnlace: 'Facebook',
//         clasesBoton: ['boton', 'facebook']
//     } 
// ];
    
// botones.map((boton) => {
//     console.log(boton.textoEnlace);

// });

// const botonFacebook= document.createElement('button');
// const enlaceFacebook = document.createElement('a');
// enlaceFacebook.href = 'http://www.facebook.com';
// enlaceFacebook.innerHTML = 'Facebook';
// botonFacebook.classList.add('boton', 'facebook');
// enlaceFacebook.classList.add('enlace', 'facebook');
// botonFacebook.appendChild(enlaceFacebook);

// const botonInstagram= document.createElement('button');
// const enlaceInstagram = document.createElement('a');
// enlaceInstagram.href = 'http://www.instagram.com';
// enlaceInstagram.innerHTML = 'Instagram';
// botonInstagram.classList.add('boton','instagram');
// enlaceInstagram.classList.add('enlace', 'instagram');
// botonInstagram.appendChild(enlaceInstagram);

// const botonTwitter= document.createElement('button');
// const enlaceTwitter= document.createElement('a');
// enlaceTwitter.href = 'http://www.twitter.com';
// enlaceTwitter.innerHTML = 'Twitter';
// botonTwitter.classList.add('boton','Twitter');
// enlaceTwitter.classList.add('enlace', 'Twitter');
// botonTwitter.appendChild(enlaceTwitter);

// document.querySelector('#contenedor').appendChild(botonFacebook);
// document.querySelector('#contenedor').appendChild(botonInstagram);
// document.querySelector('#contenedor').appendChild(botonTwitter);
