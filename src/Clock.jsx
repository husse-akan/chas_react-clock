import React, { useState, useEffect } from "react";
const Clock = ({ city, timeZone }) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString("en-US", { timeZone }));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone]);
  return (
    <div>
      <h2>{city}</h2>
      <p>{currentTime}</p>
    </div>
  );
};
export default Clock;
