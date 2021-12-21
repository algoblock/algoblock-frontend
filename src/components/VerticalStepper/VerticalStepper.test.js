import React from 'react';
import { shallow } from 'enzyme';
import VerticalStepper from './VerticalStepper';

describe('<VerticalStepper />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<VerticalStepper />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
