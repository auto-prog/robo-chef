

import './App.css'
import { useState } from 'react'

function App() {
  const sample=useState('hai')
  console.log(sample)

  return (
    <>
        <div className='box'>
       <h1>hai</h1>

       <p>this is {sample[0]}</p>
        </div>
    </>
  )
}

export default App
