import SidebarNav from '@/components/sidebar-nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-row">
      <SidebarNav className="min-w-max h-screen" />
      <div className="p-4 sm:p-6 lg:p-8 space-y-8 h-screen overflow-y-scroll">
        {children}
      </div>
    </div>
  )
}
