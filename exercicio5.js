const prompt  = require ("prompt-sync") ();
function escadaDireita(){
let numero = Number("Digite o número maior que zero(0):")
for (let i= 1;i<= numero;i++){
let espacos = " ".repeat(numero - i)
let asteriscos = "*".repeat(i)
console.log(espacos + asteriscos)

}
}
escadaDireita()