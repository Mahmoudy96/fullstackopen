import { useState } from 'react'


const Button = ({text, onClick}) => (
    <button onClick={onClick}>{text}</button>
  )

const HighestVotes = ({votes, anecdotes}) => {
  // const copy = [...votes]
  const max = Math.max(...votes)
  const max_index = votes.indexOf(max)
  return (
    <>
      <h1>Top Anecdote</h1>
       <p>{anecdotes[max_index]} </p>
      <p>{votes[max_index]} votes</p>
    </>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const randomise = () => setSelected(Math.floor(Math.random()*8))
  const vote = () => {
    const copy = [...votes]
    copy[selected]+=1
    setVotes(copy)
  } 
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>{votes[selected]} votes</p>
      <Button text="vote" onClick={vote}></Button>
      <Button text="next anecdote" onClick={randomise}></Button>
      <HighestVotes votes={votes} anecdotes={anecdotes}></HighestVotes>
    </div>
  )
}

export default App