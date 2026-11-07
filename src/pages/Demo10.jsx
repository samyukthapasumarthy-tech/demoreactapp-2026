import React, { useState } from 'react'

export default function Demo10() {
const [flag,setFlag] = useState(true)

function change()
{
    setFlag(!flag)
}

  return (
    <div>
        <h2>Flag Demo</h2>
        
        {
            flag ? <p>TRUE</p> : <p>FALSE</p>
        }

        <button onClick={change}>Change</button>
    </div>
  )
}
