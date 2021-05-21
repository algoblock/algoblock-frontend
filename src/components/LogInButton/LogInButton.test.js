import React from 'react';
import { shallow } from 'enzyme';
import LogInButton from './LogInButton';

describe('<LogInButton />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LogInButton />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
