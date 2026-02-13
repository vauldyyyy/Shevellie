import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const letters = [
  {
    title: "Why I Love You",
    emoji: "💖",
    content:
      "Shevellie,\n\nYou came into my life so unexpectedly. What started as just a message turned into something I never want to lose. I love how you care, how you laugh, how you make even normal days feel special.\n\nYou are my peace, my chaos, my everything.\n\nForever yours,\nVauldan ❤️",
  },
  {
    title: "My Favorite Things About You",
    emoji: "🍳",
    content:
      "I love that you love to sleep — because it's cute watching you pretend you're not tired.\n\nI love that you love to cook — because one day I'll proudly say my girlfriend makes the best food.\n\nAnd I love that you love to travel — because I can't wait to explore the world with you.\n\nEvery little thing about you is my favorite thing. 💕",
  },
  {
    title: "Our Future",
    emoji: "🌙",
    content:
      "One day we'll look back at these months and smile at how everything started online.\n\nAnd we'll laugh knowing that the best love stories don't need perfect beginnings — just the right person.\n\nI found the right person in you. 🌹",
  },
  {
    title: "Almost Seven Months",
    emoji: "💞",
    content:
      "Seven months may not sound like forever.\n\nBut with you, it feels like the start of something that is.\n\nEvery moment, every call, every sleepy 'goodnight' — they all mean more to me than you'll ever know.\n\nHere's to seven months and a lifetime more. ❤️",
  },
  {
    title: "Open When You're Sad",
    emoji: "🌍",
    content:
      "Hey beautiful,\n\nIf you're reading this, you're probably not having the best day. But I want you to know — you are the strongest, most incredible person I know.\n\nBad days don't last, but we do.\n\nI'm always here. Always.\n\nI love you more than words,\nVauldan 💖",
  },
];

const LoveLetters = () => {
  const [openLetter, setOpenLetter] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-script text-center text-foreground mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Digital Love Letters 💌
      </motion.h2>
      <p className="text-center text-muted-foreground mb-12">Tap an envelope to read what's inside</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {letters.map((letter, i) => (
          <motion.button
            key={i}
            className="flex flex-col items-center gap-2 p-6 glass rounded-2xl cursor-pointer w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpenLetter(i)}
          >
            <motion.span
              className="text-5xl"
              animate={openLetter === i ? { rotateY: 180 } : { rotateY: 0 }}
            >
              {openLetter === i ? letter.emoji : "✉️"}
            </motion.span>
            <span className="text-sm font-medium text-foreground text-center">{letter.title}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {openLetter !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenLetter(null)}
          >
            <motion.div
              className="glass rounded-3xl max-w-md w-full p-8 max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.5, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: -90 }}
              transition={{ type: "spring", bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-4">
                <span className="text-4xl">{letters[openLetter].emoji}</span>
                <h3 className="text-2xl font-script text-foreground mt-2">{letters[openLetter].title}</h3>
              </div>
              <p className="text-foreground/90 whitespace-pre-line leading-relaxed font-light text-sm md:text-base">
                {letters[openLetter].content}
              </p>
              <button
                className="mt-6 w-full py-2 rounded-full bg-primary text-primary-foreground cursor-pointer"
                onClick={() => setOpenLetter(null)}
              >
                Close with love 💕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LoveLetters;
