import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './Toggle';

describe('<Toggle />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Toggle />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
