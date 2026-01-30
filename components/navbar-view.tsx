"use client";

import Link from "next/link";

export const NavBara = () => {
  return (
    <div className="w-full px-2 md:px-6   sticky top-0    backdrop-blur-2xl z-30 font-sans  flex justify-between items-center p-2">
      <Link href={"/"} className="flex gap-1 items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="white"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-squares-exclude-icon lucide-squares-exclude text-white border border-primary rounded-md bg-primary/90  p-0.5"
        >
          <path d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0" />
          <path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2" />
        </svg>
        <p className="font-semibold  md:text-[24px] text-[20px] text-neutral-900">
          Healvora
        </p>
      </Link>

      <div className="flex font-serif gap-4 font-medium  items-center">
        <Link
          href={"/register"}
          className="px-4 py-1.5 text-[14px]   text-white cursor-pointer  rounded-[9px] shadow-[inset_0_1px_1px_rgba(180,250,235,0.5),inset_0_-1px_2px_rgba(180,250,235,0.5)] flex items-center duration-300 ease-in-out transition-all hover:bg-primary/80  bg-primary border border-green-300 font-sans font-medium"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

{
  /* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4.5"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M12 3l0 18"></path>
            <path d="M12 9l4.65 -4.65"></path>
            <path d="M12 14.3l7.37 -7.37"></path>
            <path d="M12 19.6l8.85 -8.85"></path>
          </svg> */
}
