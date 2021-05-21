import React from 'react';
import { shallow } from 'enzyme';
import SignInPage from './SignInPage';

describe('<SignInPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SignInPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
