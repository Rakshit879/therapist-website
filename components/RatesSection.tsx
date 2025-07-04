"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function RatesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="Rates"
      className="min-h-screen bg-gradient-to-b from-[#dbeafe] via-[#f0f9ff] to-[#e0f2fe] flex items-center justify-center px-4 py-32"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl w-full text-center"
      >
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-16">
          Rates and Insurance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-4">
          {[
            { title: "Individual Session", price: "$200" },
            { title: "Couples Session", price: "$240" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white shadow-xl rounded-3xl p-8 transition-all hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">{item.title}</h3>
              <p className="text-3xl font-light text-slate-700">{item.price}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white/80 rounded-3xl shadow-lg p-8 mb-16 max-w-3xl mx-auto hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold text-indigo-900 mb-6">Office Hours</h3>
          <div className="text-slate-700 space-y-4 text-lg md:text-xl font-light">
            <p>
              <span className="font-medium text-indigo-800">In-person:</span>{" "}
              Tue & Thu, <span className="font-semibold">10 AM – 6 PM</span>
            </p>
            <p>
              <span className="font-medium text-indigo-800">Virtual via Zoom:</span>{" "}
              Mon, Wed & Fri, <span className="font-semibold">1 PM – 5 PM</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-slate-700 text-lg md:text-xl font-light space-y-6 max-w-3xl mx-auto"
        >
          <p>
            I accept private pay only. I am in-network with
            <span className="font-medium text-slate-900"> BCBS</span> and
            <span className="font-medium text-slate-900"> Aetna</span>.
          </p>
          <p>
            For out-of-network plans, I’ve partnered with Mentaya using{" "}
            <a
              href="https://www.mentaya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline hover:text-sky-900"
            >
              this tool
            </a>{" "}
            to help you check your eligibility for reimbursement for my services.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
