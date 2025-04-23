import React from 'react'
import "./Main_conten.css"
function Main_content() {
  return (
    <main>
    <div className='add-ingredients' >
        <input type="text" aria-label='this is a input' placeholder='Eg: eggs'/>
        <button >Add Ingredients</button>
    </div>
    </main>
  )
}

export default Main_content