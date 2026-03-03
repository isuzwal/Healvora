"use client";

import {
  IconDotsVertical,
  IconLogout,
  IconUserCircle,
} from "@tabler/icons-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "./button";
import { LogOut } from "lucide-react";
import { useAdminStore } from "@/store/useAdminStore";
import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function SideBarFooterUser() {
  const router = useRouter();
  const { admin, loading, fetchAdmindata, logoutAdmin } = useAdminStore();

  useEffect(() => {
    setTimeout(() => {
      fetchAdmindata();
    }, 2000);
  }, []);

  const Logoutadmin = async () => {
    try {
      logoutAdmin();
      router.push("/admin-login");
    } catch (error) {
      toast.error(`${error}`, {
        className: "bg-red-600 text-white border-none",
      });
    }
  };
  return (
    <SidebarMenu>
      <SidebarMenuItem className=" flex flex-col gap-3">
        <DropdownMenu>
          <Button
            onClick={Logoutadmin}
            variant={"destructive"}
            className="text-white flex gap-2 items-center w-full  cursor-pointer"
          >
            <LogOut className="size-4 text-neutral-300" />
            Logout out
          </Button>

          <DropdownMenu>
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
                      src={admin?.admin_image || "/images/first.png"}
                      alt="addmin-profile"
                      fill
                      loading="lazy"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="truncate font-medium">
                      {admin?.adminName}
                    </span>
                    <span className="text-muted-foreground truncate text-xs">
                      {admin?.email}
                    </span>
                  </div>
                </div>
              </SidebarMenuButton>
            )}
          </DropdownMenu>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
