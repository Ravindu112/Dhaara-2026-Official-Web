import galleryImage from '../assets/award.png';
import './Gallery.css';

const Gallery = () => {
  // Create array of 12 gallery items
  const galleryItems = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <section id="gallery" className="py-20 px-4 backdrop-blur-md bg-slate-800/40">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          Moments of DHAARA
        </h2>
        
        {/* Diamond Grid Gallery */}
        <div className="gallery-container">
          <ul className="diamond-grid">
            {galleryItems.map((item) => (
              <li key={item} className="diamond-item">
                <img 
                  src={galleryImage} 
                  alt={`DHAARA Moment ${item}`}
                  className="gallery-image"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
