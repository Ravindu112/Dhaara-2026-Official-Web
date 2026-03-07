import { useState, useCallback } from 'react';

export const useVideoLoading = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const handleVideoLoaded = useCallback(() => {
        setIsVideoLoaded(true);
    }, []);
    return [isVideoLoaded, handleVideoLoaded];
};
