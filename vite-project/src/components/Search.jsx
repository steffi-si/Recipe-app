import { useParams } from 'react-router-dom';
import { fetchAllRecipes } from '../API.js';
import { useEffect, useState } from 'react';

function Search () {
    const { term } = useParams();
   const [recipes, setRecipes] = useState([]);

   useEffect(() => {
    const getRecipes = async () => {
        try {
            const fetchedRecipes = await fetchAllRecipes(term);
            setRecipes(fetchedRecipes);
        } catch (error) {
            console.error('getRecipes error: ', error);
        }
    };
    getRecipes();
   }, [term]);

    return(
        <div>
        <h2>Ergebnisse für "{term}"</h2>
        <ul>
          {recipes && recipes.length > 0 ? (
            recipes.map((recipe) => (
              <li key={recipe.idMeal}>
                <h3>{recipe.strMeal}</h3>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              </li>
            ))
          ) : (
            <p>Keine Rezepte gefunden.</p>
          )}
        </ul>
      </div>
    );
  };

export default Search;