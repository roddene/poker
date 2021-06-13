import React from 'react'
import Card from './card';

type MyProps = {
    cards:{rank:string,suit:string,shown:boolean}[];
}




class Flop extends React.Component<MyProps>{
    cards:{rank:string,suit:string,shown:boolean}[];
    
    constructor(props:MyProps){
        super(props);
        this.cards = props.cards;
    }
    render(){
        return (
          <div>
              {this.cards.map((card)=>{ if(card.suit!=='' &&card.rank!==''){
                  return <Card suit = {card.suit} rank = {card.rank} shown ={true}></Card>
              } else{
                return <Card suit = {''} rank = {''} shown ={false}></Card>
              }
              })}
          </div>
      )}

}

export default Flop;
