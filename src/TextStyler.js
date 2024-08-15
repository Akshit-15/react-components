import React, { useState } from "react";

const ChangeTextStyle = () => {
  // State to manage the text style (normal or italic)
  const [isItalic, setIsItalic] = useState(false);

  // Function to toggle between italic and normal
  const toggleStyle = () => {
    setIsItalic(!isItalic);
  };

  return (
    <div>
      <p style={{ fontStyle: isItalic ? "italic" : "normal" }}>
        Click to change the style.
      </p>
      <button onClick={toggleStyle}>{isItalic ? "Normal" : "Italic"}</button>
    </div>
  );
};

export default ChangeTextStyle;
