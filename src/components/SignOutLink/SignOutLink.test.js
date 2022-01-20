import React from 'react';
import { shallow } from 'enzyme';
import SignOutLink from './SignOutLink';

describe('<SignOutLink />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SignOutLink />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
