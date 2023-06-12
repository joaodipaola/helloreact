import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {

  const [contador, setContador] = useState(0);

  function handleButtonClick(){
    setContador(contador + 1);
  }

  return (
    <div className="App">
      <h1>Total clicks:</h1>
      <Header title={contador} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>HELLO WORLD!!!</h1>
        <input type="button" value="Click me!" onClick={handleButtonClick} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
