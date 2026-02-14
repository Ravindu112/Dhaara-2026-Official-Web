import galleryImage from '../assets/award.png';
import './Gallery.css';

const Gallery = () => {
  // Create array of gallery items
  const galleryItems = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{
          backgroundImage: `linear-gradient(to right, rgba(251, 191, 36, 0.85), rgba(251, 191, 36, 1))`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Moments of DHAARA
        </h2>
        
        {/* Card Grid Gallery */}
        <ul className="gallery-grid">
          {galleryItems.map((item) => (
            <li key={item} className="gallery-card">
              <div className="gallery-card__media">
                <img
                  src={galleryImage}
                  alt={`DHAARA Moment ${item}`}
                  className="gallery-card__image"
                />
                <div className="gallery-card__overlay" />
              </div>
              <div className="gallery-card__body">
                <span className="gallery-card__tag">DHAARA</span>
                <h3 className="gallery-card__title">Moment {item}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
