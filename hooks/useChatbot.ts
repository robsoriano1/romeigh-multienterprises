import { useState, useCallback } from 'react'
import type { ChatMessage, ChatStatus } from '@/types'

export function useChatbot() {
  const [status, setStatus] = useState<ChatStatus>('idle')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const open = useCallback(() => setStatus('open'), [])
  const close = useCallback(() => setStatus('idle'), [])
  const minimize = useCallback(() => setStatus('minimized'), [])

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMsg])
    setInputValue('')
    setIsTyping(true)

    try {
      const history = [...messages, userMsg].map(m => ({
        role: m.role,
        content: m.content,
      }))

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      })

      const data = await res.json()
      const reply: string = data.reply ?? 'Sorry, I could not get a response. Please try again.'

      setMessages(prev => [...prev, {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: reply,
        timestamp: new Date(),
      }])
    } catch (err) {
      console.error('[Chatbot] Error:', err)
      setMessages(prev => [...prev, {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again or contact us directly at info@romeigh.com.',
        timestamp: new Date(),
      }])
    } finally {
      setIsTyping(false)
    }
  }, [messages])

  return {
    status,
    messages,
    inputValue,
    isTyping,
    setInputValue,
    open,
    close,
    minimize,
    sendMessage,
    isOpen: status === 'open',
    isMinimized: status === 'minimized',
  }
}
