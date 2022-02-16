import React from 'react';
import { shallow } from 'enzyme';
import EventButton from './EventButton';

describe('<EventButton />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<EventButton />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
