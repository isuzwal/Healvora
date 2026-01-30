import * as z from "zod"


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

