
import React from 'react';
import useRecipeStore from '../stores/useRecipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => 
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id} className="mb-4 p-2 border rounded">
          <h3 className="font-semibold">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
