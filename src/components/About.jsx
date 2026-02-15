import galleryImage from '../assets/award.png';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          
          {/* Left - Text Content */}
          <div className="space-y-4 md:col-span-2">

            <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            What is DHAARA?
            </h2>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
              <strong> Dhaara 2026</strong>, the flagship singing competition of the University of Sri
              Jayewardenepura organized by the Flair Club, returns for its third
              consecutive year as the premier stage for homegrown musical talent.
              From expert-led workshops to a grand, student-produced finale at the
              Nelum Pokuna Theatre, Dhaara offers a complete artistic journey that
              is entirely student-powered from vocals and music to dance and
              event management.
            </p>
            
            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
             <strong>Building on the resounding success of Dhaara 2024</strong>, which engaged
              hundreds of participants and launched student careers through
              valuable industry exposure, this edition elevates the experience with
              expanded professional development workshops, thrilling competitive
              rounds, and unforgettable performances by both finalists and leading
              Sri Lankan artists.
            </p>
            
            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
             <strong>More than a competition, Dhaara is a proven career-launching
              platform</strong> that transforms student potential into professional success,
              offering sponsors a unique opportunity to invest in and champion Sri
              Lanka's next generation of musical stars while aligning with an event
              that bridges campus creativity with the national music industry.
            </p>
            
          </div>

          {/* Right - Image Section */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              {/* Image Container */}
              <div className="relative overflow-hidden shadow-lg">
                <img 
                  src={galleryImage} 
                  alt="DHAARA 26' Event"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
