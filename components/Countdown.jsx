"use client";
import { useState, useEffect } from 'react';

const Countdown = ({ targetDate = '2026-04-24T18:00:00+05:30' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate countdown timer - updates every second
  useEffect(() => {
    const calculateTimeLeft = () => {
      const concertDate = new Date(targetDate);
      if (Number.isNaN(concertDate.getTime())) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const now = new Date();
      const difference = concertDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // Concert has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Calculate immediately
    const timer = setInterval(calculateTimeLeft, 1000); // Update every second
    return () => clearInterval(timer);
  }, [targetDate]);

  const isEnded = new Date(targetDate).getTime() <= Date.now();

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto text-center">

        <h1 className="text-5xl md:text-9xl font-black uppercase leading-[0.9] tracking-tighter mb-4">
          <span className="inline-block pr-2 md:pr-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,160,0,0.4)]">
            DHAARA'26
          </span>
        </h1>
        <h3 className="text-1xl md:text-2xl font-semibold uppercase tracking-tight text-white mb-12">
          <span className="text-gray-300">Nelum Pokuna Mahinda Rajapaksha Indoor Theatre, Colombo 07</span>
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {/* Days */}
          <div className="p-[2px] bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 rounded-xl min-w-[100px] md:min-w-[130px] shadow-lg hover:shadow-amber-500/30 transition-all">
            <div className="flex flex-col items-center bg-slate-950 backdrop-blur-sm rounded-xl p-4 md:p-6 h-full">
              <span className="text-4xl md:text-6xl font-bold text-white mb-2">
                {timeLeft.days}
              </span>
              <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wider">Days</span>
            </div>
          </div>

          {/* Hours */}
          <div className="p-[2px] bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 rounded-xl min-w-[100px] md:min-w-[130px] shadow-lg hover:shadow-amber-500/30 transition-all">
            <div className="flex flex-col items-center bg-slate-950 backdrop-blur-sm rounded-xl p-4 md:p-6 h-full">
              <span className="text-4xl md:text-6xl font-bold text-white mb-2">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wider">Hours</span>
            </div>
          </div>

          {/* Minutes */}
          <div className="p-[2px] bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 rounded-xl min-w-[100px] md:min-w-[130px] shadow-lg hover:shadow-amber-500/30 transition-all">
            <div className="flex flex-col items-center bg-slate-950 backdrop-blur-sm rounded-xl p-4 md:p-6 h-full">
              <span className="text-4xl md:text-6xl font-bold text-white mb-2">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wider">Minutes</span>
            </div>
          </div>

          {/* Seconds */}
          <div className="p-[2px] bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 rounded-xl min-w-[100px] md:min-w-[130px] shadow-lg hover:shadow-amber-500/30 transition-all">
            <div className="flex flex-col items-center bg-slate-950 backdrop-blur-sm rounded-xl p-4 md:p-6 h-full">
              <span className="text-4xl md:text-6xl font-bold text-white mb-2">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wider">Seconds</span>
            </div>
          </div>
        </div>
        {isEnded && (
          <div className="mt-8">
            <p className="text-lg md:text-2xl font-semibold text-amber-400">
              DHAARA'26 successfully concluded. Thank you so much for joining us!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Countdown;
