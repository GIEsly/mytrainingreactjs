import React from 'react'
import './list.scss'

const List = (props) => {

    const fruits = ["Mango", "Banana", "Star Apple", "Star Mango", "Coconut", "Guava", "Grapes"]

    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    const fruits2 = [   {id:1, name:"Apple", calories: 95},
                        {id:2, name:"Orange", calories: 45},
                        {id:3, name: "Banana", calories: 105},
                        {id:4, name: "Coconut", calories: 159},
                        {id:5, name: "Pineappple", calories: 37}];

    // fruits2.sort((a,b) => a.name.localeCompare(b.name));
    // fruits2.sort((a,b) => b.name.localeCompare(a.name));
    fruits2.sort((a,b) => a.calories - b.calories);
    fruits2.sort((a,b) => b.calories - a.calories);

    const listItems2 = fruits2.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories}</li>)

    // Filtering the Low Calories ---
    const lowCalories = fruits2.filter(fruit => fruit.calories < 100);
    const lowCaloriesDetails = lowCalories.map(low => <li key={low.id}>{low.name}: &nbsp; {low.calories}</li>)

    // Filtering the High Calories ---
    const highCalories = fruits2.filter(fruit => fruit.calories > 100)
    const highCaloriesDetails = highCalories.map(high => <li key={high.id}>{high.name}: &nbps;{high.calories}</li>)


  return (
    <div className="list">

        <div className="first">
            <p>This is a sample of no converted yet</p>
            {fruits}
        </div>

        <div className="converted">
            <p>Converted from string of array into array of list</p>
            <ol>{listItems}</ol>
        </div>

        <div className="arrayOfObject">
            <p>Converting the Array of Strings into Array of Objects</p>
            <ol>{listItems2}</ol>
        </div>

        <div className="innerLow-High-Calories">
            <div className="low">
                <p>Filtering the low calories:</p>
                <ol>{lowCaloriesDetails}</ol>
            </div>

            <div className="high">
                <p>Filtering the high calories</p>
                <ol>{highCaloriesDetails}</ol>
            </div>
        </div>
        
    </div>
  )
}

export default List