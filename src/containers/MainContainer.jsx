import React, { Component } from 'react';
import Form from '../components/form/Form';
import Display from '../components/display/Display';
import History from '../components/history/History';
import { fetchFunc } from '../services/fetch';

export default class MainContainer extends Component {

    state = {
      apiUrl: '',
      fetchedArray: '',
      fetchMethod: '',
      fetchBody: '',
      historyArray: []
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = event => {
      event.preventDefault();
      const { apiUrl, fetchMethod, fetchBody, historyArray } = this.state;

      fetchFunc(apiUrl, fetchMethod, fetchBody)
        .then(result => this.setState({ fetchedArray: result })); 
        
      this.setState({ historyArray: [...historyArray, { endPoint: apiUrl, method: fetchMethod }] });  
    }

    render(){
      const { fetchedArray, apiUrl, fetchMethod, fetchBody, historyArray } = this.state;

      return (
        <>
          <div style={ { display: 'flex', justifyContent: 'space-evenly' } }>
            <section>
              <History historyArray={historyArray} />
            </section>

            <section> 
              <Form 
                apiUrl={apiUrl} 
                fetchBody={fetchBody} 
                fetchMethod={fetchMethod} 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              />
            </section>
          </div>
          <section style={{ alignSelf: 'flex-end' }} >              
            { fetchedArray && <Display fetchedArray={fetchedArray} />}
          </section>
        </>
      );    
    }
}
