import React from 'react';
import { shallow } from 'enzyme';
import FrequencyStep from './FrequencyStep';

describe('<FrequencyStep />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<FrequencyStep />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
