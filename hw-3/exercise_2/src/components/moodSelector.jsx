const MoodSelector = ({ setCurrentMood }) => {
  return (
    <div>
      <button onClick={() => setCurrentMood("Happy")}>Happy</button>
      <button onClick={() => setCurrentMood("Sad")}>Sad</button>
      <button onClick={() => setCurrentMood("Excited")}>Excited</button>
      <button onClick={() => setCurrentMood("Tired")}>Tired</button>
    </div>
  );
};

export default MoodSelector;
