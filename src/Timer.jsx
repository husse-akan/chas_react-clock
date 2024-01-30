import React, { useState, useEffect } from "react";
const Timer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [seconds]);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return (
    <div>
      <h2>Timer</h2>
      <p>{`${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds}`}</p>
    </div>
  );
};
export default Timer;
