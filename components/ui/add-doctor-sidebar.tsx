"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DoctorSchema } from "@/lib/forms-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "./field";
import { Input } from "./input";
export function AddDoctorSidebar() {
  const [loading, setLoading] = useState<boolean>(false);

  const doctorform = useForm({
    resolver: zodResolver(DoctorSchema),
    defaultValues: {
      doctorName: "",
      email: "",
      phone: "",
      specialization: "",
      qualifications: [],
      department: "",
      consultationFee: 0,
      experienceYears: 0,
      isAvailable: true,
    },
  });
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="px-2  justify-center  py-1 text-[10px] text-white cursor-pointer font-medium  flex items-center gap-1 rounded-md 
            bg-primary  border-green-200  shadow-[inset_0_1px_1px_rgba(180,250,235,0.5),inset_0_-1px_2px_rgba(180,250,235,0.5)]

          transition hover:bg-primary/80"
        >
          <Plus className="size-4 hidden sm:block" />
          <span className="mt-0.5">Add Doctor</span>
        </button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>
            Add New Doctor
            <p className="text-neutral-600 text-[12px] font-medium  text-start tracking-tight">
              Enter doctor infromation to create a new doctor record
            </p>
          </SheetTitle>
        </SheetHeader>

        <div className=" space-y-2">
          <Field className=" p-2">
            <Controller
              name="doctorName"
              control={doctorform.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel>Doctor name</FieldLabel>
                  <Input
                    {...field}
                    placeholder="isuzwal"
                    className="h-10 rounded-md placeholder:text-neutral-400 border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            ></Controller>
          </Field>
        </div>
      </SheetContent>
    </Sheet>
  );
}
