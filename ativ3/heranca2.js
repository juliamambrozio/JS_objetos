class Vo{
    constructor(sobrenome){
        this.sobrenome = sobrenome //estamos atribuindo ao objeto o parâmetro sobrenome
    }
}

class Pai extends Vo{
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
        
    }
}

const obj = new Filho
console.log(obj)