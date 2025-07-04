"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface Stat {
  id: number;
  target: number;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    id: 1,
    target: 8,
    label: "Years Of practice",
    description:
      "Providing compassionate and effective Individual and Couples Therapy",
  },
  {
    id: 2,
    target: 500,
    label: "Sessions",
    description:
      "Helping individuals and couples heal, grow, and find purpose",
  },
];

export default function StatSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      const intervals = stats.map((stat, i) => {
        const increment = stat.target / 50;
        return setInterval(() => {
          setCounts((prev) => {
            const next = [...prev];
            if (next[i] < stat.target) {
              next[i] = Math.min(stat.target, Math.ceil(next[i] + increment));
            }
            return next;
          });
        }, 30);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [inView]);

  return (
    <section ref={ref} className="bg-slate-800 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <p className="text-4xl md:text-5xl font-bold text-white">
              {counts[i].toLocaleString()}+
            </p>
            <p className="text-xl font-semibold text-white">{stat.label}</p>
            <p className="text-gray-200 text-sm">{stat.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
