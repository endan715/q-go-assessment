import React from 'react';
import { shallow } from 'enzyme';
import { ItemsList } from '../index';
import { List } from 'immutable';
import { getFilteredList } from '../todoSelector';

const defaultProps = {
  items: new List([]),
  onDelete: () => {},
  onToggleStatus: () => {}
};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(
      <ItemsList {...defaultProps} items={new List([])} />
    );
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = new List([{ id: 1, content: 'Test 1' }]);
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    const items = new List([
      { id: 1, content: 'Test 1', completed: false },
      { id: 2, content: 'Test 2', completed: false }
    ]);
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('Item')).toHaveLength(2);
  });

  it('should filter todo list if filter is set', () => {
    const items = new List([
      { id: 1, content: 'Test 1', completed: true },
      { id: 2, content: 'Test 2', completed: false }
    ]);

    const state = { filter: true, todos: items };
    const result = getFilteredList(state);
    expect(result.size).toEqual(1);
    expect(result.get(0).id).toEqual(2);
    expect(result.get(0).content).toEqual('Test 2');
  });
});
