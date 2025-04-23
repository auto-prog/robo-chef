import React from 'react'
import "./Main_conten.css"
function Main_content() {


let ingredients_list=["apple","chicken","banana"]
const each=ingredients_list.map((food)=>{
  return <li key={food}>{food}</li>
 })


function handelSubmit(e){
  e.preventDefault()
  const ingredients= new FormData(e.currentTarget).get("ingredient")
   ingredients_list=[...ingredients_list,ingredients]
  return console.log(ingredients_list)
   

}
  return (
    <main>
    <form className='add-ingredients' onSubmit={handelSubmit} >
        <input type="text" aria-label='this is a input' placeholder='Eg: eggs' name='ingredient'/>
        <button type='submit'>Add Ingredients</button>
    </form>
      {each}
    </main>
  )
}

export default Main_content