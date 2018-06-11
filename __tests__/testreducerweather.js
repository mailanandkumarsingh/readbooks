import * as reducer from '../src/reducers/reducer_weather';
import * as weatherList from '../src/actions/index';

import axios from 'axios';

const API_KEY = '73580da93ef6317e3435ea13ddb46761';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

describe('WeatherReducer', () => {
	it('should return the initial value', () => {
		expect(reducer.default(undefined, {})).toEqual([])
	}),
	it('should return the correct type', () => {
		const city = 'London';
		const url = `${ROOT_URL}&q=${city},GB`;
  		const request = axios.get(url);
		const expectedAction = {
		    type: weatherList.FETCH_WEATHER,
		    payload: request
		};
		console.log('weatherList.fetchWeather(city)', weatherList.fetchWeather(city));
		expect(weatherList.fetchWeather('London').type).toEqual('FETCH_WEATHER')
	}),
	//using axios promise will require axios mock library which is a little unstable at this time
	// hence testing it a sync fn
	it('should test FETCH_WEATHER type', () => {
		const city = 'London';
		const url = `${ROOT_URL}&q=${city},GB`;
  		const request = axios.get(url);
		const expectedAction = {
		    type: weatherList.FETCH_WEATHER,
		    payload: request
		};
		expect(reducer.default([], expectedAction)[0]).toBeUndefined()
	})
})