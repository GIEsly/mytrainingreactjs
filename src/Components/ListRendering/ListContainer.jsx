import React from 'react'
import './listcontainer.scss'
import List from './List/List'
import ListGroup from './ListGroup/ListGroup'

const ListContainer = () => {

  const Fruits = [  {id:1, name: "Apple", Calories: 34},
                    {id:2, name: "Star Apple", Calories: 129},
                    {id:3, name: "Grapes", Calories: 43},
                    {id:4, name: "Guava", Calories: 278},
                    {id:5, name: "Mango", Calories: 178},
                    {id:6, name: "Pineapple", Calories: 28},]

  const Vegetables = [  {id:7, name: "Carrots", Calories: 238},
                        {id:8, name: "Tomatoe", Calories: 129},
                        {id:9, name: "Union", Calories: 41},
                        {id:10, name: "Ginger", Calories: 118},
                        {id:11, name: "Union Leaves", Calories: 18},
                        {id:12, name: "Squash", Calories: 228},]
  return (
    <div className="listContainer">
        <div className="container">
            <div className="innerInfo">
                <h2>List Rendering</h2>
                <p>This is List Rendering will render all the list item by the use of MAP Method</p>
            </div>

            <List />
            <div className="inner">
              <ListGroup itemList={Fruits} categories="Fruits"/>
              <ListGroup itemList={Vegetables} categories="Vegetables"/>
            </div>
        </div>
    </div>
  )
}

export default ListContainer