import React from 'react';
import { shallow } from 'enzyme';
import DashboardPanel from './DashboardPanel';

describe('<DashboardPanel />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DashboardPanel />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
