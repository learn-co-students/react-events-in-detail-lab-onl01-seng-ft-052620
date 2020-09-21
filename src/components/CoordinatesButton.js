// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    createCoords = (event) => {
        var x = event.clientX;  
        var y = event.clientY; 
       return this.props.onReceiveCoordinates([x,y])
    }

    render(){
        return <button onClick ={this.createCoords}/>
    }
}