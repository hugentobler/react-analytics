import { Metadata } from 'next'

import { cn } from '@/lib/utils'

import { DemoCookieSettings } from '@/components/card/cookie-settings'
import { DemoCreateAccount } from '@/components/card/create-account'
import { DemoDatePicker } from '@/components/card/date-picker'
import { DemoGithub } from '@/components/card/github-card'
import { DemoNotifications } from '@/components/card/notifications'
import { DemoPaymentMethod } from '@/components/card/payment-method'
import { DemoReportAnIssue } from '@/components/card/report-an-issue'
import { DemoShareDocument } from '@/components/card/share-document'
import { DemoTeamMembers } from '@/components/card/team-members'

import { Separator } from '@/components/ui/separator'
import './styles.css'

export const metadata: Metadata = {
  title: "Click Events",
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
          <p>Click events for selects and dropdowns do not work yet due to Radix UI limiation.</p>
          <p>Visibility events for selects and dropdowns content work, but cannot capture parent data attributes.</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm">Event Format</h2>
          <p>&#123;data-ui-component&#125; + &#123;data-ui-variant&#125; + &#123;data-ui-action&#125; + Clicked</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm">Naming Convention</h2>
        </div>
      </div>
      <Separator />
      <div className="items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <DemoCreateAccount />
          </DemoContainer>
          <DemoContainer>
            <DemoPaymentMethod />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
          <DemoContainer>
            <DemoTeamMembers />
          </DemoContainer>
          <DemoContainer>
            <DemoShareDocument />
          </DemoContainer>
          <DemoContainer>
            <DemoDatePicker />
          </DemoContainer>
          <DemoContainer>
            <DemoNotifications />
          </DemoContainer>
        </div>
        <div className="col-span-2 grid items-start gap-6 lg:col-span-1 lg:grid-cols-2 xl:grid-cols-1">
          <DemoContainer>
            <DemoReportAnIssue />
          </DemoContainer>
          <DemoContainer>
            <DemoGithub />
          </DemoContainer>
          <DemoContainer>
            <DemoCookieSettings />
          </DemoContainer>
        </div>
      </div>
    </>
  )
}
