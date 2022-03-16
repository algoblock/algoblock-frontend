import React from 'react';
import { shallow } from 'enzyme';
import Chart from './Chart';

describe('<Chart />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Chart />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
