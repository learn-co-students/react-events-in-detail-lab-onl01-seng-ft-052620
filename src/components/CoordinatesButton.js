// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        const coordinateData = []
        coordinateData.push(event.clientX)
        coordinateData.push(event.clientY)
        this.props.onReceiveCoordinates(coordinateData)  
    }

    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}