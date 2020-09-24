import React, {Component} from 'react'

class CoordinatesButton extends Component{

    handleClick = (event) => {
        let xy = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(xy)
    }

    render(){

        return(
            <button onClick={this.handleClick}>Hi</button>
        )
    }
}

export default CoordinatesButton
