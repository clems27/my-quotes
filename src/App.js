import React from 'react';
import Quotes from "./Quotes";
import Clem from "./Clem"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <header>
        <h1>Clem's Quotes Bible.</h1>
        <h5>Freeborn Version</h5>
      </header>
      </div>
        <Quotes />
        <Clem />
    </div>
  );
}

export default App;
