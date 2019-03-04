// Takes user input
const userInput = document.forms['form-search'];

userInput.addEventListener('submit', function(e){
    e.preventDefault();
    const city = userInput.querySelector('input[type="text"]').value;
    const zip = userInput.querySelector('input[type="text"]').value;
    // if (userInput !== city.length) {
    //     alert('Error, search for city not found.')
    // } else {
    //     console.log('Search accepted!');
    // }
    console.log(`CITY SEARCHED: `, city)
    console.log(`ZIPCODE: `, zip)
    // Takes userInput(city) and places it into URL
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&zip=${zip}&units=imperial&APPID=${OWKey}`;
    // Fetches URL with the city input
    fetch(URL)
        .then(r => r.json())
        .then(weatherInfo)
        .then(displayWeather)
        // .then(getIcon) // - Do not need
});


function weatherInfo(obj) {                                         
    console.log(obj)
    // GRABBING NAME OF CITY
    let cityName = obj.name;

    // GRABBING WEATHER
    let mainTemp = obj.main.temp

    // let mainTemp = ((obj.main.temp - 273.15) * 9/5 +32).toFixed(1);


    // GRABBING DESCRIPTION & OTHERS
    let cond = obj.weather.map(condition => {return condition.main});
    let desc = obj.weather.map(description => {return description.description});

    let humidity = (obj.main.humidity);

    let windSpeed = (obj.wind.speed);

    let clouds = (obj.clouds.all)
    console.log(clouds)

    let iconCode  = obj.weather.map(code => {return code.icon})


    // PUTTING VARIABLES INTO AN ARRAY
    let weather = [];
        weather.push(cityName);                 //- 0 NAME
        weather.push(mainTemp);                 //- 1 TEMP
        weather.push(humidity);                 //- 2 HUMIDITY
        weather.push(windSpeed);                //- 3 WINDSPEED
        weather.push(cond);                     //- 4 COND
        weather.push(desc);                     //- 5 DESC
        weather.push(getIcon(iconCode));        //- 6 ICONCODE
        weather.push(clouds);
        return weather;
}


function getIcon(icon) {
    let code = icon[0]
    let iCode = `http://openweathermap.org/img/w/${code}.png`;
    return iCode
}


const city = document.querySelector('[data-title]');
const icon = document.querySelector('[data-icon]');
const temp = document.querySelector('[data-temp');
const details = document.querySelector('[data-details]');

function displayWeather(weather) {
    // ==================================
    // ===== ===== TOP HEADER ===== =====

    // Appending CITY NAME to document
    const showName = document.createElement('h1');
    showName.textContent = weather[0];
    city.appendChild(showName);

    // Appending DESCRIPTION to document
    const showDescription = document.createElement('p');
    showDescription.textContent = `${weather[5]} `;
    city.appendChild(showDescription);

    // Appending ICON to document
    const showIcon = document.createElement('IMG');
    // showIcon.textContent = `${weather[6]}`;
    showIcon.setAttribute('src', `${weather[6]}`)
    showIcon.setAttribute('alt', 'weather icon')
    icon.appendChild(showIcon);

    // ==================================
    // ==================================


    // =====================================
    // ===== ===== BOTTOM HEADER ===== =====
    
    // Appending TEMP to document
    const showTemp = document.createElement('p');
    showTemp.textContent = `${weather[1]} °F`;
    temp.appendChild(showTemp);

    // Appending HUMIDITY to document 
    const showHumidity = document.createElement('li'); 
    showHumidity.textContent = `${weather[2]} %`;
    details.appendChild(showHumidity);

    // Appending WINDSPEED to document
    const showWindSpeed = document.createElement('li');
    showWindSpeed.textContent = `${weather[3]} m/h`;
    details.appendChild(showWindSpeed);

    // Appdning CLOUDS to document
    const showClouds = document.createElement('li');
    showClouds.textContent = `${weather[7]}° cloudiness`;
    details.appendChild(showClouds);

    // Appending CONDITION to document
    // const showCondition = document.createElement('li');
    // showCondition.textContent = `${weather[4]}`;
    // display.appendChild(showCondition);

    // ======================================
    // ======================================
}








