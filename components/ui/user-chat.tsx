"use client";

import * as React from "react";
import { CartesianGrid, XAxis } from "recharts";
import { BarChart, Bar } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { ChartNoAxesCombined } from "lucide-react";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./chart";

import { useUserStore } from "@/store/useUserStore";

export const description = "An interactive area chart";

export function UserChat() {
  const { bookings } = useUserStore();

  const chartData = React.useMemo(() => {
    const list = Array.isArray(bookings) ? bookings : [];
    const total = list.length;
    const success = list.filter((b) => b.status === "success").length;
    const pending = list.filter((b) => b.status === "pending").length;
    const cancel = list.filter((b) => b.status === "cancel").length;

    return [
      {
        month: "Current",
        Total: total,
        Success: success,
        Pending: pending,
        Cancel: cancel,
      },
    ];
  }, [bookings]);

  const ChatConfig = {
    total: {
      label: "Total",
      color: "blue",
    },
    success: {
      label: "Success",
      color: "green",
    },
    pending: {
      label: "Pending",
      color: "yellow",
    },
    cancel: {
      label: "Cancel",
      color: "red",
    },
  };
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
              <span className="w-1.5 h-1.5 rounded-md bg-blue-400" /> Total
              bookings
            </span>
            <span className="  flex gap-1.5 items-center  text-[12px]  font-sans font-medium">
              <span className="w-1.5 h-1.5 rounded-md bg-emerald-400" /> Sucess
            </span>
            <span className="  flex gap-1.5 items-center  text-[12px]  font-sans font-medium">
              <span className="w-1.5 h-1.5 rounded-md bg-yellow-400" /> Pending
            </span>
            <span className=" flex  gap-1.5 items-center text-neutral-600 font-sans text-[12px] font-medium">
              <span className="w-1.5 h-1.5 rounded-md bg-red-400" /> Cancelled
            </span>
          </div>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer config={ChatConfig} className="min-h-28 w-full">
            <BarChart accessibilityLayer data={chartData} className="w-full">
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="Total" fill="var(--color-total)" radius={4} />
              <Bar dataKey="Success" fill="var(--color-success)" radius={4} />
              <Bar dataKey="Pending" fill="var(--color-pending)" radius={4} />
              <Bar dataKey="Cancel" fill="var(--color-cancel)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
