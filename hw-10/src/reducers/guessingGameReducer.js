import { MAKE_GUESS, START_NEW_GAME } from "../actions/guessingGameAction";

export const initialState = {
  targetNumber: Math.floor(Math.random() * 100) + 1,
  guess: [],
  attempts: 0,
  feedback: "",
};

export const guessingGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_GUESS:
      const guess = action.payload;
      let feedback = "";

      if (guess > state.targetNumber) {
        feedback = "Too high";
      } else if (guess < state.targetNumber) {
        feedback = "Too low";
      } else {
        feedback = "Correct!";
      }
      return {
        ...state,
        guess: [...state.guess, guess],
        attempts: state.attempts + 1,
        feedback,
      };
    case START_NEW_GAME:
      return {
        ...state,
        targetNumber: Math.floor(Math.random() * 100) + 1,
        guess: [],
        attempts: 0,
        feedback: "",
      };
    default:
      return state;
  }
};
