import type { Metadata } from 'next'
import './globals.css'

import './globals.css'
import Navbar from '@/components/Navbar'


export const metadata: Metadata = {
  title: 'DVW Fit Academy',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
