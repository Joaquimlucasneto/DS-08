const prompt  = require ("prompt-sync") ();
function pirnum(){
let quanti = Number("Digite o número desejado: ")

for (let linha = 1;linha <= quanti; linha++){
    let resultado = "";
for (let colun = 1; colun <=linha; colun++ ){
resultado = resultado + colun 
}
console.log(resultado)
}
}

pirnum()
