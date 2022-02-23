import React from 'react';
import { shallow } from 'enzyme';
import OverboughtModal from './OverboughtModal';

describe('<OverboughtModal />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<OverboughtModal />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
