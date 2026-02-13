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
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />

        {milestones.map((m, i) => (
          <motion.div
            key={i}
            className={`relative flex items-start mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Node */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
              <motion.button
                className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl shadow-lg cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              >
                {m.icon}
              </motion.button>
            </div>

            {/* Content */}
            <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <motion.div
                className="glass rounded-2xl p-5 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              >
                <h3 className="text-xl font-script text-foreground">{m.title}</h3>
                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground mt-3 leading-relaxed">{m.message}</p>
                      <div className="mt-4 rounded-xl overflow-hidden bg-secondary/50">
                        <img
                          src={m.image}
                          alt={m.title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
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
