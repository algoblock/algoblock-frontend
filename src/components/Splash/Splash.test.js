import React from 'react';
import { shallow } from 'enzyme';
import Splash from './Splash';

describe('<Splash />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Splash />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
