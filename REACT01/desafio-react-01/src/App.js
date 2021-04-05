import { useEffect, useState } from "react";
import Button from './Button.js';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText]= useState("pronto");
  const [estado, setEstado]=useState(true);
  const [titulo, setTitulo]=useState();
  
  const handleClick =() =>{
    setText("Mudou o texto");
  };
  const click=()=>{
    setTitulo("Titulo alterado e etc...")
  };
  useEffect(()=>{
    estado ? setEstado(false) : console.log("algo novo");
  }, [text, estado]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{titulo}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Button func={click} texto="tururu"/>        
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
          {text}
        </a>
        <Button func={handleClick} texto="alterado o texto"/>
      </header>
    </div>
  );
}

export default App;
