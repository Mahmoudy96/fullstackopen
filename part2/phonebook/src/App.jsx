import { useState } from 'react'
import Display from './components/Display'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'


const App = () => {
  const initialPeople = [{ name: 'Arto Hellas',number: "19-82-34772",id: 1 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 2 }]
  const [persons, setPersons] = useState(initialPeople) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [peopleToShow, setPeopleToShow] = useState(initialPeople)
  const filterPeople = (persons, name) => {
    const filtered_people = persons.filter(person => person.name.toLowerCase().includes(name.toLowerCase()))
    return(structuredClone(filtered_people))
  }
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }
    const alreadyIn = persons.map(person => person.name).indexOf(newName)
    if(alreadyIn != -1){
      alert(`${newName} is already in the phonebook`)
    } else if(newName=='') {
      alert('Name cannot be empty')
    }
     else {
      const newPeople = persons.concat(newPerson)
      setPersons(newPeople)
      setPeopleToShow(filterPeople(newPeople,newSearch))

    }
    console.log('new people:',peopleToShow)
  }
  const handleNameChange = (event) => {
    // console.log('hi', event.target.value)
    setNewName(event.target.value)  

  }
  const handleNumberChange = (event) => {
    // console.log('hi', event.target.value)
    setNewNumber(event.target.value)  

  }
  const handleNameFiltering = (event) =>{
    const nameToFilter = event.target.value
    setNewSearch(nameToFilter)
    const filtered_people = filterPeople(persons,nameToFilter)
    setPeopleToShow(filtered_people)
    console.log('peopleToShow', peopleToShow)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleNameFiltering}></Filter>
      <h1>Add person to phonebook</h1>
      <AddPerson addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}></AddPerson>
      <h2>Numbers</h2>
      <Display people = {peopleToShow}></Display>
    </div>
  )
}

export default App