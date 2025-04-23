

import './App.css'
import { useState } from 'react'









function App() {


  const [sample,setSample]=useState('hai')
  console.log(sample)


  function handelClick(){
    setSample('you won')
  }

  return (
    <>
        <div className='box'>
       <h1>hai</h1>
       <button onClick={handelClick}>{sample}</button>
        </div>
    </>
  )
}

export default App
