import React from 'react'
import './student.scss'



const Students = (props) => {
  return (
    <div className="student">
       <p>Name: {props.name}</p>
       <p>Age: {props.age}</p>
       <p>Student: {props.isStudent ? "Yes, this student is registered" : "No, not register"}</p>
    </div>
  )
}

export default Students