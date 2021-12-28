import React from 'react';
import { shallow } from 'enzyme';
import DashboardCard from './DashboardCard';

describe('<DashboardCard />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DashboardCard />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
