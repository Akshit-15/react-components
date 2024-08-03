import React, { useState, useEffect } from "react";

function IntervalComponent() {
  const [delay, setDelay] = useState(100);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, delay);

    return () => clearInterval(interval); // Cleanup previous interval on delay change
  }, [delay]); // Effect depends on 'delay'

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setDelay(20)}>Set delay to 20ms</button>
      <button onClick={() => setDelay(500)}>Set delay to 500ms</button>
      <button onClick={() => setDelay(2000)}>Set delay to 2000ms</button>
    </div>
  );
}

export default IntervalComponent;
