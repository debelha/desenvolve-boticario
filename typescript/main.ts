interface Animal {
    nome: string;
    qtdPatas: number;
}

interface Cachorro extends Animal {
    raca: string;
    latir(): void;
}

let meuDog: Cachorro = {
    nome: 'Pingo',
    qtdPatas: 4,
    raca: 'Caramelo',
    latir() {
        console.log('Au Au!');
        return 'Au Au!';
    }
}

let latido = meuDog.latir();
console.log(`O cachorro ${meuDog.nome} da raça ${meuDog.raca} latiu: ${latido}`);

type Book = {
    title: string;
    autor: string;
    pages: number;
    published: boolean;
}

let book1: Book = {
    title: 'Aprendendo TypeScript',
    autor: 'João Silva',
    pages: 300,
    published: true
}

let book2: Book = {
    title: 'Avançando com TypeScript',
    autor: 'Maria Oliveira',
    pages: 250,
    published: false
}

let book3: Book = {
    title: 'TypeScript para Iniciantes',
    autor: 'Carlos Souza',
    pages: 150,
    published: true
}

let estante = [book1, book2, book3];

let livrosPublicados = estante.filter((livro) => {
    return livro.published;
});

let listaTitulos = estante.map((livro) => {
    return livro.title;
});

interface Produto {
    nome: string;
    preco: number;
    descricao?: string;
    imagens?: string[];
}

interface ProdutoDoBD {
    id: string;
    nome: string;
    preco: number;
    descricao?: string;
    imagens?: string[];
    criadoEm: Date;
}

function createProduct(produtoUsuario: Produto): ProdutoDoBD {
    let produtoBD: ProdutoDoBD = {
        id: crypto.randomUUID(),
        nome: produtoUsuario.nome,
        preco: produtoUsuario.preco,
        descricao: produtoUsuario.descricao,
        imagens: produtoUsuario.imagens,
        criadoEm: new Date()
    };                            
    return produtoBD;
}
