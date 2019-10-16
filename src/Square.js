import React, { Component } from 'react';
import './App.css';



class Square extends Component{
    

    
 
    render() {
        return(
         <div style = {{border: '5px solid black', width: '200px', height: '200px'}} onClick = {this.props.handleClick}>
            <img src = {this.props.value} />
         </div>
            
            
        )
        
    }
}

export default Square;