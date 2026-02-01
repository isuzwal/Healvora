"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion, Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
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

export const TestimonialsSection = () => {
  return (
    <motion.section
      className="w-full py-16 px-4 bg-white"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Header */}
      <motion.div
        variants={item}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <p className="text-sm font-medium text-emerald-600">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mt-2">
          Experts Dedicated to Your Health
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Left */}
        <motion.div variants={container} className="grid gap-6">
          <motion.div variants={item}>
            <TestimonialCard
              text="We are honored by the trust our patients place in us. Their experiences reflect our commitment to compassionate care, medical excellence, and patient safety."
              name="Camilla Scianna"
              role="Avocado, Manager"
              avatar="/images/first.png"
            />
          </motion.div>

          <motion.div variants={item}>
            <TestimonialCard
              text="The emergency team acted quickly and explained every step clearly. Their calm and professional approach made a stressful situation much easier."
              name="Andrew Leadon"
              role="BAR Studio, Director"
              avatar="/images/third.png"
            />
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div variants={container} className="grid gap-6">
          <motion.div variants={item}>
            <TestimonialCard
              text="The medical staff took time to listen and provide clear explanations."
              name="Peter Rotnstand"
              role="Crown, CEO"
              avatar="/images/Avatar-1.png"
            />
          </motion.div>

          {/* Video card */}
          <motion.div
            variants={item}
            className="relative overflow-hidden rounded-xl border border-neutral-200"
          >
            <Image
              src="/images/video-image.png"
              alt="Patient consultation"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />

            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-primary/60 via-primary/40 to-transparent" />

            <button className="absolute inset-0 flex items-center justify-center">
              <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                <Play className="text-emerald-600 size-6 ml-1" />
              </span>
            </button>

            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-medium">Lena Amelia</p>
              <p className="text-sm opacity-90">Gis Auto, Owner</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const TestimonialCard = ({
  text,
  name,
  role,
  avatar,
}: {
  text: string;
  name: string;
  role: string;
  avatar: string;
}) => {
  return (
    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
      <p className="text-neutral-700 text-[15px] leading-relaxed mb-4">
        “{text}”
      </p>

      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-medium text-neutral-900 text-sm">{name}</p>
          <p className="text-neutral-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
};
