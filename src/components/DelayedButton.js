import React, { Component } from 'react';


//This component takes two props: onDelayedClick (a function), and delay (a number).
class DelayedButton extends Component {

    handleClick = e => {
        e.persist();
        setTimeout(() => {
            this.props.onDelayedClick(e);
        }, this.props.delay)
        //when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay
    }
    render(){
        return (
            <button onClick={this.handleClick}>Delay</button>
        )
    }
}

export default DelayedButton;
