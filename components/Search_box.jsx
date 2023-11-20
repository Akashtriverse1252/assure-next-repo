"use client";
import React, { useState, useEffect, useRef } from "react";
// import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { Typeahead } from "react-bootstrap-typeahead";
// import "react-bootstrap-typeahead/css/Typeahead.css";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, IconButton } from "@mui/material";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([2]);
  const [selected, setSelected] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (query.trim() !== "") {
      fetch(`http://127.0.0.1/NS-arcus/keywords_api12.php?searchWord=${query}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "No keywords found for the given search word") {
            // Handle the case where no keywords are found
            setSuggestions([]);
          } else {
            // Update suggestions if keywords are found
            setSuggestions(data.keywords);
          }
        })
        .catch((error) => {
          console.error("Error fetching data from the API", error);
        });
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleInputChange = (query) => {
    setQuery(query);
  };

  const handleSuggestionSelect = (selected) => {
    if (selected === undefined || selected === null) {
      return null;
    } else {
      setSelected(selected);
      console.log("this is the selected data", selected);
      if (selected.length !== 0) {
        router.push(`/search/${encodeURIComponent(selected[0])}`);
      }
    }
  };

  return (
    <>
      <Typeahead
        id="searchTypeahead"
        options={suggestions}
        onInputChange={handleInputChange}
        onChange={handleSuggestionSelect}
        placeholder="Find Your Package/Test/Scan"
        selected={selected}
        minLength={2}
        clearButton={true}
        maxResults={10}
        highlightOnlyResult={true}
      />
    </>
  );
};

export default SearchBar;
