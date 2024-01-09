import { useState } from 'react'
import { useEffect } from 'react'
import countryService from './services/countries'
import axios from 'axios'

import './App.css'

const Search = ({value, onChange}) => {
  return(
  <>
    <div>
    Search for countries by name: <input value={value} onChange={onChange}/>
    </div>   
  </>
  )
}
const DisplayCountry = ({country}) => {
  console.log('country', country)
  return(<>
  <h1>{country.name.common}</h1>
  <div>Capital: {country.capital}</div>
  <div>Area: {country.area}</div>
  <h2>Languages</h2>
  <ul>{Object.values(country.languages).map((lang,id) => <li key={id}>{lang}</li>)}</ul>
  <img src={country.flags.png}></img>
  </>)
}

const DisplayCountries = ({countries}) => {

  const showCountry = (country) => {
    return(<DisplayCountry country = {country}></DisplayCountry>)
  }
  const DisplayCountryInList = ({country}) => {
    const [renderCountry, setRenderCountry] = useState(false)
    const handleShowCountry = (country) => {
      console.log('here',country)
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
  console.log('countries', countries, tooMany)

  if(tooMany) {
    return(
      <div>Too many results to display</div>
    )
  } else if(countries.length==1){
    console.log('length is 1',1)
    return(<DisplayCountry country={countries[0]}></DisplayCountry>)
  } else {
  return( <DisplayCountries countries={countries}></DisplayCountries>)
  }
}



const App = () => {
  const [allCountries,setAllCountries] = useState([])
  const [search, setSearch] = useState("")
  const [tooMany, setTooMany] = useState(false)
  const [countries, setCountries] = useState([])
  const hook = () => {
    countryService
      .getAll()
      .then(allCountries => {
        setAllCountries(allCountries)
        console.log('countries', allCountries)
      })
  }
  useEffect(hook,[])

  const filterCountries = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    const countriesToShow = allCountries.filter(country => country.name.common.toLowerCase().includes(newSearch.toLowerCase()))
    if(countriesToShow.length > 10) {
      setTooMany(true)
      console.log('over10')
    } else {
      setTooMany(false)
      setCountries(countriesToShow)
    }
    console.log('countriesToShow', countriesToShow)
    //search for country, setCountries to either "10" or list of countries?
    
  }


  return(<>
  <Search value={search} onChange={filterCountries}></Search> 
  <Display countries = {countries} tooMany={tooMany}></Display> 
  </>)
}

export default App
