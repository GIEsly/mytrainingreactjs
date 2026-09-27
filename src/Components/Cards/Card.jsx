import React from 'react'
import './cards.scss'

const Card = (props) => {
  return (
    <div className="cards">
        <div className="container">
            <div className="innerCard">
                <img src={props.image} alt={props.alt} />

                <div className="info">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    <button className="btn btn-primary btn-sm">More Info</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card