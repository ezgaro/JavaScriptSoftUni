function attachEvents() {
  let buttonGetWeather = document.querySelector("#submit");
  let inputText = document.querySelector("#location");
  let forecasts = document.querySelector('#forecast');
  let currentElement = document.querySelector('#current');
  let upcommingElement = document.querySelector('#upcoming');


  buttonGetWeather.addEventListener("click", () => {
    forecasts.style.display = 'block';
    let divForecast = document.createElement('div');
    let spanForEmote = document.createElement('span');
    let spanWith3props = document.createElement('span');
    let spanName = document.createElement('span');
    let spanDegrees = document.createElement('span');
    let spanWeatherCondition = document.createElement('span');

    divForecast.classList.add('forecast');
    spanForEmote.classList.add('condition', 'symbol');
    spanWith3props.classList.add('condition');
    spanName.classList.add('forecast-data');
    spanDegrees.classList.add('forecast-data');
    spanWeatherCondition.classList.add('forecast-data');

    let code = "";
    switch (inputText.value) {
      case "New York":
        code = "ny";
        break;
      case "London":
        code = "london";
        break;
      case "Barcelona":
        code = "barcelona";
        break;
    }

    fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(data => {
    let condition = data.forecast.condition;
    let high = data.forecast.high;
    let low = data.forecast.low;
    let name = data.name;

    switch(condition) {
        case "Sunny": spanForEmote.textContent = '☀️'; break;
        case "Partly sunny": spanForEmote.textContent = '🌤️'; break;
        case "Overcast": spanForEmote.textContent = '☁️'; break;
        case "Rain": spanForEmote.textContent = '🌧️'; break;
    };
    spanName.textContent = name;
    spanDegrees.textContent = `${low}°/${high}°`;
    spanWeatherCondition.textContent = condition;

    currentElement.appendChild(divForecast);
    divForecast.appendChild(spanForEmote);
    divForecast.appendChild(spanWith3props);
    spanWith3props.appendChild(spanName);
    spanWith3props.appendChild(spanDegrees);
    spanWith3props.appendChild(spanWeatherCondition);

  })
  .catch(err => {
    console.error(err);
  });

  fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
  .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
  })
  .then(data => {
      let forecastInfo = data.forecast;
      let divUpcoming = document.createElement('div');
      divUpcoming.classList.add('forecast-info');

      forecastInfo.forEach(day => {
          let spanUpcoming = document.createElement('span');
          spanUpcoming.classList.add('upcoming');

          let spanSymbol = document.createElement('span');
          spanSymbol.classList.add('symbol');
          switch(day.condition) {
              case "Sunny": spanSymbol.textContent = '☀️'; break;
              case "Partly sunny": spanSymbol.textContent = '🌤️'; break;
              case "Overcast": spanSymbol.textContent = '☁️'; break;
              case "Rain": spanSymbol.textContent = '🌧️'; break;
          }

          let spanDegrees = document.createElement('span');
          spanDegrees.classList.add('forecast-data');
          spanDegrees.textContent = `${day.low}°/${day.high}°`;

          let spanCondition = document.createElement('span');
          spanCondition.classList.add('forecast-data');
          spanCondition.textContent = day.condition;

          spanUpcoming.appendChild(spanSymbol);
          spanUpcoming.appendChild(spanDegrees);
          spanUpcoming.appendChild(spanCondition);

          divUpcoming.appendChild(spanUpcoming);
      });

      upcommingElement.appendChild(divUpcoming);
  })
  .catch(err => console.error(err));

  });
}

attachEvents();
