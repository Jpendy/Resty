import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  it('renders Display', () => {
    const wrapper = shallow(<Display arr={[{ thing1: 'thing' }, { thing: 'thing' }]}  />);
    expect(wrapper).toMatchSnapshot();
  });
});
