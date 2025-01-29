import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToBase64(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
}

export function formatDuration({
  hours,
  minutes,
}: {
  hours: number;
  minutes: number;
}) {
  if (hours === 0) return `${minutes}mins`;
  if (minutes === 0) return `${hours}hrs`;
  return `${hours}hrs:${minutes}mins`;
}

export function formatPrice(price: number) {
  return `₦${price.toLocaleString()}`;
}

export function uniqueId() {
  return Math.random().toString(36).slice(2, 9);
}
export const getLocalStorageItem = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error(`Error retrieving ${key} from local storage:`, error);
    return null;
  }
};
export function isNumeric(input: string): boolean {
  return !isNaN(Number(input)) && input.trim() !== '';
}
export function generateOtp(): string {
  const otp = Math.floor(100000 + Math.random() * 900000); 
  return otp.toString();
}