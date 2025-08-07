const userName: string = "Deborah"; 

const userAge: number = 31; 

const isStudent: boolean = false; 

const greeting: string = `Ola ${userName}, você tem ${userAge} anos. Você é um ${isStudent ? 'aluno.' : 'professor.'}`

console.log(userName, userAge, isStudent);
console.log(greeting);