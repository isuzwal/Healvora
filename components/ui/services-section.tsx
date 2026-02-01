"use client";
import {
  ArrowRight,
  Brain,
  DiamondPlus,
  HeartPlus,
  SquareActivity,
} from "lucide-react";
import { motion, Variants } from "motion/react";

export const ServicesPage = () => {
  const MainAnimation: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.18,
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
    <motion.div className="w-full  py-8 sm:py-16  mt-4  flex  flex-col gap-2 justify-center  items-center ">
      <motion.div
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-6 p-2 justify-center  items-center max-w-2xl w-full"
      >
        <motion.button
          viewport={{ once: true, amount: 0.2 }}
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.3,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="text-[14px] font-sans text-white rounded-md px-4 py-1 border bg-emerald-600  border-primary flex justify-center items-center  font-medium"
        >
          Our Services
        </motion.button>
        <motion.div className="flex flex-col gap-2 justify-center items-center">
          <motion.p
            viewport={{ once: true, amount: 0.2 }}
            initial={{
              opacity: 0,
              y: 10,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="text-xl  sm:text-4xl font-sans  tracking-tight font-semibold text-center text-neutral-800"
          >
            We offer a Wide Range of Medical Services
          </motion.p>
          <motion.p
            viewport={{ once: true, amount: 0.2 }}
            initial={{
              opacity: 0,
              y: 10,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="text-[16px] font-medium font-sans text-neutral-600 text-center"
          >
            Our team expericenced professional is commited to delivery
            compassionate and professional care to help optimal health
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={MainAnimation}
        initial="hidden"
        whileInView="show"
        className="w-full mt-4 px-2  py-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
      >
        <motion.div
          variants={itemVariants}
          className="border-2  group flex gap-1 flex-col justify-start items-start rounded-xl bg-secondary p-4   border-neutral-100  "
        >
          <motion.div className="w-10 h-10 border-2 rounded-lg flex justify-center items-center bg-neutral-100 border-neutral-200">
            <Brain className="text-neutral-600 size-5" />
          </motion.div>
          <div className="flex flex-col gap-1 ">
            <h1 className="font-sans font-semibold text-neutral-800 text-xl">
              Primary Care
            </h1>
            <p className="text-neutral-700 text-[16px] font-medium  text-start tracking-tight">
              Specialized services for infants,children,and adolescents
            </p>
          </div>
          <button className="  group-hover:bg-neutral-100/95 mt-2 w-full flex justify-center items-center px-5 py-1  duration-300 ease-in-out  transition-all  rounded-md bg-neutral-100 border border-neutral-200">
            {" "}
            <ArrowRight className="size-5.5 text-neutral-500 group-hover:text-neutral-400 duration-300  ease-in-out transition-all " />
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="border-2 group bg-emerald-400 flex gap-1 flex-col justify-start items-start rounded-xl  p-4   border-emerald-300  "
        >
          <div className="w-10 h-10 border-2 rounded-lg flex justify-center items-center bg-neutral-100 border-neutral-200">
            <DiamondPlus className="text-neutral-600 size-5.5" />
          </div>
          <div className="flex flex-col gap-1 ">
            <h1 className="font-sans font-semibold text-secondary text-xl">
              Diagnostic Services
            </h1>
            <p className="text-neutral-100 text-[16px] font-medium  text-start tracking-tight">
              Specialized services for infants,children,and adolescents
            </p>
          </div>
          <button className=" mt-2 w-full flex justify-center items-center px-5 py-1  duration-300    ease-in-out   rounded-md bg-neutral-100 group-hover:bg-neutral-100/95  transition-all border border-neutral-200">
            {" "}
            <ArrowRight className="size-5.5 text-neutral-500 group-hover:text-neutral-400 duration-300  ease-in-out transition-all " />
          </button>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="border-2 group flex gap-1 flex-col justify-start items-start rounded-xl bg-secondary p-4   border-neutral-100  "
        >
          <div className="w-10 h-10 border-2 rounded-lg flex justify-center items-center bg-neutral-100 border-neutral-200">
            <SquareActivity className="text-neutral-600 size-5.5" />
          </div>
          <div className="flex flex-col gap-1 ">
            <h1 className="font-sans font-semibold text-neutral-800 text-xl">
              Emerygency Care
            </h1>
            <p className="text-neutral-700 text-[16px] font-medium  text-start tracking-tight">
              Specialized services for infants,children,and adolescents
            </p>
          </div>
          <button className="  group-hover:bg-neutral-100/95 mt-2 w-full flex justify-center items-center px-5 py-1  duration-300 ease-in-out  transition-all  rounded-md bg-neutral-100 border border-neutral-200">
            {" "}
            <ArrowRight className="size-5.5 text-neutral-500 group-hover:text-neutral-400 duration-300  ease-in-out transition-all " />
          </button>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="border-2 group flex gap-1 flex-col justify-start items-start rounded-xl bg-emerald-400 p-4   border-emerald-300  "
        >
          <div className="w-10 h-10 border-2 rounded-lg flex justify-center items-center bg-neutral-100 border-neutral-200">
            <HeartPlus className="text-neutral-600 size-5.5" />
          </div>
          <div className="flex flex-col gap-1 ">
            <h1 className="font-sans font-semibold text-secondary text-xl">
              Health Services
            </h1>
            <p className="text-neutral-100 text-[16px] font-medium  text-start tracking-tight">
              Specialized services for infants,children,and adolescents
            </p>
          </div>
          <button className="  group-hover:bg-neutral-100/95 mt-2 w-full flex justify-center items-center px-5 py-1  duration-300 ease-in-out  transition-all  rounded-md bg-neutral-100 border border-neutral-200">
            {" "}
            <ArrowRight className="size-5.5 text-neutral-500 group-hover:text-neutral-400 duration-300  ease-in-out transition-all " />
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
