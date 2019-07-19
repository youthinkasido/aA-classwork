import { combineReducers } from 'redux';
import todosReducer from './todos_reducer'; // todosReducer(state,action)

const rootReducer = combineReducers({
    todos: todosReducer
});

export default rootReducer;