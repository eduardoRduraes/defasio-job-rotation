const faturamentoDistribuidora = [{estado:"SP", faturamento: 67836.43},{estado:"RJ", faturamento: 36678.66},{estado:"MG", faturamento: 29229.88}, {estado:"ES", faturamento: 27165.48}, {estado:"outros", faturamento: 19849.53}];

const faturamentoTotal = faturamentoDistribuidora.reduce((acc, cur) => { 
  return acc + cur.faturamento
},0);


console.log("Estados com faturamento");
console.table(faturamentoDistribuidora);

console.log("Percentual por estado");
faturamentoDistribuidora.forEach(f => {
  const percentual = f.faturamento / faturamentoTotal * 100;  
  console.log(`Estado: ${f.estado}, percentual: ${percentual.toFixed(2)}%`);
})