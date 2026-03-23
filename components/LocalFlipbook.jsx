"use client";
import React, { useState, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';

// Enable PDF worker from unpkg
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Raw CSS injection to forcefully prevent react-pdf from overflowing or forcing unwanted zooms
const CSS_INJECT = `
  .pdf-fit-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pdf-fit-container .react-pdf__Page {
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    min-width: 0 !important;
    min-height: 0 !important;
  }
  .pdf-fit-container .react-pdf__Page canvas {
    max-width: 100% !important;
    max-height: 100% !important;
    width: auto !important;
    height: auto !important;
    object-fit: contain !important;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  /* Optional custom scrollbar for zooming */
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.1);
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(245,158,11,0.5);
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(245,158,11,0.8);
  }
`;

const PageWrapper = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref} className="bg-white shadow-[inset_0_0_15px_rgba(0,0,0,0.1)] flex justify-center items-center cursor-pointer border border-gray-200 overflow-hidden w-full h-full" data-density="soft">
      <div className="pdf-fit-container p-2 sm:p-5">
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          width={800} // High-res render to ensure crisp text before CSS shrinks it perfectly
        />
      </div>
    </div>
  );
});
PageWrapper.displayName = 'PageWrapper';

export default function LocalFlipbook({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const flipBookRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const nextButtonClick = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const prevButtonClick = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-slate-800">
      <style dangerouslySetInnerHTML={{ __html: CSS_INJECT }} />

      <div className="flex-1 w-full h-full relative ">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="min-w-full min-h-full"
          loading={
            <div className="flex flex-col items-center justify-center h-full gap-4 mt-32">
              <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin"></div>
              <p className="text-amber-500 animate-pulse font-semibold">Reading PDF & Generating Flipbook...</p>
            </div>
          }
          error={
            <div className="text-red-500 p-4 bg-red-500/10 rounded-lg mt-32 text-center mx-auto max-w-md">Failed to load the PDF. Make sure {pdfUrl} exists.</div>
          }
        >
          {numPages && (
            <div className="w-full h-full flex justify-center items-center p-4">
              <div className="w-[85%] h-[85%] sm:w-[80%] sm:h-[80%] flex justify-center items-center relative -translate-y-4 sm:-translate-y-8">
                <HTMLFlipBook
                  ref={flipBookRef}
                  width={500}
                  height={707}
                  size="stretch"
                  minWidth={315}
                  maxWidth={1000}
                  minHeight={420}
                  maxHeight={1414}
                  maxShadowOpacity={0.6}
                  showCover={true}
                  mobileScrollSupport={true}
                  usePortrait={true}
                  className="flipbook shadow-2xl"
                >
                  {Array.from(new Array(numPages), (el, index) => (
                    <PageWrapper key={`page_${index + 1}`} pageNumber={index + 1} />
                  ))}
                </HTMLFlipBook>
              </div>
            </div>
          )}
        </Document>
      </div>

      {/* Floating UI Controls */}
      {numPages && (
        <>
          {/* Left Arrow */}
          <button
            onClick={prevButtonClick}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-slate-900/80 hover:bg-amber-500 text-white rounded-full p-3 sm:p-4 shadow-xl border border-white/10 transition-colors hover:scale-110 active:scale-95"
            title="Previous Page"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextButtonClick}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-slate-900/80 hover:bg-amber-500 text-white rounded-full p-3 sm:p-4 shadow-xl border border-white/10 transition-colors hover:scale-110 active:scale-95"
            title="Next Page"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
          </button>

        </>
      )}
    </div>
  );
}
