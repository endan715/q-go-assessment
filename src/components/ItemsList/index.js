import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from '../Item/index';
import { deleteItem, toggleStatus } from '../../logic/todos';
import { getFilteredList } from './todoSelector';
import './styles.css';

export const ItemsList = ({ items, onDelete, onToggleStatus }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.size < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            onDelete={onDelete}
            onToggleStatus={onToggleStatus}
          />
        ))}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleStatus: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { items: getFilteredList(state) };
};

function mapDispatchToProps(dispatch) {
  return {
    onDelete: id => dispatch(deleteItem(id)),
    onToggleStatus: id => dispatch(toggleStatus(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
