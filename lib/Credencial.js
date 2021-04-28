export class Credencial{
  
  constructor(usuario, senha){
    
    //Banco de dados procuraria pelo usuario e senha
    if (usuario == "Rick" && senha == 1234){
      
      return new Coordenador("Rick Sanchez", 1370)
      
    }else if (usuario == "Jerry" && senha == 4321){
      
      return new Professor("Jerry Smith", 1371)
      
    }else if (usuario == "Morty" && senha == 6969){
      
      return new Aluno("Morty Smith", 1372)
      
    }
    
  }
  
}
module = Credencial