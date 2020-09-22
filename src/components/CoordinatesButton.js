import React, { Component } from 'react'

class CoordinatesButton extends Component {
  handleClick = (e) => {
    const coords = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coords)
  }

  render(){
    return(
      <button onClick={(e)=>{this.handleClick(e)}}>Coordinates button</button>
    )
  }
}

export default CoordinatesButton
