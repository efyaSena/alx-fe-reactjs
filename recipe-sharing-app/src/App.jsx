
import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
