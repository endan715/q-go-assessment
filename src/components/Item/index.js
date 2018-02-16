import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ item, onDelete, onToggleStatus }) => {
  return (
    <li>
      <div>
        {item.content}
        <input type="button" value="Delete" onClick={() => onDelete(item.id)} />
        <input
          type="checkbox"
          checked={item.completed}
          onClick={() => onToggleStatus(item.id)}
        />
        <label>Completed</label>
      </div>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleStatus: PropTypes.func.isRequired
};

export default Item;
