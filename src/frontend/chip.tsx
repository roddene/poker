import React from 'react'

type MyProps = {
    value:number;
}




class Chip extends React.Component<MyProps>{
    value:number;
    
    constructor(props:MyProps){
        super(props);
    this.value = props.value;

    }
    render(){
        return (
          <React.Fragment>
            <object className = "chip" type = "image/svg+xml" data = {'./svg-chips/poker-chip-'+this.value+'.svg'}></object>
              </React.Fragment>
      )}

}

export default Chip;
