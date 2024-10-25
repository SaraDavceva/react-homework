import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters } from "../actions/characterAction";
import CharacterCard from "../components/characterCard";
import "./characterList.css";

const CharactersList = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => dispatch(setCharacters(data.results)));
  }, [dispatch]);

  return (
    <div className="characters-container">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharactersList;
