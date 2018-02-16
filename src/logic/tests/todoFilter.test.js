import filterReducer, { filterCompleted } from '../todoFilter';

describe('reducer', () => {
  it('should set filter on FILTER_CHANGED', () => {
    const state = false;
    const mockAction = filterCompleted({ target: { checked: true } });
    const result = filterReducer(state, mockAction);
    expect(result).toEqual(true);
  });
});
