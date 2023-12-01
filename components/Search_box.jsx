"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query.trim() !== "") {
          const response = await axios.get(
            // `http://127.0.0.1/assure_api/keyword_json_api.php?searchWord=${query}`
            `https://www.assurepathlabs.com/api/new-api/keyword_json_api.php?searchWord=${query}`
          );
          console.log("this is the api data", response.data.keywords);

          if (response.data.keywords.length === 0) {
            setSuggestions([]);
          } else {
            setSuggestions(response.data.keywords);
          }
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Error fetching data from the API", error);
        setSuggestions([]); // Set suggestions to an empty array in case of an error
      }
    };

    fetchData();
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
        placeholder="Search Your Test/Package"
        selected={selected}
        minLength={1}
        clearButton={true}
        maxResults={10}
        highlightOnlyResult={true}
        autoFocus
        filterBy={() => true}
        additionalResultsText="Show more"
        paginationText="Load more..."
      />
    </>
  );
};

export default SearchBar;
