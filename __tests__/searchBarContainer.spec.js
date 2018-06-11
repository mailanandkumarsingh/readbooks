import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SearchBar from '../src/containers/mock/search_bar_mock';

// describe what we are testing
describe('SearchBar Component', () => {
 
 // make our assertion and what we expect to happen 
 it('should render without throwing an error', () => {
   expect(shallow(<SearchBar />).exists(<form className='SearchBar'></form>)).toBe(true)
 }),

 it('renders a formControl class input', () => {
  expect(shallow(<SearchBar />).find('.form-control').length).toEqual(1)
 }),

 it('renders a input-group-btn class', () => {
  expect(shallow(<SearchBar />).find('.input-group-btn').length).toEqual(1)
 })
})