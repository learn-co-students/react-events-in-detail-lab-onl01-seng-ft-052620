// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
    handleClick = (e) => {
        const arr = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(arr)
    }
}

export default CoordinatesButton
