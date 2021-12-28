import React from 'react';
import { shallow } from 'enzyme';
import Column from './Column';

describe('<Column />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Column />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
