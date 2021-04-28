export class Professor extends Pessoa{
  
  constructor(nome, cpf){
    
    super(nome, cpf)
    this.tipo = "Professor"
    
  }
  
}
module = Professor