import React from 'react'
import Card from './card';

type MyProps = {
    cards:{rank:string,suit:string}[];
}




class Flop extends React.Component<MyProps>{
    cards:{rank:string,suit:string}[];
    
    constructor(props:MyProps){
        super(props);
        this.cards = props.cards;
    }
    render(){
        return (
          <div>
              {this.cards.map((card)=>{
                  return <Card suit = {card.suit} rank = {card.rank} shown ={true}></Card>
              })}
          </div>
      )}

}

export default Flop;
