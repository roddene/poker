import React from 'react'
import images from './images'

type MyProps = {
    suit:string;
    rank:string;
    shown:boolean;
}




class Card extends React.Component<MyProps>{
    suit:string;
    rank:string;
    shown:boolean
    
    constructor(props:MyProps){
        super(props);
        this.suit = props.suit;
        this.rank = props.rank;
        this.shown = props.shown;
    }
    render(){
        return (
          <React.Fragment>
              {this.shown ? images.filter((el)=>{return el.rank===this.rank &&el.suit===this.suit}).map(({id,src}) => <img className = "card" src = {src} alt = {id} key = {id}></img>):<img className = "card" src = './svg-cards/card_back.svg' alt = "back"></img>}
              </React.Fragment>
      )}

}

export default Card;
