class Circulo {
    raio: number;
  
    constructor(raio: number) {
      this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.raio, 2);
      }
    
      calcularCircunferencia(): number {
        return 2 * Math.PI * this.raio;
      }
    }

    const circulo = new Circulo(6);

    console.log("Área:", circulo.calcularArea()); 
    console.log("Circunferência:", circulo.calcularCircunferencia()); 