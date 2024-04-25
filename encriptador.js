"use strict"

//funcion del boton encriptar
document.getElementById("BtnEncriptar").addEventListener("click", function () {
    let convertirTexto = document.getElementById("convertirTexto").value;
    let textoEncriptado = "";

    if (convertirTexto.trim() !== "") {
        // Encriptar el texto ingresado por el usuario
        for (let i = 0; i < convertirTexto.length; i++) {
            if (convertirTexto[i] === "e") {
                textoEncriptado += "enter";
            } else if (convertirTexto[i] === "i") {
                textoEncriptado += "imes";
            } else if (convertirTexto[i] === "a") {
                textoEncriptado += "ai";
            } else if (convertirTexto[i] === "o") {
                textoEncriptado += "ober";
            } else if (convertirTexto[i] === "u") {
                textoEncriptado += "ufat";
            } else {
                textoEncriptado += convertirTexto[i];
            }
        }
        let mostrarTextoE = document.createElement('span');
        mostrarTextoE.textContent = textoEncriptado;
    
        // Aplicar estilos al texto encriptado
        mostrarTextoE.style.fontSize = "16px"; // Tamaño de fuente 1.2em
        mostrarTextoE.style.textAlign = "start";
    
        // Obtener el título y reemplazar su contenido con el texto encriptado
        let titulo = document.getElementById("texto-title");
        titulo.textContent = "";
        titulo.appendChild(mostrarTextoE);
        titulo.style.textAlign = "center";
        titulo.style.fontWeight = "300";
    
        let subtitle = document.getElementById("texto-subtitle");
        subtitle.textContent = "";

        /*let itemTexto = document.querySelector(".item__texto");
        itemTexto.style.justifyContent ="center";
        itemTexto.style.alignItems="center";*/

        let contentImg = document.querySelector(".item__img");
        contentImg.style.display = "none";

        let ocultarImg = document.getElementById("img-muñeco");
        ocultarImg.style.display = "none";
    
        let elemento = document.getElementById("texto-encriptado");
        elemento.style.justifyContent = "space-between";

        let aparecerBoton = document.querySelector(".item__button");
        aparecerBoton.style.display = "block";

        let botonCopiar = document.getElementById("BtnCopiar");
        botonCopiar.style.display = "block";
    }
});

//funcion del boton copiar
document.getElementById("BtnCopiar").addEventListener("click", function () {
    let textoEncriptado = document.getElementById("texto-title").textContent;
    navigator.clipboard.writeText(textoEncriptado)
    let mensajeElement = document.getElementById("mensaje-copiar");
    mensajeElement.style.display = "block"

    setTimeout(function () {
        mensajeElement.style.display = "none"
    }, 1350);
});

//funcion del boton desencriptar
document.getElementById("BtnDesencriptar").addEventListener("click", function () {
    let convertirTexto = document.getElementById("convertirTexto").value;
    let textoEncriptado = "";
    if(convertirTexto.trim() !== ""){
        for (let i = 0; i < convertirTexto.length; i++) {
            if (convertirTexto.substr(i, 5) === "enter") {
                textoEncriptado += "e";
                i += 4; // Avanzar 4 caracteres adicionales para saltar la palabra "enter"
            } else if (convertirTexto.substr(i, 4) === "imes") {
                textoEncriptado += "i";
                i += 3; // Avanzar 3 caracteres adicionales para saltar la palabra "imes"
            } else if (convertirTexto.substr(i, 2) === "ai") {
                textoEncriptado += "a";
                i += 1; // Avanzar 1 caracter adicional para saltar la palabra "ai"
            } else if (convertirTexto.substr(i, 4) === "ober") {
                textoEncriptado += "o";
                i += 3; // Avanzar 3 caracteres adicionales para saltar la palabra "ober"
            } else if (convertirTexto.substr(i, 4) === "ufat") {
                textoEncriptado += "u";
                i += 3; // Avanzar 3 caracteres adicionales para saltar la palabra "ufat"
            } else {
                textoEncriptado += convertirTexto[i];
            }
        }
        let mostrarTextoE = document.createElement('span');
        mostrarTextoE.textContent = textoEncriptado;
    
        // Aplicar estilos al texto encriptado
        mostrarTextoE.style.fontSize = "16px"; // Tamaño de fuente 1.2em
        mostrarTextoE.style.textAlign = "start";
    
        // Obtener el título y reemplazar su contenido con el texto encriptado
        let titulo = document.getElementById("texto-title");
        titulo.textContent = "";
        titulo.appendChild(mostrarTextoE);
        titulo.style.textAlign = "center";
    
        let subtitle = document.getElementById("texto-subtitle")
        subtitle.textContent = "";
    
        let ocultarImg = document.getElementById("img-muñeco")
        ocultarImg.style.display = "none";
    
        let elemento = document.getElementById("texto-encriptado");
        elemento.style.justifyContent = "space-between";
        
        let aparecerBoton = document.querySelector(".item__button");
        aparecerBoton.style.display = "block";

        let botonCopiar = document.getElementById("BtnCopiar")
        botonCopiar.style.display = "block"
    }
});

//funcion del boton nuevo
document.getElementById("BtnNuevo").addEventListener("click", function () {
    // Restaurar el contenido del texto original
    document.getElementById("convertirTexto").value = ""; // Vaciar el campo de texto

    let title = document.getElementById("texto-title");
    title.style.fontWeight = "600";
    title.textContent = "Ningún mensaje fue encontrado";

    let subtitle = document.getElementById("texto-subtitle");
    subtitle.textContent = "Ingresa el texto que deseas encriptar o desencriptar";

    // Restaurar la imagen
    document.querySelector(".item__img").style.display ="flex";
    document.getElementById("img-muñeco").style.display = "block"; // Mostrar la imagen

    // Restaurar el estilo del texto encriptado
    let elemento = document.getElementById("texto-encriptado");
    elemento.style.justifyContent = "center";
    
    let aparecerBoton = document.querySelector(".item__button");
    aparecerBoton.style.display = "none";

    // Ocultar el botón de copiar
    let botonCopiar = document.getElementById("BtnCopiar");
    botonCopiar.style.display = "none";

});