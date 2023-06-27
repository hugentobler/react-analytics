import { Metadata } from 'next'

import { cn } from '@/lib/utils'

import { DemoDialog } from '@/components/visibility/dialog'
import { Separator } from '@/components/ui/separator'


export const metadata: Metadata = {
  title: "Visibility Events",
  description: "",
}

const DemoContainer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex items-center justify-center [&>div]:w-full",
      className
    )}
    {...props}
  />
)

export default function Page() {
  return (
    <>
      <div className="items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3
        font-mono text-xs">
        <div className="space-y-2">
          <h2 className="text-sm">Notes</h2>
          <p>Visibility events work, but cannot capture parent data attributes.</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm">Event Format</h2>
          <p>&#123;data-ui-component&#125; + &#123;data-ui-variant&#125; + &#123;data-ui-action&#125; + Shown</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm">Naming Convention</h2>
          <p>Accepted data-ui-component values:</p>
          <p>Dialog<br />
            Toast<br />
            Modal<br />
            Dropdown Content<br />
            Slide Over<br />
            Tooltip</p>
        </div>
      </div>
      <Separator />
      <div className="items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <DemoDialog />
          </DemoContainer>
        </div>
      </div>
    </>
  )
}
