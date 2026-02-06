import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-[18px] font-sans font-medium">
          Welcome Back, uzwal{" "}
        </h1>
        <div className="ml-auto flex  gap-2 items-center ">
          <button className="px-3 py-1 text-[10px]  justify-center  gap-1  group text-white cursor-pointer  rounded-md shadow-[inset_0_1px_1px_rgba(180,250,235,0.5),inset_0_-1px_2px_rgba(180,250,235,0.5)] flex items-center duration-300 ease-in-out transition-all hover:bg-primary/80  bg-primary border border-green-300 font-sans font-medium">
            <Plus className="size-4" />
            Add Doctor
          </button>
          <div className="   hidden sm:flex relative rounded-full justify-center items-center overflow-hidden w-6 h-6 border border-neutral-200 shadow">
            <Image
              fill
              src="/images/first.png"
              alt="Profile-Image"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
