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
          <React.Fragment>
            <Chip value = {5}></Chip>
            <Chip value = {25}></Chip>
              </React.Fragment>
      )}

}

export default Pot;
