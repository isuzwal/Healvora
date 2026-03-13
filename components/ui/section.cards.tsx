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
import { Clock, HeartHandshake, Users, XCircle } from "lucide-react";

import { useAdminBookings } from "@/store/useAdminStore";
export function SectionCards() {
  const { bookings, loading } = useAdminBookings();

  // filter out the bookings
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
    <div>
      <div className="w-full px-4  py-1 flex flex-col justify-start items-start">
        <h1 className="text-[20px] tracking-tighter  font-sans font-semibold text-neutral-800">
          Dashboard
        </h1>
        <p className="text-neutral-600 font-medium text-[14px] text-start">
          Overall of all your detailed of patents and your income
        </p>
      </div>
      <div className=" mt-2 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
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
  );
}
