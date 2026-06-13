import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(80, 'Name is too long'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  treatment: z
    .string()
    .min(1, 'Please select a treatment'),
  message: z.string().max(500).optional(),
  preferredDate: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
