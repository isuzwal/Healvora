"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Loader, Trash2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { BACKENDAPI } from "@/types/url";
import { toast } from "sonner";

interface BookingI {
  _id: string;
  patient_name: string;
  status: string;
  userId: {
    _id: string;
    email: string;
  };
  notes: string;
  gender: string;
  appointment_time: string;
  appointment_date: string;
  age: number;
  remaingAmount: number;
}

export default function Page() {
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(
    null,
  );
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [selectedBookingDetails, setSelectedBookingDetails] =
    useState<BookingI | null>(null);
  const [cancelReason, setCancelReason] = useState("");
  const [Isloading, setIsLoading] = useState(false);
  const [bookings, setBookings] = useState<BookingI[]>([]);
  const [loading, setLoading] = useState(false);

  const handleCancelClick = (bookingId: string) => {
    setSelectedBookingId(bookingId);
    setCancelDialogOpen(true);
  };

  const handleDetailsClick = (booking: BookingI) => {
    setSelectedBookingDetails(booking);
    setDetailsDialogOpen(true);
  };
  const handleBookingSuccess = async () => {
    if (!selectedBookingDetails) return;
    setIsLoading(true);
    try {
      const token = localStorage.getItem("doctor_token");
      const res = await fetch(
        `${BACKENDAPI}/api/v1/doctor/success/${selectedBookingDetails._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const result = await res.json();
      if (!res.ok) {
        setIsLoading(false);
        return toast.warning(result.message || "Try again");
      }
      toast.success("Booking marked as success. Email sent to user.");
      setDetailsDialogOpen(false);
      setSelectedBookingDetails(null);
      getBookingOfDoctor();
    } catch (error) {
      toast.error(`${error}` || "Fail to mark booking as success");
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmCancel = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("doctor_token");
      const res = await fetch(
        `${BACKENDAPI}/api/v1/doctor/cancel-resever/${selectedBookingId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ cancel_reason: cancelReason }),
        },
      );
      const result = await res.json();
      if (!res.ok) {
        setIsLoading(false);
        return toast.warning(result.message || "Try again ");
      }
      toast.success(result.message);
      setCancelDialogOpen(false);
      setSelectedBookingId(null);
      setCancelReason("");
    } catch (error) {
      toast.error(`${error}` || "Fail to cancel your Reservation");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setCancelDialogOpen(false);
    setSelectedBookingId(null);
    setCancelReason("");
  };

  const getBookingOfDoctor = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("doctor_token");

      if (!token) {
        throw new Error("UNAUTHORIZED");
      }
      const response = await fetch(
        `${BACKENDAPI}/api/v1/doctor/doctor-bookings`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch bookings");
      }
      setBookings(data.data);
      console.log("Data of doctor bookings list", data);
    } catch (error) {
      toast.error(`${error}` || "Something worng");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBookingOfDoctor();
  }, []);
  return (
    <div className="w-full   min-h-screen flex    ">
      {/* Cancel Dialog */}
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
                {Isloading ? (
                  <span>
                    Confirm Cancel <Loader className="size-3.5  animate-spin" />
                  </span>
                ) : (
                  <>Confirm Cancel</>
                )}
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

      {/* Booking Details Dialog */}
      {detailsDialogOpen && selectedBookingDetails && (
        <Dialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen}>
          <DialogContent>
            <h2 className="text-lg font-semibold mb-3">Booking Details</h2>
            <div className="mb-2 text-sm">
              <strong>Patient Name:</strong>{" "}
              {selectedBookingDetails.patient_name}
            </div>
            <div className="mb-2 text-sm">
              <strong>Age:</strong> {selectedBookingDetails.age}
            </div>
            <div className="mb-2 text-sm">
              <strong>Gender:</strong> {selectedBookingDetails.gender}
            </div>
            <div className="mb-2 text-sm">
              <strong>Appointment Date:</strong>{" "}
              {selectedBookingDetails.appointment_date &&
                new Date(
                  selectedBookingDetails.appointment_date,
                ).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
            </div>
            <div className="mb-1.5 text-sm">
              <strong>Appointment Time:</strong>{" "}
              {selectedBookingDetails.appointment_time}
            </div>
            <div className="mb-2 text-sm">
              <strong>Notes:</strong> {selectedBookingDetails.notes || "-"}
            </div>
            <div className="mb-2 text-sm">
              <strong>Email:</strong> {selectedBookingDetails.userId?.email}
            </div>
            <div className="flex gap-2 mt-4">
              <button
                className="px-2 py-1.5 cursor-pointer tracking-tighter rounded bg-primary  text-white font-medium w-full"
                onClick={handleBookingSuccess}
                disabled={Isloading}
              >
                {Isloading ? (
                  <span className="flex gap-1 items-center">
                    Mark Success <Loader className="size-3.5 animate-spin" />
                  </span>
                ) : (
                  <>Mark Success</>
                )}
              </button>
              <button
                className="px-2 py-1.5 cursor-pointer rounded bg-neutral-300 text-neutral-800 font-medium w-full"
                onClick={() => {
                  setDetailsDialogOpen(false);
                  setSelectedBookingDetails(null);
                }}
              >
                Close
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}
      <div className="w-full p-1.5 ">
        <div className="  py-4 px-2 rounded-lg items-center bg-white ">
          <div className=" rounded-xl border border-neutral-100  w-full">
            <div className="w-full   py-4     rounded-md">
              <div className=" overflow-x-auto w-full">
                <table className="sm:min-w-177 w-full relative table-auto  px-1">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="p-2 text-[14px] font-medium text-start">
                        Patient Name
                      </th>
                      <th className="p-2 text-[14px] font-medium text-center">
                        Appoinment Date
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
                          </tr>
                        ))
                      : bookings.map((resver) => (
                          <tr
                            key={resver._id}
                            className="border-t hover:bg-neutral-200/80 cursor-pointer duration-300 border-neutral-100 text-[13px] text-neutral-700"
                            onClick={() => handleDetailsClick(resver)}
                          >
                            <td className="p-2.5 flex gap-1.5 items-center">
                              {resver?.patient_name}
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
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleCancelClick(resver._id);
                                  }}
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
