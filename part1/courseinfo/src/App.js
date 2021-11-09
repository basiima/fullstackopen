import React from 'react'

const Header = (props) => {
  return (
      <h1>{props.header}</h1>
    )
}

const Part = (props) => {
  return(
      <p>{props.part} {props.num}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.cpart1} num={props.cnum1}/>
      <Part part={props.cpart2} num={props.cnum2}/>
      <Part part={props.cpart3} num={props.cnum3}/>
    </>
  )
}

const Total = (props) => {
  return (
      <p>Number of exercises {props.a + props.b + props.c}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header header={course} />
      <Content cpart1={part1} cnum1={exercises1} cpart2={part2} cnum2={exercises2} cpart3={part3} cnum3={exercises3} /> 
      <Total a={exercises1} b={exercises2} c={exercises3} />
    </div>
    )
}

export default App