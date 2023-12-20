import { useState } from 'react'

const Display = ({people}) => {
  console.log('people', people)
  return(
    <ul>
    {people.map(person => <li key={person.name}>{person.name}</li>)}
    </ul>

  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const addName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    const alreadyIn = persons.map(person => person.name).indexOf(newName)
    if(alreadyIn != -1){
      alert(`${newName} is already in the phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
    }
    console.log(event.target)
  }
  const handleNameChange = (event) => {
    console.log('hi', event.target.value)
    setNewName(event.target.value)  

  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Display people = {persons}></Display>
    </div>
  )
}

export default App