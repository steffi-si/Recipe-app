import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllRecipes } from "../API.js";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault;
    try {
      const recipes = await fetchAllRecipes(searchTerm);
      navigate("/search", { state: { recipes, searchTerm } });
    } catch (error) {
      console.error("handleSubmit error: ", error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBar;
