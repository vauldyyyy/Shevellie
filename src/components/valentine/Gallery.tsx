import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  { id: 1, caption: "Our first photo together 📸" },
  { id: 2, caption: "That smile that makes my day ☀️" },
  { id: 3, caption: "Late night adventures 🌙" },
  { id: 4, caption: "Your MasterChef moment 🍳" },
  { id: 5, caption: "Just being us 💕" },
  { id: 6, caption: "My favorite person 💖" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-script text-center text-foreground mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Moments That Mean Everything 📸
      </motion.h2>
      <p className="text-center text-muted-foreground mb-12">Click any photo to see the memory</p>

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            className="break-inside-avoid cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelected(photo.id)}
          >
            <div className="relative rounded-2xl overflow-hidden glass transition-shadow hover:glow-rose">
              <div
                className="w-full bg-secondary/50 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500"
                style={{ height: `${180 + (i % 3) * 60}px` }}
              >
                📷
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="absolute bottom-3 left-3 right-3 text-primary-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="glass rounded-3xl max-w-lg w-full p-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-64 rounded-2xl bg-secondary/50 flex items-center justify-center text-6xl mb-4">
                📷
              </div>
              <p className="text-center text-foreground font-script text-xl">
                {photos.find((p) => p.id === selected)?.caption}
              </p>
              <p className="text-center text-xs text-muted-foreground mt-2">
                Upload your real photo to replace this placeholder 💕
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
