import React, { useState } from "react";

const ThirdCharacterDisplay = () => {
  // State to hold the content of the textarea
  const [text, setText] = useState("");

  // Function to get every third character
  const getEveryThirdCharacter = (str) => {
    return str
      .split("") // Split the string into an array of characters
      .filter((_, index) => (index + 1) % 3 === 0) // Keep only every third character (1-based index)
      .join(""); // Join the characters back into a string
  };

  // Handle textarea change event
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        rows="10"
        cols="30"
        placeholder="Type here..."
      />
      <div style={{ marginTop: "20px" }}>
        <h3>Every Third Character:</h3>
        <p>{getEveryThirdCharacter(text)}</p>
      </div>
    </div>
  );
};

export default ThirdCharacterDisplay;
