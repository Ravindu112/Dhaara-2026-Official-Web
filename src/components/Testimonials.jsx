import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Vice Chancellor',
      title: 'University of Sri Jayewardenepura',
      quote: 'DHAARA represents the pinnacle of cultural excellence and artistic expression at our university. This competition embodies our commitment to nurturing talented musicians and fostering a vibrant arts community. It stands as a testament to the creativity and passion of our students.',
      position: 'left'
    },
    {
      name: 'Club Director',
      title: 'Flair Club',
      quote: 'DHAARA is more than just a competition—it\'s a movement that celebrates the heartbeat of our university. We witness incredible talent, dedication, and artistry every year. The platform we create allows young musicians to shine and inspire their peers across universities.',
      position: 'right'
    },
    {
      name: 'Advisor',
      title: 'Student Development & Events',
      quote: 'The evolution of DHAARA over the years has been remarkable. From auditions to the grand finale, every stage is meticulously crafted to provide the best experience for our participants and audience. We take pride in creating a space where music, passion, and excellence converge.',
      position: 'left'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 backdrop-blur-md bg-slate-900/60">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
            Words of Inspiration
          </h2>
          <p className="text-lg text-gray-300 font-light">
            Hear from the leaders who drive DHAARA's vision and excellence
          </p>
        </div>

        {/* Testimonials */}
        <div className="space-y-12 md:space-y-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                testimonial.position === 'left'
                  ? 'md:flex-row'
                  : 'md:flex-row-reverse'
              } gap-6 md:gap-8 items-center`}
            >
              {/* Image/Avatar Placeholder */}
              <div className="w-full md:w-5/12 flex justify-center">
                <div className="relative">
                  {/* Glow Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-orange-600/30 rounded-3xl blur-2xl"></div>
                  
                  {/* Image Box */}
                  <div className="relative w-48 h-56 md:w-64 md:h-72 bg-gradient-to-br from-amber-900/40 to-orange-900/40 backdrop-blur-md border border-amber-500/30 rounded-3xl overflow-hidden flex items-center justify-center hover:border-amber-500/60 transition-all">
                    {/* Placeholder Icon */}
                    <svg
                      className="w-20 h-20 text-amber-400/50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full opacity-60"></div>
                    <div className="absolute bottom-6 left-4 w-2 h-2 bg-orange-500 rounded-full opacity-60"></div>
                  </div>
                </div>
              </div>

              {/* Quote Box */}
              <div className="w-full md:w-7/12">
                <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 md:p-8 hover:border-amber-500/60 transition-all hover:shadow-lg hover:shadow-amber-500/20 relative">
                  {/* Quote Mark */}
                  <div className="absolute top-4 left-6 text-4xl text-amber-500/30 font-bold">"</div>

                  {/* Quote Text */}
                  <p className="text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed mb-6 relative z-10 pt-4">
                    {testimonial.quote}
                  </p>

                  {/* Name and Title */}
                  <div className="border-t border-amber-500/20 pt-4">
                    <h3 className="text-lg font-bold text-amber-100 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-amber-300/80 font-light">
                      {testimonial.title}
                    </p>
                  </div>

                  {/* Closing Quote Mark */}
                  <div className="absolute bottom-4 right-6 text-4xl text-amber-500/30 font-bold">"</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-16 text-center">
          <div className="inline-flex space-x-2">
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
