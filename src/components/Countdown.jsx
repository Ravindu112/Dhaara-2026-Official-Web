import { useState, useEffect } from 'react';
import logo from '../assets/logo26.svg';

const Countdown = ({ targetDate = '2026-04-22' }) => {
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

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto text-center">
      
        <h1 className="text-5xl md:text-9xl font-black uppercase leading-[0.9] tracking-tighter mb-4">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,160,0,0.4)]">
        DHAARA'26
        </span>
        </h1>
        <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight text-white mb-12">
           <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
        Nelum Pokuna Mahinda Rajapaksha Theatre
           </span>
           <span className="text-gray-300">, Colombo 07</span>
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {/* Days */}
          <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 min-w-[100px] md:min-w-[130px] border border-white/30">
            <span className="text-4xl md:text-6xl font-bold text-white mb-2">
              {timeLeft.days}
            </span>
            <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wider">Days</span>
          </div>
          
          {/* Hours */}
          <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 min-w-[100px] md:min-w-[130px] border border-white/30">
            <span className="text-4xl md:text-6xl font-bold text-white mb-2">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wider">Hours</span>
          </div>
          
          {/* Minutes */}
          <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 min-w-[100px] md:min-w-[130px] border border-white/30">
            <span className="text-4xl md:text-6xl font-bold text-white mb-2">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wider">Minutes</span>
          </div>
          
          {/* Seconds */}
          <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 min-w-[100px] md:min-w-[130px] border border-white/30">
            <span className="text-4xl md:text-6xl font-bold text-white mb-2">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wider">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
