import React from 'react';
import { shallow } from 'enzyme';
import StepNextButton from './StepNextButton';

describe('<StepNextButton />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<StepNextButton />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
