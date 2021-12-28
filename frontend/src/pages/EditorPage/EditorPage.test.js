import React from 'react';
import { shallow } from 'enzyme';
import EditorPage from './EditorPage';

describe('<EditorPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<EditorPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
