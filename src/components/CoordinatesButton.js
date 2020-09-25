// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {

  handleClick = (e) => {
    const coor = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coor)
  }
  render() {
    return (
      <div>
          <button onClick={this.handleClick}></button>
      </div>
    )
  }
}

export default CoordinatesButton
