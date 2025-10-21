// src/components/SplashScreen.js
import { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function SplashScreen({ onFinish = () => {} }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  // Letter animation
  const letterVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: i * 0.25, duration: 0.6, ease: "easeOut" }
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  // Steam/Smoke animation
  const steamVariants = {
    initial: { y: 20, opacity: 0, scale: 0.8 },
    animate: (i) => ({
      y: -(100 + i * 30),
      opacity: [0.5, 0.3, 0],
      scale: 1.1,
      transition: {
        delay: i * 0.4,
        duration: 3 + i * 0.4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeOut"
      }
    })
  };

  // Floating smoke
  const floatingSmokeVariants = {
    initial: { opacity: 0.2, scale: 0.8 },
    animate: {
      opacity: [0.2, 0.4, 0.2],
      scale: [0.8, 1.1, 0.9],
      x: ["-10%", "10%", "-5%"],
      y: ["5%", "-5%", "8%"],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const ignisLetters = ["I", "G", "N", "I", "S"];
  const innovationLetters = ["I", "N", "N", "O", "V", "A", "T", "I", "O", "N"];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      >
        {/* background glow */}
        <div className="absolute -inset-20 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-green-500/20 blur-3xl" />
          <div className="w-[28rem] h-[28rem] rounded-full bg-orange-500/10 blur-[140px]" />
        </div>

        {/* stacked words */}
        <div className="relative flex flex-col items-center space-y-4">
          {/* IGNIS */}
          <div className="flex space-x-2">
            {ignisLetters.map((letter, i) => (
              <motion.span
                key={`ignis-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
               className="text-6xl md:text-8xl lg:text-9xl font-extrabold 
           bg-gradient-to-r from-[#F58220] via-[#00712D] to-[#00712D] 
           text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]"

              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* INNOVATION */}
          <div className="flex space-x-1">
            {innovationLetters.map((letter, i) => (
              <motion.span
                key={`innovation-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                  className="text-2xl md:text-4xl lg:text-5xl font-bold 
                            bg-gradient-to-r from-[#F58220] via-[#00712D] to-[#00712D] 
                            text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* rising steam */}
        <div className="absolute inset-0 flex justify-center items-center">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              custom={i}
              variants={steamVariants}
              initial="initial"
              animate={reduce ? {} : "animate"}
              className="absolute w-12 h-20 md:w-16 md:h-28 rounded-full 
bg-gradient-to-t from-[#F58220]/30 via-[#00712D]/40 to-transparent blur-2xl"
              style={{ left: `${40 + i * 20}%`, transform: "translateX(-50%)" }}
            />
          ))}
        </div>

        {/* floating smoke */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={`smoke-${i}`}
            variants={floatingSmokeVariants}
            initial="initial"
            animate="animate"
            className="absolute w-24 h-24 rounded-full 
        bg-gradient-to-tr from-[#F58220]/20 via-[#00712D]/20 to-transparent blur-3xl"
            style={{
              top: `${20 + i * 15}%`,
              left: `${30 + i * 15}%`
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
