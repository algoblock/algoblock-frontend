import React from 'react';
import { shallow } from 'enzyme';
import Divider from './Divider';

describe('<Divider />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Divider />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
