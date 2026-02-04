"use client";

import { useForm, Controller } from "react-hook-form";
import { Card } from "./card";
import { Input } from "./input";
import { Field, FieldError, FieldGroup, FieldLabel } from "./field";
import { useState } from "react";
import { Eye, EyeClosed, Loader } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/forms-schema";
import { z } from "zod";

export const UserLoginPage = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.output<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: z.output<typeof LoginSchema>) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-neutral-50 to-neutral-100 px-4">
      <Card className="w-full max-w-md rounded-2xl border border-neutral-200/60 bg-white/80 backdrop-blur shadow">
        <div className="p-6 sm:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-neutral-600">
              Sign in to continue to{" "}
              <span className="font-medium text-primary">Healvora</span>
            </p>
          </div>

          <form
            id="login-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
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
                        className="h-10 placeholder:text-neutral-400 pr-10 rounded-md border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
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

            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">
                New here?{" "}
                <Link href="/register" className="text-primary hover:underline">
                  Create account
                </Link>
              </span>
              <Link
                href="/forgot-password"
                className="text-neutral-500 hover:text-neutral-700"
              >
                Forgot password?
              </Link>
            </div>
          </form>

          <button
            type="submit"
            form="login-form"
            disabled={loading}
            className="mt-6 cursor-pointer  flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary text-white font-medium transition hover:bg-primary/90 disabled:opacity-70"
          >
            {loading ? (
              <>
                Signing in
                <Loader className="h-4 w-4 animate-spin" />
              </>
            ) : (
              "Sign in"
            )}
          </button>

          <p className="mt-6 text-center text-xs text-neutral-500">
            By continuing, you agree to our{" "}
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
