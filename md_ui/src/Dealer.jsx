function Dealer({
  name,
  logo,
  liscene_number,
  email,
  city,
  rating_score,
  rating_count,
  popularity,
}) {
  return (
    <li>
      <div
        style={{
          width: "500px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "10px",
          }}
        >
          <img src={logo} width="64px" height="64px" />
          <div
            style={{
              lineHeight: 0.5,
              marginTop: "-15px",
              textAlign: "right",
            }}
          >
            <h2>{name}</h2>
            <p>{liscene_number}</p>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              marginBottom: "-50px",
            }}
          >
            <p style={{ fontWeight: "bold", fontSize: "24px" }}>{city}</p>
            <p>{popularity}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <i>{email}</i>
            <p>
              {rating_score} ({rating_count})
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Dealer;
