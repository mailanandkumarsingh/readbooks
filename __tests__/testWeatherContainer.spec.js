import React from 'react';
import { shallow, mount, render } from 'enzyme';
import WeatherList from '../src/containers/mock/search_bar_mock';

// describe what we are testing
describe('SearchBar Component', () => {
 
 // make our assertion and what we expect to happen 
 it('should render without throwing an error', () => {
   expect(shallow(<WeatherList />).exists(<form className='WeatherList'></form>)).toBe(true)
 }),
 it('renders a table table-hover', () => {
  expect(shallow(<WeatherList />).find('#mapTable').length).toEqual(0)
 })
})