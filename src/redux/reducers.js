import { combineReducers } from 'redux';
import reducer from '../logic/todos';
import filterReducer from '../logic/todoFilter';

export default function createReducer() {
  return combineReducers({
    todos: reducer,
    filter: filterReducer
  });
}
