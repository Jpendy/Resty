import React from 'react';
import PropTypes from 'prop-types';

const History = ({ historyArray }) => {
    
  const historyList = historyArray.map(item => {
    return (
      <li key={Math.random()}>
        {`Endpoint: ${item.endPoint} - Method: ${item.method} `}
      </li>
    );
  });

  return (
    <>
      <h3>History:</h3>
      <ul>
        {historyList}
      </ul>
    </>
  );
};

History.propTypes = {
  historyArray: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default History;
