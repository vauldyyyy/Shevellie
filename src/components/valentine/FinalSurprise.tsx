import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FinalSurprise = () => {
  const [answered, setAnswered] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [fireworks, setFireworks] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleYes = () => {
    setAnswered(true);
    setFireworks(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 600,
        y: (Math.random() - 0.5) * 600,
      }))
    );
  };

  const handleNoHover = () => {
    setNoPos({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 100,
    });
  };

  return (
    <section className="relative py-32 px-4 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-black/80" />

      <div className="relative z-10 text-center max-w-xl">
        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div key="question" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                You Are My Favorite Notification.
              </motion.p>
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                My Favorite Voice.
              </motion.p>
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                My Favorite Person.
              </motion.p>

              <motion.h2
                className="text-3xl md:text-5xl font-script text-foreground mb-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.5, type: "spring" }}
              >
                Will You Always Be Mine? 💍
              </motion.h2>

              <motion.div
                className="flex justify-center gap-6 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.5 }}
              >
                <motion.button
                  className="px-10 py-4 rounded-full bg-primary text-primary-foreground text-lg font-semibold animate-pulse-glow cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYes}
                >
                  YES 💖
                </motion.button>
                <motion.button
                  className="px-10 py-4 rounded-full glass text-foreground text-lg cursor-pointer"
                  animate={{ x: noPos.x, y: noPos.y }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  onClick={handleNoHover}
                >
                  No
                </motion.button>
              </motion.div>
              {(noPos.x !== 0 || noPos.y !== 0) && (
                <motion.p
                  className="mt-6 text-lg text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Wrong Answer 😜 Try Again
                </motion.p>
              )}
            </motion.div>
          ) : (
            <motion.div key="answer" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="relative">
              {fireworks.map((f) => (
                <motion.span
                  key={f.id}
                  className="absolute text-xl md:text-3xl pointer-events-none"
                  style={{ left: "50%", top: "50%" }}
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{ x: f.x, y: f.y, opacity: 0 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                >
                  {["💖", "💕", "✨", "🎆", "🌹", "💗", "🎉"][f.id % 7]}
                </motion.span>
              ))}
              <motion.div
                className="text-7xl md:text-9xl mb-6"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                💖
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-script text-foreground mb-4">
                I Love You Forever
              </h2>
              <p className="text-2xl md:text-3xl font-script text-gradient-rose">
                Shevellie D'costa ❤️
              </p>
              <p className="text-muted-foreground mt-6">— Vauldan D'Souza, forever yours 💍</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FinalSurprise;
