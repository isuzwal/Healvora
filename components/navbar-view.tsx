"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const NavBara = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-full  font-sans  flex justify-between items-center p-2">
      <div>
        {/* <span>Logo</span> */}
        <Link href="/" className="font-semibold  md:text-[24px] text-[20px]">
          Healvora
        </Link>
      </div>
      <div className="flex gap-4 font-medium  items-center">
        <Link
          href={"/login"}
          className="text-[14px] px-5 py-0.5 rounded-[6px]  border border-neutral-100 bg-neutral-100 hover:bg-neutral-50 cursor-pointer  dark:hover:bg-neutral-200 hover:text-neutral-600 dark:border-primary-foreground  text-neutral-950 dark:bg-primary-foreground dark:hover:border-primary-foreground flex items-center  duration-300 ease-in-out transition-all   "
        >
          Login
        </Link>
        <Link
          href={"/register"}
          className="px-5 py-0.5 text-[14px] cursor-pointer  rounded-[6px]  flex items-center duration-300 ease-in-out transition-all bg-primary border border-primary hover:border-primary/80 hover:text-neutral-200 text-neutral-100 dark:hover:text-neutral-200   hover:bg-primary/80"
        >
          Register
        </Link>
        <button
          onClick={handleTheme}
          className=" group hover:bg-neutral-100 dark:hover:border-neutral-900 dark:hover:bg-neutral-900 rounded-lg w-8 flex justify-center px-2 py-1"
        >
          {theme === "dark" ? (
            <Sun className="size-6 group-hover:text-neutral-400" />
          ) : (
            <Moon className="size-6 group-hover:text-neutral-700" />
          )}
          {/* <svg
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
          </svg> */}
        </button>
      </div>
    </div>
  );
};
