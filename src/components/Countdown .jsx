import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-02T13:45:00");
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
    <div className="flex select-none flex-row items-center justify-center gap-4 text-center font-mono">
      <div>
        <h2 className="w-16 rounded-xl bg-gray-800 px-3 py-2 text-3xl text-white sm:w-20 sm:text-4xl md:text-5xl">
          {timeLeft.days}
        </h2>
        <p className="text-accent">Days</p>
      </div>
      <div>
        <h2 className="w-16 rounded-xl bg-gray-800 px-3 py-2 text-3xl text-white sm:w-20 sm:text-4xl md:text-5xl">
          {timeLeft.hours}
        </h2>
        <p className="text-accent">Hours</p>
      </div>
      <div>
        <h2 className="w-16 rounded-xl bg-gray-800 px-3 py-2 text-3xl text-white sm:w-20 sm:text-4xl md:text-5xl">
          {timeLeft.minutes}
        </h2>
        <p className="text-accent">Minutes</p>
      </div>
    </div>
  );
}
