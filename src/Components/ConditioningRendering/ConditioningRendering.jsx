import React from 'react'
import './conditioningRendering.scss'
import WelcomeGreetings from './WelcomeGreetings/WelcomeGreetings'

const ConditioningRendering = () => {
  return (
    <div className="conditioningRendering">
        <div className="container">

            <div className="innerInfo">
                <h2>This is a Conditioning Rendering</h2>
                <p>A Boolean function which gives "True" or "False" selection... True comes to Green Color Background and False comes to Red color background with white font color.</p>
            </div>

           <WelcomeGreetings isLoggedIn={false} usersname="Arnel Villamil Bautista"/>
        </div>
    </div>
  )
}

export default ConditioningRendering