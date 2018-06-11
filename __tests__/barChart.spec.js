import React from 'react';
import Chart from '../src/components/chart';
import renderer from 'react-test-renderer';

describe('Chart Rendering', () => {

  it('renders empty BarChart component correctly', () => {
    const barChart = renderer.create(
      <Chart data="[]" /> 
      //Passing an array of 40 elements similar to what is being 
      // returned by the 5 days weather app. This is a snapshot capture
    ).toJSON();
    expect(barChart).toMatchSnapshot();
  });

});
