import React from 'react';
import Square from './Square.js'

class Board extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    squares: Array(9).fill(null),             //Array for the 9 board places. Initial state is null.
    xNextPlayer: true,                        //Keeps Track of player turns. Initial state is X's turn to play
    }
  }

  handleClick = (i) => {                                  //Called from onClick event in Square
    const squares = this.state.squares.slice();         
    squares[i] = this.state.xNextPlayer ? 'X' : 'O';  //Set the clicked squares array element to x or o
    const winner = this.findWinner(squares); 
    this.setState({
      squares: squares,                             // set the state of squares so that the value is contained within the array
      xNextPlayer: !this.state.xNextPlayer,          //CHange boolean value for the next player
    });
    return winner
  }

  handleSquare(i) {                           //on a click from Square, set value to the id of the squares array and display X or O on the button
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  findWinner(squares) {
    const winArray = [                //Set the winning conditions into an array of arrays
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
     ];
          
    for (let i=0; i < winArray.length ; i++){                     // for loop to check if there are three in a row of the same character
        let [a,b,c] = winArray[i];                                
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {   //
                return squares[a]                                     //return the letter X or O when a winning condition is present
            }
        }
    }
  
  render() {
    const status = 'Next player: ' + (this.state.xNextPlayer ? 'X' : 'O');     //Display on the screen which player's turn it is
    return (
      <div>
        <div className="status">{status}</div>
        <div className="row">
          {this.handleSquare(0)}
          {this.handleSquare(1)}
          {this.handleSquare(2)}
        </div>
        <div className="row">
          {this.handleSquare(3)}
          {this.handleSquare(4)}
          {this.handleSquare(5)}
        </div>
        <div className="row">
          {this.handleSquare(6)}
          {this.handleSquare(7)}
          {this.handleSquare(8)}
        </div>
        <div className="player-win">
            The winning player is {this.findWinner(this.state.squares)}
        </div>
      </div>
    );
  }
}

export default Board;