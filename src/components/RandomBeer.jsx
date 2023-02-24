import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
const apiURL = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeer() {
  const [randBeer, setRandBeer] = useState([]);

  const fetchRandom = async () => {
    try {
      const response = await axios.get(apiURL);
      setRandBeer([...randBeer, response.data]);
    } catch (error) {
      console.log("There was an error fetching the data: ", error)
    }
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  return <>{randBeer.length > 0 && <Navigate to={`/beers/${randBeer[0]._id}`} />}</>;
}

export default RandomBeer;
