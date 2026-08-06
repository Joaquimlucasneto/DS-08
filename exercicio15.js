const prompt = require('prompt-sync')();


function sequenciaLetras() {
    let letra = prompt("Digite uma letra:");
    letra = letra.toUpperCase();
    let codigoFinal = letra.charCodeAt(0);
    let resultado = "";
    for (let codigo = 65; codigo <= codigoFinal; codigo++) {
        resultado += String.fromCharCode(codigo);
    }
    console.log("A sequência de letras de A até " + letra + " é: " + resultado);
}
sequenciaLetras();