import React, { useState } from "react";
import MoodDisplay from "./components/mooddisplay";
import MoodSelector from "./components/moodSelector";
const moodEmojiMap = {
  Happy: "😊",
  Sad: "😢",
  Excited: "🤩",
  Tired: "😴",
};

const App = () => {
  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      <h1>Mood Tracker</h1>
      <MoodSelector setCurrentMood={setCurrentMood} />
      <MoodDisplay currentMood={currentMood} moodEmojiMap={moodEmojiMap} />
    </div>
  );
};

export default App;
