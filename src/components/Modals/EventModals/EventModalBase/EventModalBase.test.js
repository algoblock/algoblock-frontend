import React from 'react';
import { shallow } from 'enzyme';
import EventModalBase from './EventModalBase';

describe('<EventModalBase />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<EventModalBase />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
