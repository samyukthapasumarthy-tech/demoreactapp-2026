import React, { useState } from 'react'

export default function Demo12() {
    const [text,setText]=useState("SamYuktha")
    
    function upper()
    {
        setText(text.toUpperCase())
    }

    function lower()
    {
        setText(text.toLowerCase())
    }
    function reset()
    {
        setText("SamYuktha")
    }

  return (
    <div>
        <h2>Hooks Demo5</h2>
        <p>Text:{text}</p>
        <p>Length:{text.length}</p>

        <button onClick={upper}>UPPER-CASE</button>
        <button onClick={lower}>LOWER-CASE</button>
        <button onClick={reset}>NORMAL</button>
    </div>
  )
}
