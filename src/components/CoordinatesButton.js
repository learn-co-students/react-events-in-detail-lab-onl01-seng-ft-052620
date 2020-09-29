// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

    render() {
        return <button onClick={this.handleClick}></button>
    }

    handleClick = (e) => {
        let data = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(data)
    }
}