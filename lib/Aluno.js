import { Pessoa } from "./Pessoa"

export class Aluno extends Pessoa{
  
  constructor(nome, cpf){
    
    super(nome, cpf)
    this.tipo = "Aluno"
    
  }
  
}