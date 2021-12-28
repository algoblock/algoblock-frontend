import React from 'react';
import { shallow } from 'enzyme';
import LandingTitle from './LandingTitle';

describe('<LandingTitle />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LandingTitle />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
