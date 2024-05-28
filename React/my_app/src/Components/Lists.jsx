import React from 'react';

function Lists()
{
    const Grocerylist= [
        {id:1, list:"Milk"},
        {id:2, list:"Rice"},
        {id:3, list:"Eggs"} 
        
    ];
    
    return(
        <>       
        <h1>Grocery List:</h1>
        <ol>
            {Grocerylist.map((item)=><li key ={item.id}> {item.list}</li>)}
        </ol>
        </>
    );
}
export default Lists;


//key should be unique
//map function to be given to the array 

//key ={}
//Keys are significant in React because they aid in determining whether items in a list have been changed, ...
//...updated, or removed. This process helps React to optimize the rendering by recycling existing DOM elements

//parameters = are defined in the outer function
//arguements = are defined in the inner function

//if the list is not assigned in the code i.e in the map array method----
//---Lists.jsx:14  Warning: Each child in a list should have a unique "key" prop.

//key == a string or a key that uniquely identifies it among other items in the array..
//JSX elements directly inside a map() always needs a key..

//avoid using index as keys