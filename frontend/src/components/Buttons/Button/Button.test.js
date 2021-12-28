import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Button />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
