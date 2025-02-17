"use client"

import type { HTMLAttributes, ReactNode } from "react"
import type { VariantProps } from "~/shared/cva"
import { Subheading } from "~/typography/subheading"
import { dividerVariants } from "./divider.variants"

export type DividerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dividerVariants> & {
    /**
     * The label to display in the divider.
     * @default "or"
     */
    label?: ReactNode
  }

const Divider = ({ children, className, label = "or", ...props }: DividerProps) => {
  return (
    <div className={dividerVariants({ className })} {...props}>
      {children ?? (
        <Subheading size="xs" className="text-gray-400">
          {label}
        </Subheading>
      )}
    </div>
  )
}

export { Divider }
