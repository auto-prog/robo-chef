
import { useState } from 'react'
import './App.css'

function App() {
  const [isshow,setisshow]=useState(["a","b","shvg"])
let result=""
function unread(){
    if(isshow.length==0){
        return  `you have ${isshow.length} unreaded message`
        
    }else if(isshow.length==1){
     return "you have 1 unreaded message"
    }else if(isshow.length>1){
     return `you had ${isshow.length} unreaded message`
     console.log(result)
    }
    
}

  return (
    <>
    <div className='box'>
        
        <button>click me</button>
        <h1>{unread()}</h1>
    </div>
    </>
  )
}

export default App
