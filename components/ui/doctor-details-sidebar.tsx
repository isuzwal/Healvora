"use client";

import Image from "next/image";
import { Gender, IDoctor } from "@/types";
import { useEffect, useRef, useState } from "react";
import { DoctorId } from "@/lib/api";

import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { Field, FieldError, FieldGroup, FieldLabel } from "./field";
import { Input } from "./input";
import { BookingSchema } from "@/lib/forms-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Button } from "./button";
import { Textarea } from "./textarea";
import { BACKENDAPI } from "@/types/url";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

export function DoctorDetailsSidebar({ doctor }: { doctor: IDoctor | null }) {
  const [showBooking, setShowBooking] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState<IDoctor | null>(null);
  const [loading, setLoading] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const form = useForm<z.infer<typeof BookingSchema>>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      patient_name: "",
      consultationFee: "",
      doctorId: "",
      age: 0,
      gender: Gender.MALE,
      notes: "",
      appointment_date: "",
      appointment_time: "",
    },
  });

  const handleReserve = async (
    docotorId?: string,
    consultationFee?: string,
  ) => {
    if (!docotorId) return;
    form.setValue("doctorId", docotorId);
    form.setValue("consultationFee", consultationFee || "");
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
  //api call
  const onSubmit: SubmitHandler<z.infer<typeof BookingSchema>> = async (
    data,
  ) => {
    setBookingLoading(true);
    try {
      const token = localStorage.getItem("user_token");
      const res = await fetch(`${BACKENDAPI}/api/v1/user/resever-appointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        return toast.error("Fail to resever your appointment", {
          className: "bg-green-600 text-white border-none",
        });
      }
      toast.success(
        "Appointment request submitted. Please wait for admin approval. Confirmation will be sent to your email.",
      );
      setShowBooking(false);
    } catch (error) {
      toast.error(`${error}`, {
        className: "bg-red-600 text-white border-none",
      });
    } finally {
      setBookingLoading(false);
    }
  };
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
            onClick={() => handleReserve(doctor?._id, doctor?.consultationFee)}
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
              id="appoinment"
              onSubmit={form.handleSubmit(onSubmit)}
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
                <Field className=" p-1.5">
                  <Controller
                    name="gender"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className=" gap-0.5 "
                      >
                        <FieldLabel className="text-neutral-800 font-sans tracking-tighter">
                          Gender
                        </FieldLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="">
                            <SelectValue
                              placeholder="Select a gender"
                              className=" placeholder:text-[10px] placeholder:text-neutral-700"
                            />
                          </SelectTrigger>
                          <SelectContent className="">
                            <SelectGroup>
                              <SelectLabel>Gender</SelectLabel>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  ></Controller>
                </Field>
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
                          type="number"
                          {...field}
                          value={field.value as number}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                          name={field.name}
                          ref={field.ref}
                          placeholder="Enter a  age"
                          className="h-8    placeholder:text-neutral-600 placeholder:text-[12px] placeholder:tracking-tighter placeholder:font-sans  rounded-lg border-neutral-300 focus:outline-0 focus:ring-0 "
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
                        value={field.value as string}
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
                  name="appointment_time"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid} className="gap-1">
                      <FieldLabel>Set your time</FieldLabel>

                      <Input
                        type="time"
                        {...field}
                        value={field.value || ""}
                        className="h-10 rounded-md border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
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

              <button
                form="appoinment"
                disabled={bookingLoading}
                className={`px-4  w-full  justify-center  py-1.5 text-[14px] text-white font-medium  flex items-center gap-1 rounded-md 
                  ${bookingLoading ? "bg-primary/70 cursor-not-allowed" : "  transition hover:bg-primary/80  bg-primary  cursor-pointer  border-green-200  shadow-[inset_0_1px_1px_rgba(180,250,235,0.5),inset_0_-1px_2px_rgba(180,250,235,0.5)] "}`}
              >
                {bookingLoading && <Loader className="size-3 animate-spin" />}
                {bookingLoading ? "Booking..." : "Continue Booking"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
