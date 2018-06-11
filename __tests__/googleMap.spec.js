import React from 'react';
import Chart from '../src/components/chart';
import GoogleMap from '../src/components/google_map';
import renderer from 'react-test-renderer';

describe('Chart Rendering', () => {

  it('renders empty BarChart component correctly', () => {
    const map = renderer.create(
      <GoogleMap lon={-0.1277} lat={51.5073} />
      //Passing an array of 40 elements similar to what is being 
      // returned by the 5 days weather app. This is a snapshot capture
    ).toJSON();
    expect(map).toMatchSnapshot();
  });

});