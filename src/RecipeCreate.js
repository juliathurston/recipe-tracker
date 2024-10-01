import React, { useState } from "react";
import RecipeData from "./RecipeData"
import "./App.css"

function RecipeCreate({createRecipe}) {

  const[name, setName]= useState("")
  const handleNameChange = (event) => setName(event.target.value)
  
  const[cuisine, setCuisine] = useState("")
  const handleCuisineChange = (event) => setCuisine(event.target.value)
  
  const [photo, setPhoto] = useState("")
  const handlePhotoChange = (event) => setPhoto(event.target.value)
  
  const[ingredients, setIngredients] = useState("")
  const handleIngredientsChange = (event) => setIngredients(event.target.value)
  
  const[preparation, setPreparation] = useState("")
  const handlePreparationChange = (event) => setPreparation(event.target.value)
  
  const handleSubmit = (event)=> {
    event.preventDefault();
    createRecipe({name, cuisine, photo, ingredients, preparation}, ...RecipeData);
    setName("")
    setCuisine("")
    setPhoto("")
    setIngredients("")
    setPreparation("")
  }
  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  return (
    <form name="create" onSubmit={handleSubmit} classList="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input htmlFor="name" id="name" name="name" required={true} onChange={handleNameChange} value={name} placeholder="Name"></input>
            </td>
            <td>
              <input htmlFor="cuisine" id="cuisine" name="cuisine" required={true} onChange={handleCuisineChange} value={cuisine} placeholder="Cuisine"></input>
            </td>
            <td>
              <input src={URL} htmlFor="photo" id="photo" name="photo"  value={photo} onChange={handlePhotoChange} placeholder="URL"></input>
            </td> 
            <td>
              <textarea htmlFor="ingredients" id="ingredients" name="ingredients" required={true} onChange={handleIngredientsChange} value={ingredients} placeholder="Ingredients"></textarea>
            </td>
            <td>
              <textarea htmlFor="preparation" id="preparation" name="preparation" required={true} onChange={handlePreparationChange} value={preparation} placeholder="Preparation"></textarea>
            </td>
            <td>
              <button type="submit" data-testid="formSubmit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;