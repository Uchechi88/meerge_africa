import * as z from 'zod';

export const ResturanDemoSchema = z.object({
  fullname: z.string().min(2).max(255),
  email: z.string().email(),
  phoneNumber: z.string().min(10).max(15),
  resturantName: z.string().min(2).max(255),
  resturantAddress: z.string().min(2).max(255),



  password: z.string().min(8).max(255),
});