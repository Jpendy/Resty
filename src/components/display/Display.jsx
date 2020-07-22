import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ arr }) => {

  let listElement = arr.map(item => {
    return (
      <li key={item}>
        {item}
      </li>
    );
  });

  return (
    <ul>
      {listElement}
    </ul>
  );
};


Display.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default Display;
