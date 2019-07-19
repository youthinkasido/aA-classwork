import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import { getAllTodos } from './reducers/selectors';
import TodoList from './components/todos/todo_list';
import TodoListItem from './components/todos/todo_list_item';

// import { mapStateToProps, mapDispatchToProps} from './components/todos/todo_list_container';

import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.getAllTodos = getAllTodos;
    window.TodoList = TodoList;
    window.TodoListItem = TodoListItem;
    // window.mapStateToProps = mapStateToProps;
    // window.mapDispatchToProps = mapDispatchToProps;

    const content = document.getElementById("content");
    ReactDOM.render(<Root store={store}/>, content);
})