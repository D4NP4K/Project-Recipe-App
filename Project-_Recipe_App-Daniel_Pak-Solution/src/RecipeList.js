import React from "react";
import RecipeViewer from "./RecipeViewer"

function RecipeList({recipes, RecipeDelete}) {
  const rows = recipes.map((recipe, index) => (
    <RecipeViewer
      key={index}
      recipe={recipe}
      RecipeDelete={() => RecipeDelete(index)}/>
  )); 


  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr className="tableHeader">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tableRows">
        {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
