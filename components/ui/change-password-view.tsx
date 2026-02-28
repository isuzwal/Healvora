"use client";
import { ChangePasswordScheam } from "@/lib/forms-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import z from "zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "./field";
import { Input } from "./input";
import { Eye, EyeClosed, Loader } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./input-otp";
import { Card } from "./card";

export const ChangePasswordSection = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.output<typeof ChangePasswordScheam>>({
    resolver: zodResolver(ChangePasswordScheam),
    defaultValues: { email: "", newPassword: "", opt: undefined },
  });

  const router = useRouter();
  return (
    <div className="flex justify-center  items-center min-h-screen w-full">
      <Card className="font-medium p-2 max-w-sm   shadow-none border-transparent  w-full">
        <div>
          <h1 className="text-[24px] text-primary/90 font-semibold font-sans tracking-tighter text-center">
            Change Password{" "}
          </h1>
          <p className="text-center text-sm text-neutral-600 font-medium font-sans tracking-tighter">
            Reset your password
          </p>
        </div>
        <form
          id="login-form"
          //   onSubmit={form.handleSubmit("")}
          className="space-y-2"
        >
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel className="text-neutral-700 tracking-tighter">
                    Email address
                  </FieldLabel>
                  <Input
                    {...field}
                    type="email"
                    placeholder="you@healvora.com"
                    className="h-10 placeholder:text-neutral-400  placeholder:text-sm bg-slate-100  rounded-md border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
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
              name="newPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel className="text-neutral-700 tracking-tighter">
                    New Password
                  </FieldLabel>
                  <div className="relative">
                    <Input
                      {...field}
                      type={show ? "text" : "password"}
                      placeholder="••••••••"
                      className="h-10 placeholder:text-neutral-400 pr-10 rounded-md border-slate-200 bg-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShow((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                    >
                      {show ? <Eye size={18} /> : <EyeClosed size={18} />}
                    </button>
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup>
            <Controller
              name="opt"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel className="text-neutral-700 ">OTP</FieldLabel>
                  <div className="  w-full">
                    <InputOTP
                      id="disabled"
                      maxLength={6}
                      value={field.value?.toString() || ""}
                      className=" "
                    >
                      <InputOTPGroup className=" w-full  bg-slate-100  border-slate-200">
                        <InputOTPSlot index={0} className="" />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />

                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </div>
                </Field>
              )}
            />
          </FieldGroup>
        </form>
        <button
          type="submit"
          form="password-change"
          disabled={loading}
          className={`px-4 py-1.5 text-[14px]  w-full   justify-center text-white   rounded-lg shadow-[inset_0_1px_1px_rgba(180,250,235,0.5),inset_0_-1px_2px_rgba(180,250,235,0.5)] flex items-center duration-300 ease-in-out transition-all 
                ${loading ? "cursor-not-allowed bg-primary/40" : "cursor-pointer   hover:bg-primary/80  bg-primary border border-green-300 font-sans "}
               font-sans font-medium`}
        >
          {loading ? (
            <>
              Reset password
              <Loader className="h-4 w-4 animate-spin" />
            </>
          ) : (
            "Reset Password"
          )}
        </button>
      </Card>
    </div>
  );
};
