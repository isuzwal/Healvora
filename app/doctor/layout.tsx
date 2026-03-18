"use client";
import { DoctorAppSdideBar } from "@/components/ui/doctor.sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { DoctorHeader } from "@/components/ui/doctor.header";
import { useDoctorStore } from "@/store/useDoctorStore";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { fetchDoctor } = useDoctorStore();

  useEffect(() => {
    fetchDoctor();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("doctor_token");
    if (!token) {
      router.push("/doctor-login");
    }
  }, []);
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <DoctorAppSdideBar variant="inset" />
      <SidebarInset>
        <DoctorHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
