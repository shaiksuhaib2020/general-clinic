import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(0)}K` : n.toString()
}

export function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
}
