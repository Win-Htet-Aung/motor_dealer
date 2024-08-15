function SearchForm(params) {
  return (
    <div style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '400px',
      }}
    >
      <h1>Search</h1>
      <form action="" style={{
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
        <select name="city">
          <option value="london">London</option>
          <option value="newyork">New York</option>
          <option value="paris">Paris</option>
        </select> <br />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
