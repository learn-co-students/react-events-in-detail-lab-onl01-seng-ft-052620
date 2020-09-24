import React, {Component} from 'react'

class DelayedButton extends Component{

    delayMe = (event) => {
        event.persist
        setTimeout( function(){ 
            this.props.onDelayedClick(event)}
            .bind(this), this.props.delay)
    }

    render(){

        return(
            <button onClick={this.delayMe}>SziaMia</button>

        )
    }
}

export default DelayedButton
