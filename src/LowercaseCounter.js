import React, { useState } from "react";

const LowercaseCounter = () => {
  // State to hold the content of the textarea
  const [text, setText] = useState("");

  // Function to count lowercase letters
  const countLowercaseLetters = (str) => {
    // Regular expression to match all lowercase letters
    const matches = str.match(/[a-z]/g);
    return matches ? matches.length : 0;
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
        <h3>Lowercase Letters Count:</h3>
        <p>{countLowercaseLetters(text)}</p>
      </div>
    </div>
  );
};

export default LowercaseCounter;
