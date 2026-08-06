const prompt = require('prompt-sync')();


function somaFatoriais() {
    let num = Number(prompt("Digite um número inteiro positivo:"));
    let soma = 0;
    
    for (let contador = 1; contador <= num; contador++) {
        let fatorial = 1;
        for (let multiplicador = 1; multiplicador <= contador; multiplicador++) {
            fatorial = fatorial * multiplicador;
        }
        soma = soma + fatorial;
    }
    console.log("A soma dos fatoriais de 1 até " + num + " é: " + soma);
}
somaFatoriais();