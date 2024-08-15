import "./App.css";
import { useState, useEffect } from "react";
import DealerList from "./DealerList";
import Dealer from "./Dealer";
import SearchForm from "./SearchForm";
import Loader from "./Loader";

function App() {
  const api = import.meta.env.VITE_API;
  const [dealers, setDealers] = useState([]);
  useEffect(() => {
    fetch(`${api}/dealers`)
      .then(res => res.json())
      .then(data => setDealers(data["results"]));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <SearchForm />
      {
        dealers.length === 0 ?
        <Loader isLoading={dealers.length === 0} /> :
        <DealerList>
          {dealers.map((dealer) => {
            return <Dealer key={dealer.id} {...dealer} />;
          })}
        </DealerList>
      }
    </div>
  );
}

export default App;
