import Select from "react-select";
import { useState } from "react";

function SearchForm(params) {
  const cities = [
    {value: "London", label: "London"},
    {value: "Bangkok", label: "Bangkok"},
    {value: "New York", label: "New York"},
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  return (
    <div style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '400px',
      }}
    >
      <h1>Search</h1>
      <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: 10,
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <label>Name</label> <br />
        <input type="text" /> <br />
        <label>City</label> <br />
        <Select
          options={cities}
          value={selectedOptions}
          onChange={(selectedItems) => {
            setSelectedOptions(selectedItems);
            console.log("selected ", selectedItems);
            console.log("current state", selectedOptions);
          }}
          isMulti={true}
        />
        <button
          onClick={(e) => {console.log("final cities", selectedOptions)}}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
