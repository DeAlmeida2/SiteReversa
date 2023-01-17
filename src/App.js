import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Reversa Gestão Ambiental
        </p>
        <a
          className="App-link"
          href="https://www.infomoney.com.br/cotacoes/b3/indice/ico2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leia mais sobre crédito de Carbono
        </a>
      </header>
    </div>
  );
}

export default App;
