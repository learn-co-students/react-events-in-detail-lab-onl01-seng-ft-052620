import React from 'react';

class CoordinatesButton extends React.Component {
    handleCoord = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    };

    render() {
        return (
            <button onClick={this.handleCoord}>Coordination</button>
        )
    }
}

export default CoordinatesButton;