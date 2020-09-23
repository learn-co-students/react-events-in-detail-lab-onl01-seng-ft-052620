// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{
   
    handleClick(event){
        console.log(event)

    }
    
    
    render(){
        return(
        <button onClick= {this.handleClick}></button>
        )
    }
}