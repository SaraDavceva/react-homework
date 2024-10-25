import { Link } from "react-router-dom";
import "./characterCard.css";
const CharacterCard = ({ character }) => {
  return (
    <div className="card-container">
      <img src={character.image} alt="character's img" />
      <p>{character.name}</p>
      <p>Status: {character.status} </p>
      <button>Add To Favorite</button>
      <button>
        <Link className="details-link" to={`/character/${character.id}`}>
          More Details
        </Link>
      </button>
    </div>
  );
};

export default CharacterCard;
