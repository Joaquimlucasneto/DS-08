const prompt  = require ("prompt-sync") ();
function desenharMoldura(){
  const altura = Number("Digite a altura do objeto:")
  const largura = Number("Digite a largura do objeto:")
  if(altura < 2 || largura < 2){
    console.log("A altura e a largura devem ser de no minimo 2.")
    return
  }
   for (let i = 0; i < altura; i++) {
    if (i === 0 || i === altura - 1) {
      console.log("*".repeat(largura))
    } else {
      const meio = " ".repeat(largura - 2)
      console.log("*" + meio + "*")
    }
  }
}
desenharMoldura();