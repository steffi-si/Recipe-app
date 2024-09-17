import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchAllRecipes = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/search.php?s=${id}`);
        return response.data.meals; 
    } catch (error) {
        console.error('fetchRecipes error: ', error);
        throw error;
    }
};

export const fetchRecipeDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/lookup.php?i=${id}`);
        return response.data.meals; 
    } catch (error) {
        console.error('fetchRecipes error: ', error);
        throw error;
    }
};