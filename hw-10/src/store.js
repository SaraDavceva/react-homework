import { createStore } from "redux";
import { guessingGameReducer } from "./reducers/guessingGameReducer";

export const store = createStore(guessingGameReducer);
