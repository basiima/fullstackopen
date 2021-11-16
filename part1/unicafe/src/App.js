import React, { useState } from 'react'

const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({stats}) => {

  if (stats[0] === 0 && stats[1] === 0 && stats[2] === 0){
    return <p>No feedback given</p>
  }else{
    const average = (scores) => {
      return(((scores[0]*1) + (scores[1]*0) + (scores[2]*-1))/scores.length + '%')
    }
    const sum = (scores) => scores[0] + scores[1] + scores[2]

    const avg = average(stats)
    const total = sum(stats)

    return(
      <div>
        <table>
          <thead></thead>
          <tbody>
            <StatisticLine text='Good' value={stats[0]} />
            <StatisticLine text='Neutral' value={stats[1]} />
            <StatisticLine text='Bad' value={stats[2]} />
            <StatisticLine text='Total' value={total} />
            <StatisticLine text='Average' value={avg} /> 
          </tbody>
        </table>
      </div>
    )
  }
}


const App = () => {
  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allStats = [good, neutral, bad]

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <h1>Statistics</h1>
      <Statistics stats={allStats} />
    </div>
  )
}

export default App