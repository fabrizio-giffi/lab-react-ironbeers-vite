import { Link } from "react-router-dom";

function Beer({ beer }) {
  return (
    <Link to={`/beers/${beer._id}`} className="beer_data">
      <img src={beer.image_url} alt={beer.name} />
      <div>
        <h3>{beer.name}</h3>
        <h4>{beer.tagline}</h4>
        <p>
          <strong>Created by: </strong>
          {beer.contributed_by}
        </p>
      </div>
    </Link>
  );
}

export default Beer;
