import React, { useEffect } from "react";

const SuccessComponent = () => {
  useEffect(() => {
    alert("Login successful!");
  }, []);

  return (
    <div>
      <h2>Welcome! You are logged in.</h2>
    </div>
  );
};

export default SuccessComponent;
