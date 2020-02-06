import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './test/testUtils';
import Input from './Input';

/**
 * Setup function for app component.
 * @returns {ShallowWrapper}
 */
const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />);
};

test('App renders without error', () => {
  const wrapper = setup();
  const Inputcomponent = findByTestAttr(wrapper, 'component-input');
  expect(Inputcomponent.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'party' });
});
