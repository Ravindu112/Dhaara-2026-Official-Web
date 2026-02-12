import React from 'react';
import ticketImg from '../assets/ticket.png';

const Tickets = () => {
  return (
    <section id="tickets" className="relative py-20 px-4 backdrop-blur-md bg-slate-900/60 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Fan-Out Ticket Animation */}
          <div className="relative h-[450px] md:h-[550px] flex items-center justify-center group order-2 md:order-1">
            
            {/* The Fan Container */}
            <div className="relative w-64 h-96 md:w-80 md:h-[450px]">
              
              {/* Ticket 4 (Far Right) */}
              <img 
                src={ticketImg} 
                alt="Ticket" 
                className="ticket-fan-base ticket-4 z-10 drop-shadow-2xl"
              />

              {/* Ticket 3 */}
              <img 
                src={ticketImg} 
                alt="Ticket" 
                className="ticket-fan-base ticket-3 z-20 drop-shadow-2xl"
              />

              {/* Ticket 2 */}
              <img 
                src={ticketImg} 
                alt="Ticket" 
                className="ticket-fan-base ticket-2 z-30 drop-shadow-2xl"
              />

              {/* Ticket 1 (Front Cover) */}
              <img 
                src={ticketImg} 
                alt="Ticket" 
                className="ticket-fan-base ticket-1 z-40 drop-shadow-2xl" 
              />
              
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-amber-400/40 text-sm font-light tracking-[0.3em] animate-pulse uppercase">
                Hover to explore
              </div>
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

            {/* Pricing List */}
            <div className="w-full max-w-sm space-y-2">
               <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-4 text-center md:text-left">Select your category</p>
              
              <div className="flex justify-between items-end py-4 border-b border-white/10 hover:border-amber-500/50 transition-colors group/price">
                <span className="text-gray-300 text-xl group-hover/price:text-white transition-colors">Standard</span>
                <span className="text-3xl font-bold text-amber-400 font-mono">2000<span className="text-sm ml-1 text-gray-500">LKR</span></span>
              </div>
              
              <div className="flex justify-between items-end py-4 border-b border-white/10 hover:border-amber-500/50 transition-colors group/price">
                <span className="text-gray-300 text-xl group-hover/price:text-white transition-colors">VIP</span>
                <span className="text-3xl font-bold text-amber-400 font-mono">3000<span className="text-sm ml-1 text-gray-500">LKR</span></span>
              </div>
              
              <div className="flex justify-between items-end py-4 hover:border-b hover:border-amber-500/50 transition-colors group/price">
                <span className="text-gray-300 text-xl group-hover/price:text-white transition-colors">VVIP</span>
                <span className="text-3xl font-bold text-amber-400 font-mono">5000<span className="text-sm ml-1 text-gray-500">LKR</span></span>
              </div>
            </div>

            <button className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black px-16 py-5 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(245,158,11,0.2)] uppercase tracking-widest text-lg">
              Get Tickets
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tickets;