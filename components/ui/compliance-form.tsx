"use client";
import { complianceSchema } from "@/lib/forms-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Headset, Loader } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { Card } from "./card";
import { Field, FieldError, FieldGroup, FieldLabel } from "./field";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { toast } from "sonner";
import { BACKENDAPI } from "@/types/url";
import { useRouter } from "next/navigation";

export const ComplianceFrom = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm({
    resolver: zodResolver(complianceSchema),
    defaultValues: {
      compliance_title: "",
      compliance_issues: "",
    },
  });
  const router = useRouter();
  const handleSubmit = async (data: z.output<typeof complianceSchema>) => {
    setLoading(true);
    const token = localStorage.getItem("user_token");
    if (!token) {
      toast.error("You must login first!", {
        className: "bg-red-600 text-white border-none",
      });
      router.push("/login");
      return;
    }
    try {
      const response = await fetch(`${BACKENDAPI}/api/v1/user/compliance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(result.message || "Fail to submit the complaince", {
          className: "bg-red-600 text-white border-none",
        });
      } else {
        toast.success("Thank for your compalince", {
          className: "bg-green-600 text-white border-none",
        });
        router.push("/");
        form.reset();
      }
    } catch (error) {
      toast.error(`${error}`, {
        className: "bg-red-600 text-white border-none",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" w-full  min-h-screen ">
      <div className="max-w-4xl  w-full py-10 mx-auto text-center">
        <div className="w-full max-w-2xl mx-auto p-1">
          <h1 className="  flex gap-1.5  items-center justify-center text-[18px] sm:text-3xl font-bold text-primary tracking-tight">
            {" "}
            Submit a Compliance Concern
            <span className="sm:w-8 sm:h-8 w-6 h-6 border-2 rounded-md flex justify-center items-center border-slate-200 bg-slate-100">
              <Headset className="sm:size-5 size-4 text-neutral-500" />
            </span>
          </h1>
          <p className="mt-3 text-neutral-800 text-center text-[13px] font-medium sm:text-sm ">
            If you have experienced any issues regarding treatment, hospital
            services, staff behavior, or medical procedures, please let us know.
            Your feedback helps us improve care quality and maintain safety
            standards.
          </p>
          <p className="mt-2 text-center text-neutral-600 text-xs">
            All submissions are reviewed carefully and handled confidentially.
            Your voice matters.
          </p>
        </div>
        <div className="mt-10  flex justify-center items-center">
          <Card className="w-full max-w-md rounded-2xl border border-neutral-200/60 bg-white/80 backdrop-blur ">
            <div className="p-6 sm:p-8">
              <form
                id="register-form"
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <FieldGroup>
                  <Controller
                    name="compliance_title"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="gap-1"
                      >
                        <FieldLabel>Compliance Title</FieldLabel>
                        <Input
                          {...field}
                          placeholder=""
                          className="h-10 rounded-md placeholder:text-neutral-400 border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                        {fieldState.invalid && (
                          <FieldError
                            errors={[fieldState.error]}
                            className=" text-start text-xs"
                          />
                        )}
                      </Field>
                    )}
                  />
                </FieldGroup>

                <FieldGroup>
                  <Controller
                    name="compliance_issues"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="gap-1"
                      >
                        <FieldLabel>Describe here </FieldLabel>
                        <Textarea
                          {...field}
                          placeholder="Describe your problem here"
                          className="h-10 rounded-md border-neutral-300 focus:border-primary placeholder:text-neutral-400 focus:ring-2 focus:ring-primary/20"
                        />
                        {fieldState.invalid && (
                          <FieldError
                            errors={[fieldState.error]}
                            className="text-start text-xs"
                          />
                        )}
                      </Field>
                    )}
                  />
                </FieldGroup>
              </form>

              <button
                type="submit"
                form="register-form"
                disabled={loading}
                className={`mt-6 flex h-11 w-full   items-center justify-center gap-2 rounded-md bg-primary text-white font-medium transition hover:bg-primary/90 disabled:opacity-70 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                {loading ? (
                  <>
                    Submiting your compliance
                    <Loader className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  "Submite your compliance "
                )}
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
