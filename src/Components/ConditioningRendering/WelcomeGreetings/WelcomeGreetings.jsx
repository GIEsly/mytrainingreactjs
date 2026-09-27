import React from 'react'
import './welcomeGreetings.scss'

const WelcomeGreetings = (props) => {
  return (props.isLoggedIn ? <h2 className='welcomeInfo'>Welcome back bossing {props.usersname}</h2> : <h2 className='info1'>Please login first before you access this page.</h2>)
}

export default WelcomeGreetings