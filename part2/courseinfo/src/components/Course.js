import React from 'react'

const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
  }
  
  const Total = ({ course }) => {
    let sum = 0;
    course.parts.forEach((part)=>{
      sum+=part.exercises
    })
    return(
      <p >Number of exercises {sum}</p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((part)=>{
          return <Part key={part.id} part={part}/>
        })}
      </div>
    )
  }
  
  const Course=({course})=>{
    return (
      <>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
      </>
    )
  }
  export default Course;