import { Filter, List } from "lucide-react";
import { DataTable } from "./data-table";
import { columns, PatientType } from "./columns";

export default function page() {
  const data: PatientType[] = [
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "pending",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "pending",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "pending",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "pending",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "pending",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "pending",
    },
    {
      patientId: "1234",
      name: "isuzwal",
      gender: "Male",
      age: 22,
      department: "Cardiology",
      date: "2/8/2026",
      status: "pending",
    },
  ];
  return (
    <div className=" p-1.5">
      <div className="  shadow-xs  rounded-xl border border-neutral-100 p-2 w-full">
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
        <div className=" py-2 mt-2  mx-auto ">
          <DataTable<PatientType> columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
