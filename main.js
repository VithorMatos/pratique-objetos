function Cinematografia(nome, ano, duracao){
    this.nome = nome;
    this.ano = ano;
    this.duracao = duracao;
}


function Filme(nome, ano, duracao, genero){
    Cinematografia.call(this, nome, ano, duracao)
    
    this.genero = genero;

}

function Serie(nome, ano, duracao, genero){
    Cinematografia.call(this, nome, ano, duracao);

    this.genero = genero;

}

function Documentario(nome, ano, duracao, tema){
    Cinematografia.call(this, nome, ano, duracao)

    this.tema = tema

}


const filme = new Filme('cães de aluguel', 1992, '1h39m', 'suspense');
const serie = new Serie('Sopranos', 1999, '6tp', 'Drama');
const documentario = new Documentario('Super Size Me', 2004, '1h38m', 'Industria do FastFood');

console.log(filme)
console.log(serie)
console.log(documentario)