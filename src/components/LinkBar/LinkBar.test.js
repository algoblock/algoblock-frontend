import React from 'react';
import { shallow } from 'enzyme';
import LinkBar from './LinkBar';

describe('<LinkBar />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LinkBar />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
