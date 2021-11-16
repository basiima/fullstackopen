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
      <Part part={props.parts[0].name} num={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} num={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} num={props.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  return (
      <p><b>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</b></p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} /> 
      <Total parts={course.parts} />
    </div>
    )
}

export default App