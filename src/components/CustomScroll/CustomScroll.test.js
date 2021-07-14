import React from 'react';
import { shallow } from 'enzyme';
import CustomScroll from './CustomScroll';

describe('<CustomScroll />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CustomScroll />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
