import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const milestones = [
  {
    icon: "🌐",
    title: "The Day We Met",
    message: "What started as just another online conversation turned into the best decision of my life.",
    image: "/images/first.jpeg",
  },
  {
    icon: "💬",
    title: "The Late Night Talks",
    message: "From random chats to 'don't sleep yet' conversations. Every night with you felt like a dream I never wanted to wake up from.",
    image: "/images/sleep.jpeg",
  },
  {
    icon: "🤱",
    title: "The Mommy Era",
    message: "Seeing you care for everyone around you with such warmth and love. You're going to be the most amazing mom one day.",
    image: "/images/mom.jpeg",
  },
  {
    icon: "👗",
    title: "The Fashionista",
    message: "You have an impeccable sense of style. You shine in everything you wear, and I love seeing you express yourself.",
    image: "/images/fashion.jpeg",
  },
  {
    icon: "✈️",
    title: "The Travel Dreams",
    message: "One day, we're going to explore the world together. Paris, Bali, Tokyo — anywhere with you is paradise.",
    image: "/images/travel.jpeg",
  },
  {
    icon: "❤️",
    title: "Almost Seven Months",
    message: "And somehow every day with you still feels new. Seven months may not sound like forever, but with you, it feels like the start of something that is.",
    image: "/images/7.jpeg",
  },
];

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-script text-center text-foreground mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        From A Random Message To My Favorite Person 💕
      </motion.h2>
      <p className="text-center text-muted-foreground mb-12">Everything I ever looked for, all wrapped into one person.</p>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 -translate-x-1/2" />

        {milestones.map((m, i) => (
          <motion.div
            key={i}
            className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.1, type: "spring", bounce: 0.4 }}
          >
            {/* Node */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
              <motion.button
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl shadow-lg cursor-pointer border-4 border-background"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              >
                {m.icon}
              </motion.button>
            </div>

            {/* Content */}
            <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <motion.div
                className="glass rounded-2xl p-6 cursor-pointer border border-white/20 hover:border-primary/30 transition-colors"
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              >
                <h3 className="text-xl font-script text-foreground flex items-center gap-2">
                  {m.title}
                  {expandedIndex === i ? (
                    <span className="text-xs opacity-50">▲</span>
                  ) : (
                    <span className="text-xs opacity-50">▼</span>
                  )}
                </h3>
                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "anticipate" }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground mt-3 leading-relaxed border-t border-border/50 pt-3">
                        {m.message}
                      </p>
                      <motion.div
                        className="mt-4 rounded-xl overflow-hidden bg-secondary/50 shadow-inner"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <img
                          src={m.image}
                          alt={m.title}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
