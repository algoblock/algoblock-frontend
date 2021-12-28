import React from 'react';
import { shallow } from 'enzyme';
import MiniChart from './MiniChart';

describe('<MiniChart />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MiniChart />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
