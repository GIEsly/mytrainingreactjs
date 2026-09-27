import React from 'react'
import './header.scss'

const Headers = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="logoContainer">
                kzyerushtine<span>sly</span>
            </div>

            <div className="innerLink">
                <nav className="nav">
                <ul>
                    <li><a href="#home" className='active'>Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                </nav>

                <div className="logIn">
                    <div className="btn btn-primary">Login</div>
                </div>
            </div>
        </div>
    </div>
     
  )
}

export default Headers