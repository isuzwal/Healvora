"use client";
import { DoctorDetailsSidebar } from "@/components/ui/doctor-details-sidebar";
import { NavBara } from "@/components/ui/navbar-view";
import { userDoctorList } from "@/store/useAdminStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Page() {
  const { doctor, loading, fetchDoctor } = userDoctorList();
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("user_token");
    if (!token) {
      router.push("/login");
      return;
    }
    fetchDoctor();
  }, [router, fetchDoctor]);

  return (
    <div className="w-full min-h-screen ">
      <NavBara />
      <div className="p-2 w-full">
        {loading ? (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <aside
                key={i}
                className="w-full h-95 p-4 bg-white rounded-lg shadow-xs animate-pulse flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 bg-neutral-200 rounded-full" />
                  <div className="flex-1">
                    <div className="h-4 w-32 bg-neutral-200 rounded mb-2" />
                    <div className="h-3 w-24 bg-neutral-200 rounded" />
                  </div>
                </div>

                <div className="h-3 w-40 bg-neutral-200 rounded" />
                <div className="h-3 w-28 bg-neutral-200 rounded" />
                <div className="h-3 w-24 bg-neutral-200 rounded" />
                <div className="h-3 w-32 bg-neutral-200 rounded" />
                <div className="h-3 w-20 bg-neutral-200 rounded" />
                <div className="h-3 w-36 bg-neutral-200 rounded" />
                <div className="h-3 w-28 bg-neutral-200 rounded" />
                <div className="h-3 w-24 bg-neutral-200 rounded" />
              </aside>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {doctor.map((doc) => (
              <DoctorDetailsSidebar key={doc._id} doctor={doc} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
