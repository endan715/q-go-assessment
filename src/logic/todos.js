import { List } from 'immutable';

export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';
export const DELETE_ITEM = 'qgo/assessment/DELETE_ITEM';
export const TOGGLE_STATUS = 'qgo/assessment/TOGGLE_COMPLETED';

export const TO_DO_LIST = 'ToDoRecord';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const deleteItem = id => {
  return { type: DELETE_ITEM, id };
};

export const toggleStatus = id => {
  return { type: TOGGLE_STATUS, id };
};

export const initialState = new List(
  [
    { id: 1, content: 'Call mum', completed: false },
    { id: 2, content: 'Buy cat food', completed: false },
    { id: 3, content: 'Water the plants', completed: false }
  ],
  TO_DO_LIST
);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId = state.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
        completed: false
      };

      return state.push(newItem);
    case DELETE_ITEM:
      return state.filter(item => item.id !== action.id);
    case TOGGLE_STATUS:
      return state.update(
        state.findIndex(function(item) {
          return item.id === action.id;
        }),
        function(item) {
          return { ...item, completed: !item.completed };
        }
      );
    default:
      return state;
  }
};

export default reducer;
