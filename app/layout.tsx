import './globals.css'
import { Inter } from 'next/font/google'

import GTMHead from '@/components/gtm-head'
import GTMBody from '@/components/gtm-body'
import GTMDataLayerProxy from '@/components/gtm-datalayer-proxy'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React Analytics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GTMHead />
      <body className={`${inter.className} antialiased`}>
        <div className="grid grid-cols-5">
          <div className="col-span-4">
            {children}
          </div>
          <div className="relative bg-zinc-700">
            <GTMDataLayerProxy />
          </div>
        </div>
        <GTMBody />
      </body>
    </html>
  )
}
