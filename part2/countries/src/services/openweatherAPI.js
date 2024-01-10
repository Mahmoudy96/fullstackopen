import axios from 'axios'
import {useState, useEffect} from 'react'
const api_key = import.meta.env.VITE_WEATHER_API_KEY

const getWeather = (country) => {

    const capital = country.capital
    const country_short = country.altSpellings[0]
    const api_link = `http://api.openweathermap.org/data/2.5/weather?q=${capital},${country_short}&appid=${api_key}`
    console.log('api_link', api_link)
    const request = axios.get(api_link)
    return request.then(response => response.data)

}

export default getWeather