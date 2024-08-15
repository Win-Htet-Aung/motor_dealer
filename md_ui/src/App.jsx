import "./App.css";
import { useState, useEffect, useCallback } from "react";
import DealerList from "./DealerList";
import Dealer from "./Dealer";
import SearchForm from "./SearchForm";
import Loader from "./Loader";

function App() {
  const api = import.meta.env.VITE_API;
  const [dealers, setDealers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [next, setNext] = useState(null);

  const fetchData = useCallback(async () => {
    if (isLoading) return;
    console.log("fetching more", next);
    setIsLoading(true);
    fetch(next)
      .then(res => res.json())
      .then(data => {
        setDealers((prevDealers) => [...prevDealers, ...data["results"]])
        setNext(data["next"]);
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  }, [next, isLoading]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      fetch(`${api}/dealers`)
        .then(res => res.json())
        .then(data => {
          setDealers(data["results"]);
          setNext(data["next"]);
      });
      setIsLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <SearchForm setDealers={setDealers} setNext={setNext} />
      {
        isLoading ?
        <Loader isLoading={isLoading} /> :
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
