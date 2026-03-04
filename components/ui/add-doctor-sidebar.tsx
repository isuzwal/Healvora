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
import { Loader, Plus } from "lucide-react";
import { useState } from "react";
import { Controller, FieldErrors, FieldValues, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "./field";
import { Input } from "./input";
import { SubmitHandler } from "react-hook-form";
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
import { BACKENDAPI } from "@/types/url";
import z from "zod";
import { toast } from "sonner";
import Image from "next/image";
import { Gender, LanguageSpoken, Qualifications } from "@/types";
export function AddDoctorSidebar() {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const doctorform = useForm({
    resolver: zodResolver(DoctorSchema),
    defaultValues: {
      doctorName: "",
      doctor_image: "",
      address: "",
      email: "",
      phone: "",
      age: 0,
      gender: Gender.MALE,
      specialization: "",
      qualifications: [],
      department: "",
      consultationFee: "",
      experienceYears: 0,
      bio: "",
      language_spoken: [],
      isAvailable: true,
    },
  });

  const handleProfileImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
    await UplaodFile(file);
  };
  // doictor-image
  const UplaodFile = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);
    const token = localStorage.getItem("admin_token");

    try {
      const response = await fetch(`${BACKENDAPI}/api/v1/admin/doctor-image`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to upload image");

      const data = await response.json();
      doctorform.setValue("doctor_image", data.url);
      setPreviewImage(data.url);
    } catch (error) {
      toast.error(`${error}` || "Fail to upload image");
    }
  };
  // adding doctor
  const handleAddDoctor: SubmitHandler<z.infer<typeof DoctorSchema>> = async (
    data,
  ) => {
    const token = localStorage.getItem("admin_token");
    setLoading(true);
    console.log("While submting", data);
    console.log(doctorform.formState.errors);
    try {
      const response = await fetch(`${BACKENDAPI}/api/v1/admin/add-doctor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (!response.ok) {
        toast.error(res.message || "Fail to add doctor", {
          className: "bg-red-600 text-white border-none",
        });
        return;
      }
      // success then pop
      toast.success(res.message || "Doctor add succesfully ");
      doctorform.reset();
      setPreviewImage(""); // rest-form
      setOpen(false);
    } catch (error) {
      toast.error(`${error}`, {
        className: "bg-red-600 text-white border-none",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddDoctorInvalid = (errors: FieldErrors<FieldValues>) => {
    const firstError = Object.values(errors).find(Boolean);
    const message =
      typeof firstError === "object" &&
      firstError !== null &&
      "message" in firstError &&
      typeof firstError.message === "string"
        ? firstError.message
        : "Please fill all required doctor details";

    toast.error(message, {
      className: "bg-red-600 text-white border-none",
    });
  };
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

        <form
          id="add-doctor"
          onSubmit={doctorform.handleSubmit(
            handleAddDoctor,
            handleAddDoctorInvalid,
          )}
          className=" flex flex-col space-y-2  overflow-y-auto"
        >
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
                      placeholder="Enter department"
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
                      Experience
                    </FieldLabel>
                    <Input
                      type="number"
                      {...field}
                      value={field.value as number}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      name={field.name}
                      ref={field.ref}
                      placeholder="Enter experience"
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
          <div className="w-full grid-cols-1 sm:grid-cols-2    grid">
            <Field className=" p-2">
              <Controller
                name="qualifications"
                control={doctorform.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-0.5">
                    <FieldLabel className="text-neutral-800 font-sans tracking-tighter">
                      Qualifications
                    </FieldLabel>
                    <div className="w-full flex  gap-2">
                      {Object.values(Qualifications).map((qual) => (
                        <label
                          key={qual}
                          className=" items-center  tracking-tighter  text-[14px] flex gap-0.5"
                        >
                          <input
                            type="checkbox"
                            value={qual}
                            checked={field.value.includes(qual)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                field.onChange([...field.value, qual]);
                              } else {
                                field.onChange(
                                  field.value.filter((l: string) => l !== qual),
                                );
                              }
                            }}
                          />
                          {qual}
                        </label>
                      ))}
                    </div>

                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </Field>
            <Field className=" p-2">
              <Controller
                name="language_spoken"
                control={doctorform.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className=" tracking-tighter">
                      Spoken Language
                    </FieldLabel>

                    <div className="w-full flex  gap-2">
                      {Object.values(LanguageSpoken).map((lang) => (
                        <label
                          key={lang}
                          className=" items-center  tracking-tighter  text-[14px] flex gap-0.5"
                        >
                          <input
                            type="checkbox"
                            value={lang}
                            checked={field.value.includes(lang)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                field.onChange([...field.value, lang]);
                              } else {
                                field.onChange(
                                  field.value.filter((l: string) => l !== lang),
                                );
                              }
                            }}
                          />
                          {lang}
                        </label>
                      ))}
                    </div>

                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </Field>
          </div>

          <div className="w-full grid-cols-1  sm:grid-cols-2 grid">
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

            <Field className=" p-2">
              <Controller
                name="bio"
                control={doctorform.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-0.5">
                    <FieldLabel className="text-neutral-800 font-sans tracking-tighter">
                      Doctor Bio
                    </FieldLabel>
                    <Textarea
                      {...field}
                      placeholder="Write short bio  "
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
              {previewImage && (
                <div className="w-full ">
                  <div className="h-20 w-20 relative overflow-hidden rounded-full border">
                    <Image
                      src={previewImage}
                      alt="Docotr-image"
                      loading="lazy"
                      className="h-full w-full object-cover"
                      fill
                    />
                  </div>
                </div>
              )}
              <div className="relative w-full border h-16 rounded-md flex items-center justify-center">
                {/* Hidden File Input */}
                <Input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                  className="hidden"
                />

                {/* Custom Button Label */}
                <label
                  htmlFor="profileImage"
                  className="cursor-pointer text-neutral-500  text-[14px] tracking-tighter w-full text-center   font-medium"
                >
                  Upload Doctor Image
                </label>
              </div>
            </Field>
          </div>
        </form>
        <div className="flex flex-col  sm:flex-row gap-2 w-full justify-center  items-center p-4">
          <button
            form="add-doctor"
            disabled={loading}
            className={`px-4  w-full  justify-center  py-1.5 text-[14px] text-white font-medium  flex items-center gap-1 rounded-md 
            ${loading ? "bg-primary/70 cursor-not-allowed" : "  transition hover:bg-primary/80  bg-primary  cursor-pointer  border-green-200  shadow-[inset_0_1px_1px_rgba(180,250,235,0.5),inset_0_-1px_2px_rgba(180,250,235,0.5)] "}`}
          >
            {loading ? (
              <span className="flex gap-1 items-center justify-center">
                Add new Doctor <Loader className="size-4 animate-spin" />
              </span>
            ) : (
              "Add new Doctor"
            )}
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
      </SheetContent>
    </Sheet>
  );
}
