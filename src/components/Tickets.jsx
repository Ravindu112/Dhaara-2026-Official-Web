import React, { useState } from 'react';

const TICKET_COLORS = {
  color: 'from-amber-500 to-amber-600',
  borderColor: 'border-amber-500/50'
};

export default function Tickets() {
  const [categories] = useState([
    {
      id: 1,
      name: 'VIP Seats',
      price: 5000,
      percentage: 100,
      ...TICKET_COLORS
    },
    {
      id: 2,
      name: 'Premium Seats',
      price: 3500,
      percentage: 48,
      ...TICKET_COLORS
    },
    {
      id: 3,
      name: 'Standard Seats',
      price: 2500,
      percentage: 72,
      ...TICKET_COLORS
    },
    {
      id: 4,
      name: 'General Seats',
      price: 1500,
      percentage: 58,
      ...TICKET_COLORS
    }
  ]);

  const getTotalSoldOut = () => 
    Math.round(categories.reduce((sum, cat) => sum + cat.percentage, 0) / categories.length);

  const overallSoldOutPercentage = getTotalSoldOut();

  return (
    <section id="tickets" className="py-20 px-4 ">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{
            backgroundImage: `linear-gradient(to right, rgba(251, 191, 36, 0.85), rgba(251, 191, 36, 1))`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Book Your Tickets
          </h2>
          <p className="text-lg text-white font-light mb-10">
            Secure your seat for the grandest musical event of the year!
          </p>

          {/* Overall Statistics */}
          <div className="inline-flex flex-col items-center gap-4">
            <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden border border-amber-500/30">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-1000"
                style={{ width: `${overallSoldOutPercentage}%` }}
              ></div>
            </div>
            <div className="text-2xl font-bold" style={{ color: 'rgba(251, 191, 36, 0.85)' }}>
              {overallSoldOutPercentage}% Sold Out
            </div>
          </div>
        </div>

        {/* Ticket Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            return (
              <div
                key={category.id}
                className={`relative group overflow-hidden rounded-2xl border ${category.borderColor} bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-opacity-100 transition-all duration-300 hover:shadow-lg`}
                style={{
                  boxShadow: category.percentage >= 80 
                    ? `0 0 20px rgba(239, 68, 68, 0.3)` 
                    : `0 0 20px rgba(251, 146, 60, 0.2)`
                }}
              >
                {/* Sold Out Badge (if > 80%) */}
                {category.percentage >= 80 && (
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
                      <p className="text-sm text-white">Price</p>
                      <p className="text-2xl font-bold" style={{ color: 'rgba(251, 191, 36, 0.85)' }}>Rs {category.price.toLocaleString()}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden border border-slate-600">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Sold Out Percentage Card */}
                  <div className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/50 mb-4">
                    <div className="flex flex-col items-center justify-center">
                      <p className="font-bold text-2xl" style={{ color: category.percentage >= 80 ? '#ef4444' : 'rgba(251, 191, 36, 0.85)' }}>
                        {category.percentage}%
                      </p>
                      <p className="text-white text-xs font-extralight">Sold Out</p>
                    </div>
                  </div>

                  {/* Book Button */}
                  <button
                    disabled={category.percentage >= 100}
                    className={`w-full py-2 px-4 rounded-lg font-semibold transition-all transform duration-300 ${
                      category.percentage < 100
                        ? `bg-gradient-to-r ${category.color} text-white hover:shadow-lg hover:shadow-${category.color.split('-')[1]}-500/50 hover:scale-105 cursor-pointer`
                        : 'bg-slate-700 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {category.percentage < 100 ? 'Book Now' : 'Sold Out'}
                  </button>
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
