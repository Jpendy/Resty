import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ apiUrl, fetchBody, onChange, onSubmit }) => (
  <>    
    <form onSubmit={onSubmit} >
      <input type='text' value={apiUrl} name='apiUrl' onChange={onChange} placeholder='API Url'  ></input>
      <div> 
        <label><input type='radio' value='GET' className='radio' name='fetchMethod' onChange={onChange} ></input> <p>GET</p> </label>
        <label><input type='radio' value='POST' className='radio' name='fetchMethod' onChange={onChange} ></input> <p>POST</p> </label> 
        <label><input type='radio' value='PUT' className='radio' name='fetchMethod' onChange={onChange} ></input> <p>PUT</p> </label> 
        <label><input type='radio' value='PATCH' className='radio' name='fetchMethod' onChange={onChange} ></input> <p>PATCH</p> </label> 
        <label><input type='radio' value='DELETE' className='radio' name='fetchMethod' onChange={onChange} ></input> <p>DELETE</p> </label>
 
      </div> 
      <textarea value={fetchBody} name='fetchBody' onChange={onChange} placeholder='Body' ></textarea>
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
