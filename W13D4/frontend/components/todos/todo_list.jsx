// module.exports = () => <h3>Todo List goes here!</h3>;
// presentational component just means rendering html the screen

import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
    

    render() {

           
        let list = this.props.todos.map((todo, i ) => {
            return (
                <TodoListItem key={i} todo={todo} />
                  
              )
              
        });
        
        return (
          <div>
            <ul>
                { list }
              <li>this is coming from todo_list.jsx</li>
                </ul>
                <TodoForm receiveTodo={this.props.receiveTodo}/>
          </div>
        );
    }
}

export default TodoList;

// this.forEach(el=>{
    
// })

