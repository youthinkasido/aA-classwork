
import { RECEIVE_TODOS } from '../actions/todo_actions';
import { RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};

const newTodos = [
    {
        id: 3,
        title: 'purchase mayoneisse',
        body: 'with money',
        done: false 
    },
    {
        id: 4,
        title: 'eat hot dogs',
        body: '71 hot dogs',
        done: false 
    }
   
]

const todosReducer = (state = initialState, action) => {
    // debugger
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TODOS:
            let todo_obj = {};
            action.todos.forEach(todo => todo_obj[todo.id] = todo);
            return (todo_obj);
        case RECEIVE_TODO:
            let newState = { [action.todo.id]: action.todo };

            return (Object.assign({}, state, newState));
        default:
            return state;
    }
};

export default todosReducer;






