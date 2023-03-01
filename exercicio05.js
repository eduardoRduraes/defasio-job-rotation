let texto = "Escreva um programa que inverta os caracteres de um string.";
let textoReverso;

for(let i = texto.length; i>=0; i--){
  textoReverso += texto[i];
}
textoReverso = textoReverso.replaceAll("NaN","");

console.log(texto);
console.log(textoReverso);



