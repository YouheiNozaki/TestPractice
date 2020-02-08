import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './test/testUtils';
import App from './App';
/**
 * Setup function for app component.
 */
const setup = () => {
  return shallow(<App />);
};

it('App renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});