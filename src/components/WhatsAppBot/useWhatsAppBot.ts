import { useContext } from 'react'
import { WhatsAppBotContext } from './WhatsAppBotContext'

export function useWhatsAppBot() {
  const context = useContext(WhatsAppBotContext)
  if (!context) {
    throw new Error('useWhatsAppBot debe usarse dentro de WhatsAppBotProvider')
  }
  return context
}
