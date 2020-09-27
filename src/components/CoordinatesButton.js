// Code CoordinatesButton Component Here

import React from 'react';

class CoordinatesButton extends React.Component {
 
createArray = (e) => {
  const array = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(array)
}


  render() {
    return (
        <button onClick={this.createArray}> 
 </button>
    )
     
  }
}

export default CoordinatesButton;