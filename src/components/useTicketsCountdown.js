import { useEffect, useState } from "react";

export const useTicketsCountdown = () => {
  // 🎯 Release Date (March 10, 2026 - 7:00 PM)
  const releaseDate = new Date("March 10, 2026 19:00:00").getTime();

  const getTimeRemaining = () => {
    const now = new Date().getTime();
    const distance = releaseDate - now;

    if (distance <= 0) {
      return null;
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    setTimeLeft(getTimeRemaining());
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};
