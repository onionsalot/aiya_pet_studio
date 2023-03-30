export function humanReadableDate(date) {
  return new Date(date).toLocaleString()
}

export const breakpoint = { sm: 640, lg: 1024 }