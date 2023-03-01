function isFibonacci(input) {
  
  if (input < 0) {
    return "Número inválido, informe um número positivo.";
  }
  
  if (input === 0 || input === 1) {
    return input;
  }
  
  let fibNum = 1;
  let prevFibNum = 1;
  
  for (let i = 2; i < input; i++) {
    let temp = fibNum;
    fibNum += prevFibNum;
    prevFibNum = temp;
    
    if (fibNum === input) {
      return `${input} pertence à sequência de Fibonacci.`;
    }
  }

  return `${input} não pertence à sequência de Fibonacci.`;
}

console.log(isFibonacci(-1));
console.log(isFibonacci(5));
console.log(isFibonacci(21));
console.log(isFibonacci(9));