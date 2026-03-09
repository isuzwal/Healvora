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
  doctorName:z.string().min(1, { message:"Doctor name is required" }).min(3, {
    message:"Doctor name must be at least 3 characters"
  }),
  doctor_image:z.string().min(1, { message:"Doctor image is required" }),
  email:z.string().min(1, { message:"Email is required" }).email({
     message:"Please enter a valid email address"
  }),
  age:z.coerce
    .number()
    .min(18, "Age must be at least 18 years")
    .max(70, "Age must not exceed 70 years"),
  gender:z.nativeEnum(Gender, { message: "Please select a valid gender" }),
  phone:z.string().min(1, { message:"Phone number is required" })
    .regex(/^\d{10}$/, { message: "Phone number must be exactly 10 digits" }),
  specialization:z.string().min(1, { message:"Specialization is required" }).min(3,{
    message:"Specialization must be at least 3 characters"
  }),
  address:z.string().min(1, { message:"Address is required" }).min(5,{
    message:"Address must be at least 5 characters"
  }),
  qualifications: z.array(z.nativeEnum(Qualifications), { message:"Please select at least one qualification" }).min(1, { message:"At least one qualification is required" }),
  department:z.string().min(1, { message:"Department is required" }),
  bio:z.string().min(1, { message:"Bio is required" }).min(3,{
    message:"Bio must be at least 3 characters"
  }),
  language_spoken:z.array(z.nativeEnum(LanguageSpoken), {
    message:"Please select valid languages"
  }).min(1, { message:"At least one language must be selected" }),
  consultationFee: z.string().min(1, { message:"Consultation fee is required" })
    .regex(/^\d+$/, { message: "Consultation fee must be a valid number" })
    .refine((fee) => Number(fee) > 0, { message: "Consultation fee must be greater than 0" })
    .refine((fee) => Number(fee) <= 10000, { message: "Consultation fee must not exceed 10000" }),
  isAvailable: z.coerce.boolean().default(true),
 experienceYears: z.coerce
  .number()
  .min(0, { message: "Experience years must be 0 or greater" })
  .max(60, { message: "Experience must not exceed 60" }),
    
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
//zod schema for Booking
export const BookingSchema=z.object({
    doctorId: z.string(),
   patient_name: z.string().min(2,{message:"Patient name is required"}),
   age: z.number({message:"Please enter age"}),
   gender:z.nativeEnum(Gender, { message: "Please select a valid gender" }),
   notes: z.string().min(3,{
    message:"Please describe your problme"
   }),
   appointment_date: z.string({message:"Date is required"}),
   appointment_time: z.string(),
  consultationFee:z.string()
})