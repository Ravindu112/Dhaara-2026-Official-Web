import galleryImage from '../assets/award.png';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 backdrop-blur-md bg-slate-900/60">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          About DHAARA 26'
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-4">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
              Dhaara 26 is the largest inter-university music competition 
              organized by the Flair Club of the University of Sri Jayewardenepura. 
              Celebrating creativity, passion, and musical excellence, Dhaara has become a prestigious 
              platform that brings together the most talented young musicians 
              from universities across Sri Lanka.
            </p>
            
            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
              This iconic event provides a vibrant stage for performers to showcase their skills across 
              diverse musical genres, encouraging originality, teamwork, and artistic expression. 
              More than just a competition, Dhaara 26 is a cultural movement that 
              unites students through the universal language of music.
            </p>
            
            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
              With breathtaking performances, expert judging, and an electrifying 
              atmosphere, Dhaara 26 promises an unforgettable experience for
              participants and audiences alike. 
              It stands as a testament to the University of Sri Jayewardenepura's commitment to nurturing arts, talent, and youthful innovation.
            </p>
            
            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-justify">
              Join us in our journey to keep the rhythm alive through performances, workshops, and cultural events.
            </p>
          </div>

          {/* Right - Image Section */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl blur-2xl"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 hover:border-amber-500/70 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/30">
                <img 
                  src={galleryImage} 
                  alt="DHAARA 26' Event"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full blur-xl pointer-events-none"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-orange-500/30 to-amber-400/30 rounded-full blur-xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
