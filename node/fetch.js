//fetch tradicional
fetch('https://viacep.com.br/ws/04235100/json/')
.then(response => {
    return response.json();
})
.then((dados) => {
    const {logradouro, estado} = dados;
    console.log(logradouro, estado);
    console.log(dados);
})
.catch((error) => { 
    console.log('Ocorreu um erro: ', error);
})

//fetch await
async function buscaCep(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const dados = await response.json();
  return dados;
}

const cep1 = await buscaCep('04235100');
const cep2 = await buscaCep('17050010');
console.log(cep1);  
console.log(cep2);