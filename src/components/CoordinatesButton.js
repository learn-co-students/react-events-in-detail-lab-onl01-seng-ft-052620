// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
    
    render () {
        return(
            <div>
                <button onClick={this.handleClick} />
            </div>
        )
    }

    handleClick = (e) => {
        const arr = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(arr)
    }



}

export default CoordinatesButton;


  

