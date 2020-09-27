// Code DelayedButton Component Here

import React from 'react';

class DelayedButton extends React.Component {

clickEvent = (e) => {
    console.log("i got clicked")
    e.persist()
    setTimeout(() => {
        this.props.onDelayedClick(e)
    }, this.props.delay);

}
  render() {
    return (
        <button onClick={this.clickEvent}>

        </button>
    )
     
  }
}

export default DelayedButton;