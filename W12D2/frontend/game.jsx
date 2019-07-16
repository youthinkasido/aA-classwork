import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
import * as Minesweeper from '../minesweeper.js'



export default class Game extends React.Component{
    constructor(){
    super()
    this.state = {
        board: new Minesweeper.Board(9, 4)  //
        }
    this.updateGame = this.updateGame.bind(this);
    }

  

   updateGame(){

   }

   render(){ //return a new Board
       return (
       <div>
           <h1 className="title">Minesweeper!
           </h1>
           <div>
           <Board board={this.state.board} update={this.updateGame}/>
           </div>
        </div>
       )
    }



}



// return (
//     <div>
//         <h1>Autocomplete</h1>
//         <div className='auto'>
//             <input
//                 onChange={this.handleInput}
//                 value={this.state.inputVal}
//                 placeholder='Search...' />