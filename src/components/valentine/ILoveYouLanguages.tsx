import { motion } from "framer-motion";

const phrases = [
  "I Love You", "Te Amo", "Je T'aime", "Ich Liebe Dich", "愛してる",
  "사랑해", "Ti Amo", "Я тебя люблю", "أحبك", "Mahal Kita",
  "Eu Te Amo", "मैं तुमसे प्यार करता हूँ", "Ik Hou Van Je",
];

const ILoveYouLanguages = () => {
  return (
    <div className="py-16 overflow-hidden">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...phrases, ...phrases].map((p, i) => (
          <span key={i} className="text-lg md:text-xl font-script text-primary/60">
            {p} 💕
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ILoveYouLanguages;
