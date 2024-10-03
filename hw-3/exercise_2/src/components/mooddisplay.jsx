import React from "react";

const MoodDisplay = ({ currentMood, moodEmojiMap }) => {
  return (
    <div>
      <h2>
        Current Mood: {currentMood} {moodEmojiMap[currentMood]}
      </h2>
    </div>
  );
};

export default MoodDisplay;
