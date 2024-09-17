import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeDetails } from "../API.js";

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    const getRecipeDetails = async () => {
        try{
            const fetchedRecipe = await fetchRecipeDetails(id);
            console.log(fetchedRecipe)
            if (fetchedRecipe && fetchedRecipe.length > 0) {
                setRecipe(fetchedRecipe[0])
            }
        }
        catch (error) {
            console.error("Get recipe details error:", error);
        }
    };

    useEffect(() => {
        getRecipeDetails();
    } ,[id]);

    if (!recipe) {return <p>Loading...</p>}

    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        if (recipe[`strIngredient${i}`]) {
            ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
        } 
    }

    return (
        <div>
            <h1>{recipe.strMeal}</h1>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strInstructions}</p>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <ol>
                {instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default RecipeDetail;