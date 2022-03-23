import React from 'react';
import { shallow } from 'enzyme';
import LoadingAnimation from './LoadingAnimation';

describe('<LoadingAnimation />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LoadingAnimation />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
