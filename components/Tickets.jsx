"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
const ticketImg1 = '/assets/Ticket Images/T1500.svg';
const ticketImg2 = '/assets/Ticket Images/T2000.svg';
const ticketImg3 = '/assets/Ticket Images/T3000.svg';
const ticketImg4 = '/assets/Ticket Images/T5000.svg';


const Tickets = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);


  const ticketData = [
    { label: "Early bird", price: "1500", percentage: 0, status: "Available" },
    { label: "Standard", price: "2000", percentage: 0, status: "Available" },
    { label: "VIP", price: "3000", percentage: 0, status: "Available" },
    { label: "VVIP", price: "5000", percentage: 0, status: "Available" },
  ];

  // Array to map the images to the fan
  const ticketVisuals = [ticketImg4, ticketImg3, ticketImg2, ticketImg1];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Lowered slightly for better mobile trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tickets"
      ref={sectionRef}
      className="relative py-12 md:py-20 px-4 md:px-8 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left Column: Animated Fan Container */}
          <div className={`relative h-[400px] md:h-[600px] flex items-center justify-center order-2 md:order-1 ${isVisible ? 'is-visible' : ''}`}>
            {/* Added w-full and max-w-sm to ensure it doesn't bleed out on mobile */}
            <div className="relative w-full max-w-[235px] md:max-w-[400px] aspect-[3/4]">
              {ticketVisuals.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Ticket tier ${index + 1}`}
                  fill
                  // Added object-contain to prevent cropping
                  className={`ticket-fan-base ticket-${index + 1} drop-shadow-2xl object-contain`}
                  style={{ zIndex: (index + 1) * 10 }}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Pricing Part */}
          <div className="flex flex-col items-center md:items-start space-y-10 order-1 md:order-2">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter">
                BOOK YOUR <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  TICKET
                </span> NOW
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="h-[2px] w-12 bg-amber-500/50"></div>
                <p className="text-amber-500 font-bold tracking-[0.5em] text-xl uppercase">DHAARA '26</p>
              </div>
            </div>

            {/* Ticket Categories */}
            <div className="w-full max-w-md space-y-6 text-white">
              {ticketData.map((ticket, index) => (
                <div key={index} className={`space-y-2 p-4 rounded-xl border transition-all ${ticket.percentage === 100 ? 'border-red-500/30 bg-red-500/5 opacity-60' : 'border-white/10 bg-white/5 hover:border-amber-500/30'}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-300 text-lg font-semibold block">{ticket.label}</span>
                      <span className="text-2xl font-bold text-amber-400 font-mono">{ticket.price}<span className="text-sm ml-1 text-gray-500 font-sans uppercase">LKR</span></span>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-bold uppercase px-2 py-1 rounded ${ticket.percentage === 100 ? 'bg-red-500 text-white' : 'bg-amber-500/20 text-amber-400'}`}>
                        {ticket.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{ticket.percentage}% Sold Out</p>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-1000 ease-out rounded-full ${ticket.percentage === 100 ? 'bg-red-500' : 'bg-gradient-to-r from-amber-600 to-orange-500'}`}
                      style={{ width: isVisible ? `${ticket.percentage}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {ticketData.every(t => t.percentage === 100) ? (
              <button disabled className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black px-16 py-5 rounded-full transition-all shadow-lg shadow-amber-500/20 uppercase tracking-widest text-lg disabled:grayscale disabled:opacity-50 disabled:cursor-not-allowed">
                Get Tickets
              </button>
            ) : (
              <Link href="/booking" className="inline-block text-center w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black px-16 py-5 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20 uppercase tracking-widest text-lg">
                Get Tickets
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;