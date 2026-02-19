import { motion, AnimatePresence } from 'framer-motion';
import { EVENT_CONFIG } from '../constants';

export default function LoadingScreen({ isVideoLoaded }) {
  return (
    <AnimatePresence>
      {!isVideoLoaded && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="relative"
          >
            <div className="w-24 h-24 rounded-full border-4 border-t-amber-400 border-r-transparent border-b-orange-500 border-l-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center font-bold text-amber-500 text-xl animate-pulse">
              D{EVENT_CONFIG.year}
            </div>
          </motion.div>
          <p className="mt-4 text-amber-400/80 font-light tracking-widest text-sm uppercase animate-pulse">
            Loading...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
