//exemplo array
const phoneList = ["11954565456", "11923314563", "1197795456"];

sms.send(phoneList[0], "Olá, tudo bem?");
sms.send(phoneList[1], "Olá, tudo bem?");
sms.send(phoneList[2], "Olá, tudo bem?");

//exemplo objeto 
const referenciaBancaria = {
    banco: "Banco do Brasil",
    agencia: "1234",
    conta: "789-4",
    telefone: "12354398796"
};

console.log(referenciaBancaria.banco);