import React from 'react'
import './clickEvent.scss'
import ClickEventButton from './ClickBtn/ClickEventButton'

const ClickEventContainer = () => {
  return (
    <div className="clickEvent">
        <div className="container">

            <div className="innerInfo">
                <h2>This is a button with click event</h2>
                <p>Click Event is one of the usefull event. By mastering the this can manipulate your element in your desire  action.</p>
            </div>

            <ClickEventButton />
        </div>
    </div>
  )
}

export default ClickEventContainer