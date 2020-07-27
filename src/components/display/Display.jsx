import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ fetchedArray }) => (
  <>
    <pre>
      { JSON.stringify(fetchedArray, null, 3) }
    </pre>
  </>
);


Display.propTypes = {
  fetchedArray: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default Display;
