import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ANNIVERSARY = new Date("2026-07-25T00:00:00");

const CountdownTimer = () => {
  const [time, setTime] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = ANNIVERSARY.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="py-16 px-4 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-script text-foreground mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Countdown to Our 1 Year Anniversary 💍
      </motion.h2>
      <p className="text-muted-foreground mb-8">July 25, 2026</p>
      <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
        {units.map((u) => (
          <motion.div
            key={u.label}
            className="glass rounded-2xl p-4 md:p-6 min-w-[80px] glow-rose"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <div className="text-3xl md:text-5xl font-bold text-gradient-rose">
              {String(u.value).padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">{u.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
