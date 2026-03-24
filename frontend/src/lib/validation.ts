import { z } from "zod/v4";

export const demoRequestSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .max(100, "Full name must be 100 characters or less"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  country: z
    .string()
    .min(1, "Country is required"),
  message: z
    .string()
    .max(1000, "Message must be 1000 characters or less")
    .optional()
    .or(z.literal("")),
});

export type DemoRequestFormData = z.infer<typeof demoRequestSchema>;
