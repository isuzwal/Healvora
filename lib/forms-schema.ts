import {  Qualifications } from "@/types"
import * as z from "zod"

// User Register
export const RegisterSchema=z.object({
    name:z.string().min(3,{
        message:"Username must be at least 3 charcters"
    }),
    email:z.string().email({
        message:"Please enter a valid email address"
    }),
   password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters",
    })
    .refine((pw) => /[A-Z]/.test(pw), {
      message: "Password must include at least one uppercase letter",
    })
    .refine((pw) => /[a-z]/.test(pw), {
      message: "Password must include at least one lowercase letter",
    })
    .refine((pw) => /[0-9]/.test(pw), {
      message: "Password must include at least one number",
    })
    .refine((pw) => /[!@#$%^&*]/.test(pw), {
      message: "Password must include at least one special character",
    }),
})

//User Login
export const LoginSchema=z.object({
    email:z.string().email({
        message:"Please enter a valid email address"
    }),
     password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters",
    })
    .refine((pw) => /[A-Z]/.test(pw), {
      message: "Password must include at least one uppercase letter",
    })
    .refine((pw) => /[a-z]/.test(pw), {
      message: "Password must include at least one lowercase letter",
    })
    .refine((pw) => /[0-9]/.test(pw), {
      message: "Password must include at least one number",
    })
    .refine((pw) => /[!@#$%^&*]/.test(pw), {
      message: "Password must include at least one special character",
    }),
})

//Admin Regsiter
export const AdminSchemaRegister=z.object({
  adminName:z.string().min(3,{
    message:"Admin name be at least 3 charcters "
  }),
   email:z.string().email({
        message:"Please enter a valid email address"
    }),
   password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters",
    })
    .refine((pw) => /[A-Z]/.test(pw), {
      message: "Password must include at least one uppercase letter",
    })
    .refine((pw) => /[a-z]/.test(pw), {
      message: "Password must include at least one lowercase letter",
    })
    .refine((pw) => /[0-9]/.test(pw), {
      message: "Password must include at least one number",
    })
    .refine((pw) => /[!@#$%^&*]/.test(pw), {
      message: "Password must include at least one special character",
    }),
})

//Admin Login
export const AdminLoginScheam=z.object({
    email:z.string().email({
        message:"Please enter a valid email address"
    }),
   password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters",
    })
    .refine((pw) => /[A-Z]/.test(pw), {
      message: "Password must include at least one uppercase letter",
    })
    .refine((pw) => /[a-z]/.test(pw), {
      message: "Password must include at least one lowercase letter",
    })
    .refine((pw) => /[0-9]/.test(pw), {
      message: "Password must include at least one number",
    })
    .refine((pw) => /[!@#$%^&*]/.test(pw), {
      message: "Password must include at least one special character",
    }),
})


// Doctor From
export const DoctorSchema=z.object({
  doctorName:z.string().min(3,{
    message:"Doctor name is requird"
  }),
  email:z.string().email({
     message:"Please enter a valid email address"
  }),
  phone:z.string().min(10, "Phone number is required")
    .max(15, "Invalid phone number"),
  specialization:z.string().min(3,{
    message:"Write your specilazation"
  }),
  qualifications: z.array(z.nativeEnum(Qualifications)),
  department:z.string(),
 consultationFee: z.coerce
    .number()
    .int()
    .min(0, "Enter consultation fee")
    .max(120, "Enter consultation fee"),
     isAvailable: z.coerce.boolean().default(true),
    experienceYears: z.coerce
    .number()
    .int()
    .min(0, "Enter year experience")
    .max(120, "Enter year experience"),
})
// Booking Form 