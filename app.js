const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async(city) => {
    weather.innerHTML = `<h3> Loading... <h3>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
}

const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = `<h3>Invalid City<h3/>`
        return
    }
    else if(search.value == ""){        
        weather.innerHTML = `<h3>Enter City Name<h3/>`
        return
    }

    weather.innerHTML =
    `
    <h3>${data.name}<h3/>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    <h1>${data.main.temp} ℃</h1>
    <h4>${data.weather[0].main}</h4>
    `

}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
