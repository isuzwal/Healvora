"use client";

import * as React from "react";
import { CartesianGrid, XAxis } from "recharts";
import { BarChart, Bar, YAxis, Tooltip, Legend } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { useMemo } from "react";
import { ChartNoAxesCombined } from "lucide-react";

import { userBookings } from "@/types/demo.data";

export const description = "An interactive area chart";

export function UserChat() {
  // Prepare chart data for BarChart: group by date and count statuses
  const chartData = useMemo(() => {
    const grouped: Record<
      string,
      { name: string; Bookings: number; Pending: number; Cancelled: number }
    > = {};
    userBookings.forEach((booking) => {
      // Always convert date to string for key and name
      const dateObj = booking.appointment_date;
      const dateKey =
        dateObj instanceof Date ? dateObj.toISOString().split("T")[0] : "";
      if (!grouped[dateKey]) {
        grouped[dateKey] = {
          name: dateKey,
          Bookings: 0,
          Pending: 0,
          Cancelled: 0,
        };
      }
      const status =
        typeof booking.status === "string" ? booking.status.toLowerCase() : "";
      if (status === "success") {
        grouped[dateKey].Bookings += 1;
      } else if (status === "pending") {
        grouped[dateKey].Pending += 1;
      } else if (
        status === "cancelled" ||
        status === "cancel" ||
        status === "cancle"
      ) {
        grouped[dateKey].Cancelled += 1;
      }
    });
    return Object.values(grouped);
  }, [userBookings]);

  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.name);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <div className="grid grid-cols-1  lg:grid-cols-3  gap-2 w-full p-0 ">
      <Card className="@container/card  col-span-3">
        <CardHeader className=" w-full flex justify-between">
          <CardDescription className="flex gap-1 items-center">
            <span className="w-6 h-6 border-slate-200 bg-slate-100 rounded-md flex items-center justify-center">
              <ChartNoAxesCombined className="size-4 text-neutral-700" />
            </span>
            <span className="hidden text-[18px] font-medium text-neutral-950 tracking-tight @[540px]/card:block">
              Visual Present of your bookings
            </span>
          </CardDescription>
          <div className="flex gap-2 items-center">
            <span className="  flex gap-1.5 items-center  text-[12px]  font-sans font-medium">
              <span className="w-1.5 h-1.5 rounded-md bg-emerald-300" />{" "}
              Bookings
            </span>
            <span className="  flex gap-1.5 items-center  text-[12px]  font-sans font-medium">
              <span className="w-1.5 h-1.5 rounded-md bg-yellow-300" /> Pending
            </span>
            <span className=" flex  gap-1.5 items-center text-neutral-600 font-sans text-[12px] font-medium">
              <span className="w-1.5 h-1.5 rounded-md bg-red-400" /> Cancelled
            </span>
          </div>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <BarChart
            style={{
              width: "100%",

              maxHeight: "70vh",
              aspectRatio: 1.618,
            }}
            responsive
            data={filteredData}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <div className="">
              <Bar
                dataKey="Bookings"
                fill="green"
                activeBar={{ fill: "pink", stroke: "blue" }}
                radius={[10, 10, 0, 0]}
              />
              <Bar
                dataKey="Pending"
                fill="yellow"
                activeBar={{ fill: "gold", stroke: "purple" }}
                radius={[10, 10, 0, 0]}
              />
              <Bar
                dataKey="Cancelled"
                fill="red"
                activeBar={{ fill: "gold", stroke: "purple" }}
                radius={[10, 10, 0, 0]}
              />
            </div>
            <RechartsDevtools />
          </BarChart>
        </CardContent>
      </Card>
    </div>
  );
}
