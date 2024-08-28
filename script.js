// Función para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Función para mostrar el resultado en la página
function mostrarResultado(texto) {
    const resultadoElemento = document.querySelector(".encapsularResultado p");
    resultadoElemento.textContent = texto;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    const resultadoTexto = document.querySelector(".encapsularResultado p").textContent;
    navigator.clipboard.writeText(resultadoTexto).then(() => {
        alert("Texto copiado al portapapeles");
    });
}

// Event listeners para los botones
document.querySelector(".boton_encriptar").addEventListener("click", () => {
    const textoIngresado = document.querySelector(".cajatexto").value;
    if (/^[a-z\s]+$/.test(textoIngresado)) {
        const textoEncriptado = encriptarTexto(textoIngresado);
        mostrarResultado(textoEncriptado);
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
    }
});

document.querySelector(".boton_desencriptar").addEventListener("click", () => {
    const textoIngresado = document.querySelector(".cajatexto").value;
    if (/^[a-z\s]+$/.test(textoIngresado)) {
        const textoDesencriptado = desencriptarTexto(textoIngresado);
        mostrarResultado(textoDesencriptado);
    } else {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
    }
});

document.querySelector(".boton_copiar").addEventListener("click", copiarTexto);
