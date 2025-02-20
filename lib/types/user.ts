import { object, string, z } from "zod"

export const SIGNINSCHEMA = object({
    email: string({ required_error: "Email is required" })
        .min(1, "Email is required")
        .email("Invalid email"),
    password: string({ required_error: "Password is required" })
        .min(1, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
})

export type SIGNINFORMTYPE = z.infer<typeof SIGNINSCHEMA>;

export const SIGNUPSCHEMA = object({
    email: string({ required_error: "Email is required" })
        .min(1, "Email is required")
        .email("Invalid email"),
    password: string({ required_error: "Password is required" })
        .min(1, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
    userName: string({ required_error: "UserName is required" })
        .min(1, "UserName is required")
        .max(32, "UserName must be less than 32 characters"),
})

export type SIGNUPFORMTYPE = z.infer<typeof SIGNUPSCHEMA>;

