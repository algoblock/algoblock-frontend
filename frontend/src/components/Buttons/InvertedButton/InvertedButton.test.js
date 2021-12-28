import React from 'react';
import { shallow } from 'enzyme';
import InvertedButton from './InvertedButton';

describe('<InvertedButton />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<InvertedButton />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
