import { useState } from 'react'
import { useEffect } from 'react'
import countryService from './services/countries'
import Search from './components/Search'
import Display from './components/DisplayCountries'
import axios from 'axios'

import './App.css'


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
      })
  }
  useEffect(hook,[])

  const filterCountries = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    const countriesToShow = allCountries.filter(country => country.name.common.toLowerCase().includes(newSearch.toLowerCase()))
    if(countriesToShow.length > 10) {
      setTooMany(true)
    } else {
      setTooMany(false)
      setCountries(countriesToShow)
    }    
  }
  return(<>
  <Search value={search} onChange={filterCountries}></Search> 
  <Display countries = {countries} tooMany={tooMany}></Display> 
  </>)
}

export default App
