import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EasterEgg = () => {
  const [crowns, setCrowns] = useState<{ id: number; x: number }[]>([]);
  const [buffer, setBuffer] = useState("");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const next = (buffer + e.key).slice(-10).toLowerCase();
      setBuffer(next);
      if (next.endsWith("sleepqueen") || next.endsWith("sleep queen")) {
        setCrowns(Array.from({ length: 15 }, (_, i) => ({ id: Date.now() + i, x: Math.random() * 100 })));
        setBuffer("");
        setTimeout(() => setCrowns([]), 4000);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [buffer]);

  return (
    <AnimatePresence>
      {crowns.map((c) => (
        <motion.span
          key={c.id}
          className="fixed text-4xl pointer-events-none z-[100]"
          style={{ left: `${c.x}%` }}
          initial={{ top: "-10%", rotate: 0 }}
          animate={{ top: "110%", rotate: 360 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 + Math.random() * 2 }}
        >
          👑
        </motion.span>
      ))}
    </AnimatePresence>
  );
};

export default EasterEgg;
