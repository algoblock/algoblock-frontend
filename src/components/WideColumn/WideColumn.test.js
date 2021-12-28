import React from 'react';
import { shallow } from 'enzyme';
import WideColumn from './WideColumn';

describe('<WideColumn />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<WideColumn />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
