import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Input } from "./input";

export const Footer = () => {
  const fullyear = new Date().getFullYear();
  return (
    <footer className=" py-16 w-full  ">
      <div className="w-full flex justify-center items-center flex-col p-1 gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="white"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-squares-exclude-icon lucide-squares-exclude text-white border border-primary/70 rounded-md bg-primary/90  p-0.5"
        >
          <path d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0" />
          <path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2" />
        </svg>
        <div className="flex flex-col gap-2  justify-center items-center">
          <h1 className="text-xl sm:text-3xl text-center font-sans font-semibold text-neutral-800">
            Be part of the Healvora AI{" "}
          </h1>
          <p className="text-[12px] sm:text-[14px] max-w-xl text-neutral-500 text-center">
            Your health deserves attention anytime, anywhere. Healvora AI
            connects you with intelligent care and real human support when it
            matters most.
          </p>
          <div className="flex mt-4 font-serif gap-4 font-medium  items-center">
            <Link
              href={"/register"}
              className="px-4 py-1.5 text-[14px]   justify-center  gap-3  group text-white cursor-pointer  rounded-[9px] shadow-[inset_0_1px_1px_rgba(180,250,235,0.5),inset_0_-1px_2px_rgba(180,250,235,0.5)] flex items-center duration-300 ease-in-out transition-all hover:bg-primary/80  bg-primary border border-green-300 font-sans font-medium"
            >
              Get Started{" "}
              <ArrowRight className=" group-hover:translate-x-1 duration-300 ease-in-out transition-all size-4.5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto   mt-8 p-1 ">
        <div className=" py-4  flex flex-col sm:flex-row gap-2 border-neutral-500">
          <div className="  flex flex-col gap-1 justify-start">
            <h3 className="text-[16px] text-center sm:text-start font-sans font-semibold text-neutral-800 tracking-tight">
              Never miss an upadate
            </h3>
            <p className="text-neutral-500   font-sans text-[12px] sm:text-[14px] text-start">
              Get all the latest news,blog post and prodcut updates from{" "}
              <Link
                href={"/"}
                className="text-primary  hover:underline  duration-300 ease-in-out transition-all font-sans font-semibold"
              >
                Healvora
              </Link>
              .Deliver directly yo your inbox.We&apos;ll rarely send more than
              once eamil a month
            </p>
          </div>
          <div className="flex py-2 mt-2   max-w-2xl justify-end w-full ">
            <div className="flex gap-1 justify-center sm:justify-end max-w-xs w-full items-center">
              <Input
                className=" flex  focus:outline-none  w-full flex-1 sm:w-auto focus:ring-0 
                 focus-visible:outline-none focus-visible:ring-0 placeholder:text-neutral-400  font-sans font-medium  text-neutral-600 placeholder:px-1.5 border border-neutral-200 text-sm"
                placeholder="example@gamil.com"
              />
              <button className="px-4   py-1.5 text-[14px]   justify-center  gap-3  group text-white cursor-pointer  rounded-[8px] shadow-[inset_0_1px_1px_rgba(180,250,235,0.5),inset_0_-1px_2px_rgba(180,250,235,0.5)] flex items-center duration-300 ease-in-out transition-all hover:bg-primary/80  bg-primary border border-green-200 font-sans font-medium">
                Join now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full   py-2 mt-4  gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  ">
          <div className="flex  flex-col gap-2  justify-center  items-center ">
            <h3 className="text-sm  text-start max-w-48 w-full font-semibold font-sans text-neutral-800">
              Product
            </h3>
            <div className="flex flex-col gap-2 max-w-48 items-start w-full justify-start">
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                AI Assistant
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                Doctor Recommendation
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                Appointments
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2  justify-center  items-center ">
            <h3 className="text-sm font-semibold text-neutral-800 text-start max-w-48 w-full">
              Resources
            </h3>
            <div className="max-w-48 items-start w-full justify-start flex flex-col gap-2">
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                FAQs
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                Help Center
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                User Guide
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2  justify-center  items-center ">
            <h3 className="text-sm font-semibold text-neutral-800 text-start max-w-48 w-full">
              Trust
            </h3>
            <div className="max-w-48 items-start w-full justify-start flex flex-col gap-2">
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                Data Security
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                AI Ethics
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2   justify-center  items-center ">
            <h3 className="text-sm font-semibold text-neutral-800 text-start max-w-48 w-full">
              Support
            </h3>
            <div className="max-w-48 items-start w-full justify-start flex flex-col gap-2">
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                24/7 AI Support
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                Live Chat
              </Link>
              <Link
                href="#"
                className="text-[14px] font-medium hover:text-neutral-400 duration-300 ease-in-out transition-all text-neutral-700 font-sans"
              >
                Report a Bug
              </Link>
            </div>
          </div>
        </div>
        <div className="py-2 w-full border-t border-neutral-300  mt-4 sm:mt-10">
          <div className="flex flex-col sm:flex-row gap-2 justify-between w-full items-center p-1">
            <p className=" flex gap-1  text-neutral-700 items-end justify-center">
              <span className="text-secondary-foreground/80">©</span>
              <span className="font-medium font-sans  text-sm">
                {fullyear} Healvora
              </span>
            </p>
            <div className="flex gap-4 justify-center items-center text-neutral-600 font-sans text-[14px] font-medium">
              <Link
                href="/privacy-policy"
                className=" duration-300 hover:text-neutral-400 ease-in-out transition-all"
              >
                Pivacy Policy
              </Link>
              <Link
                href="/terms "
                className=" duration-300 hover:text-neutral-00 ease-in-out transition-all"
              >
                Terms of Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
