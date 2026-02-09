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
import { Plus, XIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "./field";
import { Input } from "./input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Textarea } from "./textarea";
export function AddDoctorSidebar() {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const doctorform = useForm({
    resolver: zodResolver(DoctorSchema),
    defaultValues: {
      doctorName: "",
      email: "",
      phone: "",
      age: 0,
      address: "",
      gender: undefined,
      specialization: "",
      qualifications: [],
      department: "",
      consultationFee: "",
      experienceYears: "",
      isAvailable: true,
    },
  });
  return (
    <Sheet open={open} onOpenChange={setOpen}>
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

      <SheetContent side="right" className="">
        <SheetHeader className=" sticky top-0 ">
          <SheetTitle>
            Add New Doctor
            <p className="text-neutral-600 text-[12px] font-medium  text-start tracking-tight">
              Enter doctor infromation to create a new doctor record
            </p>
          </SheetTitle>
        </SheetHeader>

        <div className=" flex flex-col space-y-2  overflow-y-auto">
          <div className="w-full grid-cols-1  sm:grid-cols-2 grid">
            <Field className=" p-2">
              <Controller
                name="doctorName"
                control={doctorform.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-0.5">
                    <FieldLabel className="text-neutral-800 font-sans tracking-tighter">
                      Doctor Full name
                    </FieldLabel>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter doctor's full name"
                      className="h-8    placeholder:text-neutral-600 placeholder:text-[12px] placeholder:tracking-tighter placeholder:font-sans  rounded-lg border-neutral-300 focus:outline-0 focus:ring-0 "
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              ></Controller>
            </Field>
            <Field className=" p-1.5">
              <Controller
                name="gender"
                control={doctorform.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    className=" gap-0.5 "
                  >
                    <FieldLabel className="text-neutral-800 font-sans tracking-tighter">
                      Gender
                    </FieldLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
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
          <div className="w-full grid-cols-1  sm:grid-cols-2 grid">
            <Field className=" p-2">
              <Controller
                name="age"
                control={doctorform.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-0.5">
                    <FieldLabel className="text-neutral-800 font-sans tracking-tighter">
                      Age
                    </FieldLabel>
                    <Input
                      type="number"
                      {...field}
                      value={field.value as number}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      name={field.name}
                      ref={field.ref}
                      placeholder="Enter age"
                      className="h-8    placeholder:text-neutral-600 placeholder:text-[12px] placeholder:tracking-tighter placeholder:font-sans  rounded-lg border-neutral-300 focus:outline-0 focus:ring-0 "
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              ></Controller>
            </Field>
            <Field className=" p-2">
              <Controller
                name="phone"
                control={doctorform.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-0.5">
                    <FieldLabel className="text-neutral-800 font-sans tracking-tighter">
                      Phone Number
                    </FieldLabel>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter phone number"
                      className="h-8    placeholder:text-neutral-600 placeholder:text-[12px] placeholder:tracking-tighter placeholder:font-sans  rounded-lg border-neutral-300 focus:outline-0 focus:ring-0 "
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              ></Controller>
            </Field>
          </div>
          <div className="w-full grid-cols-1  sm:grid-cols-2 grid">
            <Field className=" p-2">
              <Controller
                name="email"
                control={doctorform.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-0.5">
                    <FieldLabel className="text-neutral-800 font-sans tracking-tighter">
                      Email
                    </FieldLabel>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter email adress"
                      className="h-8    placeholder:text-neutral-600 placeholder:text-[12px] placeholder:tracking-tighter placeholder:font-sans  rounded-lg border-neutral-300 focus:outline-0 focus:ring-0 "
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              ></Controller>
            </Field>
            <Field className=" p-2">
              <Controller
                name="address"
                control={doctorform.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-0.5">
                    <FieldLabel className="text-neutral-800 font-sans tracking-tighter">
                      Address
                    </FieldLabel>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter full address"
                      className="h-8    placeholder:text-neutral-600 placeholder:text-[12px] placeholder:tracking-tighter placeholder:font-sans  rounded-lg border-neutral-300 focus:outline-0 focus:ring-0 "
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              ></Controller>
            </Field>
          </div>
          <div className="w-full grid-cols-1  sm:grid-cols-2 grid">
            <Field className=" p-2">
              <Controller
                name="department"
                control={doctorform.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-0.5">
                    <FieldLabel className="text-neutral-800 font-sans tracking-tighter">
                      Department
                    </FieldLabel>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter a department"
                      className="h-8    placeholder:text-neutral-600 placeholder:text-[12px] placeholder:tracking-tighter placeholder:font-sans  rounded-lg border-neutral-300 focus:outline-0 focus:ring-0 "
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              ></Controller>
            </Field>
            <Field className=" p-2">
              <Controller
                name="experienceYears"
                control={doctorform.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-0.5">
                    <FieldLabel className="text-neutral-800 font-sans tracking-tighter">
                      Experience
                    </FieldLabel>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter  your experiences"
                      className="h-8    placeholder:text-neutral-600 placeholder:text-[12px] placeholder:tracking-tighter placeholder:font-sans  rounded-lg border-neutral-300 focus:outline-0 focus:ring-0 "
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              ></Controller>
            </Field>
          </div>
          <div className="w-full grid-cols-1  sm:grid-cols-2 grid">
            <Field className=" p-2">
              <Controller
                name="consultationFee"
                control={doctorform.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-0.5">
                    <FieldLabel className="text-neutral-800 font-sans tracking-tighter">
                      Consultation Fee
                    </FieldLabel>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter a consultation fee"
                      className="h-8    placeholder:text-neutral-600 placeholder:text-[12px] placeholder:tracking-tighter placeholder:font-sans  rounded-lg border-neutral-300 focus:outline-0 focus:ring-0 "
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              ></Controller>
            </Field>
            <Field className=" p-2">
              <Controller
                name="experienceYears"
                control={doctorform.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-0.5">
                    <FieldLabel className="text-neutral-800 font-sans tracking-tighter">
                      Qualifications
                    </FieldLabel>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Enter  your experiences"
                      className="h-8    placeholder:text-neutral-600 placeholder:text-[12px] placeholder:tracking-tighter placeholder:font-sans  rounded-lg border-neutral-300 focus:outline-0 focus:ring-0 "
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              ></Controller>
            </Field>
          </div>
          <div className="w-full grid-cols-1   grid">
            <Field className=" p-2">
              <Controller
                name="specialization"
                control={doctorform.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-0.5">
                    <FieldLabel className="text-neutral-800 font-sans tracking-tighter">
                      Specialization
                    </FieldLabel>
                    <Textarea
                      {...field}
                      placeholder="Write your specialization "
                      className="h-8    placeholder:text-neutral-600 placeholder:text-[12px] placeholder:tracking-tighter placeholder:font-sans  rounded-lg border-neutral-300 focus:outline-0 focus:ring-0 "
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              ></Controller>
            </Field>
          </div>
          <div className="flex gap-2 w-full justify-center  items-center p-4">
            <button
              className="px-4  w-full justify-center  py-1.5 text-[14px] text-white cursor-pointer font-medium  flex items-center gap-1 rounded-md 
            bg-primary  border-green-200  shadow-[inset_0_1px_1px_rgba(180,250,235,0.5),inset_0_-1px_2px_rgba(180,250,235,0.5)]

          transition hover:bg-primary/80"
            >
              Add a Doctor
            </button>

            <button
              onClick={() => {
                doctorform.reset();
                setOpen(false);
              }}
              className="px-4  w-full  justify-center  py-1.5 text-[14px] text-white cursor-pointer font-medium  flex items-center gap-1 rounded-md 
            bg-red-500  border-red-400  shadow-[inset_0_1px_2px_rgba(239,68,68,0.8),inset_0_-1px_3px_rgba(239,68,68,0.8)]
              transition hover:bg-red-300"
            >
              Cancle
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
