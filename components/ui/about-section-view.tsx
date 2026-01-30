import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div className="py-12 w-full rounded-t-4xl bg-primary/70">
      <div className="flex flex-col justify-start items-start px-4">
        <span
          className="rounded-4xl border text-white  border-foreground bg-foreground  
            font-medium  px-6 py-1.5 text-sm font-sans"
        >
          About us
        </span>
        <div className="  sm:flex-row flex flex-col-reverse   justify-between gap-4 w-full   items-center">
          <div className=" w-full flex flex-col  justify-start items-start">
            <div className="flex  w-full  text-white flex-col gap-4">
              <p className="text-4xl md:text-6xl  w-full  tracking-tight font-medium font-sans">
                Dedicated to Your Health, Every Step of the Way
              </p>

              <p className="font-medium  text-[12px] md:text-[14px] text-black/70 max-w-md">
                Healvora is an AI-powered hospital platform delivering real-time
                medical support, combining intelligent technology with
                compassionate human interaction.
              </p>
            </div>
            <span
              className="rounded-4xl group  flex  items-center gap-2 mt-6 text-white bg-primary/70 border-primary/70
            font-medium border px-5 py-1.5 text-sm font-sans"
            >
              Learn more{" "}
              <ArrowRight className="size-3.5 group-hover:translate-x-1 duration-300 ease-in-out  transition-all" />
            </span>
          </div>

          <div className="mt-2 relative  border  max-w-md w-full  flex justify-center items-center  rounded-lg overflow-hidden">
            <Image
              src="/images/second.png"
              alt="Doctor"
              width={200}
              height={200}
              className="object-cover rounded-lg  w-full  max-h-200 "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
