import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  { ThemeContext } from '../context/ThemeContext';
import { fetchAllRecipes } from '../API.js';

function Home() {
    const [recipes, setRecipes] = useState([]); 
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { isDarkMode } = useContext(ThemeContext);

  
    const getRecipes = async (searchTerm = "") => {
        try {
            const fetchedRecipes = await fetchAllRecipes(searchTerm); 
            setRecipes(fetchedRecipes);
        } catch (error) {
            console.error('Fehler beim Abrufen der Rezepte:', error);
        }
    };

    useEffect(() => {
        getRecipes(); 
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    
    const filteredRecipes = selectedCategory === 'All' 
        ? recipes 
        : recipes.filter(recipe => recipe.strCategory === selectedCategory);

    return (
        <div className={`home ${isDarkMode ? 'dark' : ''}`}>
            <h1>Featured Recipes</h1>
            <label htmlFor="category-select">Choose a category:</label>
            <select id="category-select" onChange={handleCategoryChange}>
                <option value="All">All</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Main Dish">Main Dish</option>
                <option value="Salad">Salad</option>
                <option value="Soup">Soup</option>
                <option value="Side Dish">Side Dish</option>
                <option value="Dessert">Dessert</option>
            </select>
            <div className="recipes">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map(recipe => (
                        <div key={recipe.idMeal} className="recipe">
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                            <h3>{recipe.strMeal}</h3>
                            <Link to={`/recipe/${recipe.idMeal}`}>View Recipe</Link>
                        </div>
                    ))
                ) : (
                    <p>No recipes found.</p> // 
                )}
            </div>
        </div>
    );
}

export default Home;