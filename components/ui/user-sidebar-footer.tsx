"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "./button";
import { LogOut } from "lucide-react";
import { useUserStore } from "@/store/useUserStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export function UserSidebarFooter() {
  const router = useRouter();
  const { user, fetchUser, loading, logout } = useUserStore();

  useEffect(() => {
    setTimeout(() => {
      fetchUser();
    }, 2000);
  }, []);

  const Logout = async () => {
    try {
      logout();
      router.push("/login");
    } catch (error) {
      toast.error(`${error}`, {
        className: "bg-red-600 text-white border-none",
      });
    }
  };
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div>
          <div className="flex flex-col gap-6 mb-2">
            <Button
              onClick={Logout}
              variant={"destructive"}
              className="bg-red-500 hover:bg-red-400 duration-300 ease-in-out transition-all cursor-pointer"
            >
              <LogOut />
              Logout
            </Button>
            {loading ? (
              <div className="bg-slate-100 border border-slate-200 rounded-md p-2 flex gap-1.5 items-center w-full">
                <div className="w-6 h-6 rounded-full bg-gray-300 animate-pulse flex-shrink-0"></div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="h-3 bg-gray-300 rounded w-32 animate-pulse"></div>
                  <div className="h-2 bg-gray-300 rounded w-40 animate-pulse"></div>
                </div>
              </div>
            ) : (
              <SidebarMenuButton
                size="lg"
                className=" bg-slate-100 border border-slate-200 hover:bg-slate-50 duration-300 ease-in-out transition-all"
              >
                <div className="flex gap-1.5 items-center w-full text-sm leading-tight">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src={user?.image || "/images/first.png"}
                      alt="user-profile"
                      fill
                      loading="lazy"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="truncate font-medium">
                      {user?.username}
                    </span>
                    <span className="text-muted-foreground truncate text-xs">
                      {user?.email}
                    </span>
                  </div>
                </div>
              </SidebarMenuButton>
            )}
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
