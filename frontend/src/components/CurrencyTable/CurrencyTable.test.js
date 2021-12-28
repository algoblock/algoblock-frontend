import React from 'react';
import { shallow } from 'enzyme';
import CurrencyTable from './CurrencyTable';

describe('<CurrencyTable />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CurrencyTable />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
