import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './tile';


export default class Board extends React.Component{
    constructor(props){
        super(props)

        
    }

    render(){ // returns component tree
        // debugger
        return(
        // <div> <Tile updateGame={this} /></div>
        <div>
            
            {this.props.board.grid.map((row,i) => ( // iterate through nested array
                <div key={i}>{ row.map((col, j) =>( // how/why use index here
                    <Tile key={[i, j]}  pos={[i,j]} update={this.props.update}/>) )}
                </div>
            ))
        }</div>
        )
    }
}

// /// [
// this.props.board.grid
//      Inside of this, use Array#map on the grid of 
//      this.props.board to return a <div> component for each row

// [], [], [], [], [], [], [], [], [] 
// [], [], [], [], [], [], [], [], [] 
// [], [], [], [], [], [], [], [], [] 
// [], [], [], [], [], [], [], [], [] 
// [], [], [], [], [], [], [], [], [] 
// [], [], [], [], [], [], [], [], [] 
// [], [], [], [], [], [], [], [], [] 
// [], [], [], [], [], [], [], [], [] 
// [], [], [], [], [], [], [], [], [] 

// ]




// <div>

//     {this.props.board.grid.map((row, i) => ( // iterate through nested array
//         <div key={i}>{row.map((col, j) => ( // how/why use index here
//             <Tile key={[i, j]} pos={[i, j]} update={this.props.update} />))}
//         </div>
//     ))
//     }</div>
        