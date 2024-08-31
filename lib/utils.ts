import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ctrlCombinations = (char: string) => {
  if(typeof navigator !== "undefined") {
      const isMac = /Mac/.test(navigator.platform);
      if(isMac) return `⌘ + ${char}`
  }
  return `Ctrl + ${char}`
}