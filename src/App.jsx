
import { useState } from 'react'
import './App.css'

function App() {
  const [isshow,setisshow]=useState(false)


  function showt(){
    setisshow(pervshow=>
        !pervshow
    )
        
   
        
  }
  let showtheiteam =isshow ? "hai this is a test":null
  console.log(showtheiteam)
  return (
    <>
    <div className='box'>
        <h1>{showtheiteam}</h1>
        <p>next test</p>
        <button onClick={showt}>click me</button>
    </div>
    </>
  )
}

export default App
