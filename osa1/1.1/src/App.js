import React from 'react'

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
      <Header name={course}/>
      <p>
        <Content part={part1} excersises={exercises1}/>
      </p>
      <p>
        <Content part={part2} excersises={exercises2}/>
      </p>
      <p>
        <Content part={part3} excersises={exercises3}/>
      </p>
      <p><Total total={exercises1 + exercises2 + exercises3} /></p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div> 
      <p>{props.part} {props.excersises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of excercises {props.total}</p>
    </div>
  )
}

export default App
