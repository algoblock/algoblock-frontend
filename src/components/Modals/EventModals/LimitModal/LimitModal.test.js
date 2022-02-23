import React from 'react';
import { shallow } from 'enzyme';
import LimitModal from './LimitModal';

describe('<LimitModal />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LimitModal />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
