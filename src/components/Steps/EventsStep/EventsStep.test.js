import React from 'react';
import { shallow } from 'enzyme';
import EventsStep from './EventsStep';

describe('<EventsStep />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<EventsStep />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
