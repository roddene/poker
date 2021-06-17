//import React from 'react';
//import Card from './frontend/card';
//import Flop from './frontend/flop'
//import Player from './frontend/player'
import Table from './frontend/table'

import './App.css';

function App() {
  //<Flop cards = {[{rank:"2",suit:"hearts",shown:true},{rank:"7",suit:"clubs",shown:true},{rank:'',suit:'',shown:false}]}/> 
  return (
    <div className="App">
      <header className="App-header">
        
        <Table playerCount = {9}></Table>
        
    

      </header>
    </div>
  );
}

export default App;
