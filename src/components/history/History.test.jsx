import React from 'react';
import { shallow } from 'enzyme';
import History from './History';

describe('History component', () => {
  it('renders History', () => {
    const wrapper = shallow(<History historyArray={[{ endPoint: 'end point 1', method: 'GET' }, { endPoint: 'end point 2', method: 'PUT' }]}  />);
    expect(wrapper).toMatchSnapshot();
  });
});
