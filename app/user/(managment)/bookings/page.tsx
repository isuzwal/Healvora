"use client";
import { DropdownMenuGroup } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { patientdata, userBookings } from "@/types/demo.data";
import { Filter, Search, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [searchbookings, setBookings] = useState("");
  return (
    <div className="w-full   min-h-screen flex  bg-neutral-100  ">
      <div className="w-full p-1.5 ">
        <div className="  py-4 px-2 rounded-lg items-center bg-white ">
          <div className="flex justify-between  ">
            <h1 className="text-[20px] font-semibold tracking-tight">
              My Bookings
            </h1>
            <div className="p-0.5 ml-auto flex gap-2 items-center">
              <label
                className="border rounded-lg px-1.5  bg-slate-100 py-1 flex items-center focus-within:border-green-300
                focus-within:ring-2 focus-within:ring-green-200 transition-all duration-300"
              >
                <Search className="  size-4 text-neutral-500" />
                <Input
                  type="text"
                  placeholder="Search bookings..."
                  value={searchbookings}
                  onChange={(e) => setBookings(e.target.value)}
                  className="w-full h-6  rounded-md text-[12px] text-neutral-700   focus:outline-none focus:ring-0 focus-visible:ring-0
                focus-visible:border-transparent placeholder:px-1.5 placeholder:text-neutral-700 placeholder:text-[12px] "
                />
              </label>
              <button className=" group border-[1.5px] rounded-md duration-300 ease-in-out transition-all flex gap-0.5 items-center  px-2 py-0.5 cursor-pointer bg-neutral-100 hover:bg-neutral-50 border-neutral-200  justify-center  h-6 w-6">
                <span className=" rounded-md flex justify-center items-center">
                  <Filter className="size-3.5  group-hover:text-neutral-400 text-neutral-500 duration-300 ease-in-out transition-all " />
                </span>
              </button>
            </div>
          </div>
          <div className=" rounded-xl border border-neutral-100  w-full">
            <div className="w-full   py-4     rounded-md">
              <div className=" overflow-x-auto w-full">
                <table className="sm:min-w-177 w-full relative table-auto  px-1">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="p-2 text-[14px] font-medium text-left">
                        Booking ID
                      </th>
                      <th className="p-2 text-[14px] font-medium text-center">
                        Service
                      </th>
                      <th className="p-2 text-[14px] font-medium text-center">
                        Date
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
                    {userBookings.map((user) => (
                      <tr
                        // onClick={() => handlenavgiation(patient.patientId)}
                        key={user.userId}
                        className="border-t  hover:bg-neutral-200/80 cursor-pointer duration-300  transition-all ease-in-out border-neutral-100 text-[13px] text-neutral-700"
                      >
                        <td className="p-2.5 flex gap-1.5 items-center  justify-start text-left ">
                          {user.userId?.slice(0, 4)}
                        </td>
                        <td className="p-2 text-center">{user.department}</td>
                        <td className="p-2 text-center">
                          {user.appointment_date &&
                            new Date(user.appointment_date).toLocaleDateString(
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
                              user.status === "Success"
                                ? "bg-green-400 text-white"
                                : user.status === "Cancel"
                                  ? "bg-red-500 text-white"
                                  : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="p-2 text-center  justify-center flex ">
                          {user.status === "Pending" && (
                            <button className=" flex  items-center  justify-center   rounded-md border-2 border-red-200 text-[12px] cursor-pointer bg-red-200 text-white hover:bg-red-100 transition-all w-6 h-6">
                              <Trash2 className="size-3.5 text-red-500" />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
