import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import { getAllTodos } from './reducers/selectors';

import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.getAllTodos = getAllTodos;
    const content = document.getElementById("content");
    ReactDOM.render(<Root store={store}/>, content);
})