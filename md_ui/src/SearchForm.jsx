import Select from "react-select";
import { useState, useEffect } from "react";

function SearchForm(params) {
  const api = import.meta.env.VITE_API;
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch(`${api}/dealers/cities`)
      .then((res) => res.json())
      .then((data) =>
        setCities(
          data["cities"].map((city) => ({
            value: city["name"],
            label: city["name"],
          }))
        )
      );
  }, []);
  const [selectedOptions, setSelectedOptions] = useState([]);
  return (
    <div
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "400px",
      }}
    >
      <h1>Search</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: 10,
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <label>Name</label> <br />
        <input type="text" style={{ height: "35px" }} /> <br />
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
          style={{ height: "35px", marginTop: "10px" }}
          onClick={() => {
            console.log("final cities", selectedOptions);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
