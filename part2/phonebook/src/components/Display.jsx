const DisplayPerson = ({person}) => <li>{person.name} : {person.number}</li>
const Display = ({people}) => {
  console.log('people', people)
  return(
    <ul>
    {people.map(person => <DisplayPerson key={person.id} person={person}></DisplayPerson>)}
    </ul>

  )
}

export default Display