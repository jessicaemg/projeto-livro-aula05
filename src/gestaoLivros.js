//1- criar um vetor com 5 livros contendo as seguintes propriedades: ID, titulo, tema, preco.
//2- Crie uma função que receba o ID de um livro e retorne o seu título. 
// Exemplo de chamada de função: buscarTituloDoLivroID(99) -> 'Titulo do livro de ID 99'
//3- Escreva um teste automatizado de unidade para testar a condição de busca do titulo por ID.
//4- [Avançado] validar se o ID foi informado e é maior que o 0.
//5- Escreva dois testes automatizados de unidade para testar as condições de envio incorreto do ID.
//6- adicionar o mochawesome para gerar relátorios em hml 

const Livros = [
  {
    id: 1,
    titulo: 'O poder do arcanjo Miguel',
    Tema: 'Reflexão',
    preco: 80.56    
  },
  {
    id: 2,
    titulo: 'A gemea errada',
    Tema: 'Romance',
    preco: 11.49    
  },
  {
    id: 3,
    titulo: 'O CEO tem que casar',
    Tema: 'Romance',
    preco: 20.89    
  },
  {
    id: 4,
    titulo: 'O principe que eu amo',
    Tema: 'Romance',
    preco: 10.89    
  },
  {
    id: 99,
    titulo: 'A Certeza',
    Tema: 'Romance',
    preco: 54.89    
  }
]

//2- Crie uma função que receba o ID de um livro e retorne o seu título. 
export function buscarLivroPorID(id) {
  const livroEncontrado = Livros.find(livro => livro.id === id);

  if (!livroEncontrado) {
        throw new Error('Livro não encontrado');
    }   
    return livroEncontrado.titulo;
}

export function buscarLivroTodos(id){
 for (let i = 0; i < Livros.length; i++){
   if (Livros[i].id == id){
    return Livros[i].titulo;
   }
 }
}

export function buscarLivroPorID99(id) {
  const livroEncontrado = Livros.find(livro => livro.id === id);
  
   if (!livroEncontrado) {
        throw new Error('Livro não encontrado');
    }  
    return livroEncontrado.titulo;
}

export function buscarLivroPorID0(id) {
  
  if (id === undefined || id === null || id <= 0) {
        throw new Error('Id inválido, não possui nenhum livro com o ID informado.');
    }  

}