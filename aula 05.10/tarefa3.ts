class Retangulo {
    largura: number;
    altura: number;
  
    constructor(largura: number, altura: number) {
      this.largura = largura;
      this.altura = altura;
    }

    calcularArea(): number {
        return this.largura * this.altura;
      }

    calcularPerimetro(): number {
        return 2 * (this.largura + this.altura);
      }
    }

    const retangulo = new Retangulo(10, 20);

    console.log("Área:", retangulo.calcularArea()); 
    console.log("Perímetro:", retangulo.calcularPerimetro()); 