import React from "react";
import { useTicketsCountdown } from "./useTicketsCountdown";

function TicketsCountdownOverlay() {
  const timeLeft = useTicketsCountdown();

  // Don't render if countdown is over
  if (!timeLeft) return null;

  return (
    <>
      {/* Blur overlay when countdown is active */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-30"></div>

      {/* Countdown Overlay */}
      <div className="absolute inset-0 z-50 flex items-center justify-center">
        <div className="container mx-auto max-w-5xl text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight text-white">
            Tickets Will
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Release On
            </span>
          </h2>

          <p className="mt-5 md:mt-6 text-base sm:text-lg md:text-2xl tracking-widest text-amber-400 font-semibold">
            March 8 • 7:00 PM
          </p>

          {/* Countdown Timer */}
          <div className="mt-12 md:mt-14 grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: String(timeLeft.hours).padStart(2, "0") },
              { label: "Minutes", value: String(timeLeft.minutes).padStart(2, "0") },
              { label: "Seconds", value: String(timeLeft.seconds).padStart(2, "0") },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 backdrop-blur-lg shadow-lg hover:shadow-amber-500/20 transition-all"
              >
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-amber-400">
                  {item.value}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-gray-400 mt-1 md:mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketsCountdownOverlay;
