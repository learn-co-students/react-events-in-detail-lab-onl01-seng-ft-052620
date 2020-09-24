import React, { Component } from 'react'

export class CoordinatesButton extends Component {

  handleClick = e => {
    let coords = [e.clientX,e.clientY]
    this.props.onReceiveCoordinates(coords)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Log Coordinates</button>
      </div>
    )
  }
}

export default CoordinatesButton
