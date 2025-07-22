const minhaLista = ['um', 'dois', 'três', 'quatro'];

const usuario = {
    nome: 'Deborah',
    idade: 26,
    cidade: 'SP'
}

const primeiro = minhaLista[0];
const segundo = minhaLista[1];
const terceiro = minhaLista[2];

//--
const [item1, item2, item3] = minhaLista;
console.log(item1, item2, item3);

const {nome, idade, cidade} = usuario;
console.log(nome, idade, cidade);

function boasVindas({nome, idade}) {
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
}
boasVindas(usuario);

