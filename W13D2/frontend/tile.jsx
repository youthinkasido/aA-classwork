import React from 'react';
import ReactDOM from 'react-dom';



export default class Tile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {text :}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault();
        this.text = "o"
        console.log('hello')
    }


    render() {
        if (this.props.pos.bombed){
            this.text = "o"
        } else {
            this.text = "x"
        }
        
        return <div className="tile" onClick={this.handleClick}> {this.text} </div>

    }

}