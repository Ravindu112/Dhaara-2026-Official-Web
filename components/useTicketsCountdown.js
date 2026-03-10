"use client";
import { useEffect, useState } from "react";

export const useTicketsCountdown = () => {
  // 🎯 Release Date (March 11, 2026 - 9:00 AM)
  const releaseDate = new Date("March 12, 2026 09:00:00").getTime();

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

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeRemaining());
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return mounted ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 };
};
