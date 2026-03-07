"use client";
import { DoctorDetailsSidebar } from "@/components/ui/doctor-details-sidebar";
import { NavBara } from "@/components/ui/navbar-view";
import { userDoctorList } from "@/store/useAdminStore";
import { useEffect } from "react";

export default function Page() {
  const { doctor, loading, fetchDoctor } = userDoctorList();
  useEffect(() => {
    fetchDoctor();
  }, []);
  return (
    <div className="w-full min-h-screen ">
      <NavBara />
      <div className=" w-full p-4">
        <div className="grid  grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {doctor.map((doc) => (
            <DoctorDetailsSidebar
              key={doc._id}
              doctor={doc}
              loading={loading}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
