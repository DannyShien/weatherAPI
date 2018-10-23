console.log(`You're in`);
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=${OWKey}`;
// const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${OWKey}`;
const city = document.querySelector('[data-button]');
const getTemp = document.querySelector('[data-tempdisplay]');

city.addEventListener('click', getWeather);

function getWeather () {
    fetch(URL)
        .then((r) => {return r.json()})
        .then(extractTemps)
        .then(displayTemp)
}

function extractTemps (obj) {
    let temp = obj.main.temp;
    let degree = ((temp - 273.15) * 9/5 +32).toFixed(1);
    // console.log(degree);
    return degree;
}

function displayTemp (larry) {
    // console.log(larry);
    let showTemp = document.createElement('p');
    showTemp.textContent = `Temperature: ${larry} ° F`;
    // console.log(showTemp);
    getTemp.appendChild(showTemp);
}

