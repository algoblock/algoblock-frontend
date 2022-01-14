import React from 'react';
import { shallow } from 'enzyme';
import SymbolsStep from './SymbolsStep';

describe('<SymbolsStep />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SymbolsStep />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
