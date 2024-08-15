import "./App.css";
import { useState } from "react";
import DealerList from "./DealerList";
import Dealer from "./Dealer";
import SearchForm from "./SearchForm";

function App() {
  const [dealers, setDealers] = useState([
    {
      id: 1,
      name: "Silva Group",
      logo: "http://localhost:8000/media/dealers/huawei.png",
      liscene_number: "FaBE-5299",
      email: "silvagrp@example.com",
      city: "London",
      rating_score: 4.5,
      rating_count: 123,
      popularity: 1022,
    },
    {
      id: 2,
      name: "Cars Master",
      logo: "http://localhost:8000/media/dealers/hubspot.png",
      liscene_number: "KKEs-3271",
      email: "carmaster@example.com",
      city: "Bangkok",
      rating_score: 7.5,
      rating_count: 323,
      popularity: 1122,
    },
  ]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <SearchForm />
      <DealerList>
        {dealers.map((dealer) => {
          return <Dealer key={dealer.id} {...dealer} />;
        })}
      </DealerList>
    </div>
  );
}

export default App;
