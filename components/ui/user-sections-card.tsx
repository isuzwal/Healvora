import { IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarDays,
  CircleCheck,
  Clock,
  CreditCard,
  HeartHandshake,
  Users,
  XCircle,
} from "lucide-react";
import {
  patientdata,
  successPercentageFormatted,
  totalappointment,
} from "@/types/demo.data";

export function UserSectionCards() {
  return (
    <div>
      <div className="w-full px-4  py-1 flex flex-col justify-start items-start">
        <h1 className="text-[20px] tracking-tighter  font-sans font-semibold text-neutral-800">
          Dashboard
        </h1>
        <p className="text-neutral-600 font-medium text-[14px] text-start">
          Stay updated with real-time insights on your bookings, revenue, and
          overall system activity.
        </p>
      </div>
      <div className=" mt-2 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        <Card className="@container/card rounded-2xl py-4">
          <CardHeader>
            <CardDescription className=" flex   items-center  gap-1.5 font-sans font-medium text-neutral-700 text-sm p-0">
              <span className="w-6 h-6 border-[1.5px] bg-blue-100 border-blue-100 text-blue-500 rounded-md flex items-center justify-center">
                <Users className="size-4" />
              </span>{" "}
              Total Bookings
            </CardDescription>
            <CardTitle className="text-2xl px-4  font-semibold  text-neutral-800">
              {patientdata.length}
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex   flex-col p-2 text-sm gap-1">
            <div className="text-[12px] text-neutral-600 font-medium">
              All bookings you have created are shown here.
            </div>
            <div className="text-[11px] text-neutral-500">
              Manage, track, and review your activity anytime.
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card  p-1">
          <CardHeader className="px-2 py-1.5">
            <CardDescription className=" flex   items-center  gap-1.5 font-sans font-medium text-neutral-700 text-sm p-0">
              <span className="w-6 h-6 bg-green-100 border-green-200 text-green-400 border-[1.5px] rounded-md  flex justify-center items-center">
                <CircleCheck className="size-4" />
              </span>
              Booking Completed
            </CardDescription>
            <CardTitle className="text-2xl  px-4 flex gap-2 items-center  font-semibold tabular-nums @[250px]/card:text-3xl">
              {totalappointment.length}
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex    flex-col p-2 text-sm gap-1">
            <div className="text-[12px] font-medium text-green-600">
              Your booking was successfully completed.
            </div>
            <div className="text-[11px] text-neutral-500">
              We appreciate your trust in our service.
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card  p-1">
          <CardHeader className="px-2 py-1.5">
            <CardDescription className="flex gap-1">
              <span className="w-6 h-6 rounded-md bg-yellow-100  border-yellow-100 flex justify-center items-center border bg-">
                <Clock className="size-4 text-yellow-500" />
              </span>
              Bookings Pending
            </CardDescription>
            <CardTitle className="text-2xl px-4  font-semibold tabular-nums @[250px]/card:text-3xl">
              2
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex  flex-col p-2 text-sm gap-1">
            <div className="text-[12px] text-yellow-600 font-medium">
              Waiting for confirmation from the provider.
            </div>
            <div className="text-[11px] text-neutral-500">
              You will be notified once it is confirmed.
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card  p-1">
          <CardHeader className=" py-1.5  px-2">
            <CardDescription className="flex gap-1.5  items-center  ">
              <span className="w-6 h-6 rounded-md bg-red-100   border-red-100 flex justify-center items-center border bg-">
                <XCircle className="size-3.5 text-red-500" />
              </span>
              <span className="text-[14px]  font-semibold  text-neutral-800 tracking-tighter">
                Bookings Cancelled
              </span>
            </CardDescription>
            <CardTitle className="text-2xl  px-4  font-semibold tabular-nums @[250px]/card:text-3xl">
              {totalappointment.length}
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex  flex-col p-2 text-sm gap-1">
            <div className="text-[12px] w-full text-red-400 font-medium">
              These bookings were cancelled and are no longer active.
            </div>
            <div className="text-[11px]  text-neutral-500">
              You can rebook any service anytime.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
