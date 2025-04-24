import React, { useState } from 'react'
import "./Main_conten.css"

function Main_content() {
  
  const [ingredient,setingredient]=useState([])
  const [Recipe,setRecipe]=useState(false)

let  each =ingredient.map((food,index)=>{
  return <li key={index}>{food}</li>
  
 })
 console.log(ingredient)

 function get_recipe(){
  setRecipe(true)
 }
 console.log(Recipe)
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

   {ingredient.length>0 &&
    <section>
      <h1>Ingredient i have :</h1>
         {each}
        { ingredient.length>=4 &&
      <div className='sent-Recipe-container'>
        <div className='sent-Recipe'>
          <p>Get Recipe From The Robo-Chef</p>
          <button onClick={get_recipe}>Get Recipe</button>
        </div>
      </div>}
    </section>
}
{Recipe==true ?
<section className='recipe-placeholder'>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
        <h3>Beef Bolognese Pasta</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
            <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
            <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
        </ol>
    </article>
</section>
 :null}
      



    </main>
  )
}

export default Main_content