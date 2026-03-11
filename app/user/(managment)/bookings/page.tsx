"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserStore } from "@/store/useUserStore";
import { Filter, Search, Trash2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  const [searchbookings, setBookings] = useState("");
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(
    null,
  );
  const [cancelReason, setCancelReason] = useState("");

  const { bookings, loading } = useUserStore();
  const list = Array.isArray(bookings) ? bookings : [];

  const handleCancelClick = (bookingId: string) => {
    setSelectedBookingId(bookingId);
    setCancelDialogOpen(true);
  };

  const handleConfirmCancel = () => {
    // TODO: Add API call to cancel booking here, using cancelReason
    setCancelDialogOpen(false);
    setSelectedBookingId(null);
    setCancelReason("");
  };

  const handleCloseDialog = () => {
    setCancelDialogOpen(false);
    setSelectedBookingId(null);
    setCancelReason("");
  };

  return (
    <div className="w-full   min-h-screen flex  bg-neutral-100  ">
      {cancelDialogOpen && (
        <Dialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
          <DialogContent>
            <h2 className="text-lg font-semibold mb-3">Cancel Booking?</h2>
            <p className="mb-4 text-sm text-neutral-700">
              Are you sure you want to cancel this booking?
            </p>
            <Textarea
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              placeholder="Enter cancellation reason..."
              className="mb-4"
            />
            <div className="flex gap-2">
              <button
                className="px-2 py-1.5  cursor-pointer rounded bg-red-500 text-white font-medium w-full"
                onClick={handleConfirmCancel}
              >
                Confirm Cancel
              </button>
              <button
                className="px-2 py-1.5  cursor-pointer rounded bg-neutral-300 text-neutral-800 font-medium w-full"
                onClick={handleCloseDialog}
              >
                Close
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}
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
              <DropdownMenu>
                <DropdownMenuGroup>
                  <DropdownMenuGroup>
                    <DropdownMenuTrigger asChild>
                      <button className=" group border-[1.5px] rounded-md duration-300 ease-in-out transition-all flex gap-0.5 items-center  px-2 py-0.5 cursor-pointer bg-neutral-100 hover:bg-neutral-50 border-neutral-200  justify-center  h-6 w-6">
                        <span className=" rounded-md flex justify-center items-center">
                          <Filter className="size-3.5  group-hover:text-neutral-400 text-neutral-500 duration-300 ease-in-out transition-all " />
                        </span>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="border mr-6  p-1.5 ">
                      <DropdownMenuItem
                        onClick={() => setBookings("")}
                        className="w-full border-transparent p-1 text-[12px]  duration-300 cursor-pointer transition-all ease-in-out hover:bg-green-400  rounded-md hover:text-white"
                      >
                        Success
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setBookings("")}
                        className="w-full border-transparent p-1 text-[12px]  duration-300 cursor-pointer transition-all ease-in-out hover:bg-yellow-300  rounded-md hover:text-white"
                      >
                        Pending
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setBookings("")}
                        className="w-full border-transparent p-1 text-[12px]  duration-300 cursor-pointer transition-all ease-in-out hover:bg-red-400  rounded-md hover:text-white"
                      >
                        Cancel
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenuGroup>
                </DropdownMenuGroup>
              </DropdownMenu>
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
                    {loading
                      ? Array.from({ length: 6 }).map((_, i) => (
                          <tr key={i} className="border-t border-neutral-100">
                            <td className="p-2.5">
                              <Skeleton className="h-4 w-32" />
                            </td>

                            <td className="p-2 text-center">
                              <div className="flex justify-center">
                                <Skeleton className="h-4 w-24" />
                              </div>
                            </td>

                            <td className="p-2 text-center">
                              <div className="flex justify-center">
                                <Skeleton className="h-4 w-28" />
                              </div>
                            </td>

                            <td className="p-2 text-center">
                              <div className="flex justify-center">
                                <Skeleton className="h-5 w-16 rounded-md" />
                              </div>
                            </td>

                            <td className="p-2 text-center flex justify-center">
                              <Skeleton className="h-6 w-6 rounded-md" />
                            </td>
                          </tr>
                        ))
                      : list.map((resver) => (
                          <tr
                            key={resver._id}
                            className="border-t hover:bg-neutral-200/80 cursor-pointer duration-300 border-neutral-100 text-[13px] text-neutral-700"
                          >
                            <td className="p-2.5 flex gap-1.5 items-center">
                              {resver.userId?.slice(0, 16)}
                            </td>

                            <td className="p-2 text-center">
                              {resver.doctorId.department}
                            </td>

                            <td className="p-2 text-center">
                              {resver.appointment_date &&
                                new Date(
                                  resver.appointment_date,
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                            </td>

                            <td className="p-2 text-center">
                              <span
                                className={`px-2 py-0.5 rounded-md text-[12px] ${
                                  resver.status === "success"
                                    ? "bg-green-400 text-white"
                                    : resver.status === "cancel"
                                      ? "bg-red-500 text-white"
                                      : "bg-yellow-100 text-yellow-700"
                                }`}
                              >
                                {resver.status}
                              </span>
                            </td>

                            <td className="p-2 text-center flex justify-center">
                              {resver.status === "pending" && (
                                <button
                                  className="flex items-center justify-center rounded-md border-2 border-red-200 text-[12px] cursor-pointer bg-red-200 text-white hover:bg-red-100 transition-all w-6 h-6"
                                  onClick={() => handleCancelClick(resver._id)}
                                >
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
