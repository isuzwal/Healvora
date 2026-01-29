import Image from "next/image";
export const HeroSection = () => {
  return (
    <div className="w-full py-20 mt-4  flex justify-center">
      <div className="flex flex-col gap-2 max-w-5xl  items-center justify-center  w-full">
        <p className="text-xl sm:text-4xl lg:text-6xl  dark:text-neutral-200 text-neutral-900  font-serif font-medium  tracking-tight  text-center ">
          Healvora Trutworthy Care for you <br />
          and Your Famaily{" "}
        </p>
        <div className="max-w-lg dark:text-neutral-500 text-neutral-700  text-sm p-1 font-medium font-serif flex w-full  justify-center  item-center ">
          <p className="text-center">
            Comprehensive,compassionate healthcare services designed to support
            your fmaily&apos;s well-begin at every stage of life
          </p>
        </div>
      </div>
    </div>
  );
};
