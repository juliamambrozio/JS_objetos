const pessoa = {
    nome: 'Júlia',
    idade: 18, 
    peso: 68
}

console.log(Object.keys(pessoa)) //imprime chaves
console.log(Object.values(pessoa)) //imprime os valores
console.log(Object.entries(pessoa)) //imprime chave-valor em array multidimensional

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(chave + ':'+ valor)
}); //percorrer objeto

Object.entries(pessoa).forEach(e => {
    console.log(e[0] + ':'+ e[1])
}); //percorrer objeto

//Criar atributo no objeto
Object.defineProperty(pessoa, 'DataNascimento', {
    enumerable: true, //para permitir listar
    writable: false, //permitir alterar dados
    value: '02/11/2005'

})

pessoa.DataNascimento = '03/11/2005'
console.log(pessoa.DataNascimento)
console.log(Object.keys(pessoa))

//Colocar atributos de outras variáveis para uma só

const dest = {a: 1}
const o1 = {b: 3}
const o2 = {c: 4, a: 7} //o valor 1 de A será substituído pelo próximo

const obj = Object.assign(dest, o1, o2)
console.log(obj)
