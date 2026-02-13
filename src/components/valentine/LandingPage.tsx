import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onEnter: () => void;
}

const LandingPage = ({ onEnter }: Props) => {
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [exploding, setExploding] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const t1 = setTimeout(() => setShowText(true), 1500);
    const t2 = setTimeout(() => setShowButton(true), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleClick = () => {
    setExploding(true);
    const newHearts = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * window.innerWidth,
      y: (Math.random() - 0.5) * window.innerHeight,
    }));
    setHearts(newHearts);
    setTimeout(onEnter, 2000);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Rose petal */}
      <motion.span
        className="absolute text-4xl"
        initial={{ top: "-10%", left: "50%", rotate: 0 }}
        animate={{ top: "60%", left: "55%", rotate: 360 }}
        transition={{ duration: 4, ease: "easeInOut", delay: 0.3 }}
      >
        🌹
      </motion.span>

      {/* Heartbeat loader */}
      <motion.div
        className="text-6xl mb-8"
        animate={{ scale: [1, 1.3, 1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: 1 }}
      >
        💖
      </motion.div>

      {/* Main text */}
      <AnimatePresence>
        {showText && (
          <motion.div
            className="text-center px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-script text-rose leading-tight">
              For The Most Beautiful Girl
              <br />
              In My World
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-gold mt-4 font-script"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              — Shevellie D'costa ❤️
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enter button */}
      <AnimatePresence>
        {showButton && !exploding && (
          <motion.button
            className="mt-12 px-10 py-4 rounded-full bg-rose text-primary-foreground text-lg font-semibold animate-pulse-glow cursor-pointer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
          >
            Click If You Love Me 💕
          </motion.button>
        )}
      </AnimatePresence>

      {/* Heart explosion */}
      {exploding && hearts.map((h) => (
        <motion.span
          key={h.id}
          className="absolute text-2xl md:text-4xl pointer-events-none"
          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
          animate={{ x: h.x, y: h.y, opacity: 0, scale: 1.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ left: "50%", top: "50%" }}
        >
          {["💖", "💕", "💗", "💘", "✨", "🎉", "🌹"][h.id % 7]}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LandingPage;
