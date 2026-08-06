const prompt = require (`prompt-sync`)();


function tabelaMultiplicacao(){
    let num = parseInt(prompt("Digite um número para ver a tabuada:"));
    let tabuada ="";
    for(let count =1;count<=10;count++)
        tabuada += num+" x "+count+" = "+
               num*count+"\n";
        console.log(tabuada);
}

tabelaMultiplicacao();