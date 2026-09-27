import React from 'react'
import './clickbtn.scss'
import img1 from '../../../assets/images/zeffy3.png'

const ClickEventButton = () => {

   const handleClick2 = (e) => e.target.textContent = "Please Lang Ha 😒😒😒"

   const handleChangeName = (e) => {
        e.target.textContent = "See You Change The Text Content Here"
   }

   const showImage = (e) => {
    e.target.style.display = "block"
    console.log('This is a Sample of Text')
   }

  return (
    <div className="clickBtn">
        <div className="btn btn-success" onClick={(e) => handleClick2(e)}>Please Click Me! 🤣🤣🤣👌</div>

        <div className="btn btn-danger" onClick={(e) => handleChangeName(e)}>😁😁😁 Please Click Me!  🤞🤞🤞</div>

        <div className="btn btn-primary " onClick={(e) => showImage(e)}> Click Me to see image 😁😁😁</div>

        <img src={img1} alt="Sample" />
    </div>
  )
}

export default ClickEventButton