import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchBarRef = useRef(null);

  // Sample data for suggestions, you can replace this with your data source
  const data = ["Books", "Study", "test", "home", "mentorship"];

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter suggestions based on the query
    if (value.length > 0) {
      const filteredSuggestions = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      if (filteredSuggestions.length === 0) {
        history.push("/404");
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setSuggestions([]); // Close the suggestions list
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={searchBarRef}>
      <div className={styles.searchBox}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          value={query}
          onChange={handleChange}
          placeholder="Search..."
        />
      </div>
      {suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((suggestion, index) => (
            <li key={index} className={styles.suggestionItem}>
              <Link to={`/${suggestion.toLowerCase()}`}>{suggestion}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
