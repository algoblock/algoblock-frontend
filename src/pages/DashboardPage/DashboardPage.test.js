import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from './DashboardPage';

describe('<DashboardPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DashboardPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
