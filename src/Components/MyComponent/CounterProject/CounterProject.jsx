import React, { useState } from 'react'
import './counterproject.scss'

const CounterProject = () => {

    const [count, setCnount] = useState(0)

    const Increase = () => {
        setCnount(count +1)
    }

    const Reset = () => {
        setCnount(0)
    }

    const Decrease = () => {
        setCnount(count -1)
    }

  return (
    <div className="mycounter">
        <h1>{count}</h1>
        
        <div className="innerButtonGroups">
            <button className="btn btn-success" onClick={Increase}>Increase</button>
            <button className="btn btn-warning" onClick={Reset}>Reset</button>
            <button className="btn btn-danger" onClick={Decrease}>Decrease</button>
        </div>
        <p>Please Click the button to manipulate the number</p>
    </div>
  )
}

export default CounterProject