import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-11-28T02:00:00"); // Example date
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row justify-center items-center space-x-6 text-center text-white mt-6 mb-3">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl bg-gray-800 text-white px-4 py-2">{timeLeft.days}</h2>
        <p className="text-accent">Days</p>
      </div>
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl bg-gray-800 text-white px-4 py-2">{timeLeft.hours}</h2>
        <p className="text-accent">Hours</p>
      </div>
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl bg-gray-800 text-white px-4 py-2">{timeLeft.minutes}</h2>
        <p className="text-accent">Minutes</p>
      </div>
    </div>
  );
};

export default Countdown;
