import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useUserStore } from "@/store/useUserStore";

import Image from "next/image";

export function UserHeader() {
  const { user } = useUserStore();

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-[12px] sm:text-[20px] font-sans font-semibold text-neutral-800">
          Welcome Back, {user?.username}{" "}
        </h1>
        <div className="ml-auto flex  border-2 px-1.5 py-0.5 rounded-lg border-slate-200  bg-slate-100 gap-2 items-center ">
          <div className="flex relative rounded-full justify-center items-center overflow-hidden w-6.5 h-6.5 border-2 border-neutral-300 shadow">
            <Image
              fill
              src={user?.image || "/images/first.png"}
              alt="Profile-Image"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-start  ">
            <span className="text-[10px] font-semibold tracking-tight">
              {user?.username}
            </span>
            <span className="text-[8px] font-medium tracking-tight text-neutral-700">
              {user?.email}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
