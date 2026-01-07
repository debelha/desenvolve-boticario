//1 normal function 
function welcomeUser(nome) {
    console.log(`${nome}, welcome to the class!`);
}

//2 arrow function 
const welcomeUser2 = (nome) => {
    console.log(`${nome}, welcome to the class!`);
}

welcomeUser("Deborah"); 
welcomeUser2("Matheus"); 


//1 arrow function 
const calculateIMC = (peso, altura) => {
    return peso / (altura * altura);
}

//2 simple arrow function  
const calculateIMC2 = (peso, altura) => peso / (altura * altura);

//execution 
console.log(calculateIMC(80, 1.8));