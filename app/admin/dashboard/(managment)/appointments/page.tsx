"use client";
import { useEffect } from "react";
import { useAdminBookings } from "@/store/useAdminStore";
import { CalendarFold } from "lucide-react";

export default function AppointmentsPage() {
  const { bookings, loading, fetchBookings } = useAdminBookings();

  useEffect(() => {
    fetchBookings();
  }, []);

  // Filter bookings to only show pending, then sort by nearest appointment time
  const sortedBookings = bookings
    ? [...bookings]
        .filter((b) => b.status === "pending")
        .sort((a, b) => {
          const dateA = new Date(a.appointment_date + "T" + a.appointment_time);
          const dateB = new Date(b.appointment_date + "T" + b.appointment_time);
          return dateA.getTime() - dateB.getTime();
        })
    : [];
  console.log(sortedBookings);
  return (
    <div className="p-6 w-full">
      <div className="flex gap-1 items-center  ">
        <span className=" border-[1.5px] border-neutral-200 bg-neutral-100  w-6 h-6 rounded-[6px] flex justify-center items-center">
          <CalendarFold className="size-4 text-neutral-800" />
        </span>
        <h1 className="text-[20px] flex gap-1 items-center  mb-2 tracking-tight font-semibold text-neutral-800">
          Upcoming Patient Appointments
        </h1>
      </div>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 bg-white shadow-sm flex flex-col justify-between h-full animate-pulse"
            >
              <div>
                <div className="h-6 w-2/3 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-1/3 bg-gray-200 rounded mb-2" />
              </div>
              <div className="mt-2">
                <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
                <div className="h-3 w-2/3 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : sortedBookings.length === 0 ? (
        <div className="text-center py-8">No bookings found.</div>
      ) : (
        <div className=" mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedBookings.map((booking) => (
            <div
              key={booking._id}
              className="border rounded-lg p-4 bg-white shadow-sm flex flex-col justify-between h-full"
            >
              <div>
                <div className="font-semibold text-lg mb-1">
                  {booking.patient_name}
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  Age: {booking.age} | Gender: {booking.gender}
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  Doctor: {booking.doctorId?.doctorName || "Unknown"} (
                  {booking.doctorId?.department || "N/A"})
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  Status: <span className="font-medium">{booking.status}</span>
                </div>
              </div>
              <div className="mt-2">
                <div className="text-sm font-medium">
                  {booking.appointment_date &&
                    new Date(booking.appointment_date).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Notes: {booking.notes}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
