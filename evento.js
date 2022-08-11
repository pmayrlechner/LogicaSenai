//var => o valor pode ser modificado a qualquer momento e em qualquer ponto do sistema (fora do escopo) 
// const => o valor não pode ser alterado
// let => o valor pode ser modificado a qualquer momento porem somente dentro do escopo

//= receber valor / atribuir valor

// == compara se são iguais
// === compara se são estritamente iguais 
// != compara se são diferentes
// 1 < 0 um é menor que zero
// 1 > 0 um é maior que zero
// 1 <= 100 um é menor ou igual a cem
// 1 >= 100 um é maior ou igual a cem
// 18 >= dezoito anos maior ou igual cadastro permitido
// 17 <= menor ou igual cadastro não permitido

// x <= 100 cadastro aceito 
// x => 100 cadastro negado

let IdadeParticipante = 18//idade deve ser igual ou maior 18
let NomeParticipante = "fulano"//nome participante deve ser maior que 3 caracteres
let QuantidadeParticipante = 100//quantidade de participantes deve ser menor que 100

if (QuantidadeParticipante < 100) {
    console.log("participantes inferior a 100 permitir acesso")
}else{
    console.log("participantes superior a 100, cadastro não permitido,excedeu limite")
}

if (IdadeParticipante >= 18) {
    console.log("igual ou maior de 18 permitir cadastro")
}else{
    console.log("idade inferior a 18 acesso não permitido pela idade")
}

if (NomeParticipante.lenght > 3) {
    console.log("nome ok")
}else{
    console.log("o nome tem mais que 4 caracteres não pode ser cadastrado")
}
