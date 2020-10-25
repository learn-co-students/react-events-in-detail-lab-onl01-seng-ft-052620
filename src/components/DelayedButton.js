// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{
    render(){
        const callBack = (event) => {
            event.persist()
            setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
        }
        return <button onClick={callBack}> </button>
    }
}
export default DelayedButton