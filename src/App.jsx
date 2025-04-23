

import './App.css'
import { useState } from 'react'

function App() {
let [goout,setGoout]=useState(false)

function handleClick(){
 setGoout(!goout)
}  


  return (
    <>
        <div className='box'>
       <h1>hai</h1>
       <button onClick={handleClick}>click {goout ? "yes":"no"}</button>
        </div>
    </>
  )
}

export default App
