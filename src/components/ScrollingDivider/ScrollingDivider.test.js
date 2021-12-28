import React from 'react';
import { shallow } from 'enzyme';
import ScrollingDivider from './ScrollingDivider';

describe('<ScrollingDivider />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ScrollingDivider />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
