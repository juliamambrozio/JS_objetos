//Get: pega valor
//Set: atribui valor (com condição ou não)
const pessoa = {
    _valor: 1, //_ indica ao outros desenvolvedores que aquela var seja privada (_ NÃO DEIXA ELA PRIVADA)
    get valor() {
        return this._valor++ //retorna o valor do _valor incrementado
    },
    set valor(valor){ //recebe o método get valor
        if(valor > this.valor){
            this.valor = valor
        }
        
    }
}

console.log(pessoa.valor, pessoa.valor)