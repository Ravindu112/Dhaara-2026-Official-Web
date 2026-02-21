import React, { useState } from 'react';

export default function FloatingBookIcon() {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div 
      className="fixed bottom-8 right-8 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Animation and Glow Effect */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(251, 146, 60, 0.6), 0 0 40px rgba(251, 146, 60, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(251, 146, 60, 0.8), 0 0 60px rgba(251, 146, 60, 0.6);
          }
        }
        
        .floating-icon {
          animation: float 3s ease-in-out infinite;
        }
        
        .floating-icon.hovered {
          animation: none;
        }
        
        .glow-effect {
          animation: glow-pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Background Glow Circle */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-600/30 blur-xl"></div>

      {/* Main Button */}
      <button
        className={`floating-icon ${isHovered ? 'hovered' : ''} relative w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 shadow-xl transition-all transform hover:scale-110 flex items-center justify-center group glow-effect`}
        title="E-Souvenir"
        onClick={() => setShowPopup(true)}
      >
        {/* Book Icon SVG */}
        <svg
          className="w-8 h-8 text-white transition-transform group-hover:rotate-12"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 1h10a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" />
          <line x1="10" y1="3" x2="10" y2="19" stroke="white" strokeWidth="1.5" />
        </svg>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-amber-500/30" style={{ color: 'rgba(251, 191, 36, 0.85)' }}>
          E-Souvenir
        </div>

        {/* Pulse Ring Animation */}
        <div className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 group-hover:animate-pulse" style={{ borderColor: 'rgba(251, 191, 36, 0.85)' }}></div>
      </button>

      {/* Animated Particle Effect (Optional) */}
      <div className="absolute top-0 right-0 w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{
        animation: 'glow-pulse 1.5s ease-in-out infinite',
        boxShadow: '0 0 10px rgba(251, 146, 60, 0.8)'
      }}></div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg shadow-2xl border border-amber-500/30 p-6 max-w-sm w-full">
            <h3 className="text-2xl font-bold text-amber-400 mb-3">E-Souvenir</h3>
            <div className="bg-amber-500/10 border border-amber-500/50 rounded-lg p-4 mb-6">
              <p className="text-amber-400 font-semibold">🚧 Under Construction</p>
              <p className="text-gray-400 text-sm mt-2">
                The e-souvenir page is currently under construction. Please check back soon!
              </p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold py-2 px-4 rounded-lg transition-all transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
