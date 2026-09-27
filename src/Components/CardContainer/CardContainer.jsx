import React from 'react'
import  './cardcontainer.scss'
import Card from '../Cards/Card'
import img1 from '../../assets/images/latteArtSample/1.png'
import img2 from '../../assets/images/latteArtSample/2.png'
import img3 from '../../assets/images/latteArtSample/3.png'
import img4 from '../../assets/images/latteArtSample/4.png'
import img5 from '../../assets/images/latteArtSample/5.png'
import img6 from '../../assets/images/latteArtSample/6.png'






const CardContainer = () => {
  return (
    <div className="cardcontainer">
        <div className="container">

            <div className="infoText">
                <h2>Cards with Props</h2>
                <p>Training with React and Sass, first project Card withs props. What i've learned so far is how to pass data to components and style them using Sass.</p>
            </div>

            <div className="cardContainerFolder">
                
                <Card image={img1} alt="Sample Latte Art 1" title="Sample Latte Art" description="First Sample"/>
                <Card image={img2} alt="Sample Latte Art 2" title="Sample Latte Art" description="Second Sample"/>
                <Card image={img3} alt="Sample Latte Art 3" title="Sample Latte Art" description="Third Sample"/>
                <Card image={img4} alt="Sample Latte Art 4" title="Sample Latte Art" description="Fourth Sample"/>
                <Card image={img5} alt="Sample Latte Art 5" title="Sample Latte Art" description="Fifth Sample"/>
                <Card image={img6} alt="Sample Latte Art 6" title="Sample Latte Art" description="Sixth Sample"/>

            </div>
        </div>
    </div>
  )
}

export default CardContainer