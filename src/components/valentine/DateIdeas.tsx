import { useState } from "react";
import { motion } from "framer-motion";

const dates = [
    "Picnic under the stars ✨",
    "Cooking class together 🍝",
    "Road trip to a hidden beach 🏖️",
    "Movie marathon with blanket fort 🎬",
    "Pottery making date 🎨",
    "Late night drive with good music 🚗",
    "Watching the sunrise together 🌅",
    "Amusement park adventure 🎢",
];

const DateIdeas = () => {
    const [idea, setIdea] = useState<string | null>(null);

    const generateIdea = () => {
        const random = dates[Math.floor(Math.random() * dates.length)];
        setIdea(random);
    };

    return (
        <section className="py-20 px-4 max-w-lg mx-auto text-center">
            <motion.div
                className="glass p-8 rounded-3xl border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-bold text-foreground mb-2">Future Date Generator 📅</h2>
                <p className="text-muted-foreground mb-6">What shall we do next?</p>

                <div className="h-24 flex items-center justify-center mb-6 bg-secondary/30 rounded-xl p-4">
                    {idea ? (
                        <motion.p
                            key={idea}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xl font-medium text-primary"
                        >
                            {idea}
                        </motion.p>
                    ) : (
                        <p className="text-muted-foreground/50 italic">Tap the button...</p>
                    )}
                </div>

                <motion.button
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-amber-100 font-bold text-lg shadow-xl cursor-pointer hover:shadow-pink-500/30 border border-white/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={generateIdea}
                >
                    Generate Idea ✨
                </motion.button>
            </motion.div>
        </section>
    );
};

export default DateIdeas;
