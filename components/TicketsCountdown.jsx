import React from "react";

// Accept timeLeft as a prop from the parent
function TicketsCountdown({ timeLeft }) {
    return (
        <section id="Tickets" className="relative py-20 md:py-24 px-4 md:px-6 bg-[#050816] text-white overflow-hidden">
            <div className="container mx-auto max-w-5xl text-center">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight">
                    Tickets Will <br />
                    <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                        Release On
                    </span>
                </h2>

                <p className="mt-5 md:mt-6 text-base sm:text-lg md:text-2xl tracking-widest text-amber-400 font-semibold">
                    March 13 • 12:00 Noon
                </p>

                <div className="mt-12 md:mt-14 grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
                    {[
                        { label: "Days", value: timeLeft.days },
                        { label: "Hours", value: String(timeLeft.hours).padStart(2, "0") },
                        { label: "Minutes", value: String(timeLeft.minutes).padStart(2, "0") },
                        { label: "Seconds", value: String(timeLeft.seconds).padStart(2, "0") },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 backdrop-blur-lg shadow-lg"
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
        </section>
    );
}

export default TicketsCountdown;