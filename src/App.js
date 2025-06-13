import React, {useState} from 'react';
import './App.css';
import './reset.css';

function App() {
  const [senha, setSenha] = useState('');

  const gerarSenha = () => {
   const symbol =  ['*', '%', '$', '#'];
   const letras = ['a', 'b', 'B', 'c', 'd', 'e', 'E', 'f', 'g', 'G', 'h', 'i', 'j', 'k', 'K', 'l', 'L', 'm', 'z', 'Z'];
   const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

   const elementos = symbol.concat(letras, numeros);
   let novaSenha = '';
   const tamanho = 10;

    for(let i = 0; i < tamanho; i++){
         const aleatorio = Math.floor(Math.random() * elementos.length);
         novaSenha += elementos[aleatorio];
    }
     setSenha(novaSenha)
}


  return (
        <span className='all'>
          <h1>Gerar a sua senha</h1>
          <button onClick={gerarSenha}>Clique aqui para gerar a sua senha</button>
          <p>Sua senha é: {senha}</p>
        </span>
  );
}

export default App;
