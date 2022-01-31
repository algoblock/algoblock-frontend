import React from 'react';
import { shallow } from 'enzyme';
import BuySellButton from './BuySellButton';

describe('<BuySellButton />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<BuySellButton />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
