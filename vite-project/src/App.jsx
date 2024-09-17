import Home from "./components/Home";
import RecipeDetail from "./components/RecipeDetail";
import SearchBar from "./components/SearchBar";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Search from "./components/Search.jsx";
import MealDetails from "./components/MealDetails.jsx";
import SearchByName from "./components/SearchByName.jsx";
import "./App.css";

function App() {
  console.log(window.location.pathname);
  
  return (
    <ThemeProvider>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search Meals</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/search" element={<SearchByName />} />
        <Route path="/search/:term" element={<Search />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
