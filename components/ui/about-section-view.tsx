"use client";

import Image from "next/image";
import { Check, Flower } from "lucide-react";
import { motion, Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export const AboutSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="py-6 w-full px-2"
    >
      <div className="flex flex-col sm:flex-row max-w-6xl w-full mx-auto justify-between items-center gap-6">
        <div className="flex flex-col items-start w-full sm:w-1/2 gap-2 p-1">
          <motion.span
            variants={item}
            className="text-[14px] font-sans text-white rounded-md px-4 py-1 border bg-emerald-600 border-primary font-medium"
          >
            About us
          </motion.span>

          <motion.p
            variants={item}
            className="text-neutral-800 font-sans font-semibold tracking-tighter text-2xl md:text-4xl"
          >
            Advanced medical <br /> care with compassion
          </motion.p>

          <motion.div
            variants={item}
            className="group relative overflow-hidden rounded-md border border-neutral-100"
          >
            <Image
              src="/images/doctor-1.png"
              alt="doctor-image"
              height={420}
              width={420}
              loading="lazy"
              className="object-cover rounded-md w-full h-full"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/60 via-primary/40 to-transparent" />
          </motion.div>
        </div>

        <div className="flex flex-col w-full sm:w-1/2 gap-2">
          <motion.div
            variants={item}
            className="relative w-full overflow-hidden h-72 rounded-md border border-neutral-100"
          >
            <Image
              src="/images/doctor-2.png"
              alt="doctor-image"
              fill
              loading="lazy"
              className="object-cover rounded-md"
            />
          </motion.div>

          <div className="w-full flex flex-col sm:flex-row gap-2">
            <motion.div
              variants={item}
              className="w-full flex flex-col gap-3 p-1"
            >
              {[
                "Expert Medical Team",
                "AI-Powered Health Care",
                "Smart Doctor Matching",
                "24/7 Emergency Support",
              ].map((text) => (
                <p
                  key={text}
                  className="font-sans flex gap-2 items-center font-medium text-neutral-800 text-[16px]"
                >
                  <span className="w-4 h-4 rounded-full flex justify-center items-center bg-green-400 border border-green-300">
                    <Check className="text-white size-3" />
                  </span>
                  {text}
                </p>
              ))}

              <button className="mt-2 text-[16px] font-sans font-medium text-white rounded-md border border-primary bg-emerald-600 tracking-tighter px-4 py-1.5">
                More About us
              </button>
            </motion.div>

            <motion.div
              variants={item}
              className="w-full py-8 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 shadow-emerald-500/30 flex justify-center items-center"
            >
              <div className="flex flex-col gap-2 items-center">
                <span className="w-12 h-12 bg-white flex justify-center items-center rounded-full border border-neutral-100">
                  <Flower className="size-8 text-green-400" />
                </span>
                <p className="text-center font-sans font-medium text-white text-[16px]">
                  <strong className="text-2xl font-semibold">2+</strong>
                  <br />
                  Years of Medical <br /> Experience
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
