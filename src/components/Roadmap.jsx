import React from 'react';

export default function Roadmap() {
  const events = [
    {
      date: '24th FEB',
      title: 'Band Auditions',
      category: null,
      completed: true
    },
    {
      date: '25th JAN',
      title: 'DHAARA APPLICATIONS CALLING',
      category: 'ROAD TO DHAARA',
      completed: true
    },
    {
      date: '5th FEB',
      title: 'VOCAL TRAINING WORKSHOP',
      category: 'STAGE PERFORMANCE WORKSHOP',
      completed: true
    },
    {
      date: '18th FEB',
      title: '1st ROUND AUDITIONS',
      category: 'DHAARA ACADEMY',
      completed: false
    },
    {
      date: '24th FEB',
      title: 'STAGE PERFORMANCE WORKSHOP',
      category: 'EVENT MANAGEMENT WORKSHOP',
      completed: false
    },
    {
      date: '4th MARCH',
      title: 'DHAARA ACADEMY',
      category: 'DHAARA ACADEMY',
      completed: false
    },
    {
      date: '19th MARCH',
      title: 'DHAARA SEMI FINALS',
      category: 'DHAARA SEMI FINALS',
      completed: false
    },
    {
      date: '24th APR',
      title: 'DHAARA GRAND FINALE',
      subtitle: 'Nelum Pokuna Mahinda Rajapaksha Theatre, Colombo 07',
      category: 'DHAARA GRAND FINALE',
      completed: false
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{
            backgroundImage: `linear-gradient(to right, rgba(251, 191, 36, 0.85), rgba(251, 191, 36, 1))`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            The Dhaara Roadmap
          </h2>
          <p className="text-lg text-white font-light">
          Your Journey to DHAARA 26'
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Events Container */}
          <div className="space-y-12 md:space-y-16">
            {events.map((event, index) => (
              <div key={index} className={`flex relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                {/* Vertical Timeline Line Segment */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1" style={{
                  top: '-3rem',
                  height: 'calc(100% + 6rem)',
                  backgroundColor: event.completed ? 'rgba(251, 191, 36, 0.85)' : 'white',
                  display: index === 0 ? 'none' : 'block'
                }}></div>
                {/* Content Box */}
                <div className="w-full md:w-5/12">
                  <div className="rounded-lg p-6" style={{
                    border: '1px solid rgba(251, 191, 36, 0.25)',
                    background: 'linear-gradient(160deg, rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.3))',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {event.category && (
                      <div className="text-xs font-bold tracking-widest mb-2 uppercase text-white">
                        {event.category}
                      </div>
                    )}
                    <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'rgba(251, 191, 36, 0.85)' }}>
                      {event.title}
                    </h3>
                    {event.subtitle && (
                      <p className="text-sm text-white italic">
                        {event.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Timeline Dot and Date */}
                <div className="hidden md:flex md:w-2/12 justify-center">
                  <div className="relative flex flex-col items-center">
                    {/* Dot */}
                    <div className="w-6 h-6 rounded-full border-4 border-slate-900 shadow-lg z-10" style={{
                      background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.85), rgba(251, 191, 36, 0.85))',
                      boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
                    }}></div>
                    {/* Date Badge */}
                    <div className="mt-4 px-4 py-2 rounded-full font-bold text-xs whitespace-nowrap shadow-lg" style={{
                      backgroundColor: event.completed ? 'rgba(251, 191, 36, 0.85)' : 'white',
                      color: event.completed ? 'white' : 'rgba(15, 23, 42, 0.85)'
                    }}>
                      {event.date}
                    </div>
                  </div>
                </div>

                {/* Spacer for Desktop Layout */}
                <div className="hidden md:block md:w-5/12"></div>

                {/* Date Badge - Mobile */}
                <div className="md:hidden text-center">
                  <div className="px-4 py-2 rounded-full font-bold text-xs whitespace-nowrap shadow-lg" style={{
                    backgroundColor: event.completed ? 'rgba(251, 191, 36, 0.85)' : 'white',
                    color: event.completed ? 'white' : 'rgba(15, 23, 42, 0.85)'
                  }}>
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
