import reducer, {
  initialState,
  addItem,
  deleteItem,
  toggleStatus
} from '../todos';
import { List } from 'immutable';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const state = new List([
      { id: 1, content: 'first' },
      { id: 2, content: 'second' }
    ]);
    const mockAction = addItem('third');
    const result = reducer(state, mockAction);
    expect(result.size).toEqual(3);
    expect(result.get(2).id).toEqual(3);
    expect(result.get(2).content).toEqual('third');
  });

  it('should delete a item on DELETE_ITEM', () => {
    const state = new List([
      { id: 1, content: 'first' },
      { id: 2, content: 'second' }
    ]);
    const mockAction = deleteItem(2);
    const result = reducer(state, mockAction);
    expect(result.size).toEqual(1);
    expect(result.get(0).id).toEqual(1);
    expect(result.get(0).content).toEqual('first');
  });

  it('should toggle a item on TOGGLE_COMPLETED', () => {
    const state = new List([
      { id: 1, content: 'first', completed: false },
      { id: 2, content: 'second', completed: false }
    ]);
    const mockAction = toggleStatus(2);
    const result = reducer(state, mockAction);
    expect(result.get(1).completed).toEqual(true);
  });
});
