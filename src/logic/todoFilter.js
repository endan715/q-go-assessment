export const FILTER_CHANGED = 'qgo/assessment/FILTER_CHANGED';

export const filterCompleted = e => {
  return { type: FILTER_CHANGED, filterCompleted: e.target.checked };
};

const initialState = false;

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CHANGED:
      return action.filterCompleted;
    default:
      return state;
  }
};

export default filterReducer;
