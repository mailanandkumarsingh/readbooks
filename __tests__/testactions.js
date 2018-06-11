import * as weatherList from '../src/actions/index';

import axios from 'axios';

const API_KEY = '73580da93ef6317e3435ea13ddb46761';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

describe('Action Test', () => {
	it('should return weather list for London', () => {
		const city = 'London';
		const url = `${ROOT_URL}&q=${city},GB`;
  		const request = axios.get(url);
		const expectedAction = {
		    type: weatherList.FETCH_WEATHER,
		    payload: request
		};
		expect(weatherList.fetchWeather(city)).toEqual(expectedAction)
	});

});