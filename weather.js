const apiKey = "d4d46bbf69e026814e12986d4ca2fa70";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");  
const weatherIcon = document.querySelector(".weather-icon");


    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        
        var data = await response.json();

       console.log(data); 
 
       document.querySelector(".city").innerHTML = data.name;
       document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
       document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
       document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
      
       if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.jpeg";
       }
       else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.jpeg";
       }
       else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.jpeg";
       }
       else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.jpeg";
       }
       else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.jpeg";
       }
       document.querySelector(".weather").style.display = "block";
       document.querySelector(".error").style.display = "none";
            



    }
    searchBtn.addEventListener("click" , ()=>{
        checkWeather(searchBox.value);
    })