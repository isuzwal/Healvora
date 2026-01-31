import { ArrowRight, Brain } from "lucide-react";
import Image from "next/image";
import { TextAnimate } from "./text-animate";
export const HeroSection = () => {
  return (
    <div className="w-full py-20 ">
      <div className="flex flex-col gap-2 max-w-5xl mx-auto  items-center justify-center  w-full">
        <span className="px-4.5 py-0.5 gap-1 bg-emerald-50 border-emerald-100 shadow-[inset_1px_2px_1px_rgba(16,_170,_120,_0.2)] inline-flex border rounded-xl font-sans font-medium text-xs items-center text-emerald-600">
          <Brain className="size-3.5 text-emerald-600" />
          Healvora AI Driven
        </span>
        <TextAnimate
          animate="fadeIn"
          as="h1"
          className="lg:text-5xl text-2xl sm:text-4xl  max-w-4xl w-full text-center text-neutral-800 font-sans font-semibold p-2 "
        >
          Healvora Trutworthy Care for you and Your Famaily
        </TextAnimate>
        <div className=" max-w-lg dark:text-neutral-600 text-neutral-600 font-medium  font-sans flex w-full  justify-center  item-center ">
          <p className="text-center text-[14px]">
            Comprehensive, compassionate healthcare services designed to support
            your fmaily&apos;s well-begin at every stage of life
          </p>
        </div>
        <div className="flex  flex-col sm:flex-row mt-4 gap-4  max-w-lg w-full justify-center items-center">
          <button className="flex  justify-center group text-sm items-center  cursor-pointer gap-1.5 rounded-4xl px-6 py-1.5  font-medium hover:bg-primary/60 dark:hover:text-neutral-300 duration-300 ease-in-out transition-all  text-neutral-100 bg-primary border border-primary">
            Book Appointment{" "}
            <ArrowRight className=" group-hover:translate-x-2 duration-300 mt-0.5 ease-in-out transition-all  size-4" />
          </button>
          <button className="flex  justify-center group text-sm items-center  cursor-pointer gap-1.5 rounded-4xl px-6 py-1.5  font-medium   duration-300 ease-in-out transition-all  text-neutral-600 bg-secondary  border border-neutral-200 shadow-[inset_0_1px_2px_rgba(240,240,240,1),inset_0_-1px_2px_rgba(255,255,255,0.4)]  hover:text-neutral-400">
            Explore Serices
            <ArrowRight className=" group-hover:translate-x-2 duration-300 mt-0.5 ease-in-out transition-all  size-4" />
          </button>
        </div>
      </div>
      <div className="w-full p-1.5  mt-4  sm:mt-6 flex justify-center items-center  py-16 ">
        <div className=" relative overflow-hidden  flex justify-center items-center  max-w-5xl  mx-auto w-full rounded-lg  bg-neutral-200 border border-neutral-200">
          <Image
            src={"/images/Hero.png"}
            alt="hero-section"
            width={800}
            height={800}
            loading="lazy"
            className="rounded-lg object-contain h-full w-full max-h[40rem]"
          />
        </div>
      </div>
    </div>
  );
};
