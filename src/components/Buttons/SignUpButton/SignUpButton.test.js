import React from 'react';
import { shallow } from 'enzyme';
import SignUpButton from './SignUpButton';

describe('<SignUpButton />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SignUpButton />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
