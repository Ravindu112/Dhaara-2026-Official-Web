"use client";
import { useState, useEffect } from 'react';
import { EVENT_CONFIG } from '../constants';

export default function LoadingScreen({ isVideoLoaded }) {
  const [shouldRender, setShouldRender] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let fallbackTimer;

    const hideLoading = () => {
      setIsExiting(true);
      setTimeout(() => {
        setShouldRender(false);
      }, 500);
    };

    if (isVideoLoaded) {
      hideLoading();
    } else {
      // Force exit after 1.5 seconds max to prevent infinite loading
      fallbackTimer = setTimeout(hideLoading, 1500);
    }

    return () => clearTimeout(fallbackTimer);
  }, [isVideoLoaded]);

  if (!shouldRender) return null;

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 ${isExiting ? 'animate-fade-out' : ''}`}>
      <div className="relative animate-scale-pulse">
        <div className="w-24 h-24 rounded-full border-4 border-transparent border-t-amber-400 border-b-orange-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-amber-500 text-xl animate-text-pulse">
          DHAARA{EVENT_CONFIG.year}
        </div>
      </div>
      <p className="mt-4 text-amber-400/80 font-light tracking-widest text-sm uppercase animate-text-pulse">
        Loading...
      </p>
    </div>
  );
}
