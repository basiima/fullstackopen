import React from 'react'

const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  )
}

const Total = ({ course }) => {
  const parts = course.parts
  const sum = parts.reduce((s, p)=> s + p.exercises,0)
  return(
    <p><b>Number of exercises {sum}</b></p>
  ) 
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map(p => <Part name={p.name} exercises={p.exercises} key={p.id}/>)}
    </>
  )
}

const Course = ({ course }) => {
  return(
    <>
      <Header course={course} />
      <Content course={course} /> 
      <Total course={course} /> 
          
    </>
  )
}

export default Course