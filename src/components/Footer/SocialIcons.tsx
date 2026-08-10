import type { SVGProps } from 'react'

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.18H7.99v2.96h2.47V21h3.04Z" />
    </svg>
  )
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.02 2.5c-5.26 0-9.53 4.27-9.53 9.53 0 1.68.44 3.3 1.28 4.73L2.5 21.5l4.86-1.24a9.5 9.5 0 0 0 4.66 1.2h.01c5.26 0 9.53-4.27 9.53-9.53 0-2.55-.99-4.94-2.79-6.74a9.47 9.47 0 0 0-6.75-2.69Zm5.6 13.53c-.24.67-1.19 1.24-1.94 1.4-.52.11-1.2.2-3.47-.74-2.9-1.2-4.77-4.14-4.92-4.33-.14-.2-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.26-.29.57-.36.76-.36.19 0 .38.002.55.01.18.008.41-.068.64.49.24.57.8 1.98.87 2.12.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.29.75 1.24 1.61 2 1.11.99 2.04 1.29 2.33 1.44.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.38-.24.63-.14.26.1 1.65.78 1.94.92.29.14.48.21.55.33.07.12.07.7-.17 1.38Z" />
    </svg>
  )
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 2h-3.1v13.4a2.8 2.8 0 1 1-2-2.68v-3.16a5.98 5.98 0 1 0 5.1 5.92V8.9a7.4 7.4 0 0 0 4.4 1.44V7.24c-1.9 0-3.53-1.24-4.09-2.96-.2-.6-.31-1.24-.31-1.9V2Z" />
    </svg>
  )
}
