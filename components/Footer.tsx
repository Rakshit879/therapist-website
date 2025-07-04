"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer
      ref={ref}
      className="py-16 px-4 text-center text-slate-700 bg-gradient-to-b from-[#dbeafe] via-[#e0f2fe] to-[#f0f9ff]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <h2 className="text-2xl md:text-3xl font-serif font-medium text-indigo-900">
          Dr. Serena Blake,
          <br />
          PsyD (Clinical Psychologist)
        </h2>

        <p className="text-base">
          <a
            href="mailto:serena@blakepsychology.com"
            className="underline hover:text-sky-700 transition"
          >
            serena@blakepsychology.com
          </a>
        </p>

        <p className="text-base">
          Phone:{" "}
          <a
            href="tel:+13235550192"
            className="underline hover:text-sky-700 transition"
          >
            (323) 555-0192
          </a>{" "}
          Fax: (323) 555-0192
        </p>

        <p className="text-base">
          1287 Maplewood Drive, Los Angeles, CA 90026
        </p>

        <div className="flex justify-center gap-6 flex-wrap text-sm">
          <a href="#Hero" className="underline hover:text-sky-700">
            Home
          </a>
          <a href="#About" className="underline hover:text-sky-700">
            About
          </a>
          <a href="#Services" className="underline hover:text-sky-700">
            Services
          </a>
          <a href="#Faqs" className="underline hover:text-sky-700">
            FAQ
          </a>
          <a href="#Contact" className="underline hover:text-sky-700">
            Contact
          </a>
        </div>

        <p className="text-xs text-slate-600 pt-4">
          © 2025 Dr. Serena Blake, PsyD (Clinical Psychologist). All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
