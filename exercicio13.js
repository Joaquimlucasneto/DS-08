const prompt = require('prompt-sync')();


function desenhoQuadrado () {
    let tamanho = Number(prompt("Digite o tamanho do quadrado:"));
    let caractere = prompt("Digite um caractere :");
    for (let linha = 1; linha <= tamanho; linha++) {
        let resultado = "";
        for (let coluna = 1; coluna <= tamanho; coluna++) {
            resultado += caractere;
        }
        console.log(resultado);
    }
}
desenhoQuadrado();