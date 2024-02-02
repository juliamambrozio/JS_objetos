Object.prototype.attr4 = 'D' //não faça isso

const vo = {attr1: 'A'}
const pai = {__proto__:vo, attr2: 'B', attr5: 'F'}
const filho = {__proto__:pai, attr3: 'C', attr5: 'E'} //attr5: sobressai o do pai

console.log(filho.attr2, pai.attr1, vo.attr4, filho.attr5)

const carro = {
    velAtual: 0,
    velMaxima: 100,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMaxima){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMaxima
        }
        
    },
    status(){
        return `Está ${this.velAtual} de ${this.velMaxima}`
    }

}

const ferrari = {
    modelo: 'F40',
    velMaxima: 340
}


const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` //super: referência objeto do protótipo
    }
}
 
Object.setPrototypeOf(volvo, carro)
Object.setPrototypeOf(ferrari, carro)
console.log(volvo)
console.log(ferrari)

volvo.acelerarMais(100)
volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(100)
console.log(ferrari.status())

const pai1 = {nome: 'Paulo', corCabelo: 'Preto'}
const filha1 = Object.create(pai1) //já coloca todos os atributos do elemento pai no filho
filha1.nome = 'Júlia'
console.log(filha1.corCabelo)

const filho1 = Object.create(pai1, {
    nome: { value: 'Felipe', writabl: false, enumerable: true} //criando atributos direto
})

console.log(filho1.nome)

for(let key in filho1){
    filho1.hasOwnProperty(key) ? console.log(key) : console.log('Por herança' + key) 
    //hasOwnProperty: verifica se o atributo veio de uma herança
}