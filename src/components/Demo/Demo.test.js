import React from 'react';
import { shallow } from 'enzyme';
import Demo from './Demo';

describe('<Demo />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Demo />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
