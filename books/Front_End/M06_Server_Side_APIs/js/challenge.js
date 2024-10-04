const apiKey = 'e7378a40bcf238b09cb40ee5c61ad10a'; // Replace this with your OpenWeather API key
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const forecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

document.getElementById('search-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const city = document.getElementById('city-name').value.trim();
    if (city) {
        await fetchWeather(city);
        addToHistory(city);
        document.getElementById('city-name').value = '';
    }
});

async function fetchWeather(city) {
    try {
        const weatherResponse = await fetch(`${weatherApiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        const forecastResponse = await fetch(`${forecastApiUrl}?q=${city}&appid=${apiKey}&units=metric`);

        if (!weatherResponse.ok || !forecastResponse.ok) {
            throw new Error('City not found');
        }

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        displayCurrentWeather(weatherData);
        displayForecastWeather(forecastData);

    } catch (error) {
        alert('Error: ' + error.message);
    }
}

function displayCurrentWeather(data) {
    const currentWeatherDiv = document.getElementById('current-weather');
    currentWeatherDiv.innerHTML = `
        <div class="weather-card">
            <h2>${data.name}, ${data.sys.country}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            <p><strong>Condition:</strong> ${data.weather[0].description}</p>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}" />
        </div>
    `;
}

function displayForecastWeather(data) {
    const forecastDiv = document.getElementById('forecast-weather');
    forecastDiv.innerHTML = '';

    // Show forecast for the next 5 days (simplified example)
    const forecastList = data.list.filter((item, index) => index % 8 === 0);
    forecastList.forEach(forecast => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        forecastDiv.innerHTML += `
            <div class="weather-card">
                <h3>${date}</h3>
                <p><strong>Temp:</strong> ${forecast.main.temp} °C</p>
                <p><strong>Humidity:</strong> ${forecast.main.humidity} %</p>
                <p><strong>Wind:</strong> ${forecast.wind.speed} m/s</p>
                <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].description}" />
            </div>
        `;
    });
}

function addToHistory(city) {
    const historyDiv = document.getElementById('history');
    let history = JSON.parse(localStorage.getItem('weatherHistory')) || [];

    if (!history.includes(city)) {
        history.push(city);
        localStorage.setItem('weatherHistory', JSON.stringify(history));
    }

    renderHistory();
}

function renderHistory() {
    const historyDiv = document.getElementById('history');
    let history = JSON.parse(localStorage.getItem('weatherHistory')) || [];
    
    historyDiv.innerHTML = '';
    history.forEach(city => {
        const button = document.createElement('button');
        button.textContent = city;
        button.addEventListener('click', () => fetchWeather(city));
        historyDiv.appendChild(button);
    });
}

// Load search history on page load
window.onload = function() {
    renderHistory();
};
