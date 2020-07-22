import React from 'react';
import PropTypes from 'prop-types';

const Form = (apiUrl, fetchBody, onChange, onSubmit) => (
  <>    
    <form onSubmit={onSubmit} >
      <input type='text' value={apiUrl} onChange={onChange}  ></input>
      <label> GET <input type='radio' value='GET' name='fetch-method' ></input> </label>
      <label> POST <input type='radio' value='POST' name='fetch-method' ></input> </label> 
      <label> PUT <input type='radio' value='PUT' name='fetch-method' ></input> </label> 
      <label> DELETE <input type='radio' value='DELETE' name='fetch-method' ></input> </label>
      <textarea value={fetchBody} onChange={onChange}></textarea>
      <button>Go</button> 
    </form>
    
  </>
);

Form.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  fetchBody: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
