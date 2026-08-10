import { createContext } from 'react'

export interface WhatsAppBotContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const WhatsAppBotContext = createContext<WhatsAppBotContextValue | null>(null)
