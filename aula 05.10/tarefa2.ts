class Pessoa {
    nome: string;
    idade: number;
    email: string;
  
    constructor(nome: string, idade: number, email: string) {
      this.nome = nome;
      this.idade = idade;
      this.email = email;
    }
  }


  class Aluno extends Pessoa {
    matricula: string;
  
    constructor(nome: string, idade: number, email: string, matricula: string) {
      super(nome, idade, email);
      this.matricula = matricula;
    }
  }

  const aluno = new Aluno("Aline", 30, "aline@gmail.com", "123456789");

console.log(aluno.nome); 
console.log(aluno.idade); 
console.log(aluno.email); 
console.log(aluno.matricula); 