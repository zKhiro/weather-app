const baseEndpoint  = 'http://dataservice.accuweather.com/';
const key           = ''; // Put your key from AccuWeather here.

const endpoints = {
  cityLocation: 'locations/v1/cities/search',
  cityWeather:  'currentconditions/v1/',
};

const getCity = async city => {
  const query = `?apikey=${key}&q=${city}`;

  const response  = await fetch(baseEndpoint + endpoints.cityLocation + query);
  const data      = await response.json();

  return data[0];
};

const getWeather = async cityKey => {
  const query = `?apikey=${key}`;

  const response  = await fetch(baseEndpoint + endpoints.cityWeather + cityKey + query);
  const data      = await response.json();

  return data[0];
}
