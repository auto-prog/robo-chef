

import './App.css'
import { useState } from 'react'

function App() {
let [count,setCount]=useState(0)

function handleClick(state){

state ? setCount(count+1):setCount(count-1)

}  
  return (
    <>
        <div className='box'>
       <h1>hai</h1>
        <h2>{count}</h2> 
       <button onClick={() => handleClick(false)}>-</button>
       <button onClick={() => handleClick(true)}>+</button>
        </div>
    </>
  )
}

export default App
