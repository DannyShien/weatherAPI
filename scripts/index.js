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
        .then(displayWeather)
        // .then(getIcon) // - Do not need
});


function weatherInfo(obj) {                                         
    // console.log(obj)
    // GRABBING NAME OF CITY
    let cityName = obj.name;

    // GRABBING WEATHER
    let mainTemp = ((obj.main.temp - 273.15) * 9/5 +32).toFixed(1);
    // let lowTemp = ((obj.main.temp_min - 273.15) * 9/5 +32).toFixed(1);
    // let highTemp = ((obj.main.temp_max - 273.15) * 9/5 +32).toFixed(1);

    // GRABBING DESCRIPTION/OTHERS
    let cond = obj.weather.map(condition => {return condition.main});
    let desc = obj.weather.map(description => {return description.description});

    let humidity = (obj.main.humidity);

    let windSpeed = (obj.wind.speed);

    let iconCode  = obj.weather.map(img => {return img.icon})

    // PUTTING VARIABLES INTO AN ARRAY
    let weather = [];
        weather.push(cityName);                 //- 0 NAME
        weather.push(mainTemp);                 //- 1 TEMP
        weather.push(humidity);                 //- 2 HUMIDITY
        weather.push(windSpeed);                //- 3 WINDSPEED
        weather.push(cond);                     //- 4 COND
        weather.push(desc);                     //- 5 DESC
        weather.push(getIcon(iconCode));        //- 6 ICONCODE
        return weather;
}


function getIcon(icon) {
    // console.log(icon)
    let code = icon[0]
    return `http://openweathermap.org/img/w/${code}.png`;
}


const city = document.querySelector('[data-title]');
const display = document.querySelector('[data-display]');

function displayWeather(weather) {
    console.log(weather);

    // Appending city name to document
    const name = document.createElement('h1');
    name.textContent = weather[0];
    city.appendChild(name);

    // Appending temp to document
    const temp = document.createElement('li');
    temp.textContent = `${weather[1]} °`;
    display.appendChild(temp);

    // Appending icon to document
    

    // Appending condition to document
    const condition = document.createElement('li');
    condition.textContent = `${weather[4]}`;
    display.appendChild(condition);

    // Appending description to document
    const description = document.createElement('li');
    description.textContent = `${weather[5]} `;
    display.appendChild(description);




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

