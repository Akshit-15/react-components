import React, { useState, useEffect } from "react";

function WeatherApi() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://www.metaweather.com/api/London/44418/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherApi;
