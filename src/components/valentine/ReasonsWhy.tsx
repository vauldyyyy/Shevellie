import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
    "Your smile lights up my entire world 🌎",
    "The way you care for everyone around you 💕",
    "Your laugh is my favorite sound 🎶",
    "How you make even boring days feel special ✨",
    "Your incredible sense of style (Fashionista! 👗)",
    "The way you support my dreams 🚀",
    "Your warm and comforting hugs 🤗",
    "How you always know how to make me smile 😊",
    "Your kindness and gentle heart ❤️",
    "Just being you—perfect in every way 💖",
];

const ReasonsWhy = () => {
    const [index, setIndex] = useState<number | null>(null);

    const handleClick = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * reasons.length);
        } while (newIndex === index);
        setIndex(newIndex);
    };

    return (
        <section className="py-20 px-4 max-w-md mx-auto text-center">
            <motion.h2
                className="text-3xl md:text-4xl font-script text-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Why I Love You... 💌
            </motion.h2>

            <motion.div
                className="glass p-8 rounded-3xl cursor-pointer min-h-[200px] flex items-center justify-center flex-col gap-4 group transition-all hover:glow-rose"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClick}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <AnimatePresence mode="wait">
                    {index === null ? (
                        <motion.div
                            key="start"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <div className="text-4xl mb-2 group-hover:animate-bounce">🎁</div>
                            <p className="text-muted-foreground">Tap to reveal a reason</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                        >
                            <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                                "{reasons[index]}"
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default ReasonsWhy;
