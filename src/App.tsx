//import React from 'react';
//import Card from './frontend/card';
//import Flop from './frontend/flop'
import Player from './frontend/player'

import './App.css';

function App() {
  //<Flop cards = {[{rank:"2",suit:"hearts",shown:true},{rank:"7",suit:"clubs",shown:true},{rank:'',suit:'',shown:false}]}/> 
  return (
    <div className="App">
      <header className="App-header">
        
        
        <Player cards = {[{rank:"2",suit:"hearts",shown:true},{rank:"7",suit:"clubs",shown:true}]} position = {1} name = "name" playerid = {534543253} money={100.00} folded = {false}
        amountBet = {20.00} blind = {"little"}> </Player>
    

      </header>
    </div>
  );
}

export default App;
