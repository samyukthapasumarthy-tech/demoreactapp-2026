import React, { useState } from 'react'
import './style.css'
export default function Demo9() {
const [count,setCount] = useState(0)
  
function increament(){
    setCount(count+1)
}
function decrement(){
    setCount(count-1)
}


  return (
    <div className="counter-demo">
        <h2>Hooks Demo2</h2>
        <p>COUNT={count}</p>

        <button className="btn" onClick={increament}>Increament</button>
        <button className="btn" onClick={decrement}>Decrement</button>
    </div>
  )
}
