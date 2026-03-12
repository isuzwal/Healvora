"use client";
import { SectionCards } from "@/components/ui/section.cards";
import { ChartAreaInteractive } from "@/components/ui/chart-area-interactive";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAdminBookings } from "@/store/useAdminStore";

export default function DashboardPage() {
  const router = useRouter();
  const { fetchBookings } = useAdminBookings();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin-login");
    }
  }, [router]);
  // Fetch bookings
  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  return (
    <div className="flex flex-col gap-4 py-2 md:gap-6 md:py-4">
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
    </div>
  );
}
