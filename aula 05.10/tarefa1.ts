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

  const pessoa1 = new Pessoa("Aline", 30, "aline@gmail.com");

console.log(pessoa1); 
