const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  const sum = parts.reduce((cur,part) => part.exercises+cur,0)
  return(
  <p>Number of exercises {sum}</p>
  )
}
const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return(<>
    {parts.map(part => <Part key={part.id} part={part}></Part>)}
  </>)
}
const Course = ({course}) => {
  const {id, name, parts} = course
  return(    <div>
    <Header course={name} />
    <Content
      parts = {parts}
    />
    <Total parts={parts} />
  </div>
  )
}

export default Course