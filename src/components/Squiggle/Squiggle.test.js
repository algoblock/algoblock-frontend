import React from 'react';
import { shallow } from 'enzyme';
import Squiggle from './Squiggle';

describe('<Squiggle />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Squiggle />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
