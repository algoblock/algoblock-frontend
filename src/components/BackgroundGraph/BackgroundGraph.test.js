import React from 'react';
import { shallow } from 'enzyme';
import BackgroundGraph from './BackgroundGraph';

describe('<BackgroundGraph />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<BackgroundGraph />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
