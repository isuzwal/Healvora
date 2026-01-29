import * as z from "zod"


export const RegisterSchema=z.object({
    name:z.string().min(3,{
        message:"Username must be at least 3 charcters"
    }),
    email:z.email(),
    password:z.string().min(6).refine((pw) => /[A-Z]/.test(pw), { message: "Must include uppercase" })
    .refine((pw) => /[a-z]/.test(pw), { message: "Must include lowercase" })
    .refine((pw) => /[0-9]/.test(pw), { message: "Must include number" })
    .refine((pw) => /[!@#$%^&*]/.test(pw), { message: "Must include special character" }),
    
})


export const LoginSchema=z.object({
    email:z.email,
    password:z.string().min(6).refine((pw) => /[A-Z]/.test(pw), { message: "Must include uppercase" })
    .refine((pw) => /[a-z]/.test(pw), { message: "Must include lowercase" })
    .refine((pw) => /[0-9]/.test(pw), { message: "Must include number" })
    .refine((pw) => /[!@#$%^&*]/.test(pw), { message: "Must include special character" }),
     confirmPassword:z.string()
}).refine((pass)=>pass.password===pass.confirmPassword,{
    message:"Password do nt macth",
    path:["confirmPassword"]
})
