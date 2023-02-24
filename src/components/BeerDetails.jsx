import { Navigate, useParams } from "react-router-dom";

function BeerDetails({ beers }) {
  const { beerID } = useParams();
  const beerDisplay = beers.filter((beer) => beer._id === beerID)[0];

  return !beerDisplay ? (
    <Navigate to="/404" />
  ) : (
    <div className="beer_details">
      <div className="img_details_ctn">
        <img className="img_details" src={beerDisplay.image_url} alt={beerDisplay.name} />
      </div>
      <hr />
      <div>
        <h3>{beerDisplay.name}</h3>
        <h4>{beerDisplay.tagline}</h4>
        <p>
          <strong>{beerDisplay.first_brewed}</strong>
        </p>
        <h3>{beerDisplay.attenuation_level}</h3>
        <p>{beerDisplay.description}</p>
        <small>{beerDisplay.contributed_by}</small>
      </div>
    </div>
  );
}

export default BeerDetails;
