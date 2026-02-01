"use client";
import { ArrowRight, Brain } from "lucide-react";
import Image from "next/image";
import { TextAnimate } from "./text-animate";
import { motion, Variants } from "motion/react";

export const HeroSection = () => {
  const word = `Comprehensive, compassionate healthcare services designed to support
    your fmaily's well-begin at every stage of life`;

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full   sm:py-16 ">
      <div className="flex py-8 sm:py-0  flex-col gap-2 max-w-5xl mx-auto  items-center justify-center  w-full">
        <motion.span
          initial={{
            opacity: 0,
            y: 5,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeIn",
            delay: 0.1,
          }}
          className="px-4.5 py-0.5 gap-1 bg-emerald-50 border-emerald-100 shadow-[inset_1px_2px_1px_rgba(16,_170,_120,_0.2)] inline-flex border rounded-xl font-sans font-medium text-xs items-center text-emerald-600"
        >
          <Brain className="size-3.5 text-emerald-600" />
          Healvora AI Driven
        </motion.span>
        <TextAnimate
          animate="fadeIn"
          as="h1"
          className="lg:text-5xl text-2xl sm:text-4xl  max-w-4xl w-full text-center text-neutral-800 font-sans font-semibold p-2 "
        >
          Healvora Trutworthy Care for you and Your Famaily
        </TextAnimate>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className=" flex flex-col gap-1  max-w-xl w-full justify-center items-center "
        >
          <motion.div className=" max-w-lg dark:text-neutral-600 text-neutral-600 font-medium  font-sans flex w-full  justify-center  item-center ">
            <motion.p
              variants={itemVariants}
              className="text-center inline-flex text-[14px]"
            >
              {word}
            </motion.p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex   flex-col sm:flex-row mt-4 gap-4  max-w-2xl w-full justify-center items-center"
          >
            <button className="flex  justify-center group text-sm items-center  cursor-pointer gap-1.5 rounded-lg px-6 py-1.5  font-medium dark:hover:text-neutral-300 duration-300 ease-in-out transition-all  text-neutral-100 bg-primary border border-primary/70 hover:bg-primary/80">
              Book Appointment{" "}
              <ArrowRight className=" group-hover:translate-x-2 duration-300  ease-in-out transition-all  size-4.5" />
            </button>
            <div className="flex sm:mt-0 mt-2  justify-center   items-center px-2   max-w-[20rem] w-full">
              <div className="relative flex max-w-22  w-full  items-center ">
                <div className=" absolute z-30 left-0 w-7 h-7    overflow-hidden flex justify-center items-center rounded-full ">
                  <Image
                    src={"/images/first.png"}
                    fill
                    loading="lazy"
                    alt="first-pic"
                    className="object-cover border border-neutral-200  shadow w-full h-full rounded-full"
                  />
                </div>
                <div className="w-7 h-7  overflow-hidden absolute z-20 left-6 flex justify-center items-center rounded-full ">
                  <Image
                    src={"/images/lady.png"}
                    fill
                    loading="lazy"
                    alt="first-pic"
                    className="object-cover border border-neutral-200  shadow w-full h-full rounded-full"
                  />
                </div>

                <div className="w-7 h-7 absolute z-10 right-3  overflow-hidden flex justify-center items-center rounded-full ">
                  <Image
                    src={"/images/third.png"}
                    fill
                    loading="lazy"
                    alt="first-pic"
                    className="object-cover   border border-neutral-200   shadow w-full h-full rounded-full"
                  />
                </div>
              </div>
              <p className="flex w-full gap-0.5   items-center text-[14px] font-sans font-medium text-neutral-950">
                <strong>200+ </strong>Appoinments Sucessfully
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full p-1.5  mt-4  sm:mt-6 flex justify-center items-center  py-16 ">
        <motion.div
          initial={{
            y: 0,
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            y: -8,
            filter: "blur(0px)",
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            ease: "easeIn",
          }}
          className=" relative overflow-hidden  flex justify-center items-center  max-w-5xl  mx-auto w-full rounded-lg  bg-neutral-200 border border-neutral-200"
        >
          <Image
            src={"/images/Hero.png"}
            alt="hero-section"
            width={800}
            height={800}
            loading="lazy"
            className="rounded-lg object-contain h-full w-full max-h[40rem]"
          />
        </motion.div>
      </div>
    </div>
  );
};
