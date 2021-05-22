import React from 'react';
import { shallow } from 'enzyme';
import SignUpPage from './SignUpPage';

describe('<SignUpPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SignUpPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
