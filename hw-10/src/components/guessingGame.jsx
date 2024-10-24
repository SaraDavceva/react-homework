import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeGuess, startNewGame } from "../actions/guessingGameAction";
import "./guessingGame.css";

const GuessingGame = () => {
  const [currentGuess, setCurrentGuess] = useState("");
  const { guess, attempts, feedback } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleGuess = () => {
    dispatch(makeGuess(Number(currentGuess)));
    setCurrentGuess("");
  };

  const newGame = () => {
    dispatch(startNewGame());
  };

  return (
    <div className="game-container">
      <h1>The Guessing Game</h1>
      <p className="game-description">Guess a number between 1 and 100!</p>
      <input
        type="number"
        placeholder="Guess a number"
        value={currentGuess}
        onChange={(event) => setCurrentGuess(event.target.value)}
      />

      <button type="submit" className="submit-button" onClick={handleGuess}>
        Submit Your Guess
      </button>
      <p>
        <strong>Your Guess Is:</strong> {feedback}
      </p>
      <p>
        <strong>Number Of Your Attempts:</strong> {attempts}
      </p>
      <p>
        <strong>Your Guesses:</strong> {guess.join(", ")}
      </p>

      <button className="new-game-button" onClick={newGame}>
        Start New Game
      </button>
    </div>
  );
};

export default GuessingGame;
