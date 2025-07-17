const carro = {
    marca: 'Sandero',
    dirigir: function () {
        console.log(`Dirigindo um $(this.marca)` );
    },
    'ano-de-fabricacao': 2020,
}

//Modificando o objeto
console.log(carro.marca);
console.log(carro['marca']);
console.log(carro['ano-de-fabricacao']);

console.log(carro.owner);
carro.owner = 'Deborah';
console.log(carro.owner);
carro.owner = 'João';
console.log(carro.owner);
console.log(carro);

delete carro.owner;
console.log(carro.owner);
console.log(carro);

//Iterando objetos
const usuario = {
    nome: 'Debrorah',
    idade: 30,
    estado: 'SP',
};

for (let propriedade in usuario) {
    console.log(usuario[propriedade]);
}

console.log(Object.keys(usuario));