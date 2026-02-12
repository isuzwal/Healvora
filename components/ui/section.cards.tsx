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
import { CalendarDays, CreditCard, HeartHandshake, Users } from "lucide-react";
import { patientdata, totalappointment } from "@/types/demo.data";

export function SectionCards() {
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
              <span className="w-6 h-6 border-[1.5px] bg-green-100 border-green-100 text-emerald-400 rounded-md flex items-center justify-center">
                <Users className="size-4" />
              </span>{" "}
              Total Patients
            </CardDescription>
            <CardTitle className="text-2xl font-semibold  text-neutral-800">
              {patientdata.length}
            </CardTitle>
            <CardAction>
              <Badge
                variant="outline"
                className="border text-emerald-400  border-green-200 rounded-2xl  font-medium text-[12px]  font-sans"
              >
                <IconTrendingUp className="text-emerald-400" />
                +12.5%
              </Badge>
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
              <Badge
                variant="outline"
                className="border text-yellow-400 border-yellow-200  rounded-2xl  font-medium text-[12px]  font-sans"
              >
                <IconTrendingUp />
                10%
              </Badge>
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
              <Badge
                variant="outline"
                className="border border-emerald-200 text-emerald-400"
              >
                <IconTrendingUp className="text-emerald-400" />
                +4.5%
              </Badge>
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
              <Badge
                variant="outline"
                className="border border-blue-300 text-blue-400"
              >
                <IconTrendingUp className="text-blue-400" />
                +4.5%
              </Badge>
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
  );
}
