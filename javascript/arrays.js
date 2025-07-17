//Exemplo for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//Exemplo for of 
let frutas = ['maçã', 'banana', 'laranja', 'uva'];
for (let fruta of frutas) {
    console.log(fruta);
}

//Exemplo map 
const dobraValor = (valor) => valor * 2;

let idades = [10, 20, 34, 55, 25, 18, 12]
let dobroDasIdades = idades.map(dobraValor)
console.log(idades);
console.log(dobroDasIdades);

//Exemplo filter
function maiorDeIdade(valor) {
    return valor > 18;
}

let idades1 = [10, 20, 34, 55, 25, 18, 12]
let maiores1 = idades1.filter(valor => valor > 18);
console.log(idades1);
console.log(maiores1);

//Exemplo find
function maiorDeIdade(valor) {
    return valor > 18;
}

let idades2 = [10, 20, 34, 55, 25, 18, 12]
let maiores2 = idades2.find(maiorDeIdade);
console.log(maiores2);

