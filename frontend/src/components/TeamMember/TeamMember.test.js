import React from 'react';
import { shallow } from 'enzyme';
import TeamMember from './TeamMember';

describe('<TeamMember />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TeamMember />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
