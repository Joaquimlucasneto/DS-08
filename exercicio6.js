const prompt  = require ("prompt-sync") ();
function piramideCompleta() {
  let numero = Number("Digite o número de linhas da pirâmide:")

  for (let i = 1; i <= numero; i++) {
    let espacos = " ".repeat(numero - i)
    let asteriscos = "*".repeat(2 * i - 1)
    console.log(espacos + asteriscos)
  }
}

piramideCompleta()