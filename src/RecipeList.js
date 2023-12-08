import React from "react";
import "./App.css"
import Recipe from "./Recipe"

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead className="tenPercent ingredients preparation last">
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe,index) => (
            <Recipe
              key={recipe.id}  
              recipe={recipe}
              deleteRecipe={() => deleteRecipe(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default RecipeList
