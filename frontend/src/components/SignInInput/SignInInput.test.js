import React from 'react';
import { shallow } from 'enzyme';
import SignInInput from './SignInInput';

describe('<SignInInput />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SignInInput />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
