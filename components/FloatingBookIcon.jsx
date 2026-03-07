"use client";
import React, { useState } from 'react';

export default function FloatingBookIcon() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Background Glow Circle */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.3),rgba(234,88,12,0.3))] blur-2xl"></div>

      {/* Main Button */}
      <div className="animate-float hover:animate-none group">
        <button
          className="relative w-16 h-16 rounded-full bg-[linear-gradient(135deg,rgb(245,158,11),rgb(234,88,12))] shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex items-center justify-center transition-all duration-300 animate-glow-pulse group-hover:bg-[linear-gradient(135deg,rgb(251,191,36),rgb(249,115,22))] group-hover:scale-110"
          title="E-Souvenir"
          onClick={() => setShowPopup(true)}
        >
          {/* Book Icon SVG */}
          <svg
            className="w-8 h-8 text-white transition-transform duration-300 group-hover:rotate-12"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 1h10a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" />
            <line x1="10" y1="3" x2="10" y2="19" stroke="white" strokeWidth="1.5" />
          </svg>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-slate-900 border border-orange-400/30 text-amber-400/85 text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 pointer-events-none shadow-md transition-opacity duration-300 group-hover:opacity-100">
            E-Souvenir
          </div>

          {/* Pulse Ring Animation */}
          <div className="absolute inset-0 rounded-full border-2 border-amber-400/85 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
        </button>
      </div>

      {/* Animated Particle Effect */}
      <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-amber-400 animate-particle-glow"></div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-[4px] flex items-center justify-center z-50 p-4">
          <div className="bg-[linear-gradient(135deg,rgb(15,23,42),rgb(30,41,59))] rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-orange-400/30 p-6 max-w-sm w-full">
            <h3 className="text-2xl font-bold text-amber-400 mb-3">E-Souvenir</h3>
            <div className="bg-amber-500/10 border border-amber-500/50 rounded-lg p-4 mb-6">
              <p className="text-amber-400 font-semibold mb-2">🚧 Under Construction</p>
              <p className="text-gray-400 text-sm">
                The e-souvenir page is currently under construction. Please check back soon!
              </p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:from-amber-400 hover:to-orange-500 hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
