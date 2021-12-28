import React from 'react';
import { shallow } from 'enzyme';
import Row from './Row';

describe('<Row />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Row />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
