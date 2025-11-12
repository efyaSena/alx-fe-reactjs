
import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { filteredRecipes, recipes, searchTerm } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes,
    recipes: state.recipes,
    searchTerm: state.searchTerm,
  }));

 
  const displayedRecipes =
    searchTerm && filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {displayedRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        displayedRecipes.map((recipe) => (
          <div key={recipe.id}>
           
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
