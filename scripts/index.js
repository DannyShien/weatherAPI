// Takes user input
const userInput = document.forms['form-search'];

userInput.addEventListener('submit', function(e){
    e.preventDefault();
    const city = userInput.querySelector('input[type="text"]').value;
    console.log(`CITY SEARCHED: `, city)
    // Takes userInput(city) and places it into URL
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${OWKey}`;
    // Fetches URL with the city input
    fetch(URL)
        .then(r => r.json())
        .then(weatherInfo)
        // .then(getIcon)
        // .then(displayWeather)
});

function weatherInfo(obj) {
    console.log(obj)
    // Grabbing name of city
    let cityName = obj.name;

    // Grabbing weather
    let mainTemp = ((obj.main.temp - 273.15) * 9/5 +32).toFixed(1);
    // let lowTemp = ((obj.main.temp_min - 273.15) * 9/5 +32).toFixed(1);
    // let highTemp = ((obj.main.temp_max - 273.15) * 9/5 +32).toFixed(1);

    // Grabbing description
    let cond = obj.weather.map(condition => {return condition.main});
    let desc = obj.weather.map(description => {return description.desctiption});

    let humidity = (obj.main.humidity);

    let windSpeed = (obj.wind.speed);

    let icon  = obj.weather.map(img => {return img.icon})
    
    let weather = [];
        weather.push(cityName);
        weather.push(mainTemp);
        weather.push(humidity);
        weather.push(windSpeed);
        weather.push(cond);
        weather.push(desc);
        weather.push(icon);
    return weather;
}

// function getIcon(icon) {
//     console.log(icon);
//     fetch(`http://openweathermap.org/img/w/${icon}.png`)
//         .then(r => r.json())
//         .then(weatherIcon => {

//         });
// }

const display = document.querySelector('[data-display]');
const city = document.querySelector('[data-title]');

function displayWeather(weather) {
    console.log(display);

    // Creating HTML Elements
    const name = document.createElement('h1');
    const info = document.createElement('div');
    const li = document.createElement('li');

    // Add content
    name.textContent = weather[0];

    // Appending to DOM
    city.appendChild(name)

    
}

// function displayTemp (larry) {
//     // debugger;
//     // console.log(larry);

//     let showTemp = document.createElement('li');
//     showTemp.textContent = `Current Temperature: ${larry[0]} ° F`;

//     let MinTemp = document.createElement('li');
//     MinTemp.textContent = `Min Temperature: ${larry[1]} ° F`;

//     let MaxTemp = document.createElement('li');
//     MaxTemp.textContent = `Max Temperature: ${larry[2]} ° F`;
//     // console.log(showTemp);

//     getTemp.appendChild(showTemp);
//     getMinTemp.appendChild(MinTemp);
//     getMaxTemp.appendChild(MaxTemp);
// }

