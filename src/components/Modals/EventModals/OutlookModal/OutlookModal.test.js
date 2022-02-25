import React from 'react';
import { shallow } from 'enzyme';
import OutlookModal from './OutlookModal';

describe('<OutlookModal />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<OutlookModal />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
