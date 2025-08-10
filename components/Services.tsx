"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const focusAreas = [
  {
    title: "Anxiety & Stress Management",
    image: "/Images/anxiety-and-stress-management.jpg",
    description:
      "Anxiety and stress can feel overwhelming, but with the right tools and support, you can regain a sense of calm and control. Our anxiety and stress management sessions help you build coping strategies, reduce daily tension, and find balance, so you can thrive even in the face of life's challenges.",
  },
  {
    title: "Relationship Counseling",
    image: "/Images/relationship-counselling.jpg",
    description:
      "Healthy relationships are built on trust, communication, and understanding. Whether you're navigating challenges, improving connection, or seeking to strengthen your bond, relationship counseling provides the tools and support to foster deeper intimacy and resolve conflicts, guiding you towards a more fulfilling partnership.",
  },
  {
    title: "Trauma Recovery",
    image: "/Images/trauma-recovery.jpg",
    description:
      "Whether you're navigating burnout, compassion fatigue, imposter syndrome, or perfectionism, the pressures of caring for others can take a toll on your well-being. Whether you're in training, starting your career, or reflecting on years of service in healthcare, we can help you address the unique stressors you face both professionally and personally, fostering balance and healing along the way.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="Services" className="bg-[#e6edf3] py-16 px-6 text-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-4xl font-normal mb-20 text-[#1e293b]">
          Areas of Focus
        </h2>

        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-sm sm:text-base w-full sm:w-80 transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden mb-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={area.image}
                  alt={area.title}
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
              <h1 className="font-medium leading-relaxed mb-4 text-xl sm:text-2xl text-[#1e293b] hover:text-[#334155] transition-colors duration-300">
                {area.title}
              </h1>
              <p className="text-sm leading-loose font-light text-[#475569] max-w-xs">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
