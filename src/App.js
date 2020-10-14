import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Travis Ci Demo xxx
        </p>
        <button 
           className="center-block" 
           onClick={handleClick}>
         {count}
        </button>
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
