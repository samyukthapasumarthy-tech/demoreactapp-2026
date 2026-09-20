import React from 'react'

export default function Demo4(props) {
  return (
    <div>
        <h2>Props Demo</h2>
        <p>a : {props.a}</p>
        <p>b : {props.b}</p>
        <p>text : {props.text}</p>
        <p>emp id : {props.emp.id}</p>
        <p>emp name : {props.emp.name}</p>
        
    </div>

  )
}


/*

props - properties 
it is predefined objects 
it is used to read the property values but it cant modify
immutable object(only read but not write)
props is used to pass the data from one component to another componenet
*/

/*
app.jsx is parent component 
demo4 - child component
*/