import React from 'react';
import { shallow } from 'enzyme';
import QuantityLimitStep from './QuantityLimitStep';

describe('<QuantityLimitStep />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<QuantityLimitStep />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
