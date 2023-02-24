import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import "../beers.css";
import Beer from "./Beer";

function AllBeers({ beers, setBeers }) {
  const [query, setQuery] = useState("");

  const apiURL = `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`;

  const searchDB = async () => {
    try {
      const response = await axios.get(apiURL);
      setBeers(response.data);
    } catch (error) {
      console.log("There was an error fetching the data: ", error);
    }
  };

  useEffect(() => {
    searchDB();
  }, [query]);

  return (
    <>
      <label>
        Search
        <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
      </label>
      <ul>
        {beers.map((beer) => {
          return (
            <Fragment key={beer._id}>
              <li>
                <Beer beer={beer} />
              </li>
              <hr />
            </Fragment>
          );
        })}
      </ul>
    </>
  );
}

export default AllBeers;
