import logo from './logo.svg';
import './App.css';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Intervalo from './components/Intervalo';
import {useState, useEffect} from 'react';

function App() {
  

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo />
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
