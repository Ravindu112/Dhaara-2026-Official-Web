"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const img1 = '/assets/Images/Gallery/14.webp';
const img2 = '/assets/Images/Gallery/2.webp';
const img3 = '/assets/Images/Gallery/2.jpg.jpeg';
const img4 = '/assets/Images/Gallery/4.webp';
const img5 = '/assets/Images/Gallery/5.webp';
const img6 = '/assets/Images/Gallery/6.webp';
const img7 = '/assets/Images/Gallery/7.webp';
const img8 = '/assets/Images/Gallery/8.webp';
const img9 = '/assets/Images/Gallery/9.webp';
const img10 = '/assets/Images/Gallery/10.webp';
const img11 = '/assets/Images/Gallery/11.webp';
const img12 = '/assets/Images/Gallery/12.webp';
const img13 = '/assets/Images/Gallery/13.webp';
const img14 = '/assets/Images/Gallery/3.webp';
const img15 = '/assets/Images/Gallery/15.webp';

const Gallery = () => {
  // Create array of gallery items
  const galleryItems = [
    img1, img2, img3, img4, img5,
    img6, img8, img7, img9, img10,
    img11, img12, img13, img14, img15];

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-6xl font-black text-center uppercase tracking-tight mb-10">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,165,0,0.25)]">
            Echoes of DHAARA
          </span>
        </h2>

        {/* Card Grid Gallery */}
        <motion.ul
          className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[18px] md:gap-[22px] list-none p-0 m-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {galleryItems.map((image, index) => (
            <motion.li
              key={index}
              className="relative rounded-[18px] overflow-hidden border border-amber-400/25 bg-[linear-gradient(160deg,rgba(15,23,42,0.75),rgba(15,23,42,0.3))] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-[350ms] ease-out group"
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30 },
                show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
              }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
            >
              <div className="relative w-full pt-[70%] overflow-hidden">
                <Image
                  src={image}
                  alt={`DHAARA Moment ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover scale-[1.02] transition-transform duration-[400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/70" />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Gallery;
