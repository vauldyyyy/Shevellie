
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; x: number; scale: number; speed: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 100,
          scale: 0.5 + Math.random() * 0.5,
          speed: 15 + Math.random() * 10,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Cleanup old hearts
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now();
      setHearts((prev) => prev.filter((h) => now - h.id < h.speed * 1000));
    }, 5000);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: "-20vh",
              opacity: [0, 1, 1, 0],
              x: [0, Math.sin(h.id) * 50, 0], // Gentle sway
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: h.speed, ease: "linear" }}
            className="absolute text-rose-300/20"
            style={{
              left: `${h.x}%`,
              fontSize: `${h.scale * 2}rem`,
            }}
          >
            ❤
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingHearts;
