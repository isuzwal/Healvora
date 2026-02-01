import { ArrowRight, Check, Flower } from "lucide-react";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div className="py-6 w-full px-2 ">
      <div className=" flex flex-col  sm:flex-row max-w-6xl  w-full mx-auto  justify-between items-center gap-6">
        <div className="  flex flex-col  items-start  w-full  sm:w-1/2 justify-start  gap-2 p-1 ">
          <span className="text-[14px] font-sans text-white rounded-md px-4 py-1 border bg-emerald-600  border-primary flex justify-center items-center  font-medium">
            About us
          </span>
          <p className="text-neutral-800/95 font-sans   font-medium  tracking-tighter text-2xl md:text-4xl text-start">
            Advanced medical <br /> care with compassion
          </p>
          <div className=" group relative overflow-hidden  rounded-md  border  border-neutral-100 flex justify-center items-center ">
            <Image
              src="/images/doctor-1.png"
              alt="doctor-image"
              height={420}
              width={420}
              loading="lazy"
              className="object-cover rounded-md h-full w-full"
            />
            <div
              className="absolute    inset-x-0 bottom-0 h-30  duration-300 ease-in-out transition-all
            bg-gradient-to-t from-primary/60 via-primary/40 to-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col w-full  sm:w-1/2  justify-center items-center   gap-2 ">
          <div className=" group relative w-full overflow-hidden h-72 rounded-md  border  border-neutral-100 flex justify-center items-center ">
            <Image
              src="/images/doctor-2.png"
              alt="doctor-image"
              fill
              loading="lazy"
              className="object-cover rounded-md h-auto max-h-74 w-full"
            />
          </div>
          <div className=" w-full flex-col  sm:flex-row flex gap-2  justify-between items-center">
            <div className="w-full flex flex-col  gap-3 p-1">
              <div className="flex flex-col gap-2    justify-start items-start">
                <p className="font-sans text-[16px] flex gap-2 justify-center items-center font-medium text-neutral-800  ">
                  <span className="w-4 h-4 rounded-full flex justify-center items-center bg-green-400 border border-green-300">
                    <Check className=" text-white size-3 " />
                  </span>
                  Expert Medical Team
                </p>
                <p className="font-sans flex gap-2 justify-center items-center font-medium text-neutral-800 text-[16px] ">
                  <span className="w-4 h-4 rounded-full flex justify-center items-center bg-green-400 border border-green-300">
                    <Check className=" text-white size-3 " />
                  </span>
                  AI-Powered Health Care
                </p>
                <p className="font-sans flex gap-2 justify-center items-center font-medium text-neutral-800 text-[16px] ">
                  <span className="w-4 h-4 rounded-full flex justify-center items-center bg-green-400 border border-green-300">
                    <Check className=" text-white size-3 " />
                  </span>
                  Smart Doctor Matching
                </p>
                <p className="font-sans flex gap-2 justify-center items-center font-medium text-neutral-800 text-[16px] ">
                  <span className="w-4 h-4  rounded-full flex justify-center items-center bg-green-400 border border-green-300">
                    <Check className=" text-white size-3 " />
                  </span>
                  24/7 Emergency Support
                </p>
              </div>
              <div>
                <button className=" mt-2 text-[16px] font-sans font-medium text-white rounded-md border border-primary bg-emerald-600 tracking-tighter px-4 py-1.5">
                  More About us
                </button>
              </div>
            </div>
            <div
              className="h-full py-8 w-full rounded-xl 
              bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600
             shadow-emerald-500/30 flex justify-center items-center transition-all duration-300 ease-out"
            >
              <div className=" flex w-full flex-col  gap-2 justify-center items-center">
                <span className="w-12 h-12 bg-white  flex  justify-center items-center rounded-full border border-neutral-50 ">
                  <Flower className="size-8 text-green-400" />
                </span>
                <p className="text-center  flex-col font-sans font-medium text-white text-[16px] ">
                  <strong className=" font-medium text-2xl ">2+</strong> <br />
                  Years of Medical <br /> Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
