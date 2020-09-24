import React from 'react';

class CoordinatesButton extends React.Component {

    renderCoordinates = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return (
            <button onClick={this.renderCoordinates}>
                Coordinates 
            </button>
        )
    }
}

export default CoordinatesButton;
