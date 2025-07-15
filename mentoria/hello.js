const meuNome = "Deborah"
const sobrenome = "Leite";
const nomeCompleto = meuNome + " " + sobrenome;

//Exemplo 1
console.log("Hello, Node!");
console.log("Node.js version: ", process.version);
console.log("Diretory name: ", process.cwd());

//Exemplo 2
console.log("const meuNome: ", meuNome);
console.log("const sobrenome: ", sobrenome);
console.log("const nomeCompleto: ", nomeCompleto.toUpperCase());
console.log("const nomeCompleto: ", nomeCompleto.toLowerCase());
console.log("const nomeCompleto:", nomeCompleto.length);

//Desafio 1
console.log("Slice nome: ", nomeCompleto.slice(0, nomeCompleto.indexOf(" ")));

//Desafio 2
console.log("Contém a letra 'a'? ", nomeCompleto.includes("a"));

//Desafio 3
console.log("Nome com novo sobrenome: ", nomeCompleto.replace("Leite", "Okereke"));
