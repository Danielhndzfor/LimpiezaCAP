import { useMemo, useState, type ReactNode } from 'react'
import { WhatsAppBotContext } from './WhatsAppBotContext'

export function WhatsAppBotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((open) => !open),
    }),
    [isOpen],
  )

  return <WhatsAppBotContext.Provider value={value}>{children}</WhatsAppBotContext.Provider>
}
