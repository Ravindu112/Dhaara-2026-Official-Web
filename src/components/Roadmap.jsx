import React from 'react';

export default function Roadmap() {
  const events = [
    {
      date: '24th FEB',
      title: 'Band Auditions',
      category: null
    },
    {
      date: '25th JAN',
      title: 'Vocal Training Workshop',
      category: 'DHAARA APPLICATIONS CALLING'
    },
    {
      date: '5th FEB',
      title: 'Stage Performance Workshop',
      category: 'STAGE PERFORMANCE WORKSHOP'
    },
    {
      date: '12th FEB',
      title: 'Audition 1st Round',
      category: 'EVENT MANAGEMENT WORKSHOP'
    },
    {
      date: '18th FEB',
      title: 'More Workshops',
      category: 'DHAARA ACADEMY'
    },
    {
      date: '4th MARCH',
      title: 'Dhaara Academy',
      category: 'DHAARA ACADEMY'
    },
    {
      date: '19th MARCH',
      title: 'Dhaara Semi Finals',
      category: 'DHAARA SEMI FINALS'
    },
    {
      date: '24th APR',
      title: 'Dhaara Grand Finale',
      subtitle: 'Nelum Pokuna Mahinda Rajapaksha Theatre, Colombo 07',
      category: 'DHAARA GRAND FINALE'
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4 backdrop-blur-md bg-slate-900/60">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
            The Dhaara Roadmap
          </h2>
          <p className="text-lg text-gray-300 font-light">
            Key Dates & Venues - Your Journey to DHAARA 26'
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 via-orange-500 to-amber-400"></div>

          {/* Events Container */}
          <div className="space-y-12 md:space-y-16">
            {events.map((event, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                {/* Content Box */}
                <div className="w-full md:w-5/12">
                  <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 backdrop-blur-sm border border-amber-500/30 rounded-lg p-6 hover:border-amber-500/60 transition-all hover:shadow-lg hover:shadow-amber-500/20">
                    {event.category && (
                      <div className="text-xs font-bold tracking-widest text-amber-300 mb-2 uppercase">
                        {event.category}
                      </div>
                    )}
                    <h3 className="text-xl md:text-2xl font-bold text-amber-100 mb-2">
                      {event.title}
                    </h3>
                    {event.subtitle && (
                      <p className="text-sm text-gray-300 italic">
                        {event.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Timeline Dot and Date */}
                <div className="hidden md:flex md:w-2/12 justify-center">
                  <div className="relative flex flex-col items-center">
                    {/* Dot */}
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-4 border-slate-900 shadow-lg shadow-amber-500/50 z-10"></div>
                    {/* Date Badge */}
                    <div className="mt-4 bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 rounded-full font-bold text-white text-xs whitespace-nowrap shadow-lg">
                      {event.date}
                    </div>
                  </div>
                </div>

                {/* Spacer for Desktop Layout */}
                <div className="hidden md:block md:w-5/12"></div>

                {/* Date Badge - Mobile */}
                <div className="md:hidden text-center">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 rounded-full font-bold text-white text-xs whitespace-nowrap shadow-lg">
                    {event.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
