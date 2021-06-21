import React from 'react'
import Chip from './chip'
type MyProps = {

}




class Pot extends React.Component<MyProps>{

    constructor(props:MyProps){
        super(props);

    }
    render(){
        return (
          <table>  
            <tr> 
            <Chip value = {1}></Chip>
            <Chip value = {5}/>
            <Chip value = {10}/>
            <Chip value = {25}/>
            </tr>
            <tr>
              <Chip value = {100}/>
              <Chip value = {500}/>
              <Chip value = {1000}/>
              <Chip value = {5000}/>
            </tr>
            <tr>
              <Chip value = {25000}/>
              <Chip value = {100000}/>
              <Chip value = {500000}/>
              <Chip value = {1000000}/>
            </tr>
             </table>
      )}

}

export default Pot;
