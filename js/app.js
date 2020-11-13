const form    = document.querySelector('form');
const card    = document.querySelector('.card');
const details = document.querySelector('.details');

// Function used just for test
const updateCityMock = async city => {
  return {
    city:         'São Carlos, SP',
    condition:    'Cloudy',
    temperature:  '23',
  }
}

const updateCity = async city => {
  const cityDetails = await getCity(city);
  const weather     = await getWeather(cityDetails.Key);

  return {
    city:        `${city.LocalizedName}, ${city.AdministrativeArea.ID}`,
    condition:   weather.WeatherText,
    temperature: weather.Temperature.Metric.Value,
  }
}

const updateCard = weatherData => {
  details.innerHTML = `
    <h5 class="my-3">${weatherData.city}</h5>
    <div class="my-3">${weatherData.condition}</div>
    <div class="display-4 my-4">
      <span>${weatherData.temperature}</span>
      <span>&deg;C</span>
    </div>
  `;
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const cityInputValue = form.city.value.trim();

  updateCity(cityInputValue)
    .then(weatherData => updateCard(weatherData))
    .catch(err => console.log(err));

  form.reset();
})