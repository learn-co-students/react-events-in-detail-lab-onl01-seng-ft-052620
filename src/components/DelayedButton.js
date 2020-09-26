// Code DelayedButton Component Here
import React, { Component } from 'react'

export class DelayedButton extends Component {
    // This component takes two props: onDelayedClick (a function), and delay (a number).
    handleDelayedClick = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay);
    } 

    render() {
        return (
            <div>
                <button onClick={this.handleDelayedClick}></button>
            </div>
        )
    }
}

export default DelayedButton
