import React from 'react';
import { shallow } from 'enzyme';
import TradeQuantityStep from './TradeQuantityStep';

describe('<TradeQuantityStep />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TradeQuantityStep />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
