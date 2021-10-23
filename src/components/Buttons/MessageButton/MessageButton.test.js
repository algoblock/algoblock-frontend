import React from 'react';
import { shallow } from 'enzyme';
import MessageButton from './MessageButton';

describe('<MessageButton />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MessageButton />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
