"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { useMemo } from "react";
import { ChartNoAxesCombined, Timer } from "lucide-react";
import Image from "next/image";
import {
  doctordata,
  isAvailable,
  Leave,
  patientdata,
  UnAvailable,
} from "@/types/demo.data";

export const description = "An interactive area chart";

export function ChartAreaInteractive() {
  const chartData = useMemo(() => {
    const grouped: Record<
      string,
      { date: string; admission: number; discharge: number }
    > = {};

    patientdata.forEach((patient) => {
      if (!grouped[patient.date]) {
        grouped[patient.date] = {
          date: patient.date,
          admission: 0,
          discharge: 0,
        };
      }

      // Admission = total patients
      grouped[patient.date].admission += 1;

      // Discharge = only Success
      if (patient.status === "Success") {
        grouped[patient.date].discharge += 1;
      }
    });

    return Object.values(grouped);
  }, []);

  const chartConfig = {
    admission: {
      label: "Admission",
      color: "var(--primary)",
    },
    discharge: {
      label: "Discharge",
      color: "var(--primary)",
    },
  } satisfies ChartConfig;

  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
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
      <Card className="@container/card  col-span-2">
        <CardHeader className=" w-full flex justify-between">
          <CardDescription className="flex gap-1 items-center">
            <span className="w-6 h-6 border-slate-200 bg-slate-100 rounded-md flex items-center justify-center">
              <ChartNoAxesCombined className="size-4 text-neutral-700" />
            </span>
            <span className="hidden text-[18px] font-medium text-neutral-950 tracking-tight @[540px]/card:block">
              Adminssion & Discharge Trends
            </span>
          </CardDescription>
          <div className="flex gap-2 items-center">
            <span className="  flex gap-1.5 items-center  text-[12px]  font-sans font-medium">
              <span className="w-1.5 h-1.5 rounded-md bg-emerald-300" />{" "}
              Admissons
            </span>
            <span className=" flex  gap-1.5 items-center text-neutral-600 font-sans text-[12px] font-medium">
              <span className="w-1.5 h-1.5 rounded-md bg-neutral-400" />{" "}
              Dicharges
            </span>
          </div>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="fillAdmission" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-admission)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-admission)"
                    stopOpacity={0.1}
                  />
                </linearGradient>

                <linearGradient id="fillDischarge" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-discharge)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-discharge)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      });
                    }}
                    indicator="dot"
                  />
                }
              />
              <Area
                dataKey="admission"
                type="natural"
                fill="url(#fillAdmission)"
                stroke="var(--color-admission)"
                stackId="a"
              />

              <Area
                dataKey="discharge"
                type="natural"
                fill="url(#fillDischarge)"
                stroke="var(--color-discharge)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
      {/*Right side */}
      <div className="w-full border bg-secondary shadow-xs border-neutral-100 rounded-xl p-2">
        <CardTitle className="flex gap-1.5 items-center jus w-full  p-1">
          <span className="w-6 h-6 border flex justify-center items-center bg-neutral-100   border-slate-200 rounded-md">
            <Timer className="size-4 text-neutral-700" />
          </span>
          <h1 className="text-base  font-sans font-semibold">
            Doctor&apos;s Timetable
          </h1>
        </CardTitle>
        <div className=" mt-2 grid grid-cols-1 gap-2  sm:grid-cols-3 ">
          <div className=" py-2  px-2 rounded-xl border bg-green-100/30 border-green-100/30 shadow-xs">
            <h1 className="text-[14px] text-neutral-700 font-semibold font-sans">
              Available
            </h1>
            <div>
              <p className="flex gap-1.5 items-center mt-2">
                <strong className="text-lg  text-emerald-600">
                  {isAvailable.length}
                </strong>
                <span className="text-[12px] font-medium text-neutral-500">
                  Total
                </span>
              </p>
            </div>
          </div>
          <div className=" py-2  px-2 rounded-xl border bg-red-100/30 border-red-100/30 shadow-xs">
            <h1 className="text-[14px] text-neutral-700 font-semibold font-sans">
              Unavailable
            </h1>
            <div>
              <p className="flex gap-1.5 items-center mt-2">
                <strong className="text-lg  text-red-400">
                  {UnAvailable.length}
                </strong>
                <span className="text-[14px] font-medium text-neutral-500">
                  Total
                </span>
              </p>
            </div>
          </div>
          <div className=" py-2  px-2 rounded-xl border bg-orange-100/30  border-orange-100/30 shadow-xs">
            <h1 className="text-[14px] text-neutral-700 font-semibold font-sans">
              Leave
            </h1>
            <div>
              <p className="flex gap-1.5 items-center mt-2">
                <strong className="text-lg  text-orange-500">
                  {Leave.length}
                </strong>
                <span className="text-[14px] font-medium text-neutral-500">
                  Total
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="  w-full mt-2 py-2 px-2  ">
          <h1 className="text-md font-semibold font-sans">List of Doctor</h1>
          <div className=" overflow-y-auto max-h-52 no-scrollbar  w-full   ">
            {doctordata.slice(0, 5).map((doc, i) => (
              <div
                key={i}
                className="w-full flex  justify-between items-center  p-2"
              >
                <div className="flex items-center gap-1.5  ">
                  <div className=" relative overflow-hidden flex justify-center items-center w-8 h-8 rounded-full">
                    <Image
                      src={doc.doctor_image || " "}
                      alt="Doctor"
                      fill
                      loading="lazy"
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col  items-start justify-start mt-1.5 ">
                    <span className="text-[14px]  font-sans font-semibold">
                      {doc.doctorName}
                    </span>
                    <p className="text-neutral-600 font-sans font-light text-[12px]">
                      {doc.department}
                    </p>
                  </div>
                </div>
                <div className="flex items-center px-4">
                  <span
                    className={`font-medium text-white text-[10px] px-2.5 rounded-lg ${
                      doc.isAvailable === "Available"
                        ? "bg-emerald-500 border-emerald-300"
                        : doc.isAvailable === "Leave"
                          ? "bg-yellow-400 border-yellow-300"
                          : "bg-red-500 border-red-400"
                    }`}
                  >
                    {doc.isAvailable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
