import React from 'react'
import Pot from './pot'
import Player from './player'

type MyProps = {
    playerCount:number;
}




class Table extends React.Component<MyProps>{
    playerCount:number
    
    constructor(props:MyProps){
        super(props);
        this.playerCount=props.playerCount;
    }
    render(){
        return (
          <div id = "table">
              <div className = "player-left">
              <Player cards = {[{rank:"2",suit:"hearts",shown:true},{rank:"7",suit:"clubs",shown:true}]} position = {1} name = "name" playerid = {534543253} money={100.00} folded = {false}
        amountBet = {20.00} blind = {"little"}> </Player>
        </div>
            <div className = "player-top-left">
            <Player cards = {[{rank:"2",suit:"hearts",shown:true},{rank:"7",suit:"clubs",shown:true}]} position = {1} name = "name" playerid = {534543253} money={100.00} folded = {false}
        amountBet = {20.00} blind = {"little"}> </Player>
            </div>

            <div className = "player-bottom-left">
            <Player cards = {[{rank:"2",suit:"hearts",shown:true},{rank:"7",suit:"clubs",shown:true}]} position = {1} name = "name" playerid = {534543253} money={100.00} folded = {false}
        amountBet = {20.00} blind = {"little"}> </Player>
            </div>

            <div className = "player-center-left">
            <Player cards = {[{rank:"2",suit:"hearts",shown:true},{rank:"7",suit:"clubs",shown:true}]} position = {1} name = "name" playerid = {534543253} money={100.00} folded = {false}
        amountBet = {20.00} blind = {"little"}> </Player>
            </div>

            <div className = "player-center-right">
            <Player cards = {[{rank:"2",suit:"hearts",shown:true},{rank:"7",suit:"clubs",shown:true}]} position = {1} name = "name" playerid = {534543253} money={100.00} folded = {false}
        amountBet = {20.00} blind = {"little"}> </Player>
            </div>

            <div className = "player-top-right">
            <Player cards = {[{rank:"2",suit:"hearts",shown:true},{rank:"7",suit:"clubs",shown:true}]} position = {1} name = "name" playerid = {534543253} money={100.00} folded = {false}
        amountBet = {20.00} blind = {"little"}> </Player>
            </div>

            <div className = "player-right">
            <Player cards = {[{rank:"2",suit:"hearts",shown:true},{rank:"7",suit:"clubs",shown:true}]} position = {1} name = "name" playerid = {534543253} money={100.00} folded = {false}
        amountBet = {20.00} blind = {"little"}> </Player>
            </div>

            <div className = "player-bottom-right">
            <Player cards = {[{rank:"2",suit:"hearts",shown:true},{rank:"7",suit:"clubs",shown:true}]} position = {1} name = "name" playerid = {534543253} money={100.00} folded = {false}
        amountBet = {20.00} blind = {"little"}> </Player>
            </div>

            <div className = "player-bottom">
            <button className = "player-button">Fold</button>
            <button className = "player-button">Check</button>
            <Player cards = {[{rank:"ace",suit:"hearts",shown:true},{rank:"ace",suit:"clubs",shown:true}]} position = {1} name = "namelongggggggg" playerid = {534543253} money={100.00} folded = {false}
        amountBet = {20.00} blind = {"little"}> </Player>
        <button className = "player-button">Call</button>
        <button className = "player-button">Bet</button>
            </div>
          </div>
      )}

}

export default Table;
