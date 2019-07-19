import { connect } from 'react-redux';
import TodoList from './todo_list';

import { getAllTodos } from "../../reducers/selectors";
import { receiveTodo, receiveTodos } from "../../actions/todo_actions";

const mapStateToProps = (state) => { // is used for selecting the part of the data from the store that the connected component needs. 
    return {
        todos: getAllTodos(state) // 

    }
}


const mapDispatchToProps = (dispatch) => { //???
   return {
       receiveTodo: (todo) => dispatch(receiveTodo(todo)) // creates an action dispatcher
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
