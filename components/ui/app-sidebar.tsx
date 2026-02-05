import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { User } from "lucide-react";

import { SideBarFooterUser } from "./footer-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <User
                  className="!size-5
                "
                />
                <span className="text-base font-medium ">Testing</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <div>Link Here</div>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="p-2">
        <SideBarFooterUser />
      </SidebarFooter>
    </Sidebar>
  );
}
