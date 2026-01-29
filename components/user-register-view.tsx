"use client";
import { useForm, Controller } from "react-hook-form";
import { Card } from "./ui/card";

import { toast } from "sonner";
import { Input } from "./ui/input";
import { useState } from "react";
import { Eye, EyeClosed, Loader } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/lib/forms-schema";
import { z } from "zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";

export const UserRegisterPage = () => {
  const [Isshow, setShow] = useState<boolean>(false);
  const [IsLoading, setLoading] = useState<boolean>(false);

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  // api call function
  const onSubmit = async (data: z.output<typeof RegisterSchema>) => {
    console.log("Demo Data", data);
  };
  return (
    <div className="flex justify-center items-center w-full min-h-screen ">
      <Card className="w-full max-w-[26rem]  px-2">
        <form
          id="form-rhf-register"
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-2"
        >
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-nvalid={fieldState.invalid} className=" gap-1">
                  <FieldLabel
                    htmlFor="form-rhf-register-username"
                    className="text-neutral-300"
                  >
                    Username
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-register-username"
                    aria-invalid={fieldState.invalid}
                    className=""
                  />
                  {fieldState.invalid && (
                    <FieldError
                      className=" leading-snug font-sans text-[12px] font-medium"
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-nvalid={fieldState.invalid} className=" gap-1">
                  <FieldLabel htmlFor="form-rhf-register-email">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-register-email"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError
                      className=" leading-snug font-sans text-[12px] font-medium"
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <FieldGroup>
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-nvalid={fieldState.invalid} className="gap-1">
                  <FieldLabel
                    htmlFor="form-rhf-register-Password"
                    className="text-neutral-300"
                  >
                    Password
                  </FieldLabel>
                  <div className=" relative">
                    <Input
                      {...field}
                      type={Isshow ? "text" : "password"}
                      id="form-rhf-register-Password"
                      aria-invalid={fieldState.invalid}
                    />
                    <button
                      type="button"
                      onClick={() => setShow((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-200"
                      aria-label={Isshow ? "Hide password" : "Show password"}
                    >
                      {Isshow ? <Eye size={18} /> : <EyeClosed size={18} />}
                    </button>
                  </div>
                  {fieldState.invalid && (
                    <FieldError
                      className=" leading-snug font-sans text-[12px] font-medium"
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <div className=" px-1 w-full text-[14px] font-sans text-neutral-400 font-medium">
            <p>
              Already have account ?{" "}
              <Link
                href={"/login"}
                className="text-primary cursor-pointer underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>

        <button
          disabled={IsLoading}
          type="submit"
          form="form-rhf-register"
          className="w-full px-5 py-1.5  flex justify-center items-center bg-primary text-white font-sans font-semibold text-base border border-primary cursor-pointer rounded-md "
        >
          {IsLoading ? (
            <span className="flex w-full justify-center items-center gap-2 ">
              Creating your account{" "}
              <Loader className="animate-spin  text-neutral-300 size-4.5 mt-0.5" />
            </span>
          ) : (
            <span>Create your account</span>
          )}
        </button>
      </Card>
    </div>
  );
};
