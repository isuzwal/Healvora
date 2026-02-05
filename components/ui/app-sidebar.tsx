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

import { Users, CalendarDays, Form, BriefcaseMedical } from "lucide-react";
import { NavMain } from "./nav-main";
import { IconCreditCard } from "@tabler/icons-react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const data = {
    user: {
      name: "isuzwal",
      email: "isuzwal@gamil.com",
    },
    navMain: [
      {
        title: "Patients",
        url: "/patients-list",
        icon: <Users />,
      },
      {
        title: "Appointments",
        url: "/appointments",
        icon: <CalendarDays />,
      },
      {
        title: "Compliance",
        url: "/compliance",
        icon: <Form />,
      },
      {
        title: "Doctor Lists",
        url: "/doctor-list",
        icon: <BriefcaseMedical />,
      },
      {
        title: "Billing",
        url: "/payments",
        icon: <IconCreditCard />,
      },
    ],
  };

  return (
    <Sidebar collapsible="offcanvas" {...props} className="border rounded-md ">
      <SidebarHeader className=" p-0">
        <SidebarMenu className="p-2">
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard" className="flex gap-2 items-center">
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
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="p-2">
        <SideBarFooterUser />
      </SidebarFooter>
    </Sidebar>
  );
}
