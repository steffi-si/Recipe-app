import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import MealDetails from "./components/MealDetails.jsx";
import SearchByName from "./components/SearchByName.jsx";
import "./App.css";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/meal/:id" element={<MealDetails />} />
          <Route path="/search" element={<SearchByName />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
