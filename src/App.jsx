import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import BeerDetails from "./components/BeerDetails";
import NewBeerForm from "./components/NewBeerForm";
import axios from "axios";
const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function App() {
  const [beers, setBeers] = useState([]);
  const [fetching, setFetching] = useState(true);

  const fetchBeers = async () => {
    try {
      const response = await axios.get(apiURL);
      setBeers(response.data);
      setFetching(false);
    } catch (error) {
      console.log("There was an error fetching the data: ", error);
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {fetching && (
        <>
          <Skeleton />
        </>
      )}
      {!fetching && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<AllBeers beers={beers} setBeers={setBeers} />} />
          <Route path="/beers/:beerID" element={<BeerDetails beers={beers} />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/add-beer" element={<NewBeerForm />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      )}
    </div>
  );
}

export default App;
