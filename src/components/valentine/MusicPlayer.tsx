
import { motion } from "framer-motion";

const MusicPlayer = () => {
    return (
        <section className="py-10 px-4 max-w-md mx-auto">
            <motion.div
                className="glass rounded-3xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0eMD4v"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </motion.div>
        </section>
    );
};

export default MusicPlayer;
