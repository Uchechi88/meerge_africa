"use client";

import * as React from "react";
import { useZodForm } from "@/lib/hooks/form";
import { MemoFormSchema } from "@/lib/zod/forms/signup";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import Logo from "@/components/ui/logo";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const MemoFormScreen = () => {
  const form = useZodForm({
    schema: MemoFormSchema,
  });

  return (
    <div className="  ">
      <Logo />
      <h1 className="text-3xl font-bold text-center">Book A Demo Session</h1>
      <p className="text-[#FF4101] text-lg text-center">
        See what our solution can do for your business.
      </p>
      <form className="max-w-xl m-auto mt-10">
        <div>
          <label htmlFor="fullname" className="block">
            Full Name
          </label>
          <input
            id="fullname"
            type="text"
            className="mt-2 w-full border border-gray-300 px-4 py-2 rounded-2xl mb-5"
            placeholder="Enter Your Business Name"
            {...form.register("fullname")}
          />
        </div>

        <div>
          <label htmlFor="emailAddress" className="block ">
            Email
          </label>
          <input
            id="emailAddress"
            type="email"
            className="mt-2 w-full border border-gray-300 px-4 py-2 rounded-2xl mb-5"
            placeholder="Enter Your Business Email"
            {...form.register("emailAddress")}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block ">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            className="mt-2 w-full border border-gray-300 px-4 py-2 rounded-xl mb-5"
            placeholder="Enter Your Business Email"
            {...form.register("phoneNumber")}
          />
        </div>

        <div>
          <label htmlFor="restaurantName" className="block ">
            Restaurant Name
          </label>
          <input
            id="restaurantName"
            type="text"
            className="mt-2 w-full border border-gray-300 px-4 py-2 rounded-xl mb-5"
            placeholder="Enter Your Restautrant Name"
            {...form.register("restaurantName")}
          />
        </div>

        <div>
          <label htmlFor="restaurantAddress" className="block ">
            Restaurant Address
          </label>
          <input
            id="restaurantAddress"
            type="text"
            className="mt-2 w-full border border-gray-300 px-4 py-2 rounded-xl mb-5"
            placeholder="Enter Your Restautrant Address"
            {...form.register("restaurantAddress")}
          />
        </div>

        <div></div>

        {/* Position */}
        <div className="mb-5">
          <label htmlFor="position" className="block text-[16px]">
            Position
          </label>
          <RadioGroup
            {...form.register("position")}
            id="position"
            name="position"
            className="mt-2 w-[2px] flex gap-10"
          >
            <div className="text-xs flex items-center gap-2 border border-slate-600 rounded-2xl py-3 px-5">
              <RadioGroupItem  value="owner" className="h-2 w-2"></RadioGroupItem>
              <span>Owner</span>
            </div>
            <div className="text-xs flex items-center gap-2  border-slate-600 rounded-2xl py-3 px-5">
              <RadioGroupItem value="staff" className="h-2 w-2"></RadioGroupItem>
              <span>Staff</span>
            </div>
          </RadioGroup>
        </div>

        {/* Features */}
        <div className="mb-5">
          <Label htmlFor="features" className="block text-[14px] font-semibold">
            What features do you want to use
          </Label>
          <RadioGroup
            {...form.register("features")}
            id="features"
            name="features"
            className="mt-2 w-full grid grid-cols-3 gap-4"
          >
            <div className="text-xs flex items-center gap-2">
              <RadioGroupItem value="POS" className="h-2 w-2"></RadioGroupItem>Point of sale
            </div>
            <div className="text-xs flex items-center gap-2">
              <RadioGroupItem value="Customized Site" className="h-2 w-2"></RadioGroupItem>
              <span>Customized Sites</span>
            </div>
            <div className="text-xs flex items-center gap-2">
              <RadioGroupItem value="Mobile App" className="h-2 w-2"></RadioGroupItem>
              <span>Mobile App Integration</span>
            </div>
            <div className="text-xs flex items-center gap-2">
              <RadioGroupItem value="Stock Manager" className="h-2 w-2"></RadioGroupItem>
              <span>Stock Manager</span>
            </div>
            <div className="text-xs flex items-center gap-2">
              <RadioGroupItem value="Integration" className="h-2 w-2"></RadioGroupItem>
              <span>Insights-Pro</span>
            </div>
            <div className="text-xs flex items-center gap-2">
              <RadioGroupItem value="Operations-Control" className="h-2 w-2"></RadioGroupItem>
              <span>Operations-Control</span>
            </div>
          </RadioGroup>
        </div>
        {/* Demo Session Type */}
        <div className="mb-5">
          <Label
            htmlFor="demoSessionType"
            className="block font-semibold text-[16px]  "
          >
            How would you want your demo session?
          </Label>
          <RadioGroup
            {...form.register("demoSessionType")}
            id="demoSessionType"
            name="demoSessionType"
            className="mt-2 w-full flex items-center gap-20"
          >
            <div className="text-xs flex items-center gap-2">
              <RadioGroupItem value="online"></RadioGroupItem>
              <span>Online</span>
            </div>
            <div className="text-xs flex items-center gap-2">
              <RadioGroupItem value="physical"></RadioGroupItem>
              <span>Physical</span>
            </div>
          </RadioGroup>
        </div>
        <div>
          <Select>
            <SelectTrigger
              id="timeAvailable"
              //   name="timeAvailable"
              className="mt-2 w-full h-12 rounded-xl mb-5"
              {...form.register("timeAvailable")}
            >
              <SelectValue placeholder="Time Available" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9am-11am">9am-11am</SelectItem>
              <SelectItem value="12pm-2pm">12pm-2pm</SelectItem>
              <SelectItem value="3pm-5pm">3pm-5pm</SelectItem>
              <SelectItem value="6pm-8pm">6pm-8pm</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select>
            <SelectTrigger
              id="daysAvailable"
              //   name="daysAvailable"
              className="mt-2 w-full h-12 rounded-xl mb-5"
              {...form.register("daysAvailable")}
            >
              <SelectValue placeholder="Select Days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monday">Monday</SelectItem>
              <SelectItem value="tuesday">Tuesday</SelectItem>
              <SelectItem value="wednesday">Wednesday</SelectItem>
              <SelectItem value="thursday">Thursday</SelectItem>
              <SelectItem value="friday">Friday</SelectItem>
              <SelectItem value="saturday">Saturday</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <p>How did you hear about us?</p>
          <Select>
            <SelectTrigger
              id="heardAboutUs"
              //   name="heardAboutUs"
              className="mt-2 w-full h-12 rounded-xl mb-5"
              {...form.register("heardAboutUs")}
            >
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="word of mouth">Word of Mouth</SelectItem>
              <SelectItem value="pitch">Pitch</SelectItem>
              <SelectItem value="google">Google</SelectItem>
              <SelectItem value="blog">Blog</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="whatsapp">WhatsApp</SelectItem>
              <SelectItem value="x">X</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-[#0E2254] font-semibold text-white py-2 rounded-md hover:bg-[#0e2254f6] hover:text-[#FF4101] text-center mb-40 mt-10"
          >
            Request Demo
          </button>
        </div>
      </form>
    </div>
  );
};

export default MemoFormScreen;
