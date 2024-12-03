const prompt = require("prompt-sync")()

const estrela = prompt('Digite o numero de estrelas para formar uma pequena arvore: ')
let arvore = '*'
for(let i = 0; i < estrela; i++){
    console.log(arvore)
    arvore += '*'
}