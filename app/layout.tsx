import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cria Sir - AI Assistant',
  description: 'Your intelligent AI assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
