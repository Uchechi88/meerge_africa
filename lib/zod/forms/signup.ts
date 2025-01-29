import * as z from 'zod';

export const RestaurantSignupFormSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  phoneNumber: z.string().min(10).max(15),
  password: z.string().min(8).max(255),
});

export const MemoFormSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  emailAddress: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Invalid phone number"),
  restaurantName: z.string().min(1, "Restaurant name is required"),
  restaurantAddress: z.string().min(1, "Restaurant address is required"),
  position: z.enum(["owner", "staff"]),
  features: z.array(
    z.enum([
      "POS",
      "Customized Site",
      "Mobile App",
      "Integration",
      "Stock Manager",
      "Operations-Control",
    ])
  ),
  demoSessionType: z.enum(["online", "physical"]),
  timeAvailable: z.enum(["9am-11am", "12pm-2pm", "3pm-5pm", "6pm-8pm"]),
  daysAvailable: z.enum([
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]),
  heardAboutUs: z.enum([
    "word of mouth",
    "pitch",
    "google",
    "blog",
    "facebook",
    "instagram",
    "whatsapp",
    "x",
  ]),
});