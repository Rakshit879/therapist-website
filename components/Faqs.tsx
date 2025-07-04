"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
];

export default function FAQPage() {
  const [openStates, setOpenStates] = useState<boolean[]>(Array(faqs.length).fill(false));

  const toggle = (index: number) => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="Faqs"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#e0f2fe] to-[#f1f5f9] flex flex-col items-center justify-center py-32 px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-semibold text-slate-800 mb-16"
      >
        Frequently Asked Questions
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="md:px-10 w-full space-y-2"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15 }}
            className="border-b border-slate-300 transition duration-300 bg-white/70 rounded-xl shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-4 py-4 text-left group hover:bg-sky-50 transition-colors duration-300 rounded-t-xl"
            >
              <div className="flex items-center gap-3">
                <ChevronRightIcon
                  className={`h-5 w-5 text-sky-600 transform transition-transform duration-300 ${
                    openStates[index] ? "rotate-90" : ""
                  }`}
                />
                <span className="text-slate-800 text-lg md:text-xl font-medium group-hover:text-sky-800 transition-colors duration-300">
                  {faq.question}
                </span>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {openStates[index] && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-slate-600 text-sm md:text-base font-light leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
