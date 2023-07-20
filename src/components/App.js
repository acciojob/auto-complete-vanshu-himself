
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
  const [data,setData]=useState("");
  const [selectedFruit,setSelectedFruit]=useState(fruits);

  console.log(selectedFruit);
  useEffect(()=>{
    setSelectedFruit(fruits.filter((fruit)=>{
      return fruit.includes(data);
    }))
  },[data])
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search item</h1>
        <input onChange={ (e)=> setData(e.target.value)}/>
        {console.log(selectedFruit)};
        <ul> {selectedFruit.map((fruity)=>{
      return <li>{fruity}</li>})}
       </ul>
      
         
      


    </div>
  )
}

export default App
