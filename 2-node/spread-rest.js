//normal function 
function welcomeUser(nome) {
    console.log(`${nome}, welcome to the class!`);
}
//arrow function 
const welcomeUser2 = (nome) => {
    console.log(`${nome}, welcome to the class!`);
}
//execution 
welcomeUser("Deborah"); 
welcomeUser2("Matheus"); 


//arrow function 
const calculateIMC = (peso, altura) => {
    return peso / (altura * altura);
}
//simple arrow function  
const calculateIMC2 = (peso, altura) => peso / (altura * altura);
//execution 
console.log(calculateIMC(80, 1.8));


//rest
function soma(...parcelas) {
    return parcelas.reduce((total, valor) => {
        return total + valor;
    }, 0); 
}
//execution 
console.log(soma(1));
console.log(soma(1, 2));
console.log(soma(1, 2, 3));
console.log(soma(1, 2, 3, 4));
console.log(soma(1, 2, 3, 4, 5));
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


//spread 
const numeros1 = [1, 2, 3, 4, 5];
const numeros2 = [6, 7, 8, 9, 10];
const novoNumero = [...numeros1, ...numeros2];

console.log(novoNumero);