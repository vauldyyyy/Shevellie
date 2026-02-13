import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.button
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center text-xl cursor-pointer"
      whileHover={{ scale: 1.1, rotate: 20 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDark(!dark)}
      title={dark ? "Light mode" : "Night mode"}
    >
      {dark ? "☀️" : "🌙"}
    </motion.button>
  );
};

export default DarkModeToggle;
