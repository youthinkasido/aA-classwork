import { connect } from 'react-redux';
import TodoList from './todo_list';

import { getAllTodos } from "../../reducers/selectors";
import { receiveTodo, receiveTodos } from "../../actions/todo_actions";

const mapStateToProps = (state) => {
    todos: getAllTodos(state);
}


const mapDispatchToProps = () => {
    receiveTodo: (todo) => { dispatch(receiveTodo(todo))}
  
}