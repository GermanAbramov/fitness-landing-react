import { z } from 'zod';

export const contactSchema = z.object(
    {
        name: z.string().min(2, 'Name must be at least 2 characters long').max(100, 'Name must be at most 100 characters long'),
        email: z.string().email('Invalid email address'),
        message: z.string().min(10, 'Message must be at least 10 characters long').max(2000, 'Message must be at most 2000 characters long'),
    }
)

export type ContactFormType = z.infer<typeof contactSchema>;