import React from 'react';
import { shallow } from 'enzyme';
import HeaderLink from './HeaderLink';

describe('<HeaderLink />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<HeaderLink />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
