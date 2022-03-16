import React from 'react';
import { shallow } from 'enzyme';
import BacktestPage from './BacktestPage';

describe('<BacktestPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<BacktestPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
