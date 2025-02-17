"use client"

import type { HTMLAttributes } from "react"
import { type VariantProps, cx } from "~/shared/cva"
import { wrapperContentVariants, wrapperVariants } from "./wrapper.variants"

export type WrapperProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof wrapperVariants>

const WrapperBase = ({ className, ...props }: WrapperProps) => {
  return <div className={cx(wrapperVariants({ className }))} {...props} />
}

const WrapperContent = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return <main className={cx(wrapperContentVariants({ className }))} {...props} />
}

const Wrapper = Object.assign(WrapperBase, {
  Content: WrapperContent,
})

export { Wrapper, WrapperBase, WrapperContent }
