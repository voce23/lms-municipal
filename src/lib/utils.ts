import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Esta función combina clases de Tailwind y resuelve conflictos automáticamente.
// Ejemplo: si tienes "bg-blue-500" y luego añades "bg-red-500", esta función asegura que gane la última.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}