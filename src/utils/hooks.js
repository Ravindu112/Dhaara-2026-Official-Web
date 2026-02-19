import { useEffect, useState } from 'react';

/**
 * Hook to detect if the viewport is mobile size
 * @param {number} breakpoint - Pixel breakpoint for mobile (default: 768)
 * @returns {boolean} True if viewport width is less than breakpoint
 */
export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

/**
 * Hook to handle video loading state
 * @returns {[boolean, function]} Loading state and setter
 */
export const useVideoLoading = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return [isVideoLoaded, handleVideoLoaded];
};
