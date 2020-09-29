import React, {Component} from 'react'

export default class DelayedButton extends Component {
    render() {
        return <button onClick={this.handleClick}></button>
    }

    handleClick = (e) => {
        // const event = e
        setTimeout(() => {
            e.persist();
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }
}