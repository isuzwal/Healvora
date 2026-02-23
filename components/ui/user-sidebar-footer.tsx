"use client";

import {
  IconDotsVertical,
  IconLogout,
  IconUserCircle,
} from "@tabler/icons-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "./button";
import { LogOut } from "lucide-react";

export function UserSidebarFooter() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div>
          <div className=" flex flex-col gap-6 mb-2">
            <Button
              variant={"destructive"}
              className="bg-red-500 hover:bg-red-400 duration-300 ease-in-out transition-all cursor-pointer"
            >
              <LogOut />
              Logout
            </Button>
            <SidebarMenuButton
              size="lg"
              className=" bg-slate-100 border border-slate-200    hover:bg-slate-50  duration-300 ease-in-out  transition-all"
            >
              <div className="flex    gap-1.5  items-center w-full text-sm leading-tight">
                <div className=" relative w-6 h-6 rounded-full overflow-hidden ">
                  <Image
                    src="/images/first.png"
                    alt="user-pofile"
                    fill
                    loading="lazy"
                    className="w-full h-full  object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="truncate font-medium">uzwal</span>
                  <span className="text-muted-foreground truncate text-xs">
                    isuzwal@gamil.com
                  </span>
                </div>
              </div>
            </SidebarMenuButton>
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
