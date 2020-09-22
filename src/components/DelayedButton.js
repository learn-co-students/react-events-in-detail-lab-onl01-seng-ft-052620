import React from 'react'

class DelayedButton extends React.Component {
    handleDelay = event => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay)
    };

    render() {
        return (
            <button onClick={this.handleDelay}>Delay</button>
        )
    }
}

export default DelayedButton;
