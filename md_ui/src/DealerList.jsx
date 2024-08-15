function DealerList(props) {
  return (
    <div>
      <h1>Motor Dealers</h1>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          border: "1px solid #ddd",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        {props.children}
      </ul>
    </div>
  );
}

export default DealerList;
