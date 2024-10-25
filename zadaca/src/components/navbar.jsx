import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchResults } from "../actions/characterAction";
import "./navbar.css";
const Navbar = () => {
  const dispatch = useDispatch();
  const [character, setCharacter] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchResults(character));
  };

  return (
    <div className="nav-container">
      <div className="links">
        <Link>Characters</Link>
        <Link>Characters</Link>
      </div>

      <div className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search characters..."
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
        />
        <button type="submit">Search</button>
      </div>
    </div>
  );
};

export default Navbar;
