"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const LocalFlipbook = dynamic(() => import('./LocalFlipbook'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin"></div>
      <p className="text-amber-500 animate-pulse font-semibold">Loading PDF engine...</p>
    </div>
  )
});

export default function FloatingBookIcon() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
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
      </div>

      {/* Flipbook Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">

          {/* Close Background Overlay */}
          <div className="absolute inset-0" onClick={() => setShowPopup(false)}></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-6xl h-[95vh] bg-slate-900 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-amber-500/30 flex flex-col">

            {/* Header / Toolbar */}
            <div className="h-14 bg-slate-900 border-b border-amber-500/20 flex items-center justify-between px-6 z-10 shadow-md">
              <span className="text-amber-400 font-bold tracking-wider flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                E-SOUVENIR
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="/ES.pdf"
                  download="E-Souvenir.pdf"
                  className="flex items-center gap-2 text-sm font-semibold text-amber-500 bg-amber-500/10 hover:bg-amber-500 hover:text-white px-3 py-1.5 rounded-lg transition-all border border-amber-500/30 group"
                  title="Download E-Souvenir"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="text-xs sm:text-sm whitespace-nowrap">Download E-SOUVENIR</span>
                </a>

                <button
                  onClick={() => setShowPopup(false)}
                  className="text-gray-400 hover:text-white transition-all bg-white/5 hover:bg-red-500/20 hover:text-red-400 p-2 rounded-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
            </div>

            {/* Local Flipbook Container */}
            <div className="flex-1 w-full bg-slate-800 relative p-1 sm:p-2 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"></div>

              <LocalFlipbook pdfUrl="/ES.pdf" />

            </div>
          </div>
        </div>
      )}
    </>
  );
}
