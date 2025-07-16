//Função normal 
function welcomeUser(name){
    console.log(`${name}, boas vindas!`);
}

welcomeUser("Deborah");

//Arrow function
const welcomeUser2 = (nome) => {
    console.log(`${nome}, boas vindas!`);
}

welcomeUser2("Deborah");

//Função com spread operator
const calcularIMC = (peso, altura) => peso / (altura * altura);

console.log(calcularIMC(70, 1.65));

// Exemplo rest parameter
function soma(...parcelas) {
    return parcelas.reduce((total, valorAtual) => total + valorAtual, 0);
}

console.log(soma(1));
console.log(soma(1, 2));
console.log(soma(1, 2, 3)); 
console.log(soma(1, 2, 3, 4));   
console.log(soma(1, 2, 3, 4, 5));         
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// Exemplo spread 
const numeros1 = [1, 2, 3, 4, 5];
const numeros2 = [6, 7, 8, 9, 10];

const novonNumero = [...numeros1];

//Exemplo spread com objeto
const usuario = {
    nome: "Deborah",        
    idade: 26,
    email: "deborah@gmail.com",
};

const endereco = {
    rua: "Rua A",
    numero: 123,
    cidade: "São Paulo",
};

const usuarioComEndereco = {
    ...usuario,
    ...endereco
};