import React, { useEffect, useState } from 'react'
import './style.css'
export default function Demo13()
 {
    const [count,setCount] = useState(0)

  function increment(){
    setCount(count+1)
}
function decrement(){
    setCount(count-1)
}

    // Case -1 - without dependency - runs on every render  - rarely used (decreases the chrome efficiency)
    useEffect(() => {
        console.log("Runs on every time - page re renders")
    } );

    // Case - 2 - empty dependency - runs only once when compoenent loads 
    useEffect(() => {
        console.log("Runs only once on page load ")

    }, []);

    // Case - 3 - with dependency - runs only when count changes
    useEffect(() => {
        console.log("Runs when count changes",count)
    }, [count]);


  return (
    <div>
        <h2>Hooks Demo6 using useEffect</h2>

        <p>Count : {count}</p>
        <button className="btn" onClick={increment}>Increment</button>
        <button className="btn" onClick={decrement}>Decrement</button>
    </div>
  )
}
