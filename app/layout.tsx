import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FORMALISER.NET',
  description: 'The simplest backend for your HTML contact forms.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='sticky top-0 z-50 flex flex-col items-center justify-center w-full h-1/10 bg-slate-900'>
          <p className='text-lg text-center text-white my-1'>
            ALERT: Used FORMALISER.NET after November 1st 2023? Our mailing provider, Resend, recently has suffered a security breach. Your data may have been compromised. Please contact us at <a className='underline hover:no-underline' href='mailto:info@formaliser.net'>info@formaliser.net</a> if you have any concerns. Read more about the breach <a className='underline hover:no-underline' href='https://resend.com/blog/incident-report-for-january-10-2024'>on Resend's website</a>.
          </p>
        </div>
        {children}
      </body>
    </html>
  )
}
