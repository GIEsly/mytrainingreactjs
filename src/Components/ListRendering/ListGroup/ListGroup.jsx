import React from 'react'

const ListGroup = (props) => {

    const categories = props.categories
    const itemList = props.itemList
    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;{item.Calories}</li>)

  return (
    <div className="listGroup">
        <h2>{categories}</h2>
        <ol>{listItems}</ol>
    </div>
  )
}

export default ListGroup