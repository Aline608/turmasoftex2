function calculadora(numero1, numero2, operador) {
  let resultado;

  switch (operador) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;
  }

  if (operador === "/") {
    let resto = numero2 % numero1;
    return resultado, resto;
  } else {
    return resultado;
  }
}


const numero1 = 12;
const numero2 = 6;
const operador = "/";

const resultado = calculadora(numero1, numero2, operador);

console.log(resultado); 