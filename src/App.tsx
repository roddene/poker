import React from 'react';
import Card from './frontend/card';
import Flop from './frontend/flop'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          
          Nice
        </p>
        <Flop cards = {[{rank:"2",suit:"hearts"},{rank:"7",suit:"clubs"}]}>
          
        </Flop>
    

      </header>
    </div>
  );
}

export default App;
