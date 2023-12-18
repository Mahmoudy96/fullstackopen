import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return(
    <>
      <div>{text}: {value}</div>
    </>
    )
}
const Statistics = ({good, neutral, bad}) => {
  if(good + neutral + bad == 0) {
    return( 
      <>      <h1>statistics</h1>
          <div>no feedback given</div>
      </>

      
    )
  }
  return (      
  <>
    <h1>statistics</h1>
    <StatisticLine text="good" value={good}></StatisticLine>
    <StatisticLine text="neutral" value={neutral}></StatisticLine>
    <StatisticLine text="bad" value={bad}></StatisticLine>
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
    <div>
      <h1>give feedback</h1>
      <Button text = "good" onClick={handleGood}></Button>
      <Button text = "neutral" onClick={handleNeutral}></Button>
      <Button text = "bad" onClick={handleBad}></Button>

      
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App