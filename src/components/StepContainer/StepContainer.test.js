import React from 'react';
import { shallow } from 'enzyme';
import StepContainer from './StepContainer';

describe('<StepContainer />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<StepContainer />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
