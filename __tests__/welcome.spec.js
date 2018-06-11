import React from 'react';
import Welcome from '../src/views/welcome';
import Chart from '../src/components/chart';
import renderer from 'react-test-renderer';

describe('Welcome', () => {
  it('renders Welcome coponent correctly', () => {
    const tree = renderer.create(
      <Welcome name="World" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders empty BarChart component correctly', () => {
    const barChart = renderer.create(
      <Chart data="[]" /> 
      //Passing an array of 40 elements similar to what is being 
      // returned by the 5 days weather app. This is a snapshot capture
    ).toJSON();
    expect(barChart).toMatchSnapshot();
  });

});
