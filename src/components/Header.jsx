import DarkModeToggle from "./DarkModeToggle.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const getRandomRecipe = async () => {
        try {
          const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );
          const data = await response.json();
          if (data.meals) {
            navigate(`/meal/${data.meals[0].idMeal}`);
          }
        } catch (error) {
          console.error("Fehler beim Abrufen eines zufälligen Rezepts:", error);
        }
    };

    return (
        <>
            <nav className="container container-nav">
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/search">Search Meals</Link>
                </li>
                </ul>
                <DarkModeToggle />
            </nav>
            <button onClick={getRandomRecipe} className="surprise-me-button">
                Surprise Me!
            </button>
        </>
    );
}