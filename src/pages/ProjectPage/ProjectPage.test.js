import React from 'react';
import { shallow } from 'enzyme';
import ProjectPage from './ProjectPage';

describe('<ProjectPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ProjectPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
