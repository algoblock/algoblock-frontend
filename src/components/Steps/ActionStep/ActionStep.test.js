import React from 'react';
import { shallow } from 'enzyme';
import ResultStep from './ResultStep';

describe('<ResultStep />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ResultStep />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
