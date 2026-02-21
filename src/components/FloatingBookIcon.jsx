import React, { useState } from 'react';
import '../styles/floating-book.css';

export default function FloatingBookIcon() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="floating-book-container">
      {/* Background Glow Circle */}
      <div className="glow-circle"></div>

      {/* Main Button */}
      <div className="floating-icon">
        <button
          className="floating-icon-button"
          title="E-Souvenir"
          onClick={() => setShowPopup(true)}
        >
          {/* Book Icon SVG */}
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 1h10a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" />
            <line x1="10" y1="3" x2="10" y2="19" stroke="white" strokeWidth="1.5" />
          </svg>

          {/* Tooltip */}
          <div className="floating-tooltip">
            E-Souvenir
          </div>

          {/* Pulse Ring Animation */}
          <div className="pulse-ring"></div>
        </button>
      </div>

      {/* Animated Particle Effect */}
      <div className="particle-dot"></div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">E-Souvenir</h3>
            <div className="modal-notice">
              <p className="modal-notice-title">🚧 Under Construction</p>
              <p className="modal-notice-text">
                The e-souvenir page is currently under construction. Please check back soon!
              </p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="modal-close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
