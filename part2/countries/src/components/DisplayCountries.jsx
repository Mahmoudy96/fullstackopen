import { useState } from 'react'
import Weather from './Weather'
const DisplayCountry = ({country}) => {
    console.log('country', country)
    return(<>
    <h1>{country.name.common}</h1>
    <div>Capital: {country.capital}</div>
    <div>Area: {country.area}</div>
    <h2>Languages</h2>
    <ul>{Object.values(country.languages).map((lang,id) => <li key={id}>{lang}</li>)}</ul>
    <img src={country.flags.png}></img>
    <Weather country={country}></Weather>
    </>)
  }
  
  const DisplayCountries = ({countries}) => {
    const DisplayCountryInList = ({country}) => {
      const [renderCountry, setRenderCountry] = useState(false)
      const handleShowCountry = (country) => {
        setRenderCountry(!renderCountry)
      }
      return(
        <>
        <li>{country.name.common} <button onClick={() => handleShowCountry(renderCountry)}>{renderCountry ? "Hide" : "Show" }</button></li>
        {renderCountry ? <DisplayCountry country = {country}></DisplayCountry> : null}
        </>
      )
    }
    return(<ul>
    {countries.map((country,id) => <DisplayCountryInList key={id} country={country}></DisplayCountryInList>)}
    </ul>)
  }
  
  const Display = ({countries, tooMany}) => {
    if(tooMany) {
        return(
        <div>Too many results to display</div>
        )
    } else if(countries.length==1){
        return(<DisplayCountry country={countries[0]}></DisplayCountry>)
    } else {
        return( <DisplayCountries countries={countries}></DisplayCountries>)
    }
  }

  export default Display