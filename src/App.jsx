import Home from "./components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import MealDetails from "./components/MealDetails.jsx";
import SearchByName from "./components/SearchByName.jsx";
import "./App.css";
import Header from "./components/Header.jsx";

function App() {
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
    <ThemeProvider>
      <Header />

      <button onClick={getRandomRecipe} className="surprise-me-button">
        Surprise Me!
      </button>

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/meal/:id" element={<MealDetails />} />
          <Route path="/search" element={<SearchByName />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
