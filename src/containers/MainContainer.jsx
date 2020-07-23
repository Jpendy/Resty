import React, { Component } from 'react';
import Form from '../components/form/Form';
import Display from '../components/display/Display';
import { fetchFunc } from '../services/fetch';

export default class MainContainer extends Component {

    state = {
      apiUrl: '',
      fetchedArray: '',
      fetchMethod: '',
      fetchBody: ''
    }


    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = event => {
      event.preventDefault();
      const { apiUrl, fetchMethod, fetchBody } = this.state;

      fetchFunc(apiUrl, fetchMethod, fetchBody)
        .then(result => this.setState({ fetchedArray: result }));  
    }

    render(){
      console.log(this.state);
      const { fetchedArray, apiUrl, fetchMethod, fetchBody } = this.state;

      return (
        <>
          <Form apiUrl={apiUrl} fetchBody={fetchBody} fetchMethod={fetchMethod} onChange={this.handleChange} onSubmit={this.handleSubmit} />
          <section> { fetchedArray && <Display fetchedArray={fetchedArray} />} </section>
        </>
      );
        
    }
}
