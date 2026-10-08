import React from 'react'
import { useState } from 'react'
import './onchangeEvent.scss'

const OnChangeEvent = () => {

  // On Change Name Function ---
  const [name, setName] = useState("Welcome Guest")
  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  // Quantity Number Change ---
  const [quantity, setQuantity] = useState()
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  // Text Area Comment ---
  const [comment, setComment] = useState()
  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  // Payment with Select / Option ---
  const [payment, setPayment] = useState()
  const handlePaymentChange = (e) => {
    setPayment(e.target.value)
  }

  // Input Radio Button ---
  const [Shipping, setShipping] = useState()
  const handleShippingChange = (e) => {
    setShipping(e.target.value)
  }

  // Input Color ---
  const [Color, setColor] = useState("ffffff")
  const handleColorChange = (e) => {
    setColor(e.target.value)
  }

  // form information sheet ---
  const [FirstName, setFirstName] = useState()
  const [Middle, setMiddle] = useState()
  const [LastName, setLastName] = useState()
  const [Address, setAddress] = useState()
  const [Gender, setGender] = useState()
  const [Message, setMessage] = useState()
  const [ColorPicker, setColorPicker] = useState()

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleMiddle = (e) => {
    setMiddle(e.target.value)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }
  const handleGender = (e) => {
    setGender(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }
  const handleColor = (e) => {
    setColorPicker(e.target.value)
  }

  return (
    <div className="onchangeContainer">
        <div className="container">
            
            <div className="innerInfo">
                <h2>On Change Event</h2>
                <p>On change event typically used in Input, TextArea, Select and Radio. Where you can find this on Form Section and some input details elements</p>
            </div>

            <div className="innerMain">
              
              <div className="box">
                <h2>On Change Event</h2>
                <p>Change Name</p>
                <div className="nameInfo">{name}</div>

                <input value={name} onChange={handleNameChange}/>
                <p className="lowerInfo">Please try to input your text in the input field and see what happened after doing it.</p>
              </div>
              
              <div className="box">
                <h2>On Change Event</h2>
                <p>Quantity Numbers</p>
                <div className="nameInfo">{quantity}</div>

                <input type="number" value={quantity} onChange={handleQuantityChange}/>
                <p className="lowerInfo">Please try to input some numbers one the field</p>
              </div>

              <div className="box">
                <h2>On Change Event</h2>
                <p>Text Area</p>

                <textarea value={comment} onChange={handleCommentChange} placeholder='Please enter you additional instruction for your delivery order'/>

                <p><span>Additional Comment:</span> {comment}</p>
              </div>

              <div className="box">
                <h2>On Change Event</h2>
                <p>Select Payment!!!</p>

                <select value={payment} onChange={handlePaymentChange}>
                  <option value="">Please Select Options</option>
                  <option value="Visa">Visa</option>
                  <option value="Master Card">Master Card</option>
                  <option value="Mashreq">Mashreq</option>
                  <option value="Gift Card">Gift Card</option>
                </select>

                <p><span>Your Payment Method is:</span> {payment}</p>
              </div>

              <div className="box">
                <h2>On Change Event</h2>
                <p>Radio Button</p>

                <label>
                  <input type="radio" value="Pick Up" onChange={handleShippingChange} checked={Shipping === "Pick Up"}/>
                   &nbsp; Pick Up
                </label>

                <label>
                  <input type="radio" value="Delivered" checked={Shipping === "Delivered"} onChange={handleShippingChange}/>
                  &nbsp; Delivered
                </label>
                <p><span>Status:</span> {Shipping}</p>
              </div>

              <div className="box">
                <h2>On Change Event</h2>
                <p>Color Picker!!!</p>

                <label>
                  <input type="color" value={Color} onChange={handleColorChange} />
                  &nbsp; Select Color
                </label>
                <p><span>Status:</span> {Color}</p>
              </div>


            </div>

            <div className="innerSecondInfo">
              <div className="box2">
                <h2>Information Sheet Record</h2>
                <p>Plaese fill up the following information for your application</p>

                <div className="innerForm">
                  <form >

                    <div className="fullName">
                      <label>
                        First Name: &nbsp;
                        <input type="text" value={FirstName} onChange={handleFirstName}/>
                      </label>
                      <label>
                        Middle Initial: &nbsp;
                        <input type="text" value={Middle} onChange={handleMiddle}/>
                      </label>
                      <label>
                        Last Name: &nbsp;
                        <input type="text" value={LastName} onChange={handleLastName}/>
                      </label>
                    </div>

                    <div className="addressContainer">
                      <label>
                        Address: &nbsp;
                        <input type="text" value={Address} onChange={handleAddress}/>
                      </label>
                    </div>

                    <div className="gender">
                      <label>
                        Gender: &nbsp;
                        <select value={Gender} onChange={handleGender}>
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Gender Equality">Gender Equality</option>
                          <option value="Disabled">Disabled</option>
                        </select>
                      </label>
                    </div>

                    <div className="message">
                      <label>
                        Message: &nbsp;
                      </label>
                      <textarea value={Message} onChange={handleMessage} placeholder='Enter your message here!' className='messagetext'/>
                    </div>

                    <div className="colorPicker">
                      <label>
                        Select Your Color: &nbsp;
                        <input type="color" value={Color} onChange={handleColor} />
                      </label>
                    </div>

                  </form>
                </div>
              </div>

              {/* Second Information Sheet Section --- */}

              <div className="box22" style={{backgroundColor: ColorPicker}}>
                <h2>Record Sheet Data</h2>
                <p>Your Personal information...</p>

                <div className="nameContainer" >

                  <div className="fullname">
                    <span>Full Name:</span> &nbsp; {FirstName} &nbsp; {Middle} &nbsp; {LastName}
                  </div>

                  <div className="addContainer">
                    <span>Address:</span> &nbsp; {Address}
                  </div>

                  <div className="gender">
                    <span>Gender:</span> &nbsp; {Gender}
                  </div>

                  <div className="messageContainer">
                    <span>Message:</span> &nbsp; {Message}
                  </div>

                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default OnChangeEvent