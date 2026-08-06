 const prompt = require('prompt-sync')();


function verificarTriangular(numero) {
  if (numero < 0) {
    console.log("Este número não é Triangular");
    return;
  }
  let i = 1;
  while (i * (i + 1) < numero * 2) {
    i++;}

  if ((numero * 2) / i === i + 1) {
    console.log("Este número é Triangular");
  } else {
    console.log("Este número não é Triangular");
  }
}
let numeroDigitado = Number(prompt("Digite o numero:"));
verificarTriangular(numeroDigitado)
