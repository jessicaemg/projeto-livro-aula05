import { buscarLivroPorID } from '../src/gestaoLivros.js';
import { buscarLivroPorID0 } from '../src/gestaoLivros.js';
import { buscarLivroTodos } from '../src/gestaoLivros.js';
import assert from 'node:assert'

describe('Gestão de busca de livros', function() {
    // caminho de busca por for para vê se tem o mesmo retorno 
    it ('Escreva um teste automatizado de unidade para testar a condição de busca do titulo por ID' , function(){

      const id = 1;
      const tituloLivroRetornado = buscarLivroTodos(id);

     assert.strictEqual(tituloLivroRetornado, 'O poder do arcanjo Miguel');
    });

    it ('Escreva um teste automatizado de unidade para testar a condição de busca do titulo por ID' , function(){

      const id = 2;
      const tituloLivroRetornado = buscarLivroPorID(id);

     assert.strictEqual(tituloLivroRetornado, 'A gemea errada');
    });

    it ('Escreva um teste automatizado de unidade para testar a condição de busca do titulo por ID' , function(){

      const id = 3;
      const tituloLivroRetornado = buscarLivroPorID(id);

     assert.strictEqual(tituloLivroRetornado, 'O CEO tem que casar');
    });

    it ('Escreva um teste automatizado de unidade para testar a condição de busca do titulo por ID' , function(){

      const id = 4;
      const tituloLivroRetornado = buscarLivroPorID(id);

     assert.strictEqual(tituloLivroRetornado, 'O principe que eu amo');
    });

    it ('Validar que a função que receba o ID 99 de um livro e retorne o seu título' , function(){

      
      const tituloLivroEsperado = 'A Certeza';
      const tituloLivroRetornado = buscarLivroPorID(99);

     assert.strictEqual(tituloLivroRetornado, tituloLivroEsperado);
    });

    it ('Validar se o ID informado for 0 deve da erro' , function(){
      assert.throws(
        () => { buscarLivroPorID0(0); },
        {
            message: 'Id inválido, não possui nenhum livro com o ID informado.'
        }
      );
    });

    it ('Validar se o ID estiver vazio deve da erro' , function(){
      assert.throws(
        () => { buscarLivroPorID0(); },
        {
            message: 'Id inválido, não possui nenhum livro com o ID informado.'
        }
      );
    });

    it ('Validar se o ID for menor que 0 deve da erro' , function(){
      assert.throws(
        () => { buscarLivroPorID0(-2); },
        {
            message: 'Id inválido, não possui nenhum livro com o ID informado.'
        }
      );
    });
});    