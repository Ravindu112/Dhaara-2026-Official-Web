import { motion } from 'framer-motion';

export default function AboutSection({ isMobile }) {
  return (
    <section id="about" className="relative py-12 md:py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-full px-4 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ 
              opacity: 0, 
              y: isMobile ? 50 : 0,   
              x: isMobile ? 0 : -50   
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left space-y-6 md:space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent tracking-wide uppercase">
              What is Dhaara?
            </h2>
            
            <div className="max-w-2xl w-full space-y-4 md:space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-light">
              <p>
                Dhaara 26 is the largest inter-university music competition 
                organized by the Flair Club of the University of Sri Jayewardenepura. 
                Celebrating creativity, passion, and musical excellence, Dhaara has become a prestigious 
                platform that brings together the most talented young musicians 
                from universities across Sri Lanka.
              </p>
              
              <p>
                This iconic event provides a vibrant stage for performers to showcase 
                their skills across diverse musical genres, encouraging originality, 
                teamwork, and artistic expression. More than just a competition, 
                Dhaara 26 is a cultural movement that unites students through the 
                universal language of music.
              </p>
              
              <p>
                With breathtaking performances, expert judging, and an electrifying 
                atmosphere, Dhaara 26 promises an unforgettable experience. It stands 
                as a testament to the University of Sri Jayewardenepura's commitment 
                to nurturing arts, talent, and youthful innovation.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Video */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full mt-12 md:mt-0 flex justify-center"
          >
            <video 
              src="src/assets/videos/Award_Video.mp4"
              alt="About Section Video" 
              className="w-full md:max-w-lg h-auto rounded-lg shadow-lg"
              controls
              autoPlay
              loop
              muted
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
