class ContaBancaria {
    saldo: number;
    numeroConta: string;
  
    constructor(saldo: number, numeroConta: string) {
      this.saldo = saldo;
      this.numeroConta = numeroConta;
    }
  
    
    depositar(valor: number): void {
      this.saldo += valor;
    }
  
    
    sacar(valor: number): void {
      if (valor > this.saldo) {
        throw new Error("Saldo insuficiente.");
      }
  
      this.saldo -= valor;
    }
  
    
    verificarsaldo(): number {
      return this.saldo;
    }
  }

  const conta = new ContaBancaria(1000, "123456789");

conta.depositar(40);

console.log(conta.saldo); 

conta.sacar(20);

console.log(conta.saldo); 