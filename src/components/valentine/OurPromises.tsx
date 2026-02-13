import { motion } from "framer-motion";

const promises = [
    {
        title: "I Promise To Stay Loyal — In Every Way.",
        desc: "Not just physically, but emotionally and mentally. My heart will not wander.",
    },
    {
        title: "I Promise To Respect You — In Private And In Public.",
        desc: "I will never insult, embarrass, or belittle you — especially in front of others.",
    },
    {
        title: "I Promise To Communicate, Not Accumulate.",
        desc: "I will talk through problems instead of letting resentment grow.",
    },
    {
        title: "I Promise To Grow With You.",
        desc: "As you evolve, I will evolve. We won’t outgrow each other — we’ll upgrade together.",
    },
    {
        title: "I Promise To Protect Our Relationship.",
        desc: "I won’t allow outsiders to create distance between us. Our bond comes first.",
    },
    {
        title: "I Promise To Choose You On Hard Days.",
        desc: "Love is easy when things are good. I promise to stay even when it’s difficult.",
    },
    {
        title: "I Promise To Respect Your Ambitions.",
        desc: "Your dreams matter. I will support your goals, not compete with them.",
    },
    {
        title: "I Promise To Argue With Respect.",
        desc: "No name-calling. No humiliation. No breaking each other down during anger.",
    },
    {
        title: "I Promise To Build A Future, Not Just Moments.",
        desc: "This isn’t temporary. I see long-term. I see marriage mindset.",
    },
    {
        title: "I Promise To Put Ego Aside For Us.",
        desc: "Winning arguments means nothing if we lose each other.",
    },
    {
        title: "I Promise To Be Your Safe Space.",
        desc: "A place where you can be vulnerable, be yourself, and be loved without judgment.",
    },
    {
        title: "I Promise To Never Stop Dating You.",
        desc: "No matter how much time passes, I will always pursue you like day one.",
    },
];

const OurPromises = () => {
    return (
        <section className="py-20 px-4 max-w-4xl mx-auto">
            <motion.h2
                className="text-4xl md:text-5xl font-script text-center text-foreground mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                My Promises To You 🤞
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {promises.map((promise, i) => (
                    <motion.div
                        key={i}
                        className="glass p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-primary/30 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />

                        <h3 className="text-xl font-bold text-foreground mb-3 font-serif leading-tight">
                            {promise.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {promise.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.p
                className="text-center text-muted-foreground mt-12 italic text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
            >
                Signed with all my heart, Vauldan ❤️
            </motion.p>
        </section>
    );
};

export default OurPromises;
