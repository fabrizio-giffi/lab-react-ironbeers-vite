import axios from "axios";
import { useState } from "react";
import "../beerForm.css";
const apiURL = "https://ih-beers-api2.herokuapp.com/beers/new";

function NewBeerForm() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");
  const [isSuccesful, setIsSuccesful] = useState(false);

  const postData = async (newBeer) => {
    try {
      await axios.post(apiURL, newBeer);
      setIsSuccesful(true);
    } catch (error) {
      console.log("There was an error creating the new item.", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSuccesful(false);
    const newBeerFromForm = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };
    postData(newBeerFromForm);

    setName("");
    setTagline("");
    setDescription("");
    setFirst_brewed("");
    setBrewers_tips("");
    setAttenuation_level(0);
    setContributed_by("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Tagline
          <input type="text" value={tagline} onChange={(event) => setTagline(event.target.value)} />
        </label>
        <label>
          Description
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <label>
          First Brewed
          <input type="text" value={first_brewed} onChange={(event) => setFirst_brewed(event.target.value)} />
        </label>
        <label>
          Brewer's Tips
          <input type="text" value={brewers_tips} onChange={(event) => setBrewers_tips(event.target.value)} />
        </label>
        <label>
          Attenuation Level
          <input
            type="number"
            value={attenuation_level}
            onChange={(event) => setAttenuation_level(event.target.value)}
          />
        </label>
        <label>
          Contributed By
          <input type="text" value={contributed_by} onChange={(event) => setContributed_by(event.target.value)} />
        </label>
        <button type="submit">Add your beer</button>
      </form>
      {isSuccesful && <p>Your beer has been succesfully added to the database!</p>}
    </>
  );
}

export default NewBeerForm;
