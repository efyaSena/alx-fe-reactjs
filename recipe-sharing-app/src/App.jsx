
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
        <AddRecipeForm />
        <SearchBar />
        <Routes>
        
          <Route path="/" element={<RecipeList />} />

        
          <Route path="/recipe/:id" element={<RecipeDetailWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}


import { useParams } from 'react-router-dom';
const RecipeDetailWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;
