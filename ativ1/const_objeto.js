//COMO ASSIM? ALTERAR OS ATRIBUTOS DO OBJETO EM UM CONST?

//RESPOSTA:

const pessoa = {nome: 'Júlia'} //const fazer referência ao caminho para ir até o objeto, e não o objeto em si
console.log(pessoa.nome)

pessoa.nome = 'Gui'
console.log(pessoa.nome)

//Como congelar um objeto para fixar seus valores
Object.freeze(pessoa)
console.log(pessoa.nome)

pessoa.nome = 'Júlia'

console.log(pessoa.nome)

//Notação literal
const a = 0
const b = 1
const c = 2

const objeto = {a, b, c} //ambos recebem o próprio valor informado

let nota = 'Nota'
let mencao = 7.5

//criando atributo e atribuindo valor
const objeto2= {}
objeto2['nota'] = mencao
console.log(objeto2)

const obj3 = {
    //duas formas de escrever
    falar: function(){

    },
    falar2(){

    }
}
