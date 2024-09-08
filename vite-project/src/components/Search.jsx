import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../data/recipes';
import { Link } from 'react-router-dom';

function Search() {
    const { term } = useParams(); // Den Suchbegriff aus den URL-Parametern abrufen
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(term.toLowerCase()) // Suche nach Rezeptnamen
    );

    return (
        <div>
            <h1>Search results</h1>
            <div className="recipes">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map(recipe => (
                        <div key={recipe.id} className="recipe">
                            <Link to={`/recipe/${recipe.id}`}> 
                                <img src={recipe.image} alt={recipe.name} />
                                <h3>{recipe.name}</h3>
                                <p>{recipe.category}</p>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No recipes found.</p>
                )}
            </div>
        </div>
    );
}
export default Search;