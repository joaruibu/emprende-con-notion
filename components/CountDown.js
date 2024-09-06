import React, { useState, useEffect } from "react";

const CountdownTimer = ({ timer, setIsTimeOver }) => {
  // Initial time in seconds (1 hour)
  const initialTime = timer * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);

          console.log("Countdown complete!");
          setIsTimeOver(true);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="flex space-x-4 pt-4 justify-center font-playfair text-white text-3xl">
      <div className=" h-20 w-20 grid place-content-center  rounded  bg-terracotta">
        <span>{` ${minutes}m `}</span>
      </div>
      <div className=" h-20 w-20 grid place-content-center rounded  bg-terracotta">
        <span>{` ${seconds}s `}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
