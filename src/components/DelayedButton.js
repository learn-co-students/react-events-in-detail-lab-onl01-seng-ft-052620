import React, { Component } from 'react'

export class DelayedButton extends Component {

  handleClick = e => {
    e.persist()
    const callback = () => this.props.onDelayedClick(e)
    setTimeout(callback,this.props.delay)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} >Delay</button>
      </div>
    )
  }
}

export default DelayedButton
