import React, { Component } from 'react';

class CoordinatesButton extends Component {

    handleClick = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
//accepts the arguments as an array to be passed to onReceiveCoordinates
    }

    render() {
        return (
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }
}

export default CoordinatesButton;
