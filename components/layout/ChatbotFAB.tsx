'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { useChatbot } from '@/hooks/useChatbot'

export function ChatbotFAB() {
  const [bubbleDismissed, setBubbleDismissed] = useState(false)
  const { status, messages, inputValue, isTyping, setInputValue, open, close, sendMessage } = useChatbot()

  const handleFabClick = () => {
    setBubbleDismissed(true)
    if (status === 'idle' || status === 'minimized') {
      open()
    } else {
      close()
    }
  }

  return (
    <div className="fixed bottom-7 right-7 z-50 flex flex-col items-end gap-3">

      {/* Prompt bubble */}
      <AnimatePresence>
        {!bubbleDismissed && status === 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ delay: 2, duration: 0.25 }}
            className="bg-white border border-gray-200 rounded-xl shadow-lift px-4 py-3 text-sm text-gray-700 max-w-[200px] text-right relative"
            role="status"
          >
            Need compliance help?{' '}
            <strong className="text-navy">Ask our AI Advisor →</strong>
            {/* Tail */}
            <span className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white border-r border-b border-gray-200 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel (Phase 2 full UI) */}
      <AnimatePresence>
        {status === 'open' && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-[340px] bg-white border border-gray-200 rounded-xl shadow-lift overflow-hidden mb-3"
          >
            {/* Chat header */}
            <div className="bg-navy px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="font-display font-bold text-white text-sm">AI Compliance Advisor</span>
              </div>
              <button
                onClick={close}
                className="text-white/50 hover:text-white text-xs"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-50">
              {messages.length === 0 && (
                <p className="text-xs text-gray-400 text-center mt-8">
                  Ask me about chemical treatment, water filtration,<br />
                  or industrial waste management requirements.
                </p>
              )}
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`text-sm px-3 py-2 rounded-lg max-w-[85%] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-sky-500 text-white self-end'
                      : 'bg-white border border-gray-200 text-gray-700 self-start'
                  }`}
                >
                  {msg.role === 'user' ? msg.content : (
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                        strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                        ul: ({ children }) => <ul className="list-disc list-inside space-y-0.5 my-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal list-inside space-y-0.5 my-1">{children}</ol>,
                        li: ({ children }) => <li className="text-sm">{children}</li>,
                        h1: ({ children }) => <p className="font-bold text-sm mt-2 mb-1">{children}</p>,
                        h2: ({ children }) => <p className="font-bold text-sm mt-2 mb-1">{children}</p>,
                        h3: ({ children }) => <p className="font-semibold text-sm mt-1 mb-0.5">{children}</p>,
                        hr: () => <hr className="my-2 border-gray-200" />,
                        code: ({ children }) => <code className="bg-gray-100 px-1 rounded text-xs">{children}</code>,
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-400 self-start">
                  Thinking…
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-3 flex gap-2 bg-white">
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    sendMessage(inputValue)
                  }
                }}
                placeholder="Ask a compliance question…"
                className="field-input flex-1 text-xs py-2"
                aria-label="Chat input"
              />
              <button
                onClick={() => sendMessage(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                className="bg-sky-500 hover:bg-sky-600 disabled:opacity-40 text-white text-xs font-bold px-3 py-2 rounded transition-colors"
                aria-label="Send message"
              >
                Send
              </button>
            </div>

            <p className="text-[10px] text-gray-300 text-center pb-2.5 px-4">
              AI responses are for guidance only — consult DENR-EMB for official requirements.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={handleFabClick}
        className="w-14 h-14 rounded-full bg-sky-500 hover:bg-sky-600 shadow-cta flex items-center justify-center relative transition-colors"
        aria-label="Open AI Compliance Assistant"
      >
        {/* Online indicator */}
        <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-white" />
        {/* Icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" aria-hidden="true">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      </motion.button>
    </div>
  )
}
