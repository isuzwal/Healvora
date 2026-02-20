"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { patientdata, totalappointment } from "@/types/demo.data";
import Image from "next/image";
import {
  CalendarDays,
  CreditCard,
  EllipsisVertical,
  Filter,
  HeartHandshake,
  List,
  Users,
} from "lucide-react";

import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import {
  CardAction,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { IconTrendingUp } from "@tabler/icons-react";

export default function Page() {
  const router = useRouter();

  const handlenavgiation = (id: string) => {
    router.push(`/dashboard/patients/${id}`);
  };
  // delete api
  const deletAccount = (id: string) => {
    console.log("Account delete", id);
  };
  return (
    <div className=" p-1.5">
      <div>
        <div className="flex gap-1 items-center ">
          <span className=" border-[1.5px] border-neutral-200 bg-neutral-100  w-6 h-6 rounded-[6px] flex justify-center items-center">
            <List className="size-3.5 text-shadow-neutral-950" />
          </span>
          <h1 className="text-[18px]  tracking-tight font-medium text-neutral-800">
            Patient Records
          </h1>
        </div>
        <div className=" mt-2 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
          <Card className="@container/card rounded-2xl py-4">
            <CardHeader>
              <CardDescription className=" flex   items-center  gap-1.5 font-sans font-medium text-neutral-700 text-sm p-0">
                <span className="w-6 h-6 border-[1.5px] bg-green-100 border-green-100 text-emerald-400 rounded-md flex items-center justify-center">
                  <Users className="size-4" />
                </span>{" "}
                Total Patients
              </CardDescription>
              <CardTitle className="text-2xl font-semibold  text-neutral-800">
                {patientdata.length}
              </CardTitle>
              <CardAction>
                {/* <Badge
                     
                      className="border text-emerald-400  border-green-200 rounded-2xl  font-medium text-[12px]  font-sans"
                    >
                      <IconTrendingUp className="text-emerald-400" />
                      +12.5%
                    </Badge> */}
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col  items-start gap-1.5 text-sm">
              <div className="line-clamp-1 text-neutral-600 flex gap-2 font-medium">
                Increase patient visits in 7 days{" "}
                <IconTrendingUp className="size-4 text-emerald-300" />
              </div>
            </CardFooter>
          </Card>
          <Card className="@container/card rounded-2xl py-4">
            <CardHeader>
              <CardDescription className=" flex   items-center  gap-1.5 font-sans font-medium text-neutral-700 text-sm p-0">
                <span className="w-6 h-6 bg-yellow-50 border-yellow-100 text-yellow-300 border-[1.5px] rounded-md  flex justify-center items-center">
                  <CalendarDays className="size-4" />
                </span>
                Total Appointment
              </CardDescription>
              <CardTitle className="text-2xl flex gap-2 items-center  font-semibold tabular-nums @[250px]/card:text-3xl">
                {totalappointment.length}
              </CardTitle>
              <CardAction>
                {/* <Badge
                      variant="outline"
                      className="border text-yellow-400 border-yellow-200  rounded-2xl  font-medium text-[12px]  font-sans"
                    >
                      <IconTrendingUp />
                      10%
                    </Badge> */}
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium text-neutral-600">
                Boost appointments within 7 days{" "}
              </div>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription className="flex gap-1">
                <span className="w-6 h-6 rounded-md bg-emerald-100  border-emerald-100 flex justify-center items-center border bg-">
                  <CreditCard className="size-4 text-emerald-300" />
                </span>
                Total Income
              </CardDescription>
              <CardTitle className="text-2xl   font-semibold tabular-nums @[250px]/card:text-3xl">
                10,00
              </CardTitle>
              <CardAction>
                {/* <Badge
                      variant="outline"
                      className="border border-emerald-200 text-emerald-400"
                    >
                      <IconTrendingUp className="text-emerald-400" />
                      +4.5%
                    </Badge> */}
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Grow your income in 7 days
                <IconTrendingUp className="size-4 text-emerald-400" />
              </div>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription className="flex gap-1">
                <span className="w-6 h-6 rounded-md bg-blue-400  border-blue-300 flex justify-center items-center border bg-">
                  <HeartHandshake className="size-4 text-white" />
                </span>
                Total Treatements
              </CardDescription>
              <CardTitle className="text-2xl   font-semibold tabular-nums @[250px]/card:text-3xl">
                {totalappointment.length}
              </CardTitle>
              <CardAction>
                {/* <Badge
                      variant="outline"
                      className="border border-blue-300 text-blue-400"
                    >
                      <IconTrendingUp className="text-blue-400" />
                      +4.5%
                    </Badge> */}
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Increase treatmens in just 7 days
                <IconTrendingUp className="size-4" />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="     rounded-xl border border-neutral-100 p-2 w-full">
        <div className="w-full  flex justify-between items-center  py-0.5">
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
                {patientdata.map((patient) => (
                  <tr
                    onClick={() => handlenavgiation(patient.patientId)}
                    key={patient.patientId}
                    className="border-t  hover:bg-neutral-200/80 cursor-pointer duration-300  transition-all ease-in-out border-neutral-100 text-[13px] text-neutral-700"
                  >
                    <td className="p-2.5 flex gap-1.5 items-center  justify-start text-left ">
                      <div className=" overflow-hidden relative w-5 h-5 rounded-full flex justify-center items-center">
                        <Image
                          src={patient.image}
                          alt="User-Image"
                          fill
                          className="w-full h-full rounded-full"
                          loading="lazy"
                        />
                      </div>
                      {patient.name}
                    </td>
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
