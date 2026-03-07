"use client";

import { List } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

// import { doctordata } from "@/types/demo.data";
import { userDoctorList } from "@/store/useAdminStore";
import { DoctorSkeleton } from "@/components/ui/doctor-skeleton";
import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  const { doctor, loading, fetchDoctor } = userDoctorList();

  useEffect(() => {
    fetchDoctor();
  }, [fetchDoctor]);

  return (
    <div className="flex h-screen w-full ">
      <div className="font-medium  w-full py-6 px-4">
        <div className="flex gap-1  items-start">
          <span className=" border-[1.5px] border-neutral-200 bg-neutral-100  w-7.5 h-7.5 rounded-[6px] flex justify-center items-center">
            <List className="size-4.5 text-shadow-neutral-950" />
          </span>
          <div className="flex p-0   flex-col justify-end items-start  leading-5">
            <h1 className=" tracking-tighter text-[18px] font-semibold text-neutral-800 font-sans">
              Doctor List
            </h1>
            <p className="text-[10px] text-neutral-700 tracking-tighter text-start ">
              Manage doctor profiles, departments, and availability status
            </p>
          </div>
        </div>
        <div className="w-full   py-4 mt-6    rounded-md">
          {loading ? (
            <div className="w-full border border-neutral-100 rounded-lg bg-white">
              {Array.from({ length: 6 }).map((_, i) => (
                <DoctorSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="w-full  border border-neutral-100  rounded-lg bg-white  ">
              {doctor?.map((data) => (
                <Link
                  href={`/admin/dashboard/doctors/${data._id}`}
                  key={data._id}
                  className="flex flex-col gap-1  hover:bg-neutral-200 duration-300 ease-in-out transition-all cursor-pointer"
                >
                  <div className="px-2 w-full  flex   justify-between ">
                    <div className="flex items-center gap-1.5 m-1">
                      <div className="rounded-full relative overflow-hidden h-6 w-6 shadow boder-2 border-slate-200">
                        <Image
                          src={data?.doctor_image || " "}
                          fill
                          loading="lazy"
                          alt="Profile-Image"
                          className="object-contain h-full w-full rounded-full boder-2 border-slate-200"
                        />
                      </div>
                      <div className="flex flex-col  items-start justify-start mt-1.5 ">
                        <span className="text-[14px]  font-sans font-semibold">
                          {data.doctorName}
                        </span>
                        <p className="text-neutral-600 font-sans font-medium text-[12px]">
                          {data.department}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center px-4">
                      <span
                        className={`font-medium text-white text-[10px] px-2.5 rounded-lg ${
                          data.isAvailable
                            ? "bg-emerald-500 border-emerald-300"
                            : "bg-red-500 border-red-400"
                        }`}
                      >
                        {data.isAvailable ? "Available" : "Unavailable"}
                      </span>
                    </div>
                  </div>
                  <Separator className="mt-0.5" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
