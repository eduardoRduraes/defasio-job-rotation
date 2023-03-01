const {readFileSync} = require('fs');

const faturamento = JSON.parse(readFileSync('dados.json'));
const dias = [];

const menor = faturamento.reduce((acc, cur) => acc.valor < cur.valor && acc.valor !== 0 ? acc : cur);
const maior = faturamento.reduce((acc, cur) => acc.valor > cur.valor ? acc : cur);

const mediaMensal = faturamento.reduce((acc, cur) => { return acc + cur.valor},0) / faturamento.length;

const diasAcimaDaMedia = faturamento.reduce((acc, cur) => {
  if(cur.valor > mediaMensal){
    dias.push(cur.dia);
    return acc + 1;
  }
  return acc;
},0);


console.log(`O menor valor de faturamento ocorrido em um dia do mês-> dia= ${menor.dia}, mês= ${menor.valor}`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês-> dia= ${maior.dia}, mês= ${maior.valor}`);
console.log(`Media mensal de faturamento-> ${mediaMensal}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal-> ${diasAcimaDaMedia}`);
console.log(`Dias no mês em que o valor de faturamento diário foi superior à média mensal -> ${dias}`)





