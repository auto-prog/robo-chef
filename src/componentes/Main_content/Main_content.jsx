import React, { useState } from 'react'
import "./Main_conten.css"

function Main_content() {
  
  const [ingredient,setingredient]=useState([])


let  each =ingredient.map((food,index)=>{
  return <li key={index}>{food}</li>
  
 })
 console.log(ingredient)




function handelSubmit(formdata){
  const user_ingredient=formdata.get('inputvalue')
  user_ingredient ? setingredient( prev=> [...prev,user_ingredient]) : window.alert('Pls enter any one ingredient !')
  
   

}
  return (
    <main>
    <form className='add-ingredients' action={handelSubmit} >
        <input type="text" aria-label='this is a input' placeholder='Eg: eggs' name='inputvalue'/>
        <button type='submit'>Add Ingredients</button>
    </form>
      {each}
    </main>
  )
}

export default Main_content