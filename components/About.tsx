"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      id="About"
      className="min-h-screen bg-[#f4f9fb] flex flex-col items-center justify-center px-6 pt-40 pb-28"
    >

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-8 md:px-28 w-full flex flex-col md:flex-row md:items-start gap-16"
      >

        <div className="md:w-2/3 flex flex-col space-y-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#264653] order-1 transition-colors duration-300 hover:text-[#1d3557]">
            About Dr. Serena Blake
          </h2>

          <div className="md:hidden order-2 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <Image
                src="/Images/DoctorImage.jpg"
                alt="Dr. Serena Blake"
                width={320}
                height={420}
                className="object-cover w-[320px] h-[420px]"
              />
            </div>
          </div>

          <div className="text-[#4a6b78] text-sm font-light md:text-base leading-relaxed order-3 space-y-6">
            <p className="transition-colors duration-300 hover:text-[#1d3557]">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>
          </div>
        </div>

        <div className="hidden md:flex md:w-[350px] justify-end md:mt-10">
          <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Image
              src="/Images/DoctorImage.jpg"
              alt="Dr. Serena Blake"
              width={350}
              height={420}
              className="object-cover w-[350px] h-[420px]"
            />
          </div>
        </div>
      </motion.div>

      <div className="mt-30 w-full px-8 md:px-28">
        <hr className="border-t-[3px] border-[#a0bfc9] opacity-80" />
      </div>
    </div>
  );
}
