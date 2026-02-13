import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Quiz Game ───
const quizQuestions = [
  {
    q: "What do I love most about you?",
    options: ["Your smile", "Your kindness", "The way you care", "All of the above"],
    correct: 3,
  },
  {
    q: "Who falls asleep faster?",
    options: ["Vauldan", "Shevellie (Sleep Queen 👑)"],
    correct: 1,
  },
  {
    q: "Where did we meet?",
    options: ["School", "Online", "Coffee shop", "Through friends"],
    correct: 1,
  },
  {
    q: "What's my favorite thing about our late night talks?",
    options: ["The jokes", "The deep convos", "Hearing your sleepy voice", "Everything"],
    correct: 3,
  },
];

const QuizGame = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [hearts, setHearts] = useState<number[]>([]);

  const handleAnswer = (idx: number) => {
    if (idx === quizQuestions[current].correct) {
      setScore(score + 1);
      setFeedback("💖 Correct! You know me so well!");
      setHearts(Array.from({ length: 8 }, (_, i) => i));
    } else {
      setFeedback("Hmm… I expected better from you 😜");
    }
    setTimeout(() => {
      setFeedback(null);
      setHearts([]);
      if (current + 1 < quizQuestions.length) {
        setCurrent(current + 1);
      } else {
        setDone(true);
      }
    }, 1500);
  };

  if (done) {
    return (
      <motion.div className="text-center p-8" initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <div className="text-5xl mb-4">💘</div>
        <h3 className="text-2xl font-script text-foreground">
          You scored {score}/{quizQuestions.length}!
        </h3>
        <p className="text-muted-foreground mt-2">
          {score === quizQuestions.length ? "Perfect! You know me perfectly! 💕" : "Not bad! But there's always more to learn about each other 😘"}
        </p>
        <button className="mt-4 px-6 py-2 rounded-full bg-primary text-primary-foreground cursor-pointer" onClick={() => { setCurrent(0); setScore(0); setDone(false); }}>
          Play Again
        </button>
      </motion.div>
    );
  }

  return (
    <div className="relative p-6">
      <p className="text-sm text-muted-foreground mb-2">Question {current + 1}/{quizQuestions.length}</p>
      <h3 className="text-xl font-semibold text-foreground mb-6">{quizQuestions[current].q}</h3>
      <div className="grid gap-3">
        {quizQuestions[current].options.map((opt, i) => (
          <motion.button
            key={i}
            className="w-full text-left p-4 rounded-xl glass cursor-pointer text-foreground hover:glow-rose transition-shadow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleAnswer(i)}
          >
            {opt}
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {feedback && (
          <motion.p
            className="mt-4 text-center text-lg font-semibold text-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {feedback}
          </motion.p>
        )}
      </AnimatePresence>
      {hearts.map((h) => (
        <motion.span
          key={h}
          className="absolute text-2xl pointer-events-none"
          initial={{ x: "50%", y: "50%", opacity: 1 }}
          animate={{
            x: `${50 + (Math.random() - 0.5) * 80}%`,
            y: `${(Math.random() - 0.5) * 80}%`,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
        >
          💖
        </motion.span>
      ))}
    </div>
  );
};

// ─── Catch Hearts Game ───
const CatchHeartsGame = () => {
  const [basketX, setBasketX] = useState(50);
  const [score, setScore] = useState(0);
  const [fallingHearts, setFallingHearts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [message, setMessage] = useState("");
  const [gameActive, setGameActive] = useState(false);

  const startGame = () => {
    setScore(0);
    setMessage("");
    setGameActive(true);
    setFallingHearts([]);
  };

  const handleMove = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setBasketX(Math.max(5, Math.min(95, pct)));
  }, []);

  useEffect(() => {
    if (!gameActive) return;
    const interval = setInterval(() => {
      setFallingHearts((prev) => [
        ...prev,
        { id: Date.now(), x: 5 + Math.random() * 90, y: 0 },
      ]);
    }, 800);
    return () => clearInterval(interval);
  }, [gameActive]);

  useEffect(() => {
    if (!gameActive) return;
    const interval = setInterval(() => {
      setFallingHearts((prev) => {
        const next: typeof prev = [];
        for (const h of prev) {
          const newY = h.y + 4;
          if (newY > 85 && Math.abs(h.x - basketX) < 12) {
            setScore((s) => {
              const ns = s + 1;
              if (ns === 10) setMessage("You caught my heart. 💕");
              if (ns === 25) setMessage("Okay fine, you win. I'm officially yours. 💘");
              return ns;
            });
          } else if (newY < 100) {
            next.push({ ...h, y: newY });
          }
        }
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [gameActive, basketX]);

  return (
    <div className="p-6 text-center">
      {!gameActive ? (
        <div>
          <div className="text-5xl mb-4">💝</div>
          <p className="text-muted-foreground mb-4">Catch falling hearts with your basket!</p>
          <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground cursor-pointer" onClick={startGame}>
            Start Game
          </button>
        </div>
      ) : (
        <div
          className="relative h-72 rounded-2xl bg-secondary/30 overflow-hidden cursor-none select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          <div className="absolute top-2 left-4 text-foreground font-semibold">Score: {score}</div>
          {fallingHearts.map((h) => (
            <div
              key={h.id}
              className="absolute text-2xl transition-none"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
            >
              💖
            </div>
          ))}
          <div
            className="absolute bottom-2 text-3xl transition-transform duration-75"
            style={{ left: `${basketX}%`, transform: "translateX(-50%)" }}
          >
            🧺
          </div>
        </div>
      )}
      {message && (
        <motion.p
          className="mt-4 text-lg font-script text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {message}
        </motion.p>
      )}
    </div>
  );
};

// ─── Love Calculator ───
const LoveCalculator = () => {
  const [calculated, setCalculated] = useState(false);

  return (
    <div className="p-6 text-center">
      <div className="text-5xl mb-4">💘</div>
      <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
        <span className="px-4 py-2 glass rounded-full text-foreground font-semibold">Shevellie D'costa</span>
        <span className="text-2xl">+</span>
        <span className="px-4 py-2 glass rounded-full text-foreground font-semibold">Vauldan D'Souza</span>
      </div>
      {!calculated ? (
        <motion.button
          className="px-8 py-3 rounded-full bg-primary text-primary-foreground cursor-pointer animate-pulse-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCalculated(true)}
        >
          Calculate Love 💕
        </motion.button>
      ) : (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          <div className="text-6xl md:text-8xl font-bold text-gradient-rose mb-2">∞%</div>
          <p className="text-lg text-muted-foreground font-script">Because math cannot measure this 💖</p>
          <div className="mt-4 flex justify-center gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.span
                key={i}
                className="text-xl"
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
              >
                ✨
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

// ─── Main Games Section ───
const LoveGames = () => {
  const [activeGame, setActiveGame] = useState(0);

  const games = [
    { title: "How Well Do You Know Me? 💖", component: <QuizGame /> },
    { title: "Catch The Hearts 💝", component: <CatchHeartsGame /> },
    { title: "Love Calculator 💘", component: <LoveCalculator /> },
  ];

  return (
    <section className="py-20 px-4 max-w-2xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-script text-center text-foreground mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Fun With My Favorite Person 🎮
      </motion.h2>
      <p className="text-center text-muted-foreground mb-10">Pick a game and let's play!</p>

      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {games.map((g, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
              activeGame === i
                ? "bg-primary text-primary-foreground glow-rose"
                : "glass text-foreground"
            }`}
            onClick={() => setActiveGame(i)}
          >
            {g.title}
          </button>
        ))}
      </div>

      <motion.div
        className="glass rounded-2xl overflow-hidden"
        key={activeGame}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {games[activeGame].component}
      </motion.div>
    </section>
  );
};

export default LoveGames;
