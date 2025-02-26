import type { Metadata } from 'next'
import { cn } from './_lib/utils'
import ToasterProvider from './_providers/ToasterProvider'
import './globals.css'

const env = process.env.NODE_ENV

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

interface IRootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<IRootLayoutProps>) {
  return (
    <html lang={locale}>
      <body
        className={cn(
          `dark:bg-dark-primary bg-gray-200 font-mono subpixel-antialiased`,
          {
            'debug-screens': env === 'development'
          }
        )}
      >
        <ToasterProvider>{children}</ToasterProvider>
      </body>
    </html>
  )
}
