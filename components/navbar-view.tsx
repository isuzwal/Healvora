import Link from "next/link";

export const NavBara = () => {
  return (
    <div className="w-full font-sans  flex justify-between items-center p-2">
      <div>
        {/* <span>Logo</span> */}
        <Link href="/" className="font-semibold  md:text-[24px] text-[20px]">
          Healvora
        </Link>
      </div>
      <div className="flex gap-4 font-medium  items-center">
        <Link
          href={"/login"}
          className="text-[14px] px-5 py-0.5 rounded-[6px]  cursor-pointer  hover:bg-neutral-300 hover:text-neutral-600 border-primary-foreground border text-neutral-950 bg-primary-foreground hover:border-primary-foreground flex items-center  duration-300 ease-in-out transition-all   "
        >
          Login
        </Link>
        <Link
          href={"/register"}
          className="px-5 py-0.5 text-[14px] cursor-pointer  rounded-[6px]  flex items-center duration-300 ease-in-out transition-all bg-primary border border-primary hover:border-primary/80 hover:text-neutral-200   hover:bg-primary/80"
        >
          Register
        </Link>
      </div>
    </div>
  );
};
