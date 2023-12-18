import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    )
}
const Statistics = ({good, neutral, bad}) => {
  const total = good+neutral+bad

  if(total == 0) {
    return( 
      <>      <h1>statistics</h1>
          <div>no feedback given</div>
      </>

      
    )
  }
  return (      
  <>
    <h1>statistics</h1>
    <table>
      <tbody>
    <StatisticLine text="good" value={good}></StatisticLine>
    <StatisticLine text="neutral" value={neutral}></StatisticLine>
    <StatisticLine text="bad" value={bad}></StatisticLine>
    <StatisticLine text="all" value={total}></StatisticLine>
    <StatisticLine text="mean" value={(neutral+2*good)/total}></StatisticLine>
    <StatisticLine text="positive rate" value={100*good/total +"%"}></StatisticLine>
      </tbody>
    </table>
  </>
  )
}
const Button = ({text, onClick}) => {

  return(
    <>
    <button onClick={onClick}> {text}</button>
    </>

  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good+1)
  const handleNeutral = () => setNeutral(neutral+1)
  const handleBad = () => setBad(bad+1)

  return (
    <>
      <h1>give feedback</h1>
      <Button text = "good" onClick={handleGood}></Button>
      <Button text = "neutral" onClick={handleNeutral}></Button>
      <Button text = "bad" onClick={handleBad}></Button>

      
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </>
  )
}

export default App