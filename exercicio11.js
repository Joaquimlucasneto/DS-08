const prompt = require('prompt-sync')();


function sequenciaAlternada(){
let digitaNum = Number(prompt("Digite um numero:"));
let positivo = true;
for (let i = 0; i < digitaNum; i++) {
  let contador = i + 1;
  if (positivo) {
    console.log( contador );
  } else {
    console.log("-"+ contador );
  }
  positivo = !positivo; 
}
}
sequenciaAlternada();