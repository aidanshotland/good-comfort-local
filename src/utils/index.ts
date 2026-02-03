import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

export default function classnames(...args: ClassValue[]) {
  return twMerge(clsx(args))
}
