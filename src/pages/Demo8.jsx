import React, { useState } from 'react'

export default function Demo8() {

   const [name,setName] = useState("")

   // name is state variable
   // setName is used to modify name variable 
   // null is initialised value 

  function change()
  {
    setName("Samyuktha")
  }
  return (
    <div>

        <h2>Hooks Demo</h2>

        <p>NAME:{name}</p>
        <p>LENGTH:{name.length}</p>
        <p>LOWER:{name.toUpperCase()}</p>
        <p>UPPER:{name.toLowerCase()}</p>
        <button onClick={change}>Change</button>
    </div>
  )
}
