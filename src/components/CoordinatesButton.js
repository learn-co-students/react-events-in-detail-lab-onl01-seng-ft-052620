// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {
    
    coordinates = (event) => {
        let x = event.clientX;
        let y = event.clientY;
        console.log(this.props)
        return this.props.onReceiveCoordinates([x, y])
    }

    render() {
        return (
            <button onClick={this.coordinates}></button>
        )
    }
}

export default CoordinatesButton
