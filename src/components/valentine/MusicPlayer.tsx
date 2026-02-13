
import { motion } from "framer-motion";
import { useState } from "react";

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-10 px-4 max-w-md mx-auto">
            <motion.div
                className="glass rounded-3xl p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                <div className="flex items-center gap-4">
                    <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-400 to-orange-300 flex items-center justify-center shadow-lg"
                        animate={{ rotate: isPlaying ? 360 : 0 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="w-4 h-4 bg-background rounded-full" />
                    </motion.div>

                    <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground">Our Song 🎵</h3>
                        <p className="text-sm text-muted-foreground">Perfect - Ed Sheeran</p>
                    </div>

                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:scale-105 transition-transform"
                    >
                        {isPlaying ? "⏸" : "▶"}
                    </button>
                </div>

                {/* Fake Progress Bar */}
                <div className="mt-4 w-full h-1 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: isPlaying ? "100%" : "30%" }}
                        transition={{ duration: isPlaying ? 30 : 0, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default MusicPlayer;
