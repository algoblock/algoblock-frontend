import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

describe('<LandingPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LandingPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
