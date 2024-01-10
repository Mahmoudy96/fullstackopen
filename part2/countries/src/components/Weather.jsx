import getWeather from '../services/openweatherAPI'
import {useState} from 'react'
const Weather = ({country}) => {
    const [weatherData, setWeatherData] = useState(null);
    console.log('getWeather(country)', getWeather(country))
    getWeather(country).then(data => {
        setWeatherData(data.main)        
    }
    )
    console.log('weather', weatherData)
    if(weatherData){
    return(
        <>
        <h2>Weather in {country.capital}</h2>
        <div>Temperature: {parseFloat(weatherData.temp-273.15).toFixed(2)} Celsius</div>
        <div>Humidity: {weatherData.humidity}%</div>
        <div>It feels like: {parseFloat(weatherData.feels_like-273.15).toFixed(2)} Celsius</div>

        </>
    )
    }
}

export default Weather