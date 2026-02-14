import React, { useState } from 'react';

export default function Tickets() {
  const [categories] = useState([
    {
      id: 1,
      name: 'VIP Seats',
      price: 5500,
      capacity: 1500,
      soldOut: 65,
      color: 'from-red-500 to-red-600',
      borderColor: 'border-red-500/50'
    },
    {
      id: 2,
      name: 'Premium Seats',
      price: 3500,
      capacity: 2000,
      soldOut: 48,
      color: 'from-amber-500 to-orange-600',
      borderColor: 'border-amber-500/50'
    },
    {
      id: 3,
      name: 'Standard Seats',
      price: 2500,
      capacity: 3000,
      soldOut: 72,
      color: 'from-yellow-500 to-amber-500',
      borderColor: 'border-yellow-500/50'
    },
    {
      id: 4,
      name: 'General Seats',
      price: 1500,
      capacity: 5000,
      soldOut: 58,
      color: 'from-orange-500 to-yellow-600',
      borderColor: 'border-orange-500/50'
    }
  ]);

  const getTotalCapacity = () => categories.reduce((sum, cat) => sum + cat.capacity, 0);
  const getTotalSoldOut = () => 
    categories.reduce((sum, cat) => sum + Math.round((cat.capacity * cat.soldOut) / 100), 0);

  const totalCapacity = getTotalCapacity();
  const totalSoldOut = getTotalSoldOut();
  const overallSoldOutPercentage = Math.round((totalSoldOut / totalCapacity) * 100);

  return (
    <section id="tickets" className="py-20 px-4 backdrop-blur-md bg-slate-900/60">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
            Book Your Tickets
          </h2>
          <p className="text-lg text-gray-300 font-light mb-8">
            Secure your seat for the grandest musical event of the year
          </p>

          {/* Overall Statistics */}
          <div className="inline-flex flex-col items-center gap-4">
            <div className="text-sm text-gray-300">
              <span className="font-semibold">{totalSoldOut.toLocaleString()}</span> / <span className="font-semibold">{totalCapacity.toLocaleString()}</span> tickets sold
            </div>
            <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden border border-amber-500/30">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-1000"
                style={{ width: `${overallSoldOutPercentage}%` }}
              ></div>
            </div>
            <div className="text-2xl font-bold text-amber-400">
              {overallSoldOutPercentage}% Sold Out
            </div>
          </div>
        </div>

        {/* Ticket Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const ticketsSold = Math.round((category.capacity * category.soldOut) / 100);
            const ticketsAvailable = category.capacity - ticketsSold;

            return (
              <div
                key={category.id}
                className={`relative group overflow-hidden rounded-2xl border ${category.borderColor} bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-opacity-100 transition-all duration-300 hover:shadow-lg`}
                style={{
                  boxShadow: category.soldOut >= 80 
                    ? `0 0 20px rgba(239, 68, 68, 0.3)` 
                    : `0 0 20px rgba(251, 146, 60, 0.2)`
                }}
              >
                {/* Sold Out Badge (if > 80%) */}
                {category.soldOut >= 80 && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-red-500/80 text-white text-xs font-bold rounded-full backdrop-blur-sm z-10">
                    Almost Full
                  </div>
                )}

                {/* Category Card Content */}
                <div className="p-6">
                  {/* Category Name and Price */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {category.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Price</p>
                      <p className="text-2xl font-bold text-amber-400">Rs {category.price.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Capacity Info */}
                  <p className="text-sm text-gray-400 mb-4">
                    Total Capacity: <span className="text-amber-300 font-semibold">{category.capacity.toLocaleString()}</span>
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden border border-slate-600">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                        style={{ width: `${category.soldOut}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/50">
                      <p className="text-gray-400 text-xs mb-1">Sold</p>
                      <p className="text-amber-300 font-bold text-lg">{ticketsSold.toLocaleString()}</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/50">
                      <p className="text-gray-400 text-xs mb-1">Available</p>
                      <p className={`font-bold text-lg ${ticketsAvailable > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {ticketsAvailable.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Sold Out Percentage */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400">Sold Out</span>
                      <span className={`font-bold text-lg ${category.soldOut >= 80 ? 'text-red-400' : 'text-amber-400'}`}>
                        {category.soldOut}%
                      </span>
                    </div>
                  </div>

                  {/* Book Button */}
                  <button
                    disabled={ticketsAvailable <= 0}
                    className={`w-full py-2 px-4 rounded-lg font-semibold transition-all transform duration-300 ${
                      ticketsAvailable > 0
                        ? `bg-gradient-to-r ${category.color} text-white hover:shadow-lg hover:shadow-${category.color.split('-')[1]}-500/50 hover:scale-105 cursor-pointer`
                        : 'bg-slate-700 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {ticketsAvailable > 0 ? 'Book Now' : 'Sold Out'}
                  </button>

                  {/* Availability Warning */}
                  {ticketsAvailable > 0 && ticketsAvailable <= 100 && (
                    <p className="text-xs text-red-400 mt-2 text-center font-semibold">
                      Only {ticketsAvailable} left!
                    </p>
                  )}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-amber-400 to-orange-500 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Hurry! Limited seats available for the DHAARA Grand Finale on <span className="text-amber-400 font-semibold">24th April 2026</span>
          </p>
          <div className="text-sm text-gray-400">
            Venue: <span className="text-amber-300">Nelum Pokuna Mahinda Rajapaksha Theatre, Colombo 07</span>
          </div>
        </div>
      </div>
    </section>
  );
}
