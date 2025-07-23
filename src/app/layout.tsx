import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Dr. Mili Jain | Physiotherapist Portfolio',
  description: 'Portfolio website of Dr. Mili Jain, a dedicated Physiotherapist specializing in Neurology',
  authors: [{ name: 'Dr. Mili Jain' }],
  keywords: ['physiotherapist', 'neurology', 'rehabilitation', 'healthcare', 'Gurgaon'],
  openGraph: {
    title: 'Dr. Mili Jain | Physiotherapist Portfolio',
    description: 'Portfolio website of Dr. Mili Jain, a dedicated Physiotherapist specializing in Neurology',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}