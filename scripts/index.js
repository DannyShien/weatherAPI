console.log(`You're in`);

const city = document.querySelector('[data-button]');
// console.log(city);
const temperatureDiv = document.querySelector('[data-tempContainer]');

city.addEventListener('click', getWeather);

function getWeather () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=dee07fae47d614b4f9cb0a8cd0a2cfeb')
        .then((r) => {return r.json()})
        .then(extractMainTemp)
        .then(displayTemp)
}

function extractMainTemp (data) {
    let mainTemp = data.main.temp;
    // console.log(mainTemp);
    return mainTemp;
}

function displayTemp (larry) {
    // console.log(larry);
    let showTemp = document.createElement('p');
    showTemp.textContent = larry;
    // console.log(showTemp);
    temperatureDiv.appendChild(showTemp);
}

