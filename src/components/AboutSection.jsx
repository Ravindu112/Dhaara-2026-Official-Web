import aboutVideo from '../assets/videos/BGRemove.mp4';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-12 md:py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-full px-4 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Column: Text Content */}
          <div
            className="text-left space-y-6 md:space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent tracking-wide uppercase">
              What is Dhaara?
            </h2>

            <div className="w-full space-y-4 md:space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-light">
              <p>
                Dhaara 2026, the flagship singing competition of University of Sri Jayewardenepura organized by the 
                Flair Club under the Career Guidance Unit,returns for its third consecutive year as a 
                premier stage for emerging musical talent. From expert-led workshops to a grand, 
                student-produced finale at the Nelum Pokuna Mahinda Rajapaksa Theatre, 
                Dhaara offers a complete artistic journey powered entirely by students, 
                from vocals and music to dance and event production.
              </p>

              <p>
                Building on the success of previous editions, Dhaara continues to provide valuable industry exposure,
                professional development opportunities, and a platform for young artists to showcase their talent. 
                More than a competition, Dhaara is a launchpad that transforms student talent into future 
                stars of Sri Lanka's music industry.
              </p>

              <p>
                With breathtaking performances, expert judging, and an electrifying atmosphere, 
                Dhaara '26 promises an unforgettable experience, celebrating creativity, 
                talent, and youthful innovation.
              </p>
            </div>
          </div>

          {/* Right Column: Video */}
          <div
            className="w-full mt-12 md:mt-0 flex justify-center"
          >
            <video
              alt="About Section Video"
              className="w-3/4 md:max-w-2xl h-auto rounded-lg shadow-lg object-cover object-[60%_40%]"
              autoPlay
              loop
              muted
            >
              <source src={aboutVideo} type="video/mp4" />
            </video>


          </div>
        </div>
      </div>
    </section>
  );
}
