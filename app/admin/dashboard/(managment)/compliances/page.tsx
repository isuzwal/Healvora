import { BarChart } from "@mui/x-charts/BarChart";
import { TriangleAlert } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
// import { compliancesdata } from "@/types/demo.data";

export default function page() {
  return (
    <div className="flex h-screen w-full ">
      <div className="font-medium  w-full py-6 px-4">
        <div className="flex gap-1  items-start">
          <span className=" border-[2px] rounded-[8px]  w-8 h-8  bg-red-500 border-red-300  text-white flex justify-center items-center">
            <TriangleAlert className="size-4.5 mb-0.5" />
          </span>
          <div className="flex p-0  flex-col justify-start  leading-5">
            <h1 className=" tracking-tighter text-[18px] font-semibold text-neutral-800 font-sans">
              Compliances by Patients
            </h1>
            <p className="text-[10px] text-neutral-700 tracking-tighter text-start">
              Monitor patient issues and compliance status
            </p>
          </div>
        </div>
        <div className="w-full   py-4 mt-6    rounded-md">
          {/* <div className="w-full  border border-neutral-100  rounded-lg bg-white  ">
            {compliancesdata.map((data, i) => (
              <div
                key={i}
                className="flex flex-col gap-1  hover:bg-neutral-200 duration-300 ease-in-out transition-all cursor-pointer"
              >
                <div className="px-2 w-full  flex   justify-between ">
                  <div className="flex items-center gap-1.5 m-1">
                    <div className="rounded-full relative overflow-hidden h-6 w-6 shadow boder-2 border-slate-200">
                      <Image
                        src={data.image}
                        fill
                        loading="lazy"
                        alt="Profile-Image"
                        className="object-contain h-full w-full rounded-full boder-2 border-slate-200"
                      />
                    </div>
                    <div className="flex flex-col  items-start justify-start mt-1.5 ">
                      <span className="text-[14px]  font-sans font-semibold">
                        {data.name}
                      </span>
                      <p className="text-neutral-600 font-sans font-medium text-[12px]">
                        Complian Date:{data.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center px-4  ">
                    <span
                      className={` border font-medium  ${data.status === "Resolve" ? "border border-emerald-300  bg-emerald-500 rounded-lg px-2.5" : "border-red-400  shadow-[inset_0_1px_2px_rgba(239,68,68,0.8),inset_0_-1px_3px_rgba(239,68,68,0.8)]  px-2.5 rounded-xl bg-red-500"} 
                     text-white tracking-tighte text-[10px]`}
                    >
                      {data.status}
                    </span>
                  </div>
                </div>
                <Separator className="mt-0.5" />
              </div>
            ))}
          </div> */}
        </div>
        {/* <button className="px-3 py-1 text-sm  justify-center  gap-1  group text-white cursor-pointer  rounded-md shadow-[inset_0_1px_1px_rgba(180,250,235,0.5),inset_0_-1px_2px_rgba(180,250,235,0.5)] flex items-center duration-300 ease-in-out transition-all hover:bg-primary/80  bg-primary border border-green-300  font-medium">
          Currently in Development{" "}
          <IconProgress className=" animate-spin size-4 mt-0.5" />{" "}
        </button> */}
        {/* <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: ["bar A", "bar B", "bar C"],
              height: 28,
            },
          ]}
          series={[
            {
              data: [2, 5, 3],
            },
          ]}
          height={300}
        /> */}
      </div>
    </div>
  );
}
