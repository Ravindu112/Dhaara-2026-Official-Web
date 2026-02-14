import React from 'react';

export default function Awards() {
  const awards = [
    {
      id: 1,
      title: 'THE DHAARA YOUNG ARTIST ANNUAL AWARD',
      awardName: 'THE DHAARA YOUNG ARTIST AWARD',
      intro: 'Dhaara stands as the university\'s premier inter-faculty talent platform a dynamic competition designed not only to discover but also to honor and elevate the most exceptional undergraduates across all artistic disciplines. At its heart lies the art of singing, from which emerges the crowning jewel of the competition.',
      description: 'Awarded to the undergraduate who demonstrates exceptional vocal excellence, artistic expression, and stage presence, earning the highest score from our distinguished panel of judges.'
    }
  ];

  return (
    <section id="awards" className="py-20 px-4 backdrop-blur-md bg-slate-900/60">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-amber-300 tracking-wide">
            THE PROPOSED ANNUAL AWARDS
          </h2>
        </div>

        {/* Awards Section */}
        <div className="space-y-16">
          {awards.map((award) => (
            <div key={award.id} className="bg-gradient-to-br from-slate-800/30 to-slate-900/50 border border-amber-500/30 rounded-2xl backdrop-blur-sm p-8 md:p-12 overflow-hidden relative">
              {/* Background Accent */}
              <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-amber-400 to-orange-500 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Award Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-amber-300 mb-8 text-center md:text-left uppercase tracking-wide">
                  "{award.title}"
                </h3>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left - Trophy Placeholder */}
                  <div className="flex justify-center md:justify-start">
                    <div className="relative w-56 h-64 flex items-center justify-center">
                      {/* Trophy Icon/Placeholder */}
                      <div className="relative">
                        <div className="w-48 h-56 bg-gradient-to-br from-amber-900/40 to-orange-900/30 border border-amber-500/50 rounded-lg flex flex-col items-center justify-center backdrop-blur-sm hover:border-amber-500/80 transition-all">
                          <div className="text-6xl mb-4">🏆</div>
                          <div className="text-center">
                            <p className="text-amber-300 font-bold text-sm">DHAARA</p>
                            <p className="text-gray-300 text-xs">Award Trophy</p>
                          </div>
                        </div>
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/10 blur-2xl rounded-lg -z-10"></div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Text Content */}
                  <div className="space-y-6">
                    {/* Introduction Paragraph */}
                    <p className="text-gray-200 leading-relaxed text-justify">
                      Dhaara stands as the <span className="font-semibold text-amber-100">university's premier inter-faculty talent platform</span> a dynamic competition designed not only to discover but also to honor and elevate the most exceptional undergraduates across all artistic disciplines. At its heart lies the art of singing, from which emerges the crowning jewel of the competition.
                    </p>

                    {/* Award Name */}
                    <h4 className="text-xl font-bold text-white uppercase tracking-wide border-b border-amber-500/30 pb-3">
                      {award.awardName}
                    </h4>

                    {/* Award Description */}
                    <p className="text-gray-300 leading-relaxed text-justify">
                      {award.description}
                    </p>

                    {/* Award Highlights */}
                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-amber-500/20">
                      <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-500/30">
                        <p className="text-amber-300 font-semibold mb-2">Recognition</p>
                        <p className="text-gray-300 text-sm">Certificate & Trophy</p>
                      </div>
                      <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-500/30">
                        <p className="text-amber-300 font-semibold mb-2">Honor</p>
                        <p className="text-gray-300 text-sm">Media Coverage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Bottom */}
        <div className="mt-12 text-center">
          <div className="inline-flex space-x-3">
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
