import React, { useState } from 'react'

export default function Demo11() {

    const [score,setScore]=useState(0)

    const zerorun =() =>
    {
         setScore(score+0)
    }
    const onerun =() =>
    {
         setScore(score+1)
    }
    const tworun =() =>
    {
         setScore(score+2)
    }
    const threerun =() =>
    {
         setScore(score+3)
    }
    const fourrun =() =>
    {
         setScore(score+4)
    }
    const sixrun =() =>
    {
         setScore(score+6)
    }
  return (
    <div>
        <h2>
            Hooks Demo4
        </h2>
        <p>SCORE={score}</p>

        <button onClick={zerorun}>0 Run</button>
        <button onClick={onerun}>1 Run</button>
        <button onClick={tworun}>2 Run</button>
        <button onClick={threerun}>3 Run</button>
        <button onClick={fourrun}>4 Run</button>
        <button onClick={sixrun}>6 Run</button>
    </div>
  )
}
