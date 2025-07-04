"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="Hero" className="relative min-h-screen bg-[#F9F7F3]">
    
      <div className="absolute inset-0 bg-black/40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-90"
        >
          <source src="/Videos/HeroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative flex justify-center min-h-screen px-6 text-center pt-56 h-full pb-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-center justify-between gap-12"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-white drop-shadow-md leading-relaxed">
            Psychological Care for <br /> Change, Insight, and Well-Being
          </h1>

          <h2 className="text-white drop-shadow-xl text-base md:text-xl">
            Offering personalized psychotherapy for{" "}
            <span className="underline underline-offset-4">
              anxiety, trauma, and relationships
            </span>{" "}
            — available in-person or via secure Zoom sessions.
          </h2>

          <Link
            href="#Contact"
            className="inline-block px-6 py-3 text-sm font-medium text-white bg-sky-700 hover:bg-[rgba(14,165,233,0.5)] rounded-full shadow-md transition"
          >
            <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
