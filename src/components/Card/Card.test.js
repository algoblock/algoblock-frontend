import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('<Card />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Card />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
