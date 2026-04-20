import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const words = ["Developer", "Artificial Intelligence", "AI Enthusiast"];
const ease = [0.4, 0, 0.2, 1];
const wordInterval = 1500;
const counterDuration = 4500;
const completionDelay = 800;

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((currentIndex) => {
        if (currentIndex >= words.length - 1) {
          window.clearInterval(interval);
          return currentIndex;
        }

        return currentIndex + 1;
      });
    }, wordInterval);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    let animationFrame;
    let completionTimeout;
    let startTime;

    const animateCounter = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const nextProgress = Math.min((elapsed / counterDuration) * 100, 100);

      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrame = window.requestAnimationFrame(animateCounter);
        return;
      }

      completionTimeout = window.setTimeout(() => {
        onCompleteRef.current();
      }, completionDelay);
    };

    animationFrame = window.requestAnimationFrame(animateCounter);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(completionTimeout);
    };
  }, []);

  return (
    <motion.div
      className='fixed inset-0 z-[9999] bg-bg'
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease }}
    >
      <motion.div
        className='absolute top-8 left-8 md:top-12 md:left-12 text-xs md:text-sm text-muted uppercase tracking-[0.3em]'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        Portfolio
      </motion.div>

      <div className='absolute inset-0 flex items-center justify-center'>
        <AnimatePresence mode='wait'>
          <motion.span
            key={wordIndex}
            className='text-4xl md:text-6xl lg:text-7xl font-display italic text-text/80'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease }}
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.div
        className='absolute bottom-8 right-8 md:bottom-12 md:right-12 text-6xl md:text-8xl lg:text-9xl font-display text-text tabular-nums'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        {Math.round(progress).toString().padStart(3, "0")}
      </motion.div>

      <div className='absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50'>
        <motion.div
          className='h-full origin-left'
          style={{
            background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.2, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
