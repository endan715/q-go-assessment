import { createSelector } from 'reselect';

const todoSelector = state => state.todos;
const filterSelector = state => state.filter;

export const getFilteredList = createSelector(
  todoSelector,
  filterSelector,
  (todos, filterSelector) =>
    todos.filter(item => (filterSelector ? !item.completed : true))
);
