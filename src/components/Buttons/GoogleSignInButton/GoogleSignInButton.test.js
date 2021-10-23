import React from 'react';
import { shallow } from 'enzyme';
import GoogleSignInButton from './GoogleSignInButton';

describe('<GoogleSignInButton />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<GoogleSignInButton />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
