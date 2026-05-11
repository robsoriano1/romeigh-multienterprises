import { z } from 'zod'

export const leadFormSchema = z.object({
  companyName: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(120, 'Company name is too long'),

  jobTitle: z
    .string()
    .min(2, 'Please enter your job title or PCO role')
    .max(80, 'Job title is too long'),

  email: z
    .string()
    .email('Please enter a valid email address'),

  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(/^[+\d\s\-()\/.]+$/, 'Phone number contains invalid characters'),

  service: z
    .string()
    .min(1, 'Please select a service'),

  location: z
    .string()
    .min(3, 'Please enter your facility location')
    .max(120, 'Location is too long'),

  message: z
    .string()
    .min(20, 'Please provide at least a brief description (20 chars)')
    .max(1500, 'Message is too long (max 1,500 characters)'),

  consent: z
    .boolean()
    .refine(val => val === true, {
      message: 'You must agree to be contacted to submit this form',
    }),
})

export type LeadFormSchema = z.infer<typeof leadFormSchema>
