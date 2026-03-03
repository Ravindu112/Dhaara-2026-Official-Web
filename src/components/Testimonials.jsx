import React from 'react';
import '../styles/testimonials.css';
import kImage from '../assets/Images/k.webp';
import directorImage from '../assets/Images/erangaSir.webp';
import advisorImage from '../assets/Images/Chathumdm.webp';
import { image } from 'framer-motion/client';

export default function Testimonials() {
  const testimonials = [

    {
      name: 'Director',
      title: 'Career Guidance Unit',
      image: directorImage,
      quote: 'DHAARA is more than just a competition—it\'s a movement that celebrates the heartbeat of our university. We witness incredible talent, dedication, and artistry every year. The platform we create allows young musicians to shine and inspire their peers across universities.',
      position: 'left'
    },
    {
      name: 'Senior Career Advisor',
      title: 'Career Guidance Unit',
      image: advisorImage,
      quote: 'The evolution of DHAARA over the years has been remarkable. From auditions to the grand finale, every stage is meticulously crafted to provide the best experience for our participants and audience. We take pride in creating a space where music, passion, and excellence converge.',
      position: 'right'
    },
    {
      name: 'President',
      title: 'Flair Club - University of Sri Jayewardenepura',
      image: kImage,
      quote: 'The Flair Club has grown through creative projects like Rhythm, Personality, Nachna, G-Tune, Theatro, and Susara Thelithuda, celebrating student talent and artistic expression. Now, DHAARA 2026 rises as a grand celebration of voice and courage, uniting passion, teamwork, and dreams proving that when many voices harmonize, extraordinary moments are created.',
      position: 'left'
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-center uppercase tracking-tight mb-2">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,165,0,0.3)]">
              Words of Inspiration
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
                  <div className="absolute inset-0 rounded-3xl blur-2xl testimonials-glow-bg"></div>

                  {/* Image Box */}
                  <div className="relative w-48 h-56 md:w-64 md:h-72 rounded-3xl overflow-hidden flex items-center justify-center border border-white/10 bg-white/5 hover:border-amber-500/30 transition-all">
                    {/* Placeholder Icon */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-60 testimonials-dot-top"></div>
                    <div className="absolute bottom-6 left-4 w-2 h-2 rounded-full opacity-60 testimonials-dot-bottom"></div>
                  </div>
                </div>
              </div>

              {/* Quote Box */}
              <div className="w-full md:w-7/12">
                <div className="rounded-2xl p-6 md:p-8 relative border border-white/10 bg-white/5 hover:border-amber-500/30 transition-all">
                  {/* Quote Mark */}
                  <div className="absolute top-4 left-6 text-4xl font-bold testimonials-quote-open">"</div>

                  {/* Quote Text */}
                  <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed mb-6 relative z-10 pt-4">
                    {testimonial.quote}
                  </p>

                  {/* Name and Title */}
                  <div className="pt-4 testimonials-border-top">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm font-light testimonials-title-text">
                      {testimonial.title}
                    </p>
                  </div>

                  {/* Closing Quote Mark */}
                  <div className="absolute bottom-4 right-6 text-4xl font-bold testimonials-quote-close">"</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-16 text-center">
          <div className="inline-flex space-x-2">
            <div className="w-2 h-2 rounded-full testimonials-decorative-dot"></div>
            <div className="w-2 h-2 rounded-full testimonials-decorative-dot"></div>
            <div className="w-2 h-2 rounded-full testimonials-decorative-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
