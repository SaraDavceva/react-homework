import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./characterDetails.css";
const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data[0]))
      .catch((error) => console.error(error));
  }, [id]);
  return (
    <div className="details-container">
      <img src={character.image} alt="character's img" />
      <p>{character.name}</p>
      <p>
        <strong>Status:</strong>
        {character.status}
      </p>
      <p>
        <strong>Species:</strong>
        {character.species}
      </p>
      <p>
        <strong>Gender:</strong>
        {character.gender}
      </p>
      <Link className="location-link" to={character.url}>
        See Location
      </Link>
    </div>
  );
};

export default CharacterDetails;
