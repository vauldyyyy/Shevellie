import { motion } from "framer-motion";

const FutureSection = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      {/* Stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-xs text-gold pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 + Math.random() * 3, delay: Math.random() * 2 }}
        >
          ✦
        </motion.span>
      ))}

      {/* Clouds */}
      {["☁️", "☁️", "☁️"].map((c, i) => (
        <motion.span
          key={i}
          className="absolute text-4xl md:text-6xl opacity-20"
          style={{ top: `${20 + i * 15}%` }}
          animate={{ x: ["-10%", "110%"] }}
          transition={{ repeat: Infinity, duration: 30 + i * 10, ease: "linear" }}
        >
          {c}
        </motion.span>
      ))}

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          className="flex justify-center gap-6 text-5xl md:text-7xl mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0 }}>🏠</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}>✈️</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }}>🌅</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}>👫</motion.span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-script text-foreground leading-snug"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          With You, I Don't Just See Today.
          <br />
          <span className="text-gradient-rose">I See Every Tomorrow.</span>
        </motion.h2>

        <motion.p
          className="text-muted-foreground mt-6 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          A home together. Adventures around the world. Growing old side by side.
          <br />
          That's my dream — and you're in every part of it.
        </motion.p>
      </div>
    </section>
  );
};

export default FutureSection;
