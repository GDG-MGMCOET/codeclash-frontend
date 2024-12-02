import React, { useState, useEffect } from "react";

function changeTime(now) {
  const targetDate = new Date("2024-12-02T13:45:00");
  const diff = targetDate - now;

  return [
    Math.floor(diff / (1000 * 60 * 60 * 24)),
    Math.floor((diff / (1000 * 60 * 60)) % 24),
    Math.floor((diff / (1000 * 60)) % 60),
  ];
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const [days, hours, minutes] = changeTime(new Date());
    setTimeLeft({
      days: days,
      hours: hours,
      minutes: minutes,
    });
    const interval = setInterval(() => {
      if (days <= 0 && hours <= 0 && minutes <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        clearInterval(interval);
      }
      const [currentDay, currentHour, currentMinutes] = changeTime(new Date());
      setTimeLeft({
        days: currentDay,
        hours: currentHour,
        minutes: currentMinutes,
      });
    }, 9999000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex select-none flex-row items-center justify-center gap-4 text-center font-mono">
      <div>
        <h2 className="w-16 rounded-xl bg-gray-800 px-3 py-2 text-3xl text-white sm:w-20 sm:text-4xl md:text-5xl">
          0
        </h2>
        <p className="text-accent">Days</p>
      </div>
      <div>
        <h2 className="w-16 rounded-xl bg-gray-800 px-3 py-2 text-3xl text-white sm:w-20 sm:text-4xl md:text-5xl">
          0
        </h2>
        <p className="text-accent">Hours</p>
      </div>
      <div>
        <h2 className="w-16 rounded-xl bg-gray-800 px-3 py-2 text-3xl text-white sm:w-20 sm:text-4xl md:text-5xl">
          0
        </h2>
        <p className="text-accent">Minutes</p>
      </div>
    </div>
  );
}
