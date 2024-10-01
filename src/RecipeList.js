import React from "react";
import RecipeView from "./RecipeView"
import RecipeData from "./RecipeData"
import "./App.css"


function RecipeList({recipes, deleteRecipe}) {
  

  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th><h3>Name</h3></th>
            <th><h3>Cuisine</h3></th>
            <th><h3>Photo</h3></th>
            <th><h3>Ingredients</h3></th>
            <th><h3>Preparation</h3></th>
            <th><h3>Actions</h3></th>
          </tr>
        </thead>
        <tbody>
       
          {recipes.map((recipe, index)=> ( 
              <RecipeView
              deleteRecipe={()=> deleteRecipe(index)}
              key={index}
              recipe={recipe}/>        
                     ) )}
          
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;