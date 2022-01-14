import React from 'react';
import { shallow } from 'enzyme';
import SearchableDropdown from './SearchableDropdown';

describe('<SearchableDropdown />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SearchableDropdown />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
