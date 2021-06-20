import React from 'react'
import Card from './card';


type MyProps = {
    cards:{rank:string,suit:string, shown:boolean}[];
    position:number;
    name:string;
    playerid:number;
    money:number;
    folded:boolean;
    amountBet:number;
    blind:string;
}




class Player extends React.Component<MyProps>{
    cards:{rank:string,suit:string, shown:boolean}[];
    position:number;
    name:string;
    playerid:number;
    money:number;
    folded:boolean;
    amountBet:number;
    blind:string;
    
    
    constructor(props:MyProps){
        super(props);
        this.cards = props.cards;
        this.position = props.position;
        this.name = props.name;
        this.playerid = props.playerid;
        this.money = props.money;
        this.folded = props.folded;
        this.amountBet = props.amountBet;
        this.blind = props.blind;
    }

    render(){
        return (
          <div className = "player-box">

              <div className = "player-cards">
              <Card rank = {this.cards[0].rank} suit = {this.cards[0].suit} shown = {this.cards[0].shown}></Card>
              <Card rank = {this.cards[1].rank} suit = {this.cards[1].suit} shown = {this.cards[1].shown}></Card>
              </div>
              <div className = "player-profile-box">
              <img className = "player-profile-picture" src = './blank-user.svg' alt = "failed to load"></img>
              <div className = "player-info">
                <p className = "player-name" >{this.name}</p>
                <p className = "player-money">{this.money}$</p>
                </div>
                </div>
                

              </div>
      )}

}

export default Player;
