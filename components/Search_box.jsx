"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Typeahead } from "react-bootstrap-typeahead";
import keywordData from "../Data/test_data.json";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [selected, setSelected] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (query.trim() !== "") {
      fetch(
        `https://www.assurepathlabs.com/api/new-api/keyword_json_api.php?searchWord=${query}`
      )
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
  const nameToSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const handleSuggestionSelect = (selected) => {
    if (selected === undefined || selected === null) {
      return null;
    } else {
      setSelected(selected);
      console.log("this is the selected data", selected);
      if (selected.length !== 0) {
        const slug = nameToSlug(selected[0]);
        router.push(`/search/${encodeURIComponent(slug)}`);
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
        placeholder="Search Your Package/Test"
        selected={selected}
        minLength={2}
        clearButton={true}
        maxResults={10}
        highlightOnlyResult={true}
        autoFocus
      />
    </>
  );
};

export default SearchBar;
