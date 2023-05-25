import './globals.css'
import { Inter } from 'next/font/google'

import SidebarNav from '@/components/sidebar-nav'
import GTMHead from '@/components/gtm-head'
import GTMBody from '@/components/gtm-body'

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
      <body className={inter.className}>
        <div className="flex flex-row">
          <SidebarNav className="min-w-max h-screen" />
          <div className="p-4 sm:p-6 lg:p-8 space-y-8 h-screen overflow-y-scroll">
            {children}
          </div>
        </div>
        <GTMBody />
      </body>
    </html>
  )
}
