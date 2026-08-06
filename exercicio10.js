 const prompt = require('prompt-sync')();

 
function escadaInvertida(){
let numero = Number(prompt("Digite um numero positivo:"));
for(let i = numero;i >= 1;i --){
let limite = "";
for(let a = 1;a <= i;a++ ){
limite += a;
}
console.log(limite);
}
}
escadaInvertida();