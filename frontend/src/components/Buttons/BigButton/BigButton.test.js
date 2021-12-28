import React from 'react';
import { shallow } from 'enzyme';
import BigButton from './BigButton';

describe('<BigButton />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<BigButton />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
