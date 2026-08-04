const prompt  = require ("prompt-sync") ();
function relogioDigital() {
  let horas_dia = []
  for (let hora = 0; hora < 24; hora++) {
    for (let minuto = 0; minuto < 60; minuto++) {
      const hFormatada = String(hora).padStart(2, '0')
      const mFormatado = String(minuto).padStart(2, '0')
      horas_dia.push(hFormatada + ":" + mFormatado)
    }
  }
 return horas_dia
}
const resultado = relogioDigital()
console.log(resultado.join( '\n') )