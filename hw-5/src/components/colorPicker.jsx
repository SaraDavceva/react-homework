import { useState } from "react";

const ColorPicker = () => {
  const initialColors = ["red", "blue", "green", "yellow"];

  const [colors, setColors] = useState(initialColors);
  const [newColor, setNewColor] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [error, setError] = useState("");

  const newColorButton = (color) => {
    const newElement = document.createElement("div");
    newElement.style.color = color;
    return newElement.style.color !== "";
  };
  const handleInputColor = (event) => {
    setNewColor(event.target.value);
  };
  const handleAddColor = () => {
    if (!newColorButton(newColor)) {
      setError("Invalid color name or hex code!");
      return;
    }
    if (colors.includes(newColor)) {
      setError("Color already exists!");
      return;
    }

    setColors([...colors, newColor]);
    setNewColor(currentColor);
  };

  const handleColorClick = (color) => {
    setCurrentColor(color);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "700px",
      }}
    >
      <p
        style={{
          backgroundColor: currentColor,
          border: "1px solid black",
          width: "700px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          borderRadius: "5px",
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        Color: {currentColor}
      </p>

      <div>
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => handleColorClick(color)}
            style={{
              backgroundColor: color,
              width: "100px",
              height: "70px",
              margin: "5px",
              fontSize: "18px",
              borderRadius: "5px",
            }}
          >
            {color}
          </button>
        ))}
      </div>
      <div>
        <br />
        <input
          type="text"
          onChange={handleInputColor}
          style={{ width: "200px", height: "20px" }}
        />
        <br />
        <br />
        <button
          onClick={handleAddColor}
          style={{ width: "120px", height: "30px" }}
        >
          Add Color
        </button>
        <br />
      </div>

      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
    </div>
  );
};

export default ColorPicker;
