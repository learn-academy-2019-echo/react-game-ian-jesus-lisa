import React, { Component } from 'react';
import Square from "./Square"
import './App.css';


class Board extends Component{
    constructor(props){
        super(props)
        this.state ={
            squares:Array(9).fill(null),
            playerOneTurn: true,
            }
        }
    
    handleClick = (e)=>{
       let {squares,playerOneTurn} = this.state
        squares[e] = playerOneTurn ? 'x' : 'o'
   //set up new Array to change when clicked
   //var newArray = [null,null,'x',null,null,null,null,null,null]
   //     var squareIndex = e.target.value;
      //  console.log(this.state.squares)
       this.setState({squares:squares})
    }
    
    
    render() {
        
       let {squares} = this.state
        let grid = this.state.squares.map((square, index) => {
            return (<Square key = {index.toString()} value = {squares[index]} handleClick = {this.handleClick.bind(this, index)}/>)
        })
        return(
         <div>
            {grid}
         </div>
            
            
        )
        
    }
}

export default Board;