import React from 'react'
import './mycomonent.scss'
import CounterProject from './CounterProject/CounterProject'

const MyComponent = () => {
  return (
    <div className="mycomponent">
        <div className="container">

            <div className="innerInfo">
                <h2>Count Counter</h2>
                <p>In this exercises, i learned about the uses of Usestate, and how they actually work on their functionality.</p>
            </div>

            <CounterProject />
        </div>
    </div>
  )
}

export default MyComponent