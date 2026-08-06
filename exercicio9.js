const prompt = require(`prompt-sync`)();


function somaAcumulada() {
    let numero = Number(prompt("Digite um número inteiro positivo: "));
    let soma = 0;

    for (let i = 1; i <= numero; i++) {
        soma = soma + i
        let acumulado = "";
        //  do 1 até o "i"
        for (let a = 1; a <= i; a ++) {
     //  compara 'a' com 'i' 
            acumulado += a + (a < i ? " + " : "");
        }

        console.log(acumulado + " = " + soma);
    }
}

somaAcumulada();