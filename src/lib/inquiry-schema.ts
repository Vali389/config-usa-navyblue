import { z } from "zod";

export const inquirySchema = z.object({
  inquiryType: z.enum(["talent", "msp", "business", "careers"]),
  fullName: z.string().trim().min(2, "Please enter your full name (minimum 2 characters).").max(100),
  email: z.string().trim().email("Please enter a valid business email address.").max(255),
  company: z.string().trim().min(2, "Please enter your company or organization name.").max(150),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(30),
  country: z.string().trim().min(2, "Please select or enter your country."),
  subject: z.string().trim().min(3, "Please enter a subject for your inquiry.").max(200),
  message: z.string().trim().min(10, "Please provide additional details (at least 10 characters).").max(3000),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy to submit.",
  }),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export const jobApplicationSchema = z.object({
  jobId: z.string().optional(),
  jobTitle: z.string().optional(),
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(30),
  country: z.string().trim().min(2, "Please provide your country of residence."),
  primarySkill: z.string().trim().min(2, "Please specify your primary technical skill / role."),
  experienceLevel: z.string().min(1, "Please select your years of experience."),
  portfolioUrl: z.string().trim().optional(),
  coverNote: z.string().trim().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy to submit your application.",
  }),
});

export type JobApplicationInput = z.infer<typeof jobApplicationSchema>;
