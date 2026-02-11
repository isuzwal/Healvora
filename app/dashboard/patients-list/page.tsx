"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PatientType } from "@/types";
import { EllipsisVertical, Filter, List } from "lucide-react";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const data: PatientType[] = [
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Pending",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Pending",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Success",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Pending",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Success",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Pending",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Success",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Pending",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Success",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Pending",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Success",
    },
    // {
    //   patientId: "1234",
    //   name: "isuzwal",
    //   gender: "Male",
    //   age: 22,
    //   department: "Cardiology",
    //   date: "2/8/2026",
    //   status: "Pending",
    // },
    // {
    //   patientId: "1234",
    //   name: "isuzwal",
    //   gender: "Male",
    //   age: 22,
    //   department: "Cardiology",
    //   date: "2/8/2026",
    //   status: "Success",
    // },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Pending",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Success",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Pending",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "Success",
    },
  ];

  const handlenavgiation = (id: string) => {
    router.push(`/dashboard/patients-list/${id}`);
  };
  // delete api
  const deletAccount = (id: string) => {
    console.log("Account delete", id);
  };
  return (
    <div className=" p-1.5">
      <div className="     rounded-xl border border-neutral-100 p-2 w-full">
        <div className="w-full  flex justify-between items-center  py-0.5">
          <div className="flex gap-1 items-center ">
            <span className=" border-[1.5px] border-neutral-200 bg-neutral-100  w-6 h-6 rounded-[6px] flex justify-center items-center">
              <List className="size-3.5 text-shadow-neutral-950" />
            </span>
            <h1 className="text-[18px]  tracking-tight font-medium text-neutral-800">
              Patient Records
            </h1>
          </div>
          <button className=" group border-[1.5px] rounded-md duration-300 ease-in-out transition-all flex gap-0.5 items-center  px-2 py-0.5 cursor-pointer bg-neutral-100 hover:bg-neutral-50 border-neutral-200 ">
            <Filter className="size-3  group-hover:text-neutral-400 text-neutral-800 duration-300 ease-in-out transition-all " />
            <span className=" group-hover:text-neutral-400 text-neutral-600 text-[12px] font-medium   tracking-tight   mt-0.5 duration-300 ease-in-out transition-all  ">
              Filter
            </span>
          </button>
        </div>
        <div className="w-full   py-4 mt-4    rounded-md">
          <div className=" overflow-x-auto w-full">
            <table className="sm:min-w-177 w-full relative table-auto  px-1">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="p-2 text-[14px] font-medium text-left">
                    Patient Name
                  </th>
                  <th className="p-2 text-[14px] font-medium text-center">
                    Department
                  </th>
                  <th className="p-2 text-[14px] font-medium text-center">
                    Admit Date
                  </th>
                  <th className="p-2 text-[14px] font-medium text-center">
                    Status
                  </th>
                  <th className="p-2 text-[14px] font-medium text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.map((patient) => (
                  <tr
                    onClick={() => handlenavgiation(patient.patientId)}
                    key={patient.patientId}
                    className="border-t hover:bg-neutral-200/80 cursor-pointer duration-300  transition-all ease-in-out border-neutral-100 text-[13px] text-neutral-700"
                  >
                    <td className="p-2  text-left ">{patient.name}</td>
                    <td className="p-2 text-center">{patient.department}</td>
                    <td className="p-2 text-center">{patient.date}</td>
                    <td className="p-2 text-center">
                      <span
                        className={`px-2 py-0.5 rounded-md text-[12px] ${
                          patient.status === "Success"
                            ? "bg-green-400 text-white"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {patient.status}
                      </span>
                    </td>
                    <div className="w-full flelx justify-center items-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          onClick={(e) => e.stopPropagation()}
                          asChild
                          className="flex w-full justify-center items-center "
                        >
                          <EllipsisVertical className="size-3.5 text-neutral-500 mt-2.5 text-center   rounded-full" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          onClick={(e) => {
                            e.stopPropagation();
                            deletAccount(patient.patientId);
                          }}
                          className=" cursor-pointer bg-red-500 border border-red-400 text-white roun-2xl"
                        >
                          <DropdownMenuGroup className="">
                            <DropdownMenuLabel>Delete</DropdownMenuLabel>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
