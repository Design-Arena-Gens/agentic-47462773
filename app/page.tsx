'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m Cria Sir, your AI assistant. How can I help you today?'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! Let me help you with that.",
        "I understand what you're looking for. Here's my take on it.",
        "Interesting! Based on your input, I'd suggest the following approach.",
        "I'm here to assist! Let me provide you with the information you need.",
        "Excellent question! Here's what I think about that.",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="container">
      <div className="header">
        <h1>✨ Cria Sir ✨</h1>
        <p>Your intelligent AI assistant, ready to help</p>
      </div>

      <div className="chat-container">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <div className="message-content">
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message assistant">
              <div className="message-content">
                Thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="input-area">
          <form onSubmit={handleSubmit} className="input-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message here..."
              className="input-field"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="send-button"
              disabled={isLoading || !input.trim()}
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>💬 Natural Conversations</h3>
          <p>Engage in fluid, natural conversations with advanced AI</p>
        </div>
        <div className="feature-card">
          <h3>⚡ Lightning Fast</h3>
          <p>Get instant responses to your queries and questions</p>
        </div>
        <div className="feature-card">
          <h3>🎯 Accurate & Helpful</h3>
          <p>Receive precise and useful information every time</p>
        </div>
      </div>
    </div>
  )
}
