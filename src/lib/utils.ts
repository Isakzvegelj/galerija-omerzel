import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const BASE_PATH = '/galerija-omerzel'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function assetPath(path: string): string {
  if (path.startsWith('http') || path.startsWith('data:')) return path
  return `${BASE_PATH}${path}`
}

export function formatPrice(price: number, currency: string = 'EUR'): string {
  // Ensure consistent formatting between server and client
  // Use a simple format to avoid hydration mismatches
  return `${price} €`
}

export function formatDimensions(dimensions?: { width: number; height: number; depth?: number }): string {
  if (!dimensions) return ''
  const { width, height, depth } = dimensions
  if (depth) {
    return `${width} × ${height} × ${depth} cm`
  }
  return `${width} × ${height} cm`
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    painting: 'Slikarstvo',
    sculpture: 'Kiparstvo',
    contemporary: 'Sodobna umetnost',
    'modern-art': 'Moderna umetnost',
    'classical-art': 'Klasična umetnost'
  }
  return labels[category] || category
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}
