import React, { useState } from 'react'
import "./Main_conten.css"

function Main_content() {
  let ingredients_list = ['apple', 'banana', 'orange', 'mango'];
  const [ingredient,setingredient]=useState(ingredients_list)


let  each =ingredient.map((food,index)=>{
  return <li key={index}>{food}</li>
  
 })
 console.log(ingredient)



 
function handelSubmit(e){

  e.preventDefault()
  
  let inputvalue= new FormData(e.currentTarget).get("inputvalue")
  inputvalue ? setingredient( prev=> [...prev,inputvalue]) : window.alert('Pls enter any one ingredient !')
  
   

}
  return (
    <main>
    <form className='add-ingredients' onSubmit={handelSubmit} >
        <input type="text" aria-label='this is a input' placeholder='Eg: eggs' name='inputvalue'/>
        <button type='submit'>Add Ingredients</button>
    </form>
      {each}
    </main>
  )
}

export default Main_content