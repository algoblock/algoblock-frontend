import React from 'react';
import { shallow } from 'enzyme';
import ContentColumns from './ContentColumns';

describe('<ContentColumns />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ContentColumns />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
