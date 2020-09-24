// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {
 

  setMouseData(e){
    const mouseData= [e.clientX, e.clientY] 
    this.props.onReceiveCoordinates(mouseData)
  }
  render() {
    return (
      <button onClick={this.setMouseData.bind(this)}></button>
    )
  }
}

export default CoordinatesButton
