import React from 'react';
import Image from 'next/image';
const kImage = '/assets/Images/k.webp';
const directorImage = '/assets/Images/erangaSir.webp';
const advisorImage = '/assets/Images/Chathumdm.webp';
const vcImage = '/assets/Images/vc.webp';

export default function Testimonials() {
  const testimonials = [

    {
      name: 'Senior Professor M. M. Pathmalal - Vice-Chancellor',
      title: 'University of Sri Jayewardenepura',
      image: vcImage,
      quote: 'Dhaara 2026 celebrates creativity, talent, and student expression, highlighting the importance of balancing academic excellence with the arts. It fosters unity, confidence, and personal growth while enriching university life. Appreciation is extended to participants and organizers, with hopes that the event inspires creativity and leaves lasting, meaningful memories.',
      position: 'left'
    },

    {
      name: 'Dr. Eranga Jayasekara-Director',
      title: 'Career Guidance Unit',
      image: directorImage,
      quote: 'Aesthetic education helps individuals develop creativity, appreciation for beauty, and meaningful relationships with nature and others. Dhaara, the Inter-Faculty Singing Competition, has become a significant event at the University of Sri Jayewardenepura, providing undergraduates a platform to enhance their skills, gain confidence, and open doors to future opportunities',
      position: 'right'
    },
    {
      name: 'Mrs. Chathurangani Thennakoon-Senior Career Advisor',
      title: 'Career Guidance Unit',
      image: advisorImage,
      quote: 'The Flair Club was established to nurture artistic talent among undergraduates of the University of Sri Jayewardenepura, providing a platform to develop creativity and professionalism in the arts. Dhaara identifies and guides talented singers towards excellence, offering them the opportunity to showcase their abilities and gain well-deserved recognition',
      position: 'left'
    },
    {
      name: 'Mr. Kavinga Ranthilake-President',
      title: 'Flair Club - University of Sri Jayewardenepura',
      image: kImage,
      quote: 'The Flair Club has grown through creative projects like Rhythm, Personality, Nachna, G-Tune, Theatro, and Susara Thelithuda, celebrating student talent and artistic expression. Now, DHAARA 2026 rises as a grand celebration of voice and courage, uniting passion, teamwork, and dreams proving that when many voices harmonize, extraordinary moments are created.',
      position: 'right'
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-center uppercase tracking-tight mb-2">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,165,0,0.3)]">
              Voices of Inspiration
            </span>
          </h2>

          <p className="text-xl md:text-xl text-white font-medium text-center tracking-wide">
            Hear from the leaders who drive DHAARA's vision and excellence
          </p>
        </div>

        {/* Testimonials */}
        <div className="space-y-12 md:space-y-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col ${testimonial.position === 'left'
                ? 'md:flex-row'
                : 'md:flex-row-reverse'
                } gap-6 md:gap-8 items-center`}
            >
              {/* Image/Avatar Placeholder */}
              <div className="w-full md:w-5/12 flex justify-center">
                <div className="relative">
                  {/* Glow Background */}
                  <div className="absolute inset-0 rounded-3xl blur-2xl bg-[linear-gradient(135deg,rgba(0,0,0,0.4),rgba(0,0,0,0.2))] pointer-events-none"></div>

                  {/* Image Box */}
                  <div className="relative w-48 h-56 md:w-64 md:h-72 rounded-3xl overflow-hidden flex items-center justify-center border border-white/10 bg-white/5 hover:border-amber-500/30 transition-all">
                    {/* Placeholder Icon */}
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-60 bg-amber-400/85"></div>
                    <div className="absolute bottom-6 left-4 w-2 h-2 rounded-full opacity-60 bg-amber-400/85"></div>
                  </div>
                </div>
              </div>

              {/* Quote Box */}
              <div className="w-full md:w-7/12">
                <div className="rounded-2xl p-6 md:p-8 relative border border-white/10 bg-white/5 hover:border-amber-500/30 transition-all">
                  {/* Quote Mark */}
                  <div className="absolute top-4 left-6 text-4xl font-bold text-amber-400/30">"</div>

                  {/* Quote Text */}
                  <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed mb-6 relative z-10 pt-4">
                    {testimonial.quote}
                  </p>

                  {/* Name and Title */}
                  <div className="pt-4 border-t border-amber-400/25">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm font-light text-amber-400/85">
                      {testimonial.title}
                    </p>
                  </div>

                  {/* Closing Quote Mark */}
                  <div className="absolute bottom-4 right-6 text-4xl font-bold text-amber-400/30">"</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-16 text-center">
          <div className="inline-flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-amber-400/85"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400/85"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400/85"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
