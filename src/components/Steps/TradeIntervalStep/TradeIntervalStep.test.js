import React from 'react';
import { shallow } from 'enzyme';
import TradeIntervalStep from './TradeIntervalStep';

describe('<TradeIntervalStep />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TradeIntervalStep />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
