import React from 'react';
import TitlePatner from '../public/assets/Sponsor logos/Omegaline.webp'
import Maliban from '../public/assets/Sponsor logos/Maliban.png'
import S1 from '../public/assets/Sponsor logos/Other Sponsors/S1.webp'
import S2 from '../public/assets/Sponsor logos/Other Sponsors/S2.webp'
import S3 from '../public/assets/Sponsor logos/Other Sponsors/S3.webp'
import S4 from '../public/assets/Sponsor logos/Other Sponsors/S4.webp'
import S5 from '../public/assets/Sponsor logos/Other Sponsors/S5.webp'
import S6 from '../public/assets/Sponsor logos/Other Sponsors/S6.webp'
import S7 from '../public/assets/Sponsor logos/Other Sponsors/S7.webp'
import S8 from '../public/assets/Sponsor logos/Other Sponsors/S8.webp'

// Sponsor Data - Static content
const sponsors = [
  {
    id: 1,
    name: 'OMEGA LINE Ltd ',
    tier: 'title',
    image: <img src={TitlePatner.src} alt="Omegaline" className="h-[120px] w-auto object-contain" />,
    description: 'Omega Line was the first step towards the company producing its items in-house. Since 1999, the factory has grown into the largest exporter in Sri Lanka of clothing to Europe, producing and exporting more than 30 million items each year.',
    link: 'https://www.oniverse.it/en/world-in-progress/supply-chain/our-production-facilities/our-production-plants/omega',
  },
  // {
  //   id: 2,
  //   name: 'Platinum Partner',
  //   tier: 'platinum',
  //   image: '💎',
  //   description: 'Platinum Partnership',
  // },
  {
    id: 4,
    name: 'MALIBAN',
    tier: 'gold',
    image: <img src={Maliban.src} alt="Maliban" className="h-[100px] w-auto object-contain" />,
    description: 'Maliban Biscuit Manufactories, is one of the largest manufacturers, distributors and marketers of bakery products in Sri Lanka. Maliban is a privately owned limited liability company.',
    link: 'https://www.malibangroup.com/',
  },
  // {
  //   id: 5,
  //   name: 'Silver Partner ',
  //   tier: 'silver',
  //   image: '⭐',
  //   description: 'Silver Partnership',
  // },
  // {
  //   id: 7,
  //   name: 'Bronze Partner ',
  //   tier: 'bronze',
  //   image: '🎯',
  //   description: 'Bronze Partnership',
  // },
];

const otherSponsors = [
  { id: 101, name: 'Ceylon Today', link: 'https://ceylontoday.lk/', icon: <img src={S1.src} alt="Partner A" className="h-full w-full object-contain p-2" /> },
  { id: 102, name: 'Mawbima', link: 'https://mawbima.lk/', icon: <img src={S2.src} alt="Partner B" className="h-full w-full object-contain p-2" /> },
  { id: 103, name: 'Vevra Photography', link: 'https://web.facebook.com/vevrasrilanka/?_rdc=1&_rdr#', icon: <img src={S3.src} alt="Partner C" className="h-full w-full object-contain p-2" /> },
  { id: 104, name: 'WAYO', link: 'https://web.facebook.com/wayosl/?_rdc=1&_rdr#', icon: <img src={S4.src} alt="Partner D" className="h-full w-full object-contain p-2" /> },
  { id: 105, name: 'J\'Pura Flames', link: 'https://web.facebook.com/Jpuraflames/?_rdc=1&_rdr#', icon: <img src={S5.src} alt="Partner E" className="h-full w-full object-contain p-2" /> },
  { id: 106, name: 'CSDS Society USJ', link: 'https://web.facebook.com/sjpcsds/?_rdc=1&_rdr#', icon: <img src={S6.src} alt="Partner F" className="h-full w-full object-contain p-2" /> },
  { id: 107, name: 'Perfect Sounds', link: 'https://web.facebook.com/people/Perfect-Events/100091950007528/?_rdc=1&_rdr#', icon: <img src={S7.src} alt="Partner G" className="h-full w-full object-contain p-2" /> },
  { id: 108, name: 'Leron', link: 'https://web.facebook.com/profile.php?id=100088872685308&sk=photos', icon: <img src={S8.src} alt="Partner H" className="h-full w-full object-contain p-2" /> },
];


