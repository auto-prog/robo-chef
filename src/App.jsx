

import './App.css'
import { useState } from 'react'

function App() {
let [count,setCount]=useState(0)

function handleClick(){
setCount(count+1)
}  

function handleClickminus(){
  setCount(perv=>
     perv-1
  )
}
  return (
    <>
        <div className='box'>
       <h1>hai</h1>
        <h2>{count}</h2> 
       <button onClick={handleClick}>+</button>
       <button onClick={handleClickminus}>-</button>
        </div>
    </>
  )
}

export default App
