'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DialogDemo } from "../examples/dialog/demo"

export function DemoDialog() {
  return (
    <Card data-ui-component="Card" data-ui-variant="Dialog">
      <CardHeader>
        <CardTitle>Dialog</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <DialogDemo />
      </CardContent>
    </Card>
  )
}
