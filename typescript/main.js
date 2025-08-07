var meuDog = {
    nome: 'Pingo',
    qtdPatas: 4,
    raca: 'Caramelo',
    latir: function () {
        console.log('Au Au!');
        return 'Au Au!';
    }
};
var latido = meuDog.latir();
console.log("O cachorro ".concat(meuDog.nome, " da ra\u00E7a ").concat(meuDog.raca, " latiu: ").concat(latido));
