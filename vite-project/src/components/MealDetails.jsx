import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MealDetails() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    const getMealDetails = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            setMeal(data.meals[0]);
        } catch (error) {
            console.error('Error fetching meal details:', error);
        }
    };

    useEffect(() => {
        getMealDetails();
    }, [id]);

    if (!meal) return <p>Loading...</p>;

    return (
        <div>
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>Instructions</h2>
            <p>{meal.strInstructions}</p>
        </div>
    );
}

export default MealDetails;