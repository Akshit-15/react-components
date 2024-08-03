import React, { useRef } from "react";

function UncontrolledForm() {
  // Create a ref to store the input element
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Access the current value of the input field using the ref
    alert(`Submitted name: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
