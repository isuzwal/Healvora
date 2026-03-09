"use client";

import Image from "next/image";
import { IDoctor } from "@/types";
import { useEffect, useRef, useState } from "react";
import { DoctorId } from "@/lib/api";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { BookingData } from "@/types";
import { Calendar } from "./calendar";
import { Field, FieldError, FieldGroup, FieldLabel } from "./field";
import { Input } from "./input";
import { BookingSchema } from "@/lib/forms-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button } from "./button";
import { Textarea } from "./textarea";

export function DoctorDetailsSidebar({ doctor }: { doctor: IDoctor | null }) {
  const [showBooking, setShowBooking] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState<IDoctor | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.input<typeof BookingSchema>>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      patient_name: "",
      doctorId: "",
      age: 0,
      gender: undefined,
      notes: "",
      appointment_date: undefined,
      appointment_time: "",
    },
  });

  const handleReserve = async (docotorId?: string) => {
    if (!docotorId) return;
    setShowBooking(true);
    setLoading(true);
    try {
      const data = await DoctorId(docotorId);

      setBookingDoctor(data.data);
    } catch (e) {
      setBookingDoctor(null);
    }

    setLoading(false);
  };

  const scrollPosition = useRef(0);
  // stop scroll
  useEffect(() => {
    if (showBooking) {
      scrollPosition.current = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";

      window.scrollTo(0, scrollPosition.current);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
    };
  }, [showBooking]);

  return (
    <div className="  relative w-full  min-h-screen">
      <aside className="w-full max-w-2xl mx-auto p-2 border-2 border-emerald-200 rounded-xl bg-white flex flex-col gap-6">
        {/* Profile */}
        <div className="flex items-center gap-4">
          <div className="w-28 h-28 relative overflow-hidden rounded-full border-2 border-emerald-100">
            <Image
              src={doctor?.doctor_image || "/images/default-doctor.png"}
              alt={doctor?.doctorName || "doctor-image"}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-emerald-600">
              {doctor?.doctorName}
            </h2>
            <p className="text-sm text-neutral-500">{doctor?.department}</p>
          </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm p-1.5">
          <div>
            <p className="text-emerald-600 font-medium">Address</p>
            <p className="text-neutral-600">{doctor?.address}</p>
          </div>

          <div>
            <p className="text-emerald-600 font-medium">Consultation Fee</p>
            <p className="text-neutral-600">₹{doctor?.consultationFee}</p>
          </div>

          <div>
            <p className="text-emerald-600 font-medium">Email</p>
            <p className="text-neutral-600 break-all">{doctor?.email}</p>
          </div>

          <div>
            <p className="text-emerald-600 font-medium">Phone</p>
            <p className="text-neutral-600">{doctor?.phone}</p>
          </div>

          <div>
            <p className="text-emerald-600 font-medium">Experience</p>
            <p className="text-neutral-600">{doctor?.experienceYears} years</p>
          </div>

          <div>
            <p className="text-emerald-600 font-medium">Availability</p>
            <p className="text-neutral-600">
              {doctor?.isAvailable ? "Available" : "Unavailable"}
            </p>
          </div>
        </div>

        {/* Reserve Button */}
        <div className="flex justify-center">
          <button
            onClick={() => handleReserve(doctor?._id)}
            className="px-4 py-2 w-full cursor-pointer sm:max-w-xl text-white rounded-lg bg-primary hover:bg-primary/80 transition"
          >
            Reserve Appointment
          </button>
        </div>
      </aside>
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl">
            <h2 className="text-[20px] tracking-tight  font-semibold mb-3">
              Book Appointment with{" "}
              <span className="text-emerald-600 m-1 text-[18px] ">
                {bookingDoctor?.doctorName}
              </span>
            </h2>
            <form
              id="booking-form"
              // onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <FieldGroup>
                  <Controller
                    name="patient_name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="gap-1"
                      >
                        <FieldLabel>Patient name</FieldLabel>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Enter patient Name"
                          className="h-10 placeholder:text-neutral-400  rounded-md border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </FieldGroup>
                <FieldGroup>
                  <Controller
                    name="gender"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="gap-1"
                      >
                        <FieldLabel>Patient Gender</FieldLabel>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Enter patient gender"
                          className="h-10 placeholder:text-neutral-400  rounded-md border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </FieldGroup>
              </div>
              <div className="gap-2 grid grid-cols-1 ">
                <FieldGroup>
                  <Controller
                    name="age"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="gap-1"
                      >
                        <FieldLabel>Patient Age</FieldLabel>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Enter patient age"
                          className="h-10 placeholder:text-neutral-400  rounded-md border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </FieldGroup>
              </div>
              <FieldGroup>
                <Controller
                  name="appointment_date"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="gap-1">
                      <FieldLabel>Appointment Date</FieldLabel>
                      <Input
                        value={(field.value as string) || ""}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
              <FieldGroup>
                <Controller
                  name="notes"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="gap-1">
                      <FieldLabel>Describe your problem in short</FieldLabel>

                      <Textarea
                        {...field}
                        value={field.value || ""}
                        placeholder="Briefly describe your problem..."
                        className="h-10 placeholder:text-neutral-400 rounded-md border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </form>
            <div className="mt-4 flex flex-col sm:flex-row gap-2 w-full ">
              <Button
                variant={"destructive"}
                onClick={() => setShowBooking(false)}
                className="px-4 py-1.5  w-full sm:w-1/2  cursor-pointer rounded"
              >
                Cancel
              </Button>

              <button className="px-4w-full sm:w-1/2  py-1.5 bg-primary cursor-pointer  text-white rounded">
                Continue Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
