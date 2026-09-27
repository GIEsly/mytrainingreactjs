import React from 'react'
import './ternaryCondition.scss'
import Students from './Students/Students'

const TernaryCondition = () => {
  return (
    <div className="ternaryCondition">
        <div className="container">

            <div className="innerInfo">
                <h2>Prototypes with Ternary Operation</h2>
                <p>A Simple reusable component base that has a value that can be share to its child element by the use of props.</p>
            </div>

            <div className="innerStudents">
                <Students name='Arnel Villamil Bautista' age={41} isStudent={false}/>
                <Students name='Rushtine Mae R. Bautista' age={32} isStudent={true}/>
                <Students name='Zephaniah Arine Repancol Bautista' age={4} isStudent={false}/>
                <Students name='Zaphyrine Arise Repancol Bautista' age={3} isStudent={false}/>
            </div>

        </div>
    </div>
  )
}

export default TernaryCondition