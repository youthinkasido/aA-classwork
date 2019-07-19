import React from 'react';
import { createId } from '../../util/id.jsx';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false,
            id: createId()
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return (e)=>{
            this.setState({[field]: e.target.value});
        }
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState({ 
            title: "",
            body: "",
            done: false,
            id: createId()
            }
        );
    }
    
    render () {

        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="todo[title]"
                onChange={this.update("title")}
                value={this.state.title}
              />
            </label>

            <label>
              Body:
              <input
                type="text"
                name="todo[body]"
                onChange={this.update("body")}
                value={this.state.body}
              />
            </label>

            <input type="submit" name="Save" value="Save" />
          </form>
        );
    }
}

export default TodoForm;