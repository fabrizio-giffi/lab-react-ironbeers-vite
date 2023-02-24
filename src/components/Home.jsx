import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function Home() {
  return (
    <main>
      <Link to="/beers">
        <div className="home-ctn">
          <img src={beers} alt="All the beers" />
          <h2>All Beers</h2>
          <p>Browse our catalogue to find the beer that matches your taste.</p>
        </div>
      </Link>
      <Link to="/random-beer">
        <div className="home-ctn">
          <img src={randomBeer} alt="Random beer" />
          <h2>Random Beer</h2>
          <p>Fancy a beer but feeling uninspired? Take a chance on a random beer from our catalogue!</p>
        </div>
      </Link>
      <Link to="/add-beer">
        <div className="home-ctn">
          <img src={newBeer} alt="New beer" />
          <h2>New beer</h2>
          <p>Join the brewer's club and start making your own beer!</p>
        </div>
      </Link>
    </main>
  );
}

export default Home;
