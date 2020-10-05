// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
    
    render () {
        return (
            <div>
                <button onClick={this.handleCLick} />
            </div>
        )
    }

    handleCLick = (e) => {
        e.persist()
        setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
    }

 
}
export default DelayedButton;