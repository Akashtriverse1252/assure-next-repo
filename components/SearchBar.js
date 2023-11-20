import React, { useState, useRef, useEffect } from "react";
import { TextField, Box } from "@mui/material";
import styles from "../app/page.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SearchIcon from "@mui/icons-material/Search";
import data from "../Data/Keywords.json";
import Search_box from "../components/Search_box";


const SearchBar = () => {
  const [value, setValue] = useState(0);
  const [searchText, setSearchText] = useState(""); // State to store the text entered in the TextField
  const [filteredOptions, setFilteredOptions] = useState([]); // State to store the filtered options
  const [isDropdownVisible, setDropdownVisible] = useState(false); // State to control dropdown visibility
  const textFieldRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const filterOptions = () => {
    if (value === 0) {
      // Filter options for "Test" tab
      const filteredTestOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredOptions(filteredTestOptions);
    } else if (value === 1) {
      // Filter options for "Packages" tab
      const filteredPackageOptions = poptions.filter((poption) =>
        poption.label.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredOptions(filteredPackageOptions);
    }
  };

  const handleTextFieldClick = () => {
    setDropdownVisible(true); // Show the dropdown when the TextField is clicked
  };

  const handleBodyClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // If the click is outside of the dropdown, hide it
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    filterOptions();
  }, [searchText, value]);

  useEffect(() => {
    // Add a click event listener to the body
    document.body.addEventListener("click", handleBodyClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const options = [
    { label: "H PYLORI IgM ANTIBODIES" },
    { label: "QUARDUAPLE MATERNAL SECREEN (QUADRUPLE TEST)" },
    { label: "17-ALPHA-HYDROXY PROGESTERONE" },
    { label: "24 HOURS URINE PROTEIN ELECTROPHORESIS" },
    { label: "ADENOSINE DEAMINASE" },
    { label: "ALANINE AMINOTRANSFERASE ( ALT ), SGPT (LIVER)" },
    { label: "ALBUMIN (KIDNEY, LIVER)" },
    { label: "ALBUMIN GLOBULIN A/G RATIO" },
  ];

  const poptions = [
    { label: "Assure Complete Wellness" },
    { label: "Senior Citizen Package" },
    { label: "Basic Allergy Package" },
  ];

  return (
    <div className="col-12 pull-left position-relative">
      <div className="header_search" onClick={(()=>{setDropdownVisible(true)})} >
      <Search_box/>
      </div>
      {/* <TextField
        label="Find your package/test/scan"
        variant="outlined"
        className={styles.inputmodified}
        fullWidth
        onChange={handleInputChange}
        ref={textFieldRef}
        onClick={handleTextFieldClick}
        InputProps={{
          endAdornment: (
            <div className="searchbutton">
              <SearchIcon color="action" />
            </div>
          ),
        }}
      /> */}
      {isDropdownVisible && (
        <div className="dropdowntab pb-2 col-12" ref={dropdownRef}>
          <Box className="mb-3 grey-background border-bottom col-12">
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Test" />
              <Tab label="Packages" />
            </Tabs>
          </Box>
          <div className="listdata col-12 float-start">
            {filteredOptions.length > 0 ? (
              <ul>
                {filteredOptions.map((option, index) => (
                  <li key={index}>{option.label}</li>
                ))}
              </ul>
            ) : (
              <ul>
                <li className="border-0 text-center opacity-50 text-uppercase">
                  No matching results found.
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
