import {  Gender, LanguageSpoken, Qualifications } from "@/types"
import * as z from "zod"

// User Register
export const RegisterSchema=z.object({
    username:z.string().min(3,{
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
  doctor_image:z.string(),
  email:z.string().email({
     message:"Please enter a valid email address"
  }),
  age:z.coerce
    .number()
    .int()
    .min(0, "Age  must be postive")
    .max(60, "Enter  age"),
  gender:z.nativeEnum(Gender),
  phone:z.string().min(10, "Phone number is required")
    .max(10, "Invalid phone number"),
  specialization:z.string().min(3,{
    message:"Write your specilazation"
  }),
  address:z.string().min(5,{
  message:"Please fill the address"
  }),
  qualifications: z.array(z.nativeEnum(Qualifications)),
  department:z.string(),
  bio:z.string().min(3,{
    message:"Please write bio "
  }),
  language_spoken:z.array(z.nativeEnum(LanguageSpoken)),
  consultationFee: z.string()
    .min(0, "Enter consultation fee")
    .max(120, "Enter consultation fee"),
     isAvailable: z.coerce.boolean().default(true),
    experienceYears: z.string()
    .min(0, "Enter year experience")
    .max(120, "Enter year experience"),
})
// Complainces  Form 
export const complianceSchema=z.object({
 compliance_title:z.string().trim().min(3,{
  message:"Compliance title must be at 3 characters"
 }),
 compliance_issues: z.string()
  .trim()
  .min(6,{
    message:"Please describe your problem properly"
  })
  .refine((val) => /[a-zA-Z]/.test(val), {
    message: "Issue must contain letters",
  }),

})
// 
export const EmailScheam=z.object({
  email:z.string().email({
        message:"Please enter a valid email address"
    }),
})
// password change scheama 
export const ChangePasswordScheam=z.object({
  email:z.string().email({
        message:"Please enter a valid email address"
    }),
     otp: z.string()
        .length(6, { message: "OTP must be 6 digits" })
        .regex(/^\d+$/, { message: "OTP must contain only numbers" }),
    newPassword:z.string()
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

// Zod schema for RHF
export const updateProfileSchema = z.object({
  profileImage: z.string().optional(), // just the URL, not the file
  username: z.string().min(3, { message: "Username is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
});