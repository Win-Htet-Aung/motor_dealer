import Select from "react-select";
import { useState, useEffect } from "react";

function SearchForm({setDealers}) {
  const api = import.meta.env.VITE_API;
  const [cities, setCities] = useState([]);
  const [searchName, setSearchName] = useState("");
  const handleNameChange = (event) => {
    setSearchName(event.target.value);
  };
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
  const search = (name, selectedCities) => {
    let cities = selectedCities.map((city) => city.value).join(",").replaceAll(" ", "+");
    const url = `${api}/dealers?search=${name}&cities=${cities}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDealers(data["results"]));
  }
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
        <input type="text" style={{ height: "35px", paddingLeft: "10px" }}
          value={searchName}
          placeholder="Name"
          onChange={handleNameChange}
        /> <br />
        <label>City</label> <br />
        <Select
          options={cities}
          value={selectedOptions}
          onChange={(selectedItems) => {
            setSelectedOptions(selectedItems);
          }}
          isMulti={true}
        />
        <button
          style={{ height: "35px", marginTop: "10px" }}
          onClick={() => {
            search(searchName, selectedOptions);
            setSearchName("");
            setSelectedOptions([]);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
