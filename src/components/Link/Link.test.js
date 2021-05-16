import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

describe('<Link />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Link />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
