"use client";

import Image from "next/image";
import {
  Clock,
  Filter,
  HeartHandshake,
  List,
  Users,
  XCircle,
} from "lucide-react";

import { useRouter } from "next/navigation";

import {
  Card,
  CardHeader,
  CardAction,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { IconTrendingUp } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { useAdminBookings } from "@/store/useAdminStore";
import { DoctorSkeleton } from "@/components/ui/doctor-skeleton";

export default function Page() {
  const router = useRouter();
  const { bookings, loading } = useAdminBookings();

  const handlenavgiation = (id: string) => {
    router.push(`/admin/dashboard/patients/${id}`);
  };

  const toatal = bookings.length;
  const CancelBooking = bookings.filter(
    (cal) => cal.status === "cancel",
  ).length;
  const SuccessBooking = bookings.filter(
    (cal) => cal.status === "success",
  ).length;
  const PendingBooking = bookings.filter(
    (cal) => cal.status === "pending",
  ).length;

  const successPercentageFormatted = ((SuccessBooking / toatal) * 100).toFixed(
    2,
  );

  const pendingPercentageFormatted = ((PendingBooking / toatal) * 100).toFixed(
    2,
  );
  const CancelPercentageFormatted = ((CancelBooking / toatal) * 100).toFixed(2);

  return (
    <div className="">
      <div className="py-2 px-2">
        <div className="flex gap-1 items-center ">
          <span className=" border-[1.5px] border-neutral-200 bg-neutral-100  w-6 h-6 rounded-[6px] flex justify-center items-center">
            <List className="size-3.5 text-shadow-neutral-950" />
          </span>
          <h1 className="text-[18px]  tracking-tight font-medium text-neutral-800">
            Patient Records
          </h1>
        </div>
        <div className="mt-2 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
          <Card className="@container/card rounded-2xl py-4">
            <CardHeader>
              <CardDescription className=" flex   items-center  gap-1.5 font-sans font-medium text-neutral-700 text-sm p-0">
                <span className="w-6 h-6 border-[1.5px] bg-green-100 border-green-100 text-emerald-500 rounded-md flex items-center justify-center">
                  <Users className="size-4" />
                </span>{" "}
                Total Bookings
              </CardDescription>
              <CardTitle className="text-2xl font-semibold  text-neutral-800">
                {toatal}
              </CardTitle>
              <CardAction>
                <Badge
                  variant="outline"
                  className="border bg-emerald-100 text-emerald-400  border-green-200 rounded-2xl  font-medium text-[12px]  font-sans"
                >
                  <IconTrendingUp className="text-emerald-500" />
                  {toatal}%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-[12px] p-1.5">
              <div className="text-emerald-600 font-medium flex items-center gap-1">
                <IconTrendingUp className="size-4" />
                Bookings increasing this period
              </div>
              <p className="text-neutral-500 text-xs">
                Compared to the previous period
              </p>
            </CardFooter>
          </Card>
          <Card className="@container/card rounded-2xl py-4">
            <CardHeader>
              <CardDescription className=" flex   items-center  gap-1.5 font-sans font-medium text-neutral-700 text-sm p-0">
                <span className="w-6 h-6 bg-red-100 border-red-100 text-red-500 border-[1.5px] rounded-md  flex justify-center items-center">
                  <XCircle className="size-4" />
                </span>
                Cancel Appointment
              </CardDescription>
              <CardTitle className="text-2xl flex gap-2 items-center  font-semibold tabular-nums @[250px]/card:text-3xl">
                {CancelBooking}
              </CardTitle>
              <CardAction>
                <Badge
                  variant="outline"
                  className="border text-red-400 border-red-200 bg-red-100  rounded-2xl  font-medium text-[12px]  font-sans"
                >
                  <IconTrendingUp />
                  {CancelPercentageFormatted}%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-[12px] p-1.5">
              <p className="text-red-500 font-medium flex items-center gap-1">
                <XCircle className="size-4" />
                Appointment cancellations recorded
              </p>
              <p className="text-neutral-500 text-xs">
                Compared with total bookings
              </p>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription className="flex gap-1">
                <span className="w-6 h-6 rounded-md bg-yellow-50  border-yellow-100 flex justify-center items-center border bg-">
                  <Clock className="size-4 text-yellow-400" />
                </span>
                Booking Pending
              </CardDescription>
              <CardTitle className="text-2xl   font-semibold tabular-nums @[250px]/card:text-3xl">
                {PendingBooking}
              </CardTitle>
              <CardAction>
                <Badge
                  variant="outline"
                  className="border border-yellow-200 text-yellow-500 bg-yellow-100"
                >
                  <IconTrendingUp className="" />
                  {pendingPercentageFormatted}%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 p-1.5  text-[12px]">
              <p className="text-yellow-600 font-medium  flex items-center gap-1">
                <Clock className="size-4" />
                Awaiting confirmation from doctors
              </p>
              <p className="text-neutral-500 text-xs">
                These bookings are not finalized yet
              </p>
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
                {SuccessBooking}
              </CardTitle>
              <CardAction>
                <Badge
                  variant="outline"
                  className="border border-blue-300 bg-blue-100 text-blue-400"
                >
                  <IconTrendingUp className="text-blue-400" />
                  {successPercentageFormatted}%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-[12px] p-1.5">
              <p className="text-blue-500 font-medium flex items-center gap-1">
                <HeartHandshake className="size-4" />
                Successfully completed appointments
              </p>
              <p className="text-neutral-500 text-xs">
                Based on confirmed treatments
              </p>
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
          {loading ? (
            <div className="w-full border border-neutral-100 rounded-lg bg-white">
              {Array.from({ length: 6 }).map((_, i) => (
                <DoctorSkeleton key={i} />
              ))}
            </div>
          ) : (
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
                  </tr>
                </thead>

                <tbody>
                  {bookings.map((patient) => (
                    <tr
                      onClick={() => handlenavgiation(patient.userId._id)}
                      key={patient.userId._id}
                      className="border-t  hover:bg-neutral-200/80 cursor-pointer duration-300  transition-all ease-in-out border-neutral-100 text-[13px] text-neutral-700"
                    >
                      <td className="p-2.5 flex gap-1.5 items-center  justify-start text-left ">
                        <div className=" overflow-hidden relative w-5 h-5 rounded-full flex justify-center items-center">
                          <Image
                            src={patient.userId.image}
                            alt="User-Image"
                            fill
                            className="w-full h-full rounded-full"
                            loading="lazy"
                          />
                        </div>
                        {patient.userId.username}
                      </td>
                      <td className="p-2 text-center">
                        {patient.doctorId.department}
                      </td>
                      <td className="p-2 text-center">
                        {patient.appointment_date &&
                          new Date(patient.appointment_date).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                      </td>
                      <td className="p-2 text-center">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[12px] ${
                            patient.status === "success"
                              ? "bg-green-400 text-white"
                              : patient.status === "cancel"
                                ? "bg-red-500 text-white"
                                : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {patient.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
