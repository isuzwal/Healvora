"use client";

import { useForm, Controller } from "react-hook-form";
import { Card } from "./card";
import { Input } from "./input";
import { Field, FieldError, FieldGroup, FieldLabel } from "./field";
import { useState } from "react";
import { Eye, EyeClosed, Loader } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/lib/forms-schema";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const UserRegisterPage = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.output<typeof RegisterSchema>) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_BACKEND_API}/api/v1/user/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      const result = await response.json();
      if (!response.ok) {
        toast(result.message || "Fail to create account");
      } else {
        toast.success("Account created successfully", {
          className: "bg-green-600 text-white border-none",
        });
        router.push("/login");
        form.reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        className: "bg-red-600 text-white border-none",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-neutral-50 to-neutral-100 px-4">
      <Card className="w-full max-w-md rounded-2xl border border-neutral-200/60 bg-white/80 backdrop-blur shadow">
        <div className="p-6 sm:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-neutral-600">
              Get started with{" "}
              <span className="font-medium text-primary">Healvora</span> today
            </p>
          </div>

          <form
            id="register-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FieldGroup>
              <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-1">
                    <FieldLabel>Full name</FieldLabel>
                    <Input
                      {...field}
                      placeholder="John Doe"
                      className="h-10 rounded-md placeholder:text-neutral-400 border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
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
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-1">
                    <FieldLabel>Email address</FieldLabel>
                    <Input
                      {...field}
                      type="email"
                      placeholder="you@healvora.com"
                      className="h-10 rounded-md border-neutral-300 focus:border-primary placeholder:text-neutral-400 focus:ring-2 focus:ring-primary/20"
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
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-1">
                    <FieldLabel>Password</FieldLabel>
                    <div className="relative">
                      <Input
                        {...field}
                        type={show ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-10 pr-10 placeholder:text-neutral-400 rounded-md border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
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

            <p className="text-sm text-neutral-600">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </form>

          <button
            type="submit"
            form="register-form"
            disabled={loading}
            className="mt-6 flex h-11 w-full  cursor-pointer items-center justify-center gap-2 rounded-md bg-primary text-white font-medium transition hover:bg-primary/90 disabled:opacity-70"
          >
            {loading ? (
              <>
                Creating account
                <Loader className="h-4 w-4 animate-spin" />
              </>
            ) : (
              "Create account"
            )}
          </button>

          <p className="mt-6 text-center text-xs text-neutral-500">
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms
            </Link>{" "}
            &{" "}
            <Link
              href="/privacy-policy"
              className="text-primary hover:underline"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};
