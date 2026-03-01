import galleryImage from '../assets/award.png';
import img1 from '../assets/Images/Gallery/1.webp';
import img2 from '../assets/Images/Gallery/2.webp';
import img3 from '../assets/Images/Gallery/3.webp';
import img4 from '../assets/Images/Gallery/4.webp';
import img5 from '../assets/Images/Gallery/5.webp';
import img6 from '../assets/Images/Gallery/6.webp';
import img7 from '../assets/Images/Gallery/7.webp';
import img8 from '../assets/Images/Gallery/8.webp';
import img9 from '../assets/Images/Gallery/9.webp';
import img10 from '../assets/Images/Gallery/10.webp';
import img11 from '../assets/Images/Gallery/11.webp';
import img12 from '../assets/Images/Gallery/12.webp';
import '../styles/gallery.css';

const Gallery = () => {
  // Create array of gallery items
  const galleryItems = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
    img11, img12];

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-6xl font-black text-center uppercase tracking-tight mb-10">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,165,0,0.25)]">
            Moments of DHAARA
          </span>
        </h2>

        {/* Card Grid Gallery */}
        <ul className="gallery-grid">
          {galleryItems.map((image, index) => (
            <li key={index} className="gallery-card">
              <div className="gallery-card__media">
                <img
                  src={image}
                  alt={`DHAARA Moment ${index + 1}`}
                  className="gallery-card__image"
                />
                <div className="gallery-card__overlay" />
              </div>
              <div className="gallery-card__body">
                <span className="gallery-card__tag">DHAARA</span>
                <h3 className="gallery-card__title">Moment {index + 1}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
