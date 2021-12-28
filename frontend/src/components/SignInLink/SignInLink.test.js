import React from 'react';
import { shallow } from 'enzyme';
import SignInLink from './SignInLink';

describe('<SignInLink />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SignInLink />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
