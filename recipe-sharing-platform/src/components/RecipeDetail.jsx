import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams(); // get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) {
    return <p className="p-6 text-center text-xl">Loading recipe...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>

      <p className="text-gray-700 text-lg mb-6">{recipe.summary}</p>

      {/* Ingredients */}
      <div className="bg-white p-5 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </div>

      {/* Instructions */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Step 1: Lorem ipsum dolor sit amet.</li>
          <li>Step 2: Consectetur adipiscing elit.</li>
          <li>Step 3: Sed do eiusmod tempor incididunt.</li>
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
