import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Title from './Title'

function App() {
  const [title, setTitle] = useState("Titulo");
  const [showTitle, setShowTitle] = useState(true);

  const handleClick=()=>{
    //console.log("clicou")
    setTitle("novo titulo");
    setShowTitle(!showTitle);
  }

  useEffect(()=>{
    console.log("mudou o titulo");
  },[title])

  return (
    <div className="App">
      <header className="App-header">
        {/*showTitle && <Title text={title} />*/}
        <Title text={title} />
        <img src={logo} className="App-logo" alt="logo" />
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
        <button onClick={handleClick}>Mostra titulo</button>
      </header>
    </div>
  );
}

export default App;
