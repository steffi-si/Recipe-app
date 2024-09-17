import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import MealDetails from "./components/MealDetails.jsx";
import SearchByName from "./components/SearchByName.jsx";
import "./App.css";

function App() {
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
      </Routes>
    </ThemeProvider>
  );
}

export default App;
