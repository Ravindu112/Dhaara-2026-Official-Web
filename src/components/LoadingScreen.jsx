import { useState, useEffect } from 'react';
import { EVENT_CONFIG } from '../constants';
import '../styles/loading-screen.css';

export default function LoadingScreen({ isVideoLoaded }) {
  const [shouldRender, setShouldRender] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isVideoLoaded) {
      setIsExiting(true);
      // Wait for fade animation to complete before removing from DOM
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500); // Match fade-out duration
      return () => clearTimeout(timer);
    }
  }, [isVideoLoaded]);

  if (!shouldRender) return null;

  return (
    <div className={`loading-screen ${isExiting ? 'fade-exit' : ''}`}>
      <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
        <div className="loading-year">
          DHAARA{EVENT_CONFIG.year}
        </div>
      </div>
      <p className="loading-text">
        Loading...
      </p>
    </div>
  );
}
