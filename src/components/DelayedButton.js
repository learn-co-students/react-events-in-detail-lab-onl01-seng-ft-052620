import React, { Component } from 'react'

class DelayedButton extends Component {
  handleClick = (e) => {
    e.persist()
    setTimeout(()=>{this.props.onDelayedClick(e)}, this.props.delay)
  }
  render(){
    return(
      <button onClick={(e)=>{this.handleClick(e)}}>Delayed Button</button>
    )
  }
}

export default DelayedButton