export default function Sponsors() {

  const tierConfig = {
    title: { name: 'Title Partner', textColor: 'text-amber-400' },
    platinum: { name: 'Platinum Partner', textColor: 'text-slate-200' },
    gold: { name: 'Gold Partner', textColor: 'text-amber-500' },
    silver: { name: 'Silver Partner', textColor: 'text-slate-400' },
    bronze: { name: 'Bronze Partner', textColor: 'text-amber-700' }
  };

  const sponsorsByTier = {
    title: sponsors.filter(s => s.tier === 'title'),
    platinum: sponsors.filter(s => s.tier === 'platinum'),
    gold: sponsors.filter(s => s.tier === 'gold'),
    silver: sponsors.filter(s => s.tier === 'silver'),
    bronze: sponsors.filter(s => s.tier === 'bronze')
  };

  const renderTierSection = (tierKey, tierSponsors) => {
    if (tierSponsors.length === 0) return null;
    const config = tierConfig[tierKey];
    const isTitle = tierKey === 'title';

    return (
      <div key={tierKey} className="mb-20 text-center">
        <h3 className={`text-2xl font-bold mb-10 uppercase tracking-[0.2em] ${isTitle ? 'text-amber-400 scale-110' : config.textColor}`}>
          {isTitle && <span className="block text-xs font-light mb-2 text-amber-500/80 tracking-[0.4em]">OFFICIAL EVENT SPONSOR</span>}
          {config.name}
        </h3>

        <div className={`grid gap-10 ${tierSponsors.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {tierSponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`relative group rounded-[32px] transition-all duration-500 transform hover:-translate-y-2 ${isTitle
                ? 'p-[2px] bg-gradient-to-b from-amber-400 via-orange-500 to-amber-600 shadow-[0_0_50px_-12px_rgba(251,191,36,0.4)]'
                : 'p-[1.5px] bg-gradient-to-br from-amber-200 via-yellow-600 to-amber-800 shadow-xl'
                }`}
            >
              <div className="relative bg-slate-950 rounded-[30px] p-10 h-full overflow-hidden flex flex-col items-center">

                <div className={`relative z-10 mb-6 flex items-center justify-center transition-all duration-500 ${isTitle ? 'text-8xl' : 'text-7xl'}`}>
                  {sponsor.image}
                </div>

                <h4 className={`relative z-10 font-black mb-3 tracking-tight ${isTitle ? 'text-4xl text-white' : `text-2xl ${config.textColor}`}`}>
                  {sponsor.name}
                </h4>

                <p className="relative z-10 text-gray-400 font-medium mb-8 italic line-clamp-2">
                  "{sponsor.description}"
                </p>


                <a
                  href={sponsor.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block relative z-10 px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 text-center ${isTitle
                    ? 'bg-gradient-to-r from-amber-400 to-orange-600 text-black hover:scale-105 shadow-[0_5px_15px_-5px_rgba(251,191,36,0.5)]'
                    : 'bg-gradient-to-r from-amber-100 to-amber-300 text-black hover:brightness-110 shadow-md'
                    }`}>
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="sponsors" className="py-24 px-4  text-white min-h-screen relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">

        {/* --- Section Header --- */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter uppercase mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,160,0,0.4)]">
              OUR Sponsors</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 font-bold tracking-tight">Making DHAARA '26 Possible</p>
          <div className="h-2 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Sponsor Cards Grid */}
        <div className="mb-32">
          {renderTierSection('title', sponsorsByTier.title)}
          {renderTierSection('platinum', sponsorsByTier.platinum)}
          {renderTierSection('gold', sponsorsByTier.gold)}
          {renderTierSection('silver', sponsorsByTier.silver)}
          {renderTierSection('bronze', sponsorsByTier.bronze)}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-24"></div>

        {/* --- Supporting Partners Section --- */}
        <div className="mb-32">
          <h3 className="text-3xl md:text-3xl font-semibold text-amber-500 mb-12 text-center uppercase tracking-[0.3em]">
            OUR IN-KIND Partners
          </h3>

          <div className="relative overflow-hidden bg-slate-900/30 rounded-[40px] p-[1.5px] bg-gradient-to-r from-amber-200 via-yellow-600 to-amber-800">
            <div className="bg-slate-950 rounded-[38px] p-12 overflow-hidden">
              <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
                {/* Original set */}
                <div className="flex gap-12 pr-12">
                  {otherSponsors.map((sponsor, index) => (
                    <a href={sponsor.link || '#'} target="_blank" rel="noopener noreferrer" key={index} className="flex flex-col items-center justify-center group w-40 cursor-pointer">
                      <div className="w-28 h-28 rounded-2xl bg-slate-800/30 border border-slate-700 flex items-center justify-center group-hover:border-amber-500/50 transition-all duration-300 group-hover:scale-110 shadow-lg">
                        <span className="text-5xl">{sponsor.icon}</span>
                      </div>
                      <p className="text-gray-400 font-bold text-center mt-4 text-sm group-hover:text-amber-300 transition-colors uppercase tracking-tight">{sponsor.name}</p>
                    </a>
                  ))}
                </div>
                {/* Duplicated set for seamless loop */}
                <div className="flex gap-12 pr-12" aria-hidden="true">
                  {otherSponsors.map((sponsor, index) => (
                    <a href={sponsor.link || '#'} target="_blank" rel="noopener noreferrer" key={`dup-${index}`} className="flex flex-col items-center justify-center group w-40 cursor-pointer">
                      <div className="w-28 h-28 rounded-2xl bg-slate-800/30 border border-slate-700 flex items-center justify-center group-hover:border-amber-500/50 transition-all duration-300 group-hover:scale-110 shadow-lg">
                        <span className="text-5xl">{sponsor.icon}</span>
                      </div>
                      <p className="text-gray-400 font-bold text-center mt-4 text-sm group-hover:text-amber-300 transition-colors uppercase tracking-tight">{sponsor.name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Call to Action --- */}
        <div className="relative overflow-hidden rounded-[40px] p-16 text-center border border-amber-500/20 bg-slate-900/60">
          <h4 className="relative z-10 text-4xl md:text-6xl font-semibold mb-8 tracking-tight bg-gradient-to-r from-amber-200 to-amber-800 bg-clip-text text-transparent uppercase">
            BECOME PART OF THE LEGACY
          </h4>
          <p className="relative z-10 text-gray-300 text-base md:text-lg font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Shape DHAARA' 26 into an unforgettable experience. Partner with us to showcase your brand, engage a vibrant audience, and create moments that inspire.
          </p>
        </div>

      </div>
    </section>
  );
}