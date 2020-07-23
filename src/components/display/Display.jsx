import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ fetchedArray }) => (
  <>
    { JSON.stringify(fetchedArray) }
  </>
);


Display.propTypes = {
  fetchedArray: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default Display;
