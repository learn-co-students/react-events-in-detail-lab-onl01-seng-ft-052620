// Code DelayedButton Component Here
import React, { Component } from 'react'

export class DelayedButton extends Component {
    
    delayedClick = (event) => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.delayedClick}></button>
        )
    }
}

export default DelayedButton
