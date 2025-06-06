/**
 * This is a tailwind-friendly className utility
 * 
 * Combines class names together with tailwind's `twMerge` function
 * It helps resovlves Tailwind conflicts
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}