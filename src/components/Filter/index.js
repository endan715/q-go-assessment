import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterCompleted } from '../../logic/todoFilter';

export const Filter = ({ onFilterCompleted, filterChecked }) => {
  return (
    <div>
      <input
        id="chkHideCompleted"
        type="checkbox"
        checked={filterChecked}
        onChange={onFilterCompleted}
      />
      <label>Hide completed item</label>
    </div>
  );
};

Filter.propTypes = {
  onFilterCompleted: PropTypes.func.isRequired,
  filterChecked: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return { filterChecked: state.filter };
};

function mapDispatchToProps(dispatch) {
  return {
    onFilterCompleted: e => dispatch(filterCompleted(e))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
