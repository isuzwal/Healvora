import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { SideBarFooterUser } from "./footer-user";

import { Users, LayoutDashboardIcon, Settings } from "lucide-react";
import { NavMain } from "./nav-main";

import Link from "next/link";
import { UserSidebarFooter } from "./user-sidebar-footer";

export function UserAppSdideBar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const userlink = {
    user: {
      name: "isuzwal",
      email: "isuzwal@gamil.com",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/user",
        icon: <LayoutDashboardIcon />,
      },
      {
        title: "My bookings",
        url: "/user/bookings",
        icon: <Users />,
      },

      {
        title: "Settings",
        url: "/user/settings",
        icon: <Settings />,
      },
    ],
  };

  return (
    <Sidebar
      collapsible="offcanvas"
      {...props}
      className="p-0 border shadow-xs"
    >
      <SidebarHeader className=" p-0">
        <SidebarMenu className="p-2">
          <SidebarMenuItem className="">
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/admin/dashboard" className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide   lucide-squares-exclude-icon lucide-squares-exclude text-white border border-primary rounded-md bg-primary/90  p-0.5"
                >
                  <path d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0" />
                  <path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2" />
                </svg>
                <h1 className="text-base font-semibold font-sans text-neutral-800">
                  Healvora
                </h1>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <div className=" bg-neutral-300/60 h-px mt-[7px] w-full" />
      <SidebarContent className="">
        <NavMain items={userlink.navMain} />
      </SidebarContent>
      <SidebarFooter className="p-2">
        <UserSidebarFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
