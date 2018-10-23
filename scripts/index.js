console.log(`You're in`);
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=${OWKey}`;
// const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${OWKey}`;
const city = document.querySelector('[data-button]');
const getTemp = document.querySelector('[data-tempDisplay]');
const getMinTemp = document.querySelector('[data-minTemp]');
const getMaxTemp = document.querySelector('[data-maxTemp]');

city.addEventListener('click', getWeather);

function getWeather () {
    fetch(URL)
        .then((r) => {return r.json()})
        .then(extractTemps)
        .then(displayTemp)
}

function extractTemps (obj) {
    // debug    ger;
    let temp = obj.main.temp;
    let degree = ((temp - 273.15) * 9/5 +32).toFixed(1);

    let minTemp = obj.main.temp_min;
    let minDeg = ((minTemp - 273.15) * 9/5 +32).toFixed(1);

    let maxTemp = obj.main.temp_max;
    let maxDeg = ((maxTemp - 273.15) * 9/5 +32).toFixed(1);

    let temps = [];
    temps.push(degree);
    temps.push(minDeg);
    temps.push(maxDeg);

    return temps;
}

function displayTemp (larry) {
    // debugger;
    // console.log(larry);

    let showTemp = document.createElement('li');
    showTemp.textContent = `Current Temperature: ${larry[0]} ° F`;

    let MinTemp = document.createElement('li');
    MinTemp.textContent = `Min Temperature: ${larry[1]} ° F`;

    let MaxTemp = document.createElement('li');
    MaxTemp.textContent = `Max Temperature: ${larry[2]} ° F`;
    // console.log(showTemp);

    getTemp.appendChild(showTemp);
    getMinTemp.appendChild(MinTemp);
    getMaxTemp.appendChild(MaxTemp);
}

