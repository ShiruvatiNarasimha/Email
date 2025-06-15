import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  {
    variants: {
      variant: {
        destructive:
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  <div
    ref={ref}
    role="alert"
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    {...props}
  />
))

  HTMLParagraphElement,
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
